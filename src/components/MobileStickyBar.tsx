import { Phone, MessageCircle } from 'lucide-react';
import { COMPANY_PHONE, COMPANY_WHATSAPP_LINK } from '../data/content';

export function MobileStickyBar() {
  return (
    <aside
      role="region"
      aria-label="أزرار التواصل السريع للجوال"
      className="fixed bottom-0 inset-x-0 z-40 lg:hidden bg-slate-950/95 backdrop-blur-md border-t border-slate-800 shadow-2xl pt-2 px-3 pb-[max(0.75rem,env(safe-area-inset-bottom,0.75rem))] pr-[max(0.75rem,env(safe-area-inset-right,0.75rem))] pl-[max(0.75rem,env(safe-area-inset-left,0.75rem))] transition-all"
    >
      <div className="max-w-md mx-auto grid grid-cols-2 gap-2.5">
        
        {/* WhatsApp Button (Green) - Minimum 44px height for touch guidelines */}
        <a
          id="mobile-sticky-whatsapp"
          href={COMPANY_WHATSAPP_LINK}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-2 bg-[#22C55E] active:bg-[#16A34A] text-white font-black text-sm sm:text-base min-h-[48px] px-3 rounded-xl shadow-md transition-transform active:scale-95 select-none"
          aria-label="تواصل فوري عبر تطبيق واتساب"
        >
          <MessageCircle className="w-5 h-5 fill-white shrink-0" aria-hidden="true" />
          <span>واتساب</span>
        </a>

        {/* Call Button (Amber/Gold) - Minimum 44px height for touch guidelines */}
        <a
          id="mobile-sticky-call"
          href={`tel:${COMPANY_PHONE}`}
          className="flex items-center justify-center gap-2 bg-amber-500 active:bg-amber-600 text-slate-950 font-black text-sm sm:text-base min-h-[48px] px-3 rounded-xl shadow-md transition-transform active:scale-95 select-none"
          aria-label={`اتصال هاتفي مباشر على الرقم ${COMPANY_PHONE}`}
        >
          <Phone className="w-5 h-5 fill-slate-950 shrink-0" aria-hidden="true" />
          <span>اتصال</span>
        </a>

      </div>
    </aside>
  );
}
