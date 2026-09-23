import { COMPANY_PHONE, COMPANY_EMAIL } from '../data/content';
import { Phone, Mail, MapPin, Heart, ShieldCheck } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-[#0F172A] text-slate-400 border-t border-slate-800 pt-16 pb-24 lg:pb-16 text-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-slate-800">
          
          {/* Brand Info */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-amber-500 flex items-center justify-center text-slate-950 font-black text-xl">
                🛋️
              </div>
              <span className="text-white font-black text-lg">
                شراء أثاث مستعمل بالرياض
              </span>
            </div>
            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
              الشركة الرائدة في شراء جميع أنواع الأثاث المنزلي والمكتبي، المكيفات، المطابخ، السكراب، ومعدات المطاعم في كافة أحياء الرياض بأعلى الأسعار نقداً وفك ونقل مجاني.
            </p>
            <div className="flex items-center gap-2 text-xs text-amber-400 font-semibold">
              <ShieldCheck className="w-4 h-4" />
              <span>دفع كاش فوري قبل التحميل</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-bold text-base mb-4">روابط الموقع</h4>
            <ul className="space-y-2.5 text-xs sm:text-sm">
              <li>
                <a href="#hero" className="hover:text-amber-400 transition-colors">الرئيسية</a>
              </li>
              <li>
                <a href="#how-it-works" className="hover:text-amber-400 transition-colors">كيف نعمل (الخطوات الأربع)</a>
              </li>
              <li>
                <a href="#what-we-buy" className="hover:text-amber-400 transition-colors">ماذا نشتري</a>
              </li>
              <li>
                <a href="#service-areas" className="hover:text-amber-400 transition-colors">أحياء ومناطق الرياض</a>
              </li>
              <li>
                <a href="#why-us" className="hover:text-amber-400 transition-colors">مميزاتنا ولماذا نحن</a>
              </li>
              <li>
                <a href="#faq" className="hover:text-amber-400 transition-colors">الأسئلة الشائعة</a>
              </li>
              <li>
                <a href="#contact" className="hover:text-amber-400 transition-colors">تواصل معنا</a>
              </li>
            </ul>
          </div>

          {/* Core Services */}
          <div>
            <h4 className="text-white font-bold text-base mb-4">خدماتنا الرئيسية</h4>
            <ul className="space-y-2.5 text-xs sm:text-sm">
              <li>شراء مكيفات سبليت وشباك ومركزي</li>
              <li>شراء مطابخ ألمنيوم وخشب ومطابخ ايكيا</li>
              <li>شراء سكراب ومعادن وحديد ونحاس</li>
              <li>شراء معدات مطاعم وكافيهات بالكامل</li>
              <li>شراء غرف نوم ومجالس وصالونات كنب</li>
              <li>شراء أجهزة كهربائية وثلاجات وغسالات</li>
            </ul>
          </div>

          {/* Contact Direct */}
          <div className="space-y-3">
            <h4 className="text-white font-bold text-base mb-4">اتصل بنا مباشرة</h4>
            <div className="flex items-center gap-3">
              <Phone className="w-4 h-4 text-amber-400 flex-shrink-0" />
              <a href={`tel:${COMPANY_PHONE}`} dir="ltr" className="text-white font-bold hover:text-amber-400">
                {COMPANY_PHONE}
              </a>
            </div>
            <div className="flex items-center gap-3">
              <Mail className="w-4 h-4 text-amber-400 flex-shrink-0" />
              <a href={`mailto:${COMPANY_EMAIL}`} dir="ltr" className="text-slate-300 hover:text-amber-400 text-xs sm:text-sm">
                {COMPANY_EMAIL}
              </a>
            </div>
            <div className="flex items-center gap-3 text-xs sm:text-sm text-slate-400">
              <MapPin className="w-4 h-4 text-amber-400 flex-shrink-0" />
              <span>الرياض – تغطية شاملة لكافة الأحياء والمحافظات المجاورة</span>
            </div>
          </div>

        </div>


        {/* Copyright */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-3">
          <p>© {new Date().getFullYear()} شراء أثاث مستعمل ومكيفات بالرياض. جميع الحقوق محفوظة.</p>
          <p className="flex items-center gap-1">
            <span>خدمة سريعة وأمانة تامة لجميع سكان الرياض</span>
          </p>
        </div>

      </div>
    </footer>
  );
}
