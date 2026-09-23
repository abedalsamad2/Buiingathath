import { useState } from 'react';
import { CATEGORIES, COMPANY_WHATSAPP_LINK } from '../data/content';
import { 
  Wind, 
  Utensils, 
  Layers, 
  Coffee, 
  Sofa, 
  Tv, 
  Check, 
  MessageCircle, 
  ArrowUpRight 
} from 'lucide-react';

export function WhatWeBuy() {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const getCategoryIcon = (iconName: string) => {
    switch (iconName) {
      case 'AirVent':
        return <Wind className="w-8 h-8 text-amber-500" />;
      case 'UtensilsCrossed':
        return <Utensils className="w-8 h-8 text-amber-500" />;
      case 'Layers':
        return <Layers className="w-8 h-8 text-amber-500" />;
      case 'Coffee':
        return <Coffee className="w-8 h-8 text-amber-500" />;
      case 'Sofa':
        return <Sofa className="w-8 h-8 text-amber-500" />;
      case 'Tv':
        return <Tv className="w-8 h-8 text-amber-500" />;
      default:
        return <Wind className="w-8 h-8 text-amber-500" />;
    }
  };

  return (
    <section id="what-we-buy" className="py-16 sm:py-24 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
          <span className="text-xs font-bold uppercase tracking-wider text-amber-600 bg-amber-100/80 px-3 py-1 rounded-full">
            خدمات الشراء والتثمين
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mt-3 mb-3">
            ماذا نشتري
          </h2>
          <p className="text-slate-600 text-base sm:text-lg">
            نتعامل مع هذه الفئات، مفردة أو كمية كاملة، بأعلى الأسعار نقداً وفك مجاني.
          </p>
        </div>

        {/* 4 Main Categories Grid (Exactly mirroring the original design with enhanced fidelity) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {CATEGORIES.slice(0, 4).map((cat) => (
            <div
              key={cat.id}
              className="bg-white rounded-2xl p-6 sm:p-7 border border-slate-200 shadow-sm hover:shadow-xl hover:border-amber-400 transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                {/* Top Icon & Badge */}
                <div className="flex items-center justify-between mb-6">
                  <div className="w-14 h-14 rounded-2xl bg-amber-50 border border-amber-200/70 flex items-center justify-center group-hover:scale-110 group-hover:bg-amber-100 transition-all">
                    {getCategoryIcon(cat.iconName)}
                  </div>
                  {cat.badge && (
                    <span className="text-xs font-bold text-amber-800 bg-amber-100/80 px-2.5 py-1 rounded-full">
                      {cat.badge}
                    </span>
                  )}
                </div>

                {/* Title and Subtitle */}
                <h3 className="text-xl font-black text-slate-900 mb-2 group-hover:text-amber-600 transition-colors">
                  {cat.title}
                </h3>
                <p className="text-slate-600 text-sm mb-4 leading-relaxed font-medium">
                  {cat.subtitle}
                </p>

                {/* Highlights List */}
                <ul className="space-y-2 mb-6 border-t border-slate-100 pt-4 text-xs sm:text-sm text-slate-600">
                  {cat.highlights.map((h, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <Check className="w-4 h-4 text-emerald-500 mt-0.5 flex-shrink-0" />
                      <span>{h}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Action Button */}
              <div className="pt-2 border-t border-slate-100">
                <a
                  href={`${COMPANY_WHATSAPP_LINK}&text=${encodeURIComponent(`السلام عليكم، لدي ${cat.title} في الرياض وأريد تقييمها وبيعها.`)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl bg-slate-50 hover:bg-emerald-600 text-slate-800 hover:text-white font-bold text-xs sm:text-sm transition-all border border-slate-200 hover:border-emerald-600 group/btn"
                >
                  <MessageCircle className="w-4 h-4 text-emerald-500 group-hover/btn:text-white" />
                  <span>طلب تسعير {cat.title}</span>
                  <ArrowUpRight className="w-3.5 h-3.5 opacity-60 group-hover/btn:opacity-100" />
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Extended Furniture & Home Appliances Banner */}
        <div className="mt-12 bg-slate-900 rounded-3xl p-6 sm:p-10 text-white border border-slate-800 shadow-xl">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
            <div className="lg:col-span-2 space-y-3">
              <span className="text-xs font-bold text-amber-400 uppercase tracking-wider bg-amber-500/10 border border-amber-500/20 px-3 py-1 rounded-full">
                نشتري أيضاً أثاث المنازل والشقق المفروشة
              </span>
              <h3 className="text-2xl sm:text-3xl font-black">
                شراء غرف النوم والمجالس والكنب والأجهزة الكهربائية
              </h3>
              <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                هل تنتقل إلى منزل جديد أو تجدد أثاثك؟ نشتري أطقم غرف النوم، الصالونات، طاولات الطعام، الثلاجات، الغسالات، والشاشات بأعلى سعر وبأمانة تامة مع الدفع كاش والفك مجاناً.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row lg:flex-col gap-3 justify-center">
              <a
                href={COMPANY_WHATSAPP_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-black px-6 py-3.5 rounded-xl text-center shadow-lg transition-all text-sm sm:text-base"
              >
                <MessageCircle className="w-5 h-5 fill-slate-950" />
                <span>أرسل صور الأثاث بالواتساب</span>
              </a>
              <a
                href="#quote-calculator"
                className="inline-flex items-center justify-center gap-2 bg-slate-800 hover:bg-slate-700 text-white font-bold px-6 py-3.5 rounded-xl text-center border border-slate-700 transition-all text-sm sm:text-base"
              >
                <span>حاسبة التثمين والطلب السريع</span>
              </a>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
