import { useCallback, useEffect, useState } from 'react';
import { ChevronLeft, ChevronRight, X, ZoomIn } from 'lucide-react';

// Замените путь к файлу на своё фото — просто положите картинку в папку
// и поменяйте src="..." ниже. Фото может быть сколько угодно.
const photos = [
  { src: '/photos/parnaya.webp', alt: 'Парная с деревянными полками' },
  { src: '/photos/komnata-otdyha.jpg', alt: 'Комната отдыха' },
  { src: '/photos/mangal.jpg', alt: 'Мангальная зона' },
  { src: '/photos/veniki.jpg', alt: 'Веники для парной' },
  { src: '/photos/basseyn.jpg', alt: 'Бассейн с прохладной водой' },
  { src: '/photos/besedka.jpg', alt: 'Беседка на свежем воздухе' },
  { src: '/photos/kamin.jpg', alt: 'Тёплый свет вечерней сауны' },
  { src: '/photos/interier.jpg', alt: 'Интерьер из тёплого дерева' },
];

export default function Gallery() {
  const [openIdx, setOpenIdx] = useState<number | null>(null);

  const close = useCallback(() => setOpenIdx(null), []);
  const prev = useCallback(
    () => setOpenIdx((i) => (i === null ? null : (i - 1 + photos.length) % photos.length)),
    []
  );
  const next = useCallback(
    () => setOpenIdx((i) => (i === null ? null : (i + 1) % photos.length)),
    []
  );

  useEffect(() => {
    if (openIdx === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') close();
      if (e.key === 'ArrowLeft') prev();
      if (e.key === 'ArrowRight') next();
    };
    document.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    };
  }, [openIdx, close, prev, next]);

  return (
    <section id="gallery" className="relative py-24">
      <div className="divider-terra absolute left-0 right-0 top-0" />
      <div className="mx-auto max-w-6xl px-5">
        <h2 className="reveal font-display text-3xl text-cream sm:text-4xl md:text-5xl">
          Атмосфера <span className="gold-italic">в кадре.</span>
        </h2>
        <p className="reveal mt-5 max-w-2xl text-base text-beige" style={{ transitionDelay: '0.1s' }}>
          Лучше один раз почувствовать — но для начала можно посмотреть.
        </p>

        <div className="mt-14 grid grid-cols-2 gap-4 md:grid-cols-4">
          {photos.map((p, i) => (
            <button
              key={p.src}
              onClick={() => setOpenIdx(i)}
              className={`reveal group relative overflow-hidden rounded-2xl focus:outline-none focus:ring-2 focus:ring-gold ${
                i === 0 || i === 5 ? 'row-span-2 h-full' : ''
              }`}
              style={{ transitionDelay: `${0.05 + (i % 4) * 0.08}s` }}
              aria-label={`Открыть фото: ${p.alt}`}
            >
              <img
                src={p.src}
                alt={p.alt}
                loading="lazy"
                onError={(e) => {
                  e.currentTarget.src = '/photos/placeholder.svg';
                }}
                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <span className="absolute inset-0 flex items-center justify-center bg-coal/0 transition-colors duration-300 group-hover:bg-coal/50">
                <ZoomIn
                  className="h-8 w-8 text-gold opacity-0 transition-all duration-300 group-hover:opacity-100"
                  strokeWidth={1.6}
                />
              </span>
            </button>
          ))}
        </div>
      </div>

      {openIdx !== null && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-coal/95 p-4 backdrop-blur-sm"
          onClick={close}
          role="dialog"
          aria-modal="true"
        >
          <button
            className="absolute right-5 top-5 rounded-full border border-cream/20 p-2.5 text-cream transition-colors hover:border-gold hover:text-gold"
            onClick={close}
            aria-label="Закрыть"
          >
            <X className="h-6 w-6" />
          </button>
          <button
            className="absolute left-4 top-1/2 -translate-y-1/2 rounded-full border border-cream/20 p-3 text-cream transition-colors hover:border-gold hover:text-gold md:left-8"
            onClick={(e) => {
              e.stopPropagation();
              prev();
            }}
            aria-label="Предыдущее фото"
          >
            <ChevronLeft className="h-6 w-6" />
          </button>
          <figure onClick={(e) => e.stopPropagation()} className="max-h-full max-w-4xl text-center">
            <img
              src={photos[openIdx].src}
              alt={photos[openIdx].alt}
              className="max-h-[80vh] w-auto rounded-2xl border border-cream/10 object-contain"
            />
            <figcaption className="mt-4 text-sm text-beige">{photos[openIdx].alt}</figcaption>
          </figure>
          <button
            className="absolute right-4 top-1/2 -translate-y-1/2 rounded-full border border-cream/20 p-3 text-cream transition-colors hover:border-gold hover:text-gold md:right-8"
            onClick={(e) => {
              e.stopPropagation();
              next();
            }}
            aria-label="Следующее фото"
          >
            <ChevronRight className="h-6 w-6" />
          </button>
        </div>
      )}
    </section>
  );
}
