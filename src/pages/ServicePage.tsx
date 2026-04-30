import React from 'react';
import { useLocation, Link } from 'react-router-dom';
import Markdown from 'react-markdown';
import { CheckCircle2, XCircle } from 'lucide-react';
import { servicesData } from '../data/servicesData';

export default function ServicePage() {
  const location = useLocation();
  // e.g. /services/visit-visa/tourist-visa -> visit-visa/tourist-visa
  const pathKey = location.pathname.replace('/services/', '');
  const service = servicesData[pathKey as keyof typeof servicesData];

  if (!service) {
    return (
      <section className="bg-bg py-32 px-4 md:px-8 relative overflow-hidden min-h-[60vh] flex items-center justify-center">
        <div className="text-center z-10 relative">
          <h1 className="font-serif text-[40px] md:text-[80px] leading-[1] m-0 tracking-[-2px] text-ink capitalize">
            {pathKey.replace(/-/g, ' ')} <span className="italic text-[#E31B23] block">Coming Soon.</span>
          </h1>
          <p className="mt-8 text-ink/80 text-sm font-sans uppercase tracking-[2px]">
            We are working on this page.
          </p>
        </div>
      </section>
    );
  }

  return (
    <>
      <section className="bg-bg py-24 px-4 md:px-8 relative overflow-hidden border-b border-ink/10">
        <div className="absolute font-serif text-[100px] md:text-[200px] text-big-number font-black z-0 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 select-none pointer-events-none leading-none w-max max-w-full text-center opacity-10 uppercase">
          {service.title}
        </div>
        <div className="max-w-7xl mx-auto flex flex-col items-center justify-center z-10 relative text-center">
          <h1 className="font-serif text-[40px] md:text-[64px] leading-[1] m-0 tracking-[-2px] text-ink capitalize">
            {service.title}
          </h1>
          <div className="w-24 h-1 bg-[#E31B23] mt-8"></div>
        </div>
      </section>

      <section className="bg-bg py-16 px-4 md:px-8">
        <div className="max-w-4xl mx-auto prose prose-sm md:prose-base prose-headings:font-serif prose-headings:font-bold prose-headings:text-ink prose-p:text-ink/80 prose-li:text-ink/80 prose-a:text-[#E31B23] prose-strong:text-ink markdown-body font-sans">
          <Markdown
            components={{
              table: ({node, ...props}) => <div className="overflow-x-auto w-full"><table className="w-full text-left border-collapse" {...props} /></div>,
              th: ({node, ...props}) => <th className="p-4 font-bold text-ink border-b border-ink/10 whitespace-nowrap align-top text-sm uppercase tracking-wider" {...props} />,
              td: ({node, ...props}) => <td className="p-4 border-b border-ink/10 align-top text-sm" {...props} />,
              li: ({ node, children, ...props }) => {
                let isCheck = false;
                let isCross = false;
                
                const newChildren = React.Children.map(children, child => {
                  if (typeof child === 'string') {
                    if (child.startsWith('✅')) {
                      isCheck = true;
                      return child.replace('✅', '').trimStart();
                    } else if (child.startsWith('❌')) {
                      isCross = true;
                      return child.replace('❌', '').trimStart();
                    }
                  }
                  return child;
                });

                if (isCheck) {
                  return (
                    <li className="flex items-start gap-3 my-2 !pl-0" style={{ listStyleType: 'none' }} {...props}>
                      <CheckCircle2 className="w-5 h-5 text-[#E31B23] shrink-0 mt-0.5" />
                      <span className="flex-1">{newChildren}</span>
                    </li>
                  )
                } else if (isCross) {
                   return (
                    <li className="flex items-start gap-3 my-2 !pl-0" style={{ listStyleType: 'none' }} {...props}>
                      <XCircle className="w-5 h-5 text-[#E31B23] shrink-0 mt-0.5" />
                      <span className="flex-1">{newChildren}</span>
                    </li>
                  )
                }

                return <li {...props}>{children}</li>;
              }
            }}
          >
            {service.markdown}
          </Markdown>
          
          <div className="mt-12 text-center md:text-left border-t border-ink/10 pt-8">
            <Link to="/contact" className="inline-block bg-[#E31B23] hover:bg-ink text-white py-4 px-8 text-[10px] uppercase tracking-[2px] font-bold transition-colors rounded-full">
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
