import React from 'react';
import { useLocation } from 'react-router-dom';

export default function Placeholder() {
  const location = useLocation();
  const pathName = location.pathname.substring(1).replace(/-/g, ' ');

  return (
    <section className="bg-bg py-32 px-4 md:px-8 relative overflow-hidden min-h-[60vh] flex items-center justify-center">
        <div className="text-center z-10 relative">
          <h1 className="font-serif text-[40px] md:text-[80px] leading-[1] m-0 tracking-[-2px] text-ink capitalize">
            {pathName} <span className="italic text-[#E31B23] block">Coming Soon.</span>
          </h1>
          <p className="mt-8 text-ink/80 text-sm font-sans uppercase tracking-[2px]">
            We are working on this page.
          </p>
        </div>
    </section>
  );
}
