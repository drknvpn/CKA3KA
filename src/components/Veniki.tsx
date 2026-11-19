import { useParallax } from '@/hooks/useScrollFx';

const veniki = [
  {
    img: '/photos/venik-dub.jpg',
    alt: 'Дубовый веник для парной',
    title: 'Дубовый',
    tagline: 'Для жара',
    text: 'Держит пар и даёт глубокое, плотное тепло. Лист не скользит и бережёт кожу.',
  },
  {
    img: '/photos/venik-bereza.jpg',
    alt: 'Берёзовый веник для парной',
    title: 'Берёзовый',
    tagline: 'Для аромата',
    text: 'Классический аромат русской бани: чистый воздух, мягкое дыхание и свежесть.',
  },
  {
    img: '/photos/venik-evkalipt.jpg',
    alt: 'Эвкалиптовый веник для парной',
    title: 'Эвкалиптовый',
    tagline: 'Для лёгкости',
    text: 'Целебный пар для дыхания и кожи. Идеален, когда хочется восстановиться.',
  },
];

function VenikCard({ v, index }: { v: (typeof veniki)[number]; index: number }) {
  const bg = useParallax(0.3 + index * 0.1);

  return (
    <div
      className="reveal group relative overflow-hidden rounded-2xl border border-cream/5 bg-oak transition-all duration-300 hover:-translate-y-2 hover:border-terra/60 hover:shadow-[0_18px_40px_rgba(0,0,0,0.35)]"
      style={{ transitionDelay: `${0.1 + index * 0.1}s` }}
    >
      <div
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: `url(${v.img})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          transform: `translateY(${bg.offset}px) scale(1.15)`,
        }}
      />
      <div className="relative overflow-hidden">
        <div className="m-4 overflow-hidden rounded-xl">
          <img
            src={v.img}
            alt={v.alt}
            loading="lazy"
            onError={(e) => {
              e.currentTarget.src = '/photos/placeholder.svg';
            }}
            className="h-64 w-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
        </div>
        <div className="absolute inset-x-4 bottom-4 translate-y-3 rounded-xl bg-coal/85 px-4 py-3 opacity-0 backdrop-blur-sm transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
          <p className="text-sm text-beige">{v.text}</p>
        </div>
      </div>
      <div className="relative p-6 pt-2">
        <p className="text-xs uppercase tracking-[0.25em] text-terra">{v.tagline}</p>
        <h3 className="mt-2 font-display text-2xl text-gold">{v.title}</h3>
      </div>
    </div>
  );
}

export default function Veniki() {
  return (
    <section id="veniki" className="relative py-24">
      <div className="divider-terra absolute left-0 right-0 top-0" />
      <div className="mx-auto max-w-6xl px-5">
        <h2 className="reveal font-display text-3xl text-cream sm:text-4xl md:text-5xl">
          Выберите <span className="gold-italic">свой пар.</span>
        </h2>
        <p className="reveal mt-5 max-w-2xl text-base text-beige" style={{ transitionDelay: '0.1s' }}>
          Веник — душа парной. У каждого свой характер: жаркий, ароматный или целебный.
        </p>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {veniki.map((v, i) => (
            <VenikCard key={v.title} v={v} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
