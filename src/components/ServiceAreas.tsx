import { useState } from 'react';
import { RIYADH_REGIONS, COMPANY_PHONE, COMPANY_WHATSAPP_LINK } from '../data/content';
import { MapPin, Phone, MessageCircle, Navigation, CheckCircle } from 'lucide-react';

export function ServiceAreas() {
  const [activeRegion, setActiveRegion] = useState<string>('all');

  const filteredRegions = activeRegion === 'all' 
    ? RIYADH_REGIONS 
    : RIYADH_REGIONS.filter(r => r.slug === activeRegion);

  return (
    <section id="service-areas" className="py-16 sm:py-24 bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-12">
          <span className="text-xs font-bold uppercase tracking-wider text-amber-600 bg-amber-100/80 px-3 py-1 rounded-full">
            تغطية شاملة 24/7
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mt-3 mb-3">
            مناطق الخدمة
          </h2>
          <p className="text-slate-600 text-base sm:text-lg">
            نخدم الرياض. اتصل أو راسلنا على واتساب وأخبرنا بموقعك، ونرتب موعد الزيارة فوراً.
          </p>

          {/* Quick CTA buttons matching original images */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3.5 mt-6">
            <a
              id="service-areas-whatsapp-btn"
              href={COMPANY_WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 bg-[#22C55E] hover:bg-[#16A34A] text-white font-extrabold text-base px-8 py-3.5 rounded-xl shadow-md transition-all active:scale-95"
            >
              <MessageCircle className="w-5 h-5 fill-white" />
              <span>تواصل معنا عبر واتساب</span>
            </a>
            <a
              id="service-areas-call-btn"
              href={`tel:${COMPANY_PHONE}`}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 bg-white hover:bg-slate-100 border border-slate-300 text-slate-900 font-bold text-base px-8 py-3.5 rounded-xl transition-all shadow-sm active:scale-95"
            >
              <Phone className="w-5 h-5 text-amber-500" />
              <span>اتصل بنا</span>
            </a>
          </div>
        </div>

        {/* Local Area Filter Tabs for SEO and Usability */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-8" role="tablist" aria-label="تصنيفات أحياء الرياض">
          <button
            role="tab"
            aria-selected={activeRegion === 'all'}
            onClick={() => setActiveRegion('all')}
            className={`min-h-[42px] px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all active:scale-95 ${
              activeRegion === 'all'
                ? 'bg-amber-500 text-slate-950 shadow-sm'
                : 'bg-white text-slate-600 border border-slate-200 hover:border-amber-400'
            }`}
          >
            جميع قطاعات الرياض
          </button>
          {RIYADH_REGIONS.map((region) => (
            <button
              key={region.slug}
              role="tab"
              aria-selected={activeRegion === region.slug}
              onClick={() => setActiveRegion(region.slug)}
              className={`min-h-[42px] px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all active:scale-95 ${
                activeRegion === region.slug
                  ? 'bg-amber-500 text-slate-950 shadow-sm'
                  : 'bg-white text-slate-600 border border-slate-200 hover:border-amber-400'
              }`}
            >
              {region.name}
            </button>
          ))}
        </div>

        {/* Regions & Neighborhoods Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredRegions.map((region) => (
            <div
              key={region.slug}
              className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm hover:border-amber-400 transition-all"
            >
              <div className="flex items-center gap-3 mb-4 pb-3 border-b border-slate-100">
                <div className="w-9 h-9 rounded-lg bg-amber-50 border border-amber-200 flex items-center justify-center">
                  <MapPin className="w-5 h-5 text-amber-500" />
                </div>
                <div>
                  <h3 className="font-extrabold text-base text-slate-900">
                    {region.name}
                  </h3>
                  <span className="text-xs text-slate-500">نصل خلال 30 دقيقة</span>
                </div>
              </div>

              {/* Neighborhoods Tags */}
              <div className="flex flex-wrap gap-1.5">
                {region.neighborhoods.map((nh) => (
                  <span
                    key={nh}
                    className="inline-flex items-center gap-1 text-xs font-medium text-slate-700 bg-slate-100/80 hover:bg-amber-50 hover:text-amber-900 border border-slate-200/60 rounded-md px-2.5 py-1 transition-colors"
                  >
                    <CheckCircle className="w-3 h-3 text-emerald-500" />
                    {nh}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Guarantee Banner */}
        <div className="mt-8 text-center bg-amber-50 border border-amber-200 rounded-2xl p-4 text-slate-800 text-sm font-medium">
          🚗 هل موقعك خارج هذه الأحياء المذكورة؟ لا تقلق، فريقنا وسياراتنا تغطي <span className="font-extrabold text-amber-800">كافة أنحاء وضواحي مدينة الرياض</span> بنفس السرعة والالتزام!
        </div>

      </div>
    </section>
  );
}
