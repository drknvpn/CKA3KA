import { Clock, MapPin } from 'lucide-react';
import PhonePicker from '@/components/PhonePicker';

export default function Booking() {
  return (
    <section id="booking" className="relative py-24">
      <div className="divider-terra absolute left-0 right-0 top-0" />
      <div id="contacts" className="mx-auto max-w-6xl px-5">
        <h2 className="reveal font-display text-3xl text-cream sm:text-4xl md:text-5xl">
          Забронируйте <span className="gold-italic">свой вечер.</span>
        </h2>
        <p className="reveal mt-5 max-w-2xl text-base text-beige" style={{ transitionDelay: '0.1s' }}>
          Позвоните нам — подберём удобное время и ответим на вопросы.
        </p>

        <div
          className="reveal mt-14 overflow-hidden rounded-2xl border border-cream/5 bg-oak shadow-[0_18px_45px_rgba(0,0,0,0.2)]"
          style={{ transitionDelay: '0.15s' }}
        >
          <div className="min-h-[400px] [&_iframe]:h-[400px] [&_iframe]:w-full sm:[&_iframe]:h-[480px]">
            <iframe
              title="Сауна «В гостях у сказки» на карте Ханты-Мансийска"
              src="https://yandex.ru/map-widget/v1/?ll=69.048240%2C60.984830&mode=poi&poi%5Bpoint%5D=69.048240%2C60.984830&poi%5Buri%5D=ymapsbm1%3A%2F%2Forg%3Foid%3D7021927256&z=17"
              width="100%"
              height="480"
              frameBorder="0"
              className="grayscale-[35%] contrast-[1.05]"
              allowFullScreen
            />
          </div>

          <div className="grid gap-8 border-t border-terra/20 p-7 sm:grid-cols-[1fr_1fr_auto] sm:items-center sm:p-8">
            <div className="flex items-start gap-3">
              <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-gold" strokeWidth={1.6} />
              <div>
                <p className="text-xs uppercase tracking-wider text-beige/60">Адрес</p>
                <p className="mt-1 text-sm text-cream">Школьная ул., 3/1, Ханты-Мансийск</p>
                <p className="mt-1 text-xs text-beige/80">Заезд со стороны Школьной, 4</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Clock className="mt-0.5 h-5 w-5 shrink-0 text-gold" strokeWidth={1.6} />
              <div>
                <p className="text-xs uppercase tracking-wider text-beige/60">Режим работы</p>
                <p className="mt-1 text-sm text-cream">Ежедневно, по предварительной записи</p>
              </div>
            </div>
            <PhonePicker className="btn-gold inline-flex items-center justify-center rounded-full bg-gold px-7 py-3.5 text-sm font-semibold text-coal">
              Забронировать
            </PhonePicker>
          </div>
        </div>
      </div>
    </section>
  );
}
