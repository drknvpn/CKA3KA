import { Flame } from 'lucide-react';

const socials = [
  {
    label: 'Группа ВКонтакте',
    href: 'https://vk.ru/club178376068',
    icon: '/assets/icons/VkontakteFill.svg',
  },
  {
    label: 'Отзывы на Яндекс',
    href: 'https://yandex.ru/maps/57/khanty-mansiysk/?ll=69.048402%2C60.984829&mode=poi&poi%5Bpoint%5D=69.048240%2C60.984830&poi%5Buri%5D=ymapsbm1%3A%2F%2Forg%3Foid%3D7021927256&tab=reviews&z=21',
    icon: '/assets/icons/LogoYandex.svg',
  },
  {
    label: 'Отзывы на 2ГИС',
    href: 'https://2gis.ru/kh_mansiysk/firm/70000001029022778/tab/reviews',
    icon: '/assets/icons/2gis.svg',
  },
];

export default function Footer() {
  return (
    <footer className="relative">
      <div className="h-px w-full bg-terra/40" />
      <div className="mx-auto max-w-6xl px-5 py-14">
        <div className="flex flex-col items-center gap-8 text-center md:flex-row md:justify-between md:text-left">
          <div>
            <a href="#top" className="flex items-center justify-center gap-2.5 md:justify-start">
              <Flame className="h-6 w-6 text-gold" strokeWidth={1.5} />
              <span className="font-display text-xl text-cream">
                В гостях <span className="gold-italic">у сказки</span>
              </span>
            </a>
            <p className="mt-3 text-sm text-beige/80">Тепло встречает. Память остаётся.</p>
          </div>

          <div className="flex items-center gap-4">
            {socials.map((social) => (
              <a
                key={social.href}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.label}
                title={social.label}
                className="rounded-full border border-cream/15 p-3 text-beige transition-all duration-300 hover:-translate-y-0.5 hover:border-gold hover:text-gold"
              >
                <img src={social.icon} alt="" className="footer-social-icon h-5 w-5 object-contain" />
              </a>
            ))}
          </div>
        </div>

        <a
          href="https://vk.com/corona92"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-10 flex justify-center transition-opacity duration-300 hover:opacity-80"
          aria-label="Перейти в группу Сибирь ВКонтакте"
        >
          <img
            src="/assets/images/rus.png"
            alt="Сибирь"
            className="h-12 max-w-[320px] object-contain"
          />
        </a>
      </div>
    </footer>
  );
}
