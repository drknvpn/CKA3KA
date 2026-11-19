import { useEffect, useState } from 'react';
import { Menu, X, Flame } from 'lucide-react';
import PhonePicker from '@/components/PhonePicker';

const links = [
  { href: '#about', label: 'О сауне' },
  { href: '#veniki', label: 'Веники' },
  { href: '#gallery', label: 'Галерея' },
  { href: '#reviews', label: 'Отзывы' },
  { href: '#contacts', label: 'Как добраться' },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-coal/85 backdrop-blur-md border-b border-terra/20' : 'bg-coal/40 backdrop-blur-sm'
      }`}
    >
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4">
        <a href="#top" className="flex items-center gap-2.5">
          <Flame className="h-6 w-6 text-gold" strokeWidth={1.5} />
          <span className="font-display text-xl text-cream">
            В гостях <span className="gold-italic">у сказки</span>
          </span>
        </a>

        <div className="hidden items-center gap-7 md:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm text-beige transition-colors duration-300 hover:text-gold"
            >
              {l.label}
            </a>
          ))}
          <PhonePicker className="btn-gold rounded-full bg-gold px-5 py-2.5 text-sm font-semibold text-coal">
            Забронировать
          </PhonePicker>
        </div>

        <button
          className="rounded-md p-2 text-cream transition-colors hover:text-gold md:hidden"
          onClick={() => setOpen(!open)}
          aria-label={open ? 'Закрыть меню' : 'Открыть меню'}
          aria-expanded={open}
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </nav>

      {open && (
        <div className="border-t border-terra/20 bg-coal/95 backdrop-blur-md md:hidden">
          <div className="flex flex-col gap-1 px-5 py-4">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="rounded-lg px-3 py-2.5 text-beige transition-colors hover:bg-oak hover:text-gold"
              >
                {l.label}
              </a>
            ))}
            <PhonePicker
              onOpen={() => setOpen(false)}
              className="btn-gold mt-2 rounded-full bg-gold px-5 py-3 text-center text-sm font-semibold text-coal"
            >
              Забронировать
            </PhonePicker>
          </div>
        </div>
      )}
    </header>
  );
}
