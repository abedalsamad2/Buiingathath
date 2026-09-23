/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { HowItWorks } from './components/HowItWorks';
import { WhatWeBuy } from './components/WhatWeBuy';
import { ServiceAreas } from './components/ServiceAreas';
import { WhyUs } from './components/WhyUs';
import { FaqSection } from './components/FaqSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { MobileStickyBar } from './components/MobileStickyBar';

export default function App() {
  return (
    <div className="min-h-screen flex flex-col bg-[#F8FAFC] text-slate-900 font-['Cairo',sans-serif]">
      {/* Header & Navigation */}
      <Navbar />

      {/* Main Content Sections */}
      <main className="flex-grow">
        <Hero />
        <HowItWorks />
        <WhatWeBuy />
        <ServiceAreas />
        <WhyUs />
        <FaqSection />
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer />

      {/* Mobile Sticky Quick Action Bar (Call & WhatsApp) */}
      <MobileStickyBar />
    </div>
  );
}
