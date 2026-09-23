import { Phone, MessageCircle, MapPin, CheckCircle2, ShieldCheck, Zap, ArrowLeft } from 'lucide-react';
import { COMPANY_PHONE, COMPANY_WHATSAPP_LINK, HERO_HIGHLIGHTS } from '../data/content';

export function Hero() {
  return (
    <section id="hero" className="relative bg-[#0F172A] text-white pt-10 pb-16 lg:pt-16 lg:pb-24 overflow-hidden">
      {/* Background ambient subtle patterns */}
      <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#F59E0B_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none" />
      <div className="absolute top-0 -left-40 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 -right-40 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          
          {/* Main Content Column */}
          <div className="lg:col-span-7 text-right space-y-6">
            
            {/* Top Local Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/15 border border-amber-500/30 text-amber-300 text-xs sm:text-sm font-semibold">
              <MapPin className="w-4 h-4 text-amber-400" />
              <span>نخدم الرياض | نصلك أينما كنت خلال ساعة</span>
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
            </div>

            {/* Main Headline */}
            <div className="space-y-3">
              <h1 className="text-2xl sm:text-4xl lg:text-5xl xl:text-6xl font-black text-white tracking-tight leading-[1.25] break-words">
                شراء أثاث مستعمل ومكيفات <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-amber-500">في الرياض</span>
              </h1>
              <p className="text-lg sm:text-2xl lg:text-3xl font-extrabold text-amber-400 leading-snug">
                نشتري نقداً – ونفك وننقل على حسابنا
              </p>
            </div>

            {/* Sub-description */}
            <p className="text-slate-300 text-sm sm:text-base lg:text-lg max-w-2xl leading-relaxed">
              تخلص من أثاثك ومكيفاتك القديمة وسكرابك بأعلى عائد مالي كاش فوري. نوفر فريقاً فنياً متخصصاً للفك والتحميل والنقل مجاناً من أي حي في مدينة الرياض.
            </p>

            {/* Primary Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 pt-2">
              {/* WhatsApp Green Button */}
              <a
                id="hero-whatsapp-btn"
                href={COMPANY_WHATSAPP_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-3 bg-[#22C55E] hover:bg-[#16A34A] text-white font-black text-base sm:text-lg px-6 sm:px-8 py-3.5 sm:py-4 rounded-xl shadow-lg shadow-emerald-950/40 hover:scale-[1.02] active:scale-[0.98] transition-all min-h-[48px]"
                aria-label="تواصل معنا عبر واتساب لبيع الأثاث"
              >
                <MessageCircle className="w-5 h-5 sm:w-6 sm:h-6 fill-white shrink-0" aria-hidden="true" />
                <span>تواصل معنا عبر واتساب</span>
              </a>

              {/* Dark / Gold bordered Phone Button */}
              <a
                id="hero-call-btn"
                href={`tel:${COMPANY_PHONE}`}
                className="inline-flex items-center justify-center gap-2 sm:gap-3 bg-slate-800 hover:bg-slate-700 border-2 border-slate-700 hover:border-amber-500 text-white font-bold text-base sm:text-lg px-5 sm:px-7 py-3.5 sm:py-4 rounded-xl transition-all active:scale-[0.98] min-h-[48px]"
                aria-label={`اتصل بنا هاتفياً على الرقم ${COMPANY_PHONE}`}
              >
                <Phone className="w-5 h-5 text-amber-400 shrink-0" aria-hidden="true" />
                <span>اتصل بنا: </span>
                <span dir="ltr" className="tracking-wider text-amber-400 font-extrabold">{COMPANY_PHONE}</span>
              </a>
            </div>

            {/* Trust Points */}
            <div className="pt-4 grid grid-cols-2 sm:grid-cols-3 gap-3 text-xs sm:text-sm text-slate-300 border-t border-slate-800/80">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                <span>الدفع كاش نقداً فوراً</span>
              </div>
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-amber-400 flex-shrink-0" />
                <span>فك ونقل مجاني 100%</span>
              </div>
              <div className="flex items-center gap-2 col-span-2 sm:col-span-1">
                <Zap className="w-4 h-4 text-amber-400 flex-shrink-0" />
                <span>معاينة وتثمين عادل</span>
              </div>
            </div>

          </div>

          {/* Right Column: 4 Focal Categories as shown in screenshots, refined */}
          <div className="lg:col-span-5">
            <div className="bg-[#1E293B]/90 backdrop-blur-sm border-2 border-slate-700/80 rounded-2xl p-6 sm:p-7 shadow-2xl space-y-4">
              <div className="flex items-center justify-between pb-3 border-b border-slate-700">
                <div className="text-right">
                  <span className="text-xs uppercase tracking-wider text-amber-400 font-bold block">الفئات الأساسية المطلوبة</span>
                  <h2 className="text-lg font-bold text-white">نشتري مباشرة وبأفضل سعر</h2>
                </div>
                <span className="px-2.5 py-1 text-xs font-bold rounded bg-amber-500/20 text-amber-400 border border-amber-500/30">
                  كاش فوري
                </span>
              </div>

              {/* The 4 core items from screenshot */}
              <div className="space-y-2.5">
                {HERO_HIGHLIGHTS.map((item, idx) => (
                  <a
                    key={item.id}
                    href="#what-we-buy"
                    className="group block p-3.5 rounded-xl bg-slate-900/60 hover:bg-slate-900 border border-slate-800 hover:border-amber-500/50 transition-all"
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <span className="w-7 h-7 rounded-lg bg-amber-500/15 border border-amber-500/30 flex items-center justify-center text-amber-400 font-bold text-xs">
                          {idx + 1}
                        </span>
                        <div>
                          <h3 className="font-extrabold text-base text-white group-hover:text-amber-400 transition-colors">
                            {item.name}
                          </h3>
                          <p className="text-xs text-slate-400">{item.desc}</p>
                        </div>
                      </div>
                      <ArrowLeft className="w-4 h-4 text-slate-500 group-hover:text-amber-400 group-hover:-translate-x-1 transition-all" />
                    </div>
                  </a>
                ))}
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
