import { FAQS } from '../data/content';
import { HelpCircle, ChevronDown } from 'lucide-react';
import { useState } from 'react';

export function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-16 sm:py-24 bg-white border-b border-slate-200">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-12">
          <span className="text-xs font-bold uppercase tracking-wider text-amber-600 bg-amber-100/80 px-3 py-1 rounded-full">
            إجابات واضحة
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mt-3 mb-3">
            الأسئلة الشائعة
          </h2>
          <p className="text-slate-600 text-base sm:text-lg">
            كل ما تحتاج لمعرفته حول طريقة تثمين الأثاث والمكيفات وشروط البيع والنقل بالرياض.
          </p>
        </div>

        {/* FAQ Accordion */}
        <div className="space-y-3.5">
          {FAQS.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className="border border-slate-200 rounded-2xl overflow-hidden transition-all bg-white hover:border-amber-300"
              >
                <button
                  type="button"
                  onClick={() => toggleFaq(idx)}
                  className="w-full text-right p-4 sm:p-6 flex items-center justify-between gap-4 font-bold text-sm sm:text-lg text-slate-900 focus:outline-none min-h-[52px]"
                  aria-expanded={isOpen}
                  aria-controls={`faq-answer-${idx}`}
                >
                  <div className="flex items-center gap-3 min-w-0">
                    <HelpCircle className="w-5 h-5 text-amber-500 shrink-0" aria-hidden="true" />
                    <span className="leading-snug">{faq.question}</span>
                  </div>
                  <ChevronDown
                    className={`w-5 h-5 text-slate-400 transition-transform duration-300 shrink-0 ${
                      isOpen ? 'rotate-180 text-amber-600' : ''
                    }`}
                    aria-hidden="true"
                  />
                </button>
                {isOpen && (
                  <div 
                    id={`faq-answer-${idx}`}
                    role="region"
                    className="px-4 pb-5 sm:px-6 sm:pb-6 text-slate-600 text-xs sm:text-base leading-relaxed border-t border-slate-100 pt-3"
                  >
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
