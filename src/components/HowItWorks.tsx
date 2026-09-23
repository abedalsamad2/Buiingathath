import { HOW_IT_WORKS_STEPS } from '../data/content';
import { MessageSquareText, CalendarCheck, Banknote, Truck } from 'lucide-react';

export function HowItWorks() {
  const getIcon = (number: number) => {
    switch (number) {
      case 1:
        return <MessageSquareText className="w-5 h-5 text-amber-500" />;
      case 2:
        return <CalendarCheck className="w-5 h-5 text-amber-500" />;
      case 3:
        return <Banknote className="w-5 h-5 text-amber-500" />;
      case 4:
        return <Truck className="w-5 h-5 text-amber-500" />;
      default:
        return null;
    }
  };

  return (
    <section id="how-it-works" className="py-16 sm:py-20 bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
          <span className="text-xs font-bold uppercase tracking-wider text-amber-600 bg-amber-100/80 px-3 py-1 rounded-full">
            خطوات بسيطة وسريعة
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mt-3 mb-3">
            كيف نعمل
          </h2>
          <p className="text-slate-600 text-base sm:text-lg">
            أربع خطوات فقط، ومنها نتولى نقل ما تريد التخلص منه مع الدفع الفوري كاش.
          </p>
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {HOW_IT_WORKS_STEPS.map((step) => (
            <div
              key={step.number}
              className="relative bg-white rounded-2xl p-6 border border-slate-200 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between group"
            >
              {/* Step number badge matching yellow color from original images */}
              <div className="flex items-center justify-between mb-5">
                <div className="w-10 h-10 rounded-xl bg-amber-50 border border-amber-200 flex items-center justify-center">
                  {getIcon(step.number)}
                </div>
                <span className="w-9 h-9 rounded-lg bg-amber-500 text-slate-950 font-black text-lg flex items-center justify-center shadow-sm group-hover:scale-110 transition-transform">
                  {step.number}
                </span>
              </div>

              <div>
                <h3 className="text-lg font-bold text-slate-900 mb-2">
                  {step.title}
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  {step.description}
                </p>
              </div>

              <div className="mt-4 pt-3 border-t border-slate-100 flex items-center text-xs font-semibold text-amber-600">
                <span>جاهزون لخدمتك فوراً</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
