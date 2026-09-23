import { useState, useEffect } from 'react';
import { Phone, Menu, X, Clock, MapPin, Sparkles } from 'lucide-react';
import { COMPANY_PHONE, COMPANY_WHATSAPP_LINK } from '../data/content';

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  // Lock body scroll when mobile menu is open to prevent iOS / Android scroll-through
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  // Close menu on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        setIsOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen]);

  const navLinks = [
    { label: 'الرئيسية', href: '#hero' },
    { label: 'كيف نعمل', href: '#how-it-works' },
    { label: 'ماذا نشتري', href: '#what-we-buy' },
    { label: 'مناطق الخدمة', href: '#service-areas' },
    { label: 'لماذا نحن', href: '#why-us' },
    { label: 'الأسئلة الشائعة', href: '#faq' },
    { label: 'تواصل معنا', href: '#contact' },
  ];

  return (
    <header className="sticky top-0 z-40 bg-[#0F172A] text-white border-b border-slate-800 shadow-md">
      {/* Top Announcement Bar - Scales smoothly on all screen sizes */}
      <div className="bg-[#1E293B] border-b border-slate-800/80 text-xs py-1.5 px-3 sm:px-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-2">
          <div className="flex items-center gap-2 sm:gap-4 text-slate-300 min-w-0">
            <span className="flex items-center gap-1 sm:gap-1.5 shrink-0">
              <MapPin className="w-3.5 h-3.5 text-amber-400 shrink-0" aria-hidden="true" />
              <span>نخدم الرياض</span>
            </span>
            <span className="hidden md:flex items-center gap-1.5 text-slate-400">
              <Clock className="w-3.5 h-3.5 text-amber-400 shrink-0" aria-hidden="true" />
              <span>24 ساعة / 7 أيام</span>
            </span>
          </div>
          <div className="flex items-center gap-1.5 text-amber-400 font-semibold text-[11px] sm:text-xs truncate">
            <Sparkles className="w-3 h-3 shrink-0" aria-hidden="true" />
            <span className="truncate">كاش فوري + الفك والنقل مجاناً</span>
          </div>
        </div>
      </div>

      {/* Main Navbar Bar */}
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20 gap-2">
          
          {/* Logo / Brand Name */}
          <a
            id="brand-logo"
            href="#hero"
            className="flex items-center gap-2 sm:gap-3 text-right group min-w-0"
            aria-label="الرئيسية - شراء أثاث مستعمل ومكيفات بالرياض"
          >
            <div className="w-9 h-9 sm:w-11 sm:h-11 rounded-lg bg-gradient-to-br from-amber-500 to-amber-600 flex items-center justify-center text-slate-950 font-black text-lg sm:text-xl shadow-md shrink-0 group-hover:scale-105 transition-transform">
              🛋️
            </div>
            <div className="min-w-0">
              <span className="block font-black text-sm sm:text-lg lg:text-xl text-white tracking-tight leading-tight truncate">
                شراء أثاث مستعمل بالرياض
              </span>
              <span className="text-[10px] sm:text-xs text-amber-400 font-medium block truncate">
                مكيفات، مطابخ، سكراب نقداً
              </span>
            </div>
          </a>

          {/* Desktop Links */}
          <nav
            aria-label="التنقل الرئيسي"
            className="hidden lg:flex items-center gap-4 xl:gap-7 text-sm font-medium"
          >
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-slate-300 hover:text-amber-400 transition-colors py-2 px-1 focus-visible:ring-2 focus-visible:ring-amber-400 focus-visible:rounded"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Header Action Buttons (Responsive) */}
          <div className="flex items-center gap-2">
            {/* Desktop Direct Call */}
            <a
              id="header-phone-btn"
              href={`tel:${COMPANY_PHONE}`}
              className="hidden sm:inline-flex items-center gap-2 bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold px-4 py-2.5 rounded-lg transition-all shadow-md hover:shadow-amber-500/20 active:scale-95 shrink-0"
              aria-label={`اتصل بنا على الرقم ${COMPANY_PHONE}`}
            >
              <Phone className="w-4 h-4 fill-slate-950" aria-hidden="true" />
              <span dir="ltr" className="tracking-wider text-sm sm:text-base">{COMPANY_PHONE}</span>
            </a>

            {/* Mobile Call Icon Button (Fast Touch Target >= 44px) */}
            <a
              href={`tel:${COMPANY_PHONE}`}
              className="sm:hidden flex items-center justify-center w-11 h-11 bg-amber-500 text-slate-950 font-bold rounded-lg shrink-0 shadow-sm active:scale-90 transition-transform"
              aria-label={`اتصال فوري: ${COMPANY_PHONE}`}
            >
              <Phone className="w-5 h-5 fill-slate-950" aria-hidden="true" />
            </a>

            {/* Mobile Hamburger Toggle (Fast Touch Target >= 44px) */}
            <button
              id="mobile-menu-toggle"
              type="button"
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden flex items-center justify-center w-11 h-11 rounded-lg text-slate-300 hover:text-white hover:bg-slate-800 focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-400"
              aria-label={isOpen ? 'إغلاق القائمة' : 'فتح قائمة التصفح'}
              aria-expanded={isOpen}
              aria-controls="mobile-drawer-menu"
            >
              {isOpen ? <X className="w-6 h-6" aria-hidden="true" /> : <Menu className="w-6 h-6" aria-hidden="true" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer Menu Modal */}
      {isOpen && (
        <div
          id="mobile-drawer-menu"
          className="lg:hidden fixed inset-x-0 top-[calc(4rem+1.5rem)] sm:top-[calc(5rem+1.5rem)] bottom-0 z-50 bg-slate-950/98 backdrop-blur-md overflow-y-auto px-5 py-6 space-y-4 border-t border-slate-800 flex flex-col justify-between"
          role="dialog"
          aria-modal="true"
          aria-label="قائمة التصفح للجوال"
        >
          <nav className="space-y-1.5" aria-label="روابط القائمة">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="flex items-center justify-between px-4 py-3.5 rounded-xl text-base font-bold text-slate-200 hover:bg-slate-800 hover:text-amber-400 active:bg-slate-800 transition-colors"
              >
                <span>{link.label}</span>
                <span className="text-slate-500 text-xs">‹</span>
              </a>
            ))}
          </nav>

          <div className="pt-4 border-t border-slate-800 space-y-3 pb-8">
            <a
              href={`tel:${COMPANY_PHONE}`}
              onClick={() => setIsOpen(false)}
              className="flex items-center justify-center gap-2.5 w-full bg-amber-500 active:bg-amber-600 text-slate-950 font-black py-3.5 rounded-xl text-center text-base shadow-lg"
            >
              <Phone className="w-5 h-5 fill-slate-950" aria-hidden="true" />
              <span>اتصل بنا: </span>
              <span dir="ltr">{COMPANY_PHONE}</span>
            </a>
            <a
              href={COMPANY_WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setIsOpen(false)}
              className="flex items-center justify-center gap-2.5 w-full bg-emerald-600 active:bg-emerald-700 text-white font-black py-3.5 rounded-xl text-center text-base shadow-lg"
            >
              <span>محادثة واتساب سريعة</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
