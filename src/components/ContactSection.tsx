import { useState } from 'react';
import { 
  COMPANY_PHONE, 
  COMPANY_WHATSAPP_LINK, 
  COMPANY_EMAIL,
  COMPANY_LOCATION 
} from '../data/content';
import { 
  Phone, 
  MessageCircle, 
  Mail, 
  Instagram, 
  Facebook, 
  Send, 
  MapPin, 
  Sparkles,
  CheckCircle2
} from 'lucide-react';

export function ContactSection() {
  const [itemName, setItemName] = useState('مكيفات (سبليت أو شباك أو مركزي)');
  const [neighborhood, setNeighborhood] = useState('');
  const [notes, setNotes] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleQuickQuote = (e: React.FormEvent) => {
    e.preventDefault();
    const message = `السلام عليكم ورحمة الله،\nأرغب في بيع: ${itemName}\nالحي / الموقع بالرياض: ${neighborhood || 'الرياض'}\nملاحظات: ${notes || 'أرجو التواصل لتحديد موعد للمعاينة والتسعير كاش'}`;
    const url = `https://wa.me/966555913585?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank', 'noopener,noreferrer');
    setSubmitted(true);
  };

  return (
    <section id="contact" className="py-14 sm:py-20 lg:py-24 bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-14">
          <span className="text-xs font-bold uppercase tracking-wider text-amber-700 bg-amber-100/90 px-3 py-1 rounded-full inline-block">
            نحن بانتظارك 24/7
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 mt-3 mb-2">
            تواصل معنا لتقييم وبيع أثاثك
          </h2>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            اتصل أو راسلنا على واتساب، ونرتب زيارة لمعاينة أثاثك فوراً والدفع نقداً قبل التحميل.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          
          {/* Left Column: Direct Contact Details & Cards */}
          <div className="lg:col-span-6 space-y-4">
            
            {/* Direct Call & WhatsApp primary buttons */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pb-1">
              <a
                id="contact-whatsapp-btn"
                href={COMPANY_WHATSAPP_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2.5 bg-[#22C55E] hover:bg-[#16A34A] text-white font-extrabold py-3.5 sm:py-4 px-5 rounded-2xl shadow-md transition-all active:scale-95 text-base"
                aria-label="تواصل معنا عبر تطبيق واتساب"
              >
                <MessageCircle className="w-5 h-5 fill-white shrink-0" aria-hidden="true" />
                <span>تواصل عبر واتساب</span>
              </a>
              <a
                id="contact-call-btn"
                href={`tel:${COMPANY_PHONE}`}
                className="flex items-center justify-center gap-2.5 bg-[#0F172A] hover:bg-slate-800 text-white font-extrabold py-3.5 sm:py-4 px-5 rounded-2xl shadow-md transition-all active:scale-95 text-base"
                aria-label={`اتصل بنا هاتفياً على الرقم ${COMPANY_PHONE}`}
              >
                <Phone className="w-5 h-5 text-amber-400 shrink-0" aria-hidden="true" />
                <span>اتصل بنا الآن</span>
              </a>
            </div>

            {/* Semantic Address & Contact List */}
            <address className="not-italic space-y-3.5">
              {/* Phone Card */}
              <div className="bg-white rounded-2xl p-4 sm:p-5 border border-slate-200 shadow-sm flex items-center justify-between hover:border-amber-400 transition-all">
                <div className="flex items-center gap-3.5 min-w-0">
                  <div className="w-11 h-11 rounded-xl bg-amber-50 border border-amber-200 flex items-center justify-center shrink-0">
                    <Phone className="w-5 h-5 text-amber-500" aria-hidden="true" />
                  </div>
                  <div className="min-w-0">
                    <span className="text-xs text-slate-500 font-medium block">هاتف مباشر ومستمر</span>
                    <a 
                      href={`tel:${COMPANY_PHONE}`} 
                      dir="ltr" 
                      className="text-base sm:text-lg font-black text-slate-900 hover:text-amber-600 transition-colors block"
                    >
                      {COMPANY_PHONE}
                    </a>
                  </div>
                </div>
                <a
                  href={`tel:${COMPANY_PHONE}`}
                  className="text-xs font-bold bg-amber-500 hover:bg-amber-400 text-slate-950 px-3.5 py-2 rounded-xl transition-all shrink-0 active:scale-95"
                  aria-label={`اتصال بالرقم ${COMPANY_PHONE}`}
                >
                  اتصال
                </a>
              </div>

              {/* WhatsApp Card */}
              <div className="bg-white rounded-2xl p-4 sm:p-5 border border-slate-200 shadow-sm flex items-center justify-between hover:border-emerald-400 transition-all">
                <div className="flex items-center gap-3.5 min-w-0">
                  <div className="w-11 h-11 rounded-xl bg-emerald-50 border border-emerald-200 flex items-center justify-center shrink-0">
                    <MessageCircle className="w-5 h-5 text-emerald-600 fill-emerald-600" aria-hidden="true" />
                  </div>
                  <div className="min-w-0">
                    <span className="text-xs text-slate-500 font-medium block">واتساب متاح 24 ساعة</span>
                    <a 
                      href={COMPANY_WHATSAPP_LINK} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      dir="ltr" 
                      className="text-base sm:text-lg font-black text-slate-900 hover:text-emerald-600 transition-colors block"
                    >
                      {COMPANY_PHONE}
                    </a>
                  </div>
                </div>
                <a
                  href={COMPANY_WHATSAPP_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs font-bold bg-emerald-500 hover:bg-emerald-400 text-white px-3.5 py-2 rounded-xl transition-all shrink-0 active:scale-95"
                  aria-label="محادثة واتساب"
                >
                  محادثة
                </a>
              </div>

              {/* Location Card */}
              <div className="bg-white rounded-2xl p-4 sm:p-5 border border-slate-200 shadow-sm flex items-center gap-3.5">
                <div className="w-11 h-11 rounded-xl bg-blue-50 border border-blue-200 flex items-center justify-center shrink-0">
                  <MapPin className="w-5 h-5 text-blue-600" aria-hidden="true" />
                </div>
                <div className="min-w-0">
                  <span className="text-xs text-slate-500 font-medium block">الموقع والتغطية</span>
                  <p className="text-xs sm:text-sm font-bold text-slate-800 leading-snug">
                    {COMPANY_LOCATION}
                  </p>
                </div>
              </div>

              {/* Email Card */}
              <div className="bg-white rounded-2xl p-4 sm:p-5 border border-slate-200 shadow-sm flex items-center justify-between hover:border-slate-300 transition-all">
                <div className="flex items-center gap-3.5 min-w-0">
                  <div className="w-11 h-11 rounded-xl bg-slate-100 border border-slate-200 flex items-center justify-center shrink-0">
                    <Mail className="w-5 h-5 text-slate-600" aria-hidden="true" />
                  </div>
                  <div className="min-w-0">
                    <span className="text-xs text-slate-500 font-medium block">البريد الإلكتروني</span>
                    <a 
                      href={`mailto:${COMPANY_EMAIL}`} 
                      dir="ltr" 
                      className="text-xs sm:text-sm font-bold text-slate-800 hover:text-amber-600 transition-colors truncate block"
                    >
                      {COMPANY_EMAIL}
                    </a>
                  </div>
                </div>
                <a
                  href={`mailto:${COMPANY_EMAIL}`}
                  className="text-xs font-bold bg-slate-100 hover:bg-slate-200 text-slate-800 px-3 py-2 rounded-xl transition-all shrink-0"
                >
                  إرسال
                </a>
              </div>
            </address>

            {/* Social Links Cards */}
            <div className="grid grid-cols-2 gap-3 pt-1">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white rounded-2xl p-3.5 border border-slate-200 shadow-sm flex items-center gap-2.5 hover:border-pink-300 transition-all group"
                aria-label="صفحتنا على إنستقرام"
              >
                <div className="w-8 h-8 rounded-lg bg-pink-50 flex items-center justify-center text-pink-600 group-hover:scale-105 transition-transform shrink-0">
                  <Instagram className="w-4 h-4" aria-hidden="true" />
                </div>
                <div className="min-w-0">
                  <span className="text-[11px] text-slate-500 block">إنستقرام</span>
                  <span className="text-xs font-bold text-slate-900 truncate block">athathfurniture</span>
                </div>
              </a>

              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white rounded-2xl p-3.5 border border-slate-200 shadow-sm flex items-center gap-2.5 hover:border-blue-300 transition-all group"
                aria-label="صفحتنا على فيسبوك"
              >
                <div className="w-8 h-8 rounded-lg bg-blue-50 flex items-center justify-center text-blue-600 group-hover:scale-105 transition-transform shrink-0">
                  <Facebook className="w-4 h-4" aria-hidden="true" />
                </div>
                <div className="min-w-0">
                  <span className="text-[11px] text-slate-500 block">فيسبوك</span>
                  <span className="text-xs font-bold text-slate-900 truncate block">أثاث الرياض</span>
                </div>
              </a>
            </div>

          </div>

          {/* Right Column: Quick Quote / Estimation Form */}
          <div id="quote-calculator" className="lg:col-span-6">
            <div className="bg-white rounded-3xl p-5 sm:p-7 lg:p-8 border-2 border-slate-200 shadow-lg relative">
              <div className="mb-5">
                <div className="inline-flex items-center gap-1.5 text-xs font-bold text-amber-700 bg-amber-100/90 px-2.5 py-1 rounded-full mb-2">
                  <Sparkles className="w-3.5 h-3.5" aria-hidden="true" />
                  <span>تسعير سريع مجاني</span>
                </div>
                <h3 className="text-lg sm:text-xl lg:text-2xl font-black text-slate-900">
                  أرسل تفاصيل ما تريد بيعه
                </h3>
                <p className="text-xs sm:text-sm text-slate-500 mt-1 leading-relaxed">
                  اختر الفئة وأدخل الحي ليقوم مندوبنا بالتواصل معك وتقديم أعلى سعر كاش فوري.
                </p>
              </div>

              <form onSubmit={handleQuickQuote} className="space-y-4" noValidate={false}>
                {/* Category Selection */}
                <div>
                  <label 
                    htmlFor="quick-item-select" 
                    className="block text-xs sm:text-sm font-bold text-slate-700 mb-1.5"
                  >
                    نوع الأثاث أو المعدات:
                  </label>
                  <select
                    id="quick-item-select"
                    value={itemName}
                    onChange={(e) => setItemName(e.target.value)}
                    className="w-full bg-slate-50 border border-slate-300 rounded-xl px-3.5 py-3 text-sm sm:text-base text-slate-900 focus:outline-none focus:ring-2 focus:ring-amber-500"
                  >
                    <option value="مكيفات (سبليت أو شباك أو مركزي)">مكيفات (سبليت أو شباك أو مركزي)</option>
                    <option value="مطابخ كاملة وخزائن">مطابخ كاملة وخزائن</option>
                    <option value="سكراب ومعادن وأجهزة قديمة">سكراب ومعادن وأجهزة قديمة</option>
                    <option value="معدات مطاعم وكافيهات ومخابز">معدات مطاعم وكافيهات ومخابز</option>
                    <option value="غرف نوم ومجالس وكنب">غرف نوم ومجالس وكنب</option>
                    <option value="أجهزة كهربائية وثلاجات وغسالات">أجهزة كهربائية وثلاجات وغسالات</option>
                    <option value="أثاث شقة أو فلة بالكامل">أثاث شقة أو فلة بالكامل</option>
                  </select>
                </div>

                {/* Neighborhood / Location */}
                <div>
                  <label 
                    htmlFor="quick-neighborhood-input" 
                    className="block text-xs sm:text-sm font-bold text-slate-700 mb-1.5"
                  >
                    الحي أو المنطقة بالرياض:
                  </label>
                  <div className="relative">
                    <input
                      id="quick-neighborhood-input"
                      type="text"
                      autoComplete="address-level2"
                      placeholder="مثال: حي الياسمين، الملقا، الروضة، الشفا..."
                      value={neighborhood}
                      onChange={(e) => setNeighborhood(e.target.value)}
                      className="w-full bg-slate-50 border border-slate-300 rounded-xl px-3.5 py-3 pr-10 text-sm sm:text-base text-slate-900 focus:outline-none focus:ring-2 focus:ring-amber-500"
                    />
                    <MapPin className="w-4 h-4 text-slate-400 absolute right-3.5 top-3.5" aria-hidden="true" />
                  </div>
                </div>

                {/* Notes / Description */}
                <div>
                  <label 
                    htmlFor="quick-notes-textarea" 
                    className="block text-xs sm:text-sm font-bold text-slate-700 mb-1.5"
                  >
                    ملاحظات إضافية (عدد القطع، الحالة، الموديل):
                  </label>
                  <textarea
                    id="quick-notes-textarea"
                    rows={3}
                    placeholder="مثال: لدي 4 مكيفات سبليت 24 وحدة شغالة + مطبخ ألمنيوم 4 متر بحالة جيدة..."
                    value={notes}
                    onChange={(e) => setNotes(e.target.value)}
                    className="w-full bg-slate-50 border border-slate-300 rounded-xl px-3.5 py-3 text-sm sm:text-base text-slate-900 focus:outline-none focus:ring-2 focus:ring-amber-500 resize-none"
                  />
                </div>

                {/* Submit button with safe minimum touch height >= 48px */}
                <button
                  type="submit"
                  className="w-full inline-flex items-center justify-center gap-2 bg-emerald-600 hover:bg-emerald-500 active:bg-emerald-700 text-white font-black text-base min-h-[50px] py-3.5 px-4 rounded-xl shadow-md hover:shadow-emerald-600/30 transition-all active:scale-[0.98]"
                >
                  <Send className="w-5 h-5 fill-white shrink-0" aria-hidden="true" />
                  <span>إرسال الطلب عبر واتساب للتسعير الفوري</span>
                </button>

                {submitted && (
                  <div 
                    role="alert" 
                    className="p-3 bg-emerald-50 border border-emerald-200 rounded-xl text-xs sm:text-sm text-emerald-800 flex items-center gap-2"
                  >
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" aria-hidden="true" />
                    <span>تم فتح محادثة الواتساب بنجاح، يمكنك الآن إرفاق الصور لتحديد أعلى سعر كاش!</span>
                  </div>
                )}
              </form>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
