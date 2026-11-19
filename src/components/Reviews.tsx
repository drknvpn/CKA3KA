import { Star, ExternalLink } from 'lucide-react';

const reviews = [
  {
    name: 'Ольга',
    text: 'Отдыхали компанией на день рождения — всё прекрасно: чисто, тепло, атмосфера домашняя. Мангальная зона отдельное спасибо!',
  },
  {
    name: 'Дмитрий',
    text: 'Хорошая парная, пар мягкий, дерево живое. После бани как заново родился. Обязательно вернёмся.',
  },
  {
    name: 'Марина',
    text: 'Отмечали юбилей. Комната отдыха уютная, всё необходимое есть. Персонал приветливый, бронировали заранее — всё чётко.',
  },
];

const reviewLinks = [
  { label: 'Отзывы на Яндекс', href: 'https://yandex.ru/maps/57/khanty-mansiysk/?ll=69.048402%2C60.984829&mode=poi&poi%5Bpoint%5D=69.048240%2C60.984830&poi%5Buri%5D=ymapsbm1%3A%2F%2Forg%3Foid%3D7021927256&tab=reviews&z=21' },
  { label: 'Отзывы на 2ГИС', href: 'https://2gis.ru/kh_mansiysk/firm/70000001029022778/tab/reviews' },
  { label: 'Наша группа ВКонтакте', href: 'https://vk.ru/club178376068' },
];

export default function Reviews() {
  return (
    <section id="reviews" className="relative py-24">
      <div className="divider-terra absolute left-0 right-0 top-0" />
      <div className="mx-auto max-w-6xl px-5">
        <h2 className="reveal font-display text-3xl text-cream sm:text-4xl md:text-5xl">
          Гостям <span className="gold-italic">есть что сказать.</span>
        </h2>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {reviews.map((r, i) => (
            <figure
              key={r.name}
              className="reveal rounded-2xl border border-cream/5 bg-oak p-8 transition-all duration-300 hover:-translate-y-1 hover:border-terra/50"
              style={{ transitionDelay: `${0.1 + i * 0.12}s` }}
            >
              <div className="flex gap-1" aria-label="Оценка 5 из 5">
                {Array.from({ length: 5 }, (_, s) => (
                  <Star key={s} className="h-4 w-4 fill-gold text-gold" />
                ))}
              </div>
              <blockquote className="mt-5 text-sm leading-relaxed text-beige">«{r.text}»</blockquote>
              <figcaption className="mt-6 font-display text-lg text-cream">— {r.name}</figcaption>
            </figure>
          ))}
        </div>

        <div className="reveal mt-12 flex flex-wrap items-center justify-center gap-4">
          {reviewLinks.map((l) => (
            <a
              key={l.href}
              href={l.href}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-cream/15 px-5 py-2.5 text-sm text-beige transition-all duration-300 hover:border-gold hover:text-gold"
            >
              {l.label}
              <ExternalLink className="h-4 w-4" strokeWidth={1.6} />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
