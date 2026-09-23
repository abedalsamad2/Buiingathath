import { WHY_US_BENEFITS } from '../data/content';
import { Truck, Banknote, Boxes, MapPin, Check } from 'lucide-react';

export function WhyUs() {
  const getBenefitIcon = (index: number) => {
    switch (index) {
      case 0:
        return <Truck className="w-5 h-5 text-amber-500" />;
      case 1:
        return <Banknote className="w-5 h-5 text-emerald-500" />;
      case 2:
        return <Boxes className="w-5 h-5 text-amber-500" />;
      case 3:
        return <MapPin className="w-5 h-5 text-amber-500" />;
      default:
        return <Check className="w-5 h-5 text-emerald-500" />;
    }
  };

  return (
    <section id="why-us" className="py-16 sm:py-24 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
          <span className="text-xs font-bold uppercase tracking-wider text-amber-600 bg-amber-100/80 px-3 py-1 rounded-full">
            أفضل خيار لبيع أثاثك
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mt-3 mb-3">
            لماذا نحن
          </h2>
          <p className="text-slate-600 text-base sm:text-lg">
            نقدم لك تجربة مريحة ومربحة لبيع كل ما لا تحتاجه بأعلى سرعة وأمانة.
          </p>
        </div>

        {/* 4 Feature Cards (exact mirror of the screenshot with modern refinement) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {WHY_US_BENEFITS.map((benefit, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm hover:shadow-lg hover:border-amber-300 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-10 h-10 rounded-xl bg-slate-50 border border-slate-200 flex items-center justify-center">
                    {getBenefitIcon(idx)}
                  </div>
                  <span className="w-6 h-6 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center">
                    <Check className="w-4 h-4 stroke-[3]" />
                  </span>
                </div>

                <h3 className="text-lg font-bold text-slate-900 mb-2">
                  {benefit.title}
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed">
                  {benefit.description}
                </p>
              </div>

              <div className="mt-4 pt-3 border-t border-slate-100 flex items-center text-xs font-semibold text-slate-500">
                <span>ميزة قياسية لدى شركتنا</span>
              </div>
            </div>
          ))}
        </div>

        {/* Statistical trust indicators */}
        <div className="mt-12 bg-gradient-to-r from-slate-900 to-slate-800 rounded-3xl p-6 sm:p-8 text-white grid grid-cols-2 md:grid-cols-4 gap-6 text-center border border-slate-700">
          <div>
            <div className="text-2xl sm:text-3xl font-black text-amber-400">100%</div>
            <div className="text-xs sm:text-sm text-slate-300 mt-1">دفع نقدي فوري كاش</div>
          </div>
          <div>
            <div className="text-2xl sm:text-3xl font-black text-amber-400">0 ريال</div>
            <div className="text-xs sm:text-sm text-slate-300 mt-1">تكلفة الفك والتحميل</div>
          </div>
          <div>
            <div className="text-2xl sm:text-3xl font-black text-amber-400">30-60 د</div>
            <div className="text-xs sm:text-sm text-slate-300 mt-1">سرعة الوصول بالرياض</div>
          </div>
          <div>
            <div className="text-2xl sm:text-3xl font-black text-amber-400">24 / 7</div>
            <div className="text-xs sm:text-sm text-slate-300 mt-1">خدمة واستجابة سريعة</div>
          </div>
        </div>

      </div>
    </section>
  );
}
