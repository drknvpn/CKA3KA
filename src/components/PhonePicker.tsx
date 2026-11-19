import { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import { Phone, X } from 'lucide-react';

const phoneNumbers = [
  { label: '+7 (902) 828-28-58', href: 'tel:+79028282858' },
  { label: '+7 (3467) 33-72-72', href: 'tel:+73467337272' },
];

interface PhonePickerProps {
  children: React.ReactNode;
  className?: string;
  onOpen?: () => void;
}

export default function PhonePicker({ children, className = '', onOpen }: PhonePickerProps) {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setOpen(false);
    };
    document.addEventListener('keydown', closeOnEscape);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', closeOnEscape);
      document.body.style.overflow = '';
    };
  }, [open]);

  return (
    <>
      <button
        type="button"
        onClick={() => {
          onOpen?.();
          setOpen(true);
        }}
        className={className}
      >
        {children}
      </button>

      {open &&
        createPortal(
          <div
            className="fixed inset-0 z-[100] flex items-center justify-center overflow-y-auto bg-coal/85 p-5 backdrop-blur-sm"
            onClick={() => setOpen(false)}
            role="presentation"
          >
            <div
              className="relative max-h-[calc(100dvh-2.5rem)] w-full max-w-md overflow-y-auto rounded-2xl border border-cream/10 bg-oak p-7 shadow-2xl"
            role="dialog"
            aria-modal="true"
            aria-labelledby="phone-picker-title"
            onClick={(event) => event.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => setOpen(false)}
              className="absolute right-4 top-4 rounded-full p-2 text-beige transition-colors hover:text-gold"
              aria-label="Закрыть выбор телефона"
            >
              <X className="h-5 w-5" />
            </button>
            <p className="text-xs uppercase tracking-[0.25em] text-terra">Бронирование</p>
            <h2 id="phone-picker-title" className="mt-3 font-display text-2xl text-cream">
              Позвоните нам
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-beige">
              Выберите удобный номер — звонок начнётся сразу после нажатия.
            </p>
            <div className="mt-6 flex flex-col gap-3">
              {phoneNumbers.map((phone) => (
                <a
                  key={phone.href}
                  href={phone.href}
                  className="btn-gold inline-flex items-center gap-3 rounded-xl border border-gold/40 bg-gold/10 px-5 py-4 text-lg font-semibold text-gold hover:bg-gold hover:text-coal"
                >
                  <Phone className="h-5 w-5" strokeWidth={1.8} />
                  {phone.label}
                </a>
              ))}
            </div>
            </div>
          </div>,
          document.body
        )}
    </>
  );
}
