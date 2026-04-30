import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Facebook, Linkedin, MessageCircle, X, ChevronRight } from 'lucide-react';
import { Outlet } from 'react-router-dom';

export default function Layout() {
  const [showChatTooltip, setShowChatTooltip] = useState(true);
  const location = useLocation();

  return (
    <div className="font-sans text-ink bg-bg min-h-screen">
      {/* Header */}
      <header className="w-full flex-col">
        {/* Top Bar */}
        <div className="bg-bg border-b border-ink/10 text-accent font-medium py-1.5 px-4 md:px-8 text-xs sm:text-sm flex flex-col sm:flex-row justify-between items-center">
          <div className="flex items-center tracking-widest text-[10px] uppercase">
            <span>Call Us +1(587)830 5061 - info@exploreimmigration.ca</span>
          </div>
          <div className="flex items-center space-x-3 mt-2 sm:mt-0 text-accent">
            <a href="#" className="hover:text-ink transition-colors"><Facebook className="w-4 h-4 fill-current"/></a>
            <a href="#" className="hover:text-ink transition-colors"><Linkedin className="w-4 h-4 fill-current"/></a>
          </div>
        </div>

        {/* Main Nav */}
        <div className="bg-bg sticky top-0 z-50 border-b border-ink/10">
          <div className="max-w-7xl mx-auto px-4 md:px-8 py-3 flex flex-col lg:flex-row justify-between items-center">
            {/* Logo area */}
            <div className="flex items-center mb-4 lg:mb-0 cursor-pointer">
              <Link to="/">
                <img src="https://res.cloudinary.com/dyp8op8ov/image/upload/v1777382352/explore-immigration-logo_ylfk6g.png" alt="Explore Immigration Logo" className="h-14 w-auto object-contain" />
              </Link>
            </div>
            {/* Navigation Links */}
            <nav className="flex flex-wrap justify-center items-center gap-4 lg:gap-6 text-[10px] uppercase tracking-[2px] font-semibold text-ink">
              <Link to="/" className={`${location.pathname === '/' ? 'text-[#E31B23]' : 'text-ink'} hover:text-[#E31B23] transition pb-2 sm:pb-0`}>EXPLORE IMMIGRATION</Link>
              <Link to="/about-us" className={`${location.pathname === '/about-us' ? 'text-[#E31B23]' : 'text-ink'} hover:text-[#E31B23] transition pb-2 sm:pb-0`}>ABOUT</Link>
              
              <div className="relative group/nav flex items-center h-full pb-2 sm:pb-0 cursor-pointer">
                <Link to="/services" className={`${location.pathname.startsWith('/services') ? 'text-[#E31B23]' : 'text-ink'} hover:text-[#E31B23] transition`}>SERVICES</Link>
                <div className="absolute left-0 top-[100%] pt-2 w-64 opacity-0 invisible group-hover/nav:opacity-100 group-hover/nav:visible transition-all duration-300 z-50">
                  <div className="bg-[#242424] text-[#d4d4d4] flex flex-col shadow-2xl">
                    {[
                      { 
                        name: 'Visit Visa', 
                        path: '/services/visit-visa', 
                        dropdown: true,
                        subItems: [
                          { name: 'Tourist Visa', path: '/services/visit-visa/tourist-visa' },
                          { name: 'Business Visa', path: '/services/visit-visa/business-visa' },
                          { name: 'Super Visa', path: '/services/visit-visa/super-visa' },
                          { name: 'Extensions', path: '/services/visit-visa/extensions' },
                        ]
                      },
                      { name: 'Study Permit', path: '/services/study-permit', dropdown: false },
                      { 
                        name: 'Skilled Worker Immigration', 
                        path: '/services/skilled-worker-immigration', 
                        dropdown: true,
                        subItems: [
                          { name: 'Federal Skilled Worker Program', path: '/services/skilled-worker-immigration/federal-skilled-worker' },
                          { name: 'Federal Skilled Trades Program', path: '/services/skilled-worker-immigration/federal-skilled-trades' },
                          { name: 'Canadian Experience Class', path: '/services/skilled-worker-immigration/canadian-experience-class' },
                          { name: 'Saskatchewan Occupation In Demand', path: '/services/skilled-worker-immigration/saskatchewan-occupation-in-demand' }
                        ]
                      },
                      { 
                        name: 'Business Immigration', 
                        path: '/services/business-immigration', 
                        dropdown: true,
                        subItems: [
                          { name: 'Owner and Operator Saskatchewan PNP', path: '/services/business-immigration/owner-operator-saskatchewan-pnp' },
                          { name: 'Entrepreneur Application SINP', path: '/services/business-immigration/entrepreneur-application-sinp' }
                        ]
                      },
                      { 
                        name: 'Refugee Services', 
                        path: '/services/refugee-services', 
                        dropdown: true,
                        subItems: [
                          { name: 'In-Canada Asylum', path: '/services/refugee-services/in-canada-asylum' },
                          { name: 'Privately Sponsored Refugees', path: '/services/refugee-services/privately-sponsored-refugees' }
                        ]
                      },
                      { name: 'Citizenship', path: '/services/citizenship', dropdown: false },
                      { name: 'Appeals', path: '/services/appeals', dropdown: false },
                      { name: 'Post Arrival Services', path: '/services/post-arrival-services', dropdown: false },
                      { name: 'Immigration Consultant', path: '/services/immigration-consultant', dropdown: false },
                      { name: 'Immigration service', path: '/services/immigration-service', dropdown: false },
                      { name: 'Pilot Program', path: '/services/pilot-program', dropdown: false },
                      { name: 'Paralegal', path: '/services/paralegal', dropdown: false },
                    ].map((item, idx) => (
                      <div key={idx} className="relative group/subnav">
                        <Link 
                          to={item.path} 
                          className="py-3.5 px-5 border-b border-white/5 hover:bg-white/10 hover:text-white transition-colors flex justify-between items-center group/item"
                        >
                          <span className="text-[13px] font-normal normal-case tracking-normal">{item.name}</span>
                          {item.dropdown && <ChevronRight className="w-4 h-4 text-white/50 group-hover/item:text-white" />}
                        </Link>
                        {item.subItems && (
                          <div className="absolute left-full top-0 w-64 opacity-0 invisible group-hover/subnav:opacity-100 group-hover/subnav:visible transition-all duration-300">
                            <div className="bg-[#242424] text-[#d4d4d4] flex flex-col shadow-2xl border-l border-white/5">
                              {item.subItems.map((sub, sIdx) => (
                                <Link 
                                  key={sIdx} 
                                  to={sub.path} 
                                  className="py-3.5 px-5 border-b border-white/5 hover:bg-white/10 hover:text-white transition-colors flex justify-between items-center"
                                >
                                  <span className="text-[13px] font-normal normal-case tracking-normal">{sub.name}</span>
                                </Link>
                              ))}
                            </div>
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <Link to="/assessment" className={`${location.pathname === '/assessment' ? 'text-[#E31B23]' : 'text-ink'} hover:text-[#E31B23] transition pb-2 sm:pb-0`}>ASSESSMENT</Link>
              <div className="relative group/nav flex items-center h-full pb-2 sm:pb-0 cursor-pointer">
                <Link to="/services/citizenship-by-investment/canada" className={`${location.pathname.startsWith('/services/citizenship-by-investment') ? 'text-[#E31B23]' : 'text-ink'} hover:text-[#E31B23] transition pb-2 sm:pb-0`}>CITIZENSHIP BY INVESTMENT</Link>
                <div className="absolute left-0 top-[100%] pt-2 w-64 opacity-0 invisible group-hover/nav:opacity-100 group-hover/nav:visible transition-all duration-300 z-50">
                  <div className="bg-[#242424] text-[#d4d4d4] flex flex-col shadow-2xl">
                    <Link to="/services/citizenship-by-investment/canada" className="py-3.5 px-5 border-b border-white/5 hover:bg-white/10 hover:text-white transition-colors flex justify-between items-center"><span className="text-[13px] font-normal normal-case tracking-normal">Canada</span></Link>
                    <Link to="/services/citizenship-by-investment/usa" className="py-3.5 px-5 border-b border-white/5 hover:bg-white/10 hover:text-white transition-colors flex justify-between items-center"><span className="text-[13px] font-normal normal-case tracking-normal">USA</span></Link>
                    <Link to="/services/citizenship-by-investment/antigua-and-barbuda" className="py-3.5 px-5 border-b border-white/5 hover:bg-white/10 hover:text-white transition-colors flex justify-between items-center"><span className="text-[13px] font-normal normal-case tracking-normal">Antigua & Barbuda</span></Link>
                  </div>
                </div>
              </div>
              <Link to="/consultation" className={`${location.pathname === '/consultation' ? 'text-[#E31B23]' : 'text-ink'} hover:text-[#E31B23] transition pb-2 sm:pb-0`}>CONSULTATION</Link>
              <Link to="/contact" className={`${location.pathname === '/contact' ? 'text-[#E31B23]' : 'text-ink'} hover:text-[#E31B23] transition pb-2 sm:pb-0`}>CONTACT</Link>
            </nav>
          </div>
        </div>
      </header>

      <main>
        <Outlet />
      </main>

      {/* Footer */}
      <footer className="bg-bg text-ink border-t border-ink/20">
        <div className="max-w-7xl mx-auto px-4 py-20">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 lg:gap-16">
            
            {/* Office Hours */}
            <div className="flex flex-col">
               <h3 className="font-bold text-[10px] tracking-[2px] uppercase mb-8 text-ink border-b border-ink/20 pb-4 inline-block max-w-[200px]">Office Hours</h3>
               <div className="font-serif text-sm space-y-4 text-ink/80 italic">
                  <div className="flex flex-col sm:flex-row sm:items-baseline">
                    <span className="w-32 shrink-0 font-sans not-italic text-[10px] uppercase tracking-[1px] font-bold">Mon - Fri</span> 
                    <span>9am — 6pm</span>
                  </div>
                  <div className="flex flex-col sm:flex-row sm:items-baseline">
                    <span className="w-32 shrink-0 font-sans not-italic text-[10px] uppercase tracking-[1px] font-bold">Saturday</span> 
                    <span>10am — 4pm</span>
                  </div>
                  <div className="flex flex-col sm:flex-row sm:items-baseline">
                    <span className="w-32 shrink-0 font-sans not-italic text-[10px] uppercase tracking-[1px] font-bold">Sunday</span> 
                    <span>Closed</span>
                  </div>
               </div>
            </div>
            
            {/* Contact Form */}
            <div className="flex flex-col">
               <form className="flex flex-col space-y-4 w-full" onSubmit={e => e.preventDefault()}>
                  <input type="text" placeholder="Name" className="px-0 py-3 bg-transparent border-b border-ink/20 text-sm outline-none focus:border-ink transition-colors placeholder:text-accent font-serif italic" />
                  <input type="email" placeholder="Email" className="px-0 py-3 bg-transparent border-b border-ink/20 text-sm outline-none focus:border-ink transition-colors placeholder:text-accent font-serif italic" />
                  <textarea placeholder="Message" rows={3} className="px-0 py-3 bg-transparent border-b border-ink/20 text-sm resize-none outline-none focus:border-ink transition-colors placeholder:text-accent font-serif italic"></textarea>
                  <button type="submit" className="bg-accent-light hover:bg-ink text-ink hover:text-bg py-4 px-8 text-[10px] uppercase tracking-[2px] font-bold transition-colors w-max mt-4 rounded-full">Send Inquiry</button>
               </form>
            </div>

            {/* Map Area */}
            <div className="h-64 md:h-full relative w-full p-2 bg-accent-light">
               <iframe 
                 src="https://maps.google.com/maps?q=Calgary&t=&z=11&ie=UTF8&iwloc=&output=embed" 
                 width="100%" 
                 height="100%" 
                 frameBorder="0" 
                 style={{border:0, filter: 'grayscale(100%) contrast(1.2)'}} 
                 allowFullScreen 
                 aria-hidden="false" 
                 tabIndex={0}>
               </iframe>
            </div>
          </div>
        </div>

        {/* Bottom copyright bar */}
        <div className="border-t border-ink/10 bg-bg">
          <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center text-[10px] uppercase tracking-[1px] text-accent py-6 px-4 font-semibold">
             <p>© 2024 Explore Immigration.</p>
             <div className="flex space-x-6 mt-4 md:mt-0">
                <a href="#" className="hover:text-ink transition-colors"><Facebook className="w-4 h-4 fill-current"/></a>
                <a href="#" className="hover:text-ink transition-colors"><Linkedin className="w-4 h-4 fill-current"/></a>
             </div>
          </div>
        </div>
      </footer>

      {/* Floating Chat Button */}
      <div className="fixed bottom-8 right-8 z-50 flex flex-col items-end">
         {showChatTooltip && (
           <div className="bg-ink px-5 py-3 rounded-none text-xs text-bg mb-4 relative flex items-center gap-3 animate-in fade-in slide-in-from-bottom-4 duration-300 font-serif italic">
              <span>Looking to connect?</span>
              <button 
                onClick={() => setShowChatTooltip(false)} 
                className="text-bg/60 hover:text-bg ml-2 transition"
              >
                 <X className="w-4 h-4" />
              </button>
              <div className="absolute -bottom-2 right-6 w-4 h-4 bg-ink transform rotate-45"></div>
           </div>
         )}
         <button className="w-16 h-16 rounded-full bg-accent-light border border-ink/20 text-ink shadow-lg hover:bg-ink hover:text-bg hover:scale-105 transition-all flex items-center justify-center focus:outline-none focus:ring-4 focus:ring-ink/10">
            <MessageCircle className="w-6 h-6 fill-current" />
         </button>
      </div>
    </div>
  );
}
