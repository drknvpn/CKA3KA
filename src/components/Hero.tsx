import { useMemo } from 'react';
import { CalendarCheck, Image as ImageIcon } from 'lucide-react';
import { useParallax } from '@/hooks/useScrollFx';

interface Puff {
  left: string;
  size: number;
  duration: number;
  delay: number;
  dx: string;
}

export default function Hero() {
  const puffs = useMemo<Puff[]>(() => {
    const seedRand = (i: number) => {
      const x = Math.sin(i * 999.7) * 10000;
      return x - Math.floor(x);
    };
    return Array.from({ length: 14 }, (_, i) => ({
      left: `${seedRand(i) * 100}%`,
      size: 90 + seedRand(i + 40) * 220,
      duration: 14 + seedRand(i + 80) * 16,
      delay: -seedRand(i + 120) * 24,
      dx: `${(seedRand(i + 160) - 0.5) * 160}px`,
    }));
  }, []);

  const back = useParallax(0.2);
  const front = useParallax(0.8);

  return (
    <section
      id="top"
      className="relative flex min-h-screen items-center overflow-hidden"
      style={{ background: 'linear-gradient(160deg, #1E1A17 0%, #2B2520 70%, #1E1A17 100%)' }}
    >
      {/* задний слой: клубы пара */}
      <div
        ref={back.ref}
        className="pointer-events-none absolute inset-0"
        style={{ transform: `translateY(${back.offset * 0.2}px)` }}
      >
        {puffs.map((p, i) => (
          <span
            key={i}
            className="steam-puff"
            style={{
              left: p.left,
              width: p.size,
              height: p.size,
              animationDuration: `${p.duration}s`,
              animationDelay: `${p.delay}s`,
              ['--dx' as string]: p.dx,
            }}
          />
        ))}
      </div>

      {/* передний слой: полупрозрачные банные веники по краям */}
      <div
        ref={front.ref}
        className="pointer-events-none absolute inset-0"
        style={{ transform: `translateY(${front.offset * 0.8}px)` }}
      >
        <BroomImage
          src="/assets/images/2a51cbb295d12b0113e5a73a1f5540e9-no-bg-preview_(carve.photos).png"
          fallback="/assets/images/2a51cbb295d12b0113e5a73a1f5540e9-no-bg-preview_(carve.photos).png"
          alt="Дубовый веник"
          className="absolute -left-10 top-24 w-52 sm:left-2 sm:top-28 sm:w-56 lg:left-8 lg:top-32 lg:w-60"
        />
        <BroomImage
          src="/assets/images/f40db93ffefb5074bc1eba722a3385d9-no-bg-preview_(carve.photos).png"
          fallback="/assets/images/2a51cbb295d12b0113e5a73a1f5540e9-no-bg-preview_(carve.photos).png"
          alt="Эвкалиптовый веник"
          className="absolute -left-2 top-[58%] w-52 sm:left-10 sm:top-[60%] sm:w-56 lg:left-16 lg:top-[62%] lg:w-60"
          delay="-3s"
        />
        <BroomImage
          src="/assets/images/16fbe24ef38e8b0eaa9b3e613e85ba94-no-bg-preview_(carve.photos).png"
          fallback="/assets/images/16fbe24ef38e8b0eaa9b3e613e85ba94-no-bg-preview_(carve.photos).png"
          alt="Берёзовый веник"
          className="absolute -right-10 top-28 w-52 sm:right-2 sm:top-32 sm:w-56 lg:right-8 lg:top-36 lg:w-60"
        />
        <BroomImage
          src="/assets/images/32dffbbf690895941ab2a7261cbed9ef-no-bg-preview_(carve.photos).png"
          fallback="/assets/images/16fbe24ef38e8b0eaa9b3e613e85ba94-no-bg-preview_(carve.photos).png"
          alt="Хвойный веник"
          className="absolute -right-2 top-[62%] w-52 sm:right-10 sm:top-[64%] sm:w-56 lg:right-16 lg:top-[66%] lg:w-60"
          delay="-5s"
        />
      </div>

      <div className="relative z-10 mx-auto max-w-4xl px-5 pb-24 pt-32 text-center">
        <p className="reveal mb-6 text-sm uppercase tracking-[0.35em] text-beige/70">
          Сауна в Ханты-Мансийске
        </p>
        <h1
          className="reveal font-display text-5xl leading-tight text-cream sm:text-6xl md:text-7xl"
          style={{ transitionDelay: '0.1s' }}
        >
          Тепло, тишина
          <br />
          <span className="gold-italic">и свои люди.</span>
        </h1>
        <p className="reveal mx-auto mt-7 max-w-xl text-base text-beige sm:text-lg" style={{ transitionDelay: '0.2s' }}>
          Сауна для тех, кто ценит спокойный отдых, живое тепло дерева и время, которое хочется
          запомнить.
        </p>
        <div
          className="reveal mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row"
          style={{ transitionDelay: '0.3s' }}
        >
          <a
            href="#booking"
            className="btn-gold inline-flex items-center gap-2 rounded-full bg-gold px-8 py-3.5 font-semibold text-coal"
          >
            <CalendarCheck className="h-5 w-5" strokeWidth={1.8} />
            Забронировать
          </a>
          <a
            href="#gallery"
            className="btn-ghost inline-flex items-center gap-2 rounded-full border border-gold/60 px-8 py-3.5 font-semibold text-gold"
          >
            <ImageIcon className="h-5 w-5" strokeWidth={1.8} />
            Смотреть фото
          </a>
        </div>
        <p
          className="reveal mt-10 text-xs uppercase tracking-widest text-beige/60"
          style={{ transitionDelay: '0.4s' }}
        >
          Работаем ежедневно по предварительной записи
        </p>
      </div>

      <div className="divider-terra absolute bottom-0 left-0 right-0 z-10" />
    </section>
  );
}

function BroomImage({
  src,
  fallback,
  alt,
  className,
  delay,
}: {
  src: string;
  fallback: string;
  alt: string;
  className: string;
  delay?: string;
}) {
  return (
    <img
      src={src}
      alt={alt}
      aria-hidden="true"
      onError={(event) => {
        if (event.currentTarget.src.endsWith(fallback)) {
          event.currentTarget.style.display = 'none';
          return;
        }
        event.currentTarget.src = fallback;
      }}
      className={`hero-broom hidden select-none object-contain sm:block ${className}`}
      style={{ animationDelay: delay }}
    />
  );
}
