import { Flame, UtensilsCrossed, Users } from 'lucide-react';

const items = [
  {
    icon: Flame,
    title: 'Настоящая парная',
    text: 'Живое тепло дровяной печи, мягкий пар и тёплое дерево, которое дышит вместе с вами.',
  },
  {
    icon: UtensilsCrossed,
    title: 'Мангальная зона',
    text: 'Уютный ужин на свежем воздухе: мангал, просторная беседка и вечер без спешки.',
  },
  {
    icon: Users,
    title: 'Всё для компании',
    text: 'Комната отдыха, телевизор и пространство, где легко собрать своих людей.',
  },
];

export default function About() {
  return (
    <section id="about" className="relative py-24">
      <div className="mx-auto max-w-6xl px-5">
        <h2 className="reveal font-display text-3xl text-cream sm:text-4xl md:text-5xl">
          Пространство, <span className="gold-italic">в которое возвращаются.</span>
        </h2>
        <p className="reveal mt-5 max-w-2xl text-base text-beige" style={{ transitionDelay: '0.1s' }}>
          Мы бережно относимся к деталям — от аромата дерева в парной до тёплого света у мангала.
        </p>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {items.map((item, i) => (
            <div
              key={item.title}
              className="reveal group rounded-2xl border border-cream/5 bg-oak p-8 transition-all duration-300 hover:-translate-y-2 hover:border-terra/60 hover:shadow-[0_18px_40px_rgba(0,0,0,0.35)]"
              style={{ transitionDelay: `${0.1 + i * 0.1}s` }}
            >
              <item.icon className="h-10 w-10 text-gold transition-transform duration-300 group-hover:scale-110" strokeWidth={1.4} />
              <h3 className="mt-6 font-display text-xl text-cream">{item.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-beige">{item.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
