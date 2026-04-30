import React, { useState, useEffect } from 'react';
import { Star } from 'lucide-react';

const HERO_IMAGES = [
  "https://res.cloudinary.com/dyp8op8ov/image/upload/v1777452974/1_p6q4kx.jpg",
  "https://res.cloudinary.com/dyp8op8ov/image/upload/v1777452975/2_by66up.jpg",
  "https://res.cloudinary.com/dyp8op8ov/image/upload/v1777452976/3_lpgxhi.jpg"
];

const SERVICES = [
  { id: 1, title: 'Visit Visa', image: 'https://res.cloudinary.com/dyp8op8ov/image/upload/v1777386923/study-visa_hmwq0u.jpg' },
  { id: 2, title: 'Super Visa', image: 'https://res.cloudinary.com/dyp8op8ov/image/upload/v1777386959/super-visa_kjbz7m.jpg' },
  { id: 3, title: 'Study Permit', image: 'https://res.cloudinary.com/dyp8op8ov/image/upload/v1777386994/Study-Permit_acayke.jpg' },
  { id: 4, title: 'Skilled Worker Immigration', image: 'https://res.cloudinary.com/dyp8op8ov/image/upload/v1777387135/Skilled-Worker-Immigration_lrtnpt.jpg' },
  { id: 5, title: 'Business Immigration', image: 'https://res.cloudinary.com/dyp8op8ov/image/upload/v1777387134/Business-Immigration_l99jlv.jpg' },
  { id: 6, title: 'Refugee Services', image: 'https://res.cloudinary.com/dyp8op8ov/image/upload/v1777387134/Refugee-Services_eoss8q.jpg' },
  { id: 7, title: 'Citizenship', image: 'https://res.cloudinary.com/dyp8op8ov/image/upload/v1777387134/Citizenship_kfas15.jpg' },
  { id: 8, title: 'Appeals', image: 'https://res.cloudinary.com/dyp8op8ov/image/upload/v1777387134/Appeals_xaddve.jpg' },
  { id: 9, title: 'Post Arrival Services', image: 'https://res.cloudinary.com/dyp8op8ov/image/upload/v1777387133/Post-Arrival-Services_yrqx5c.jpg' },
  { id: 10, title: 'Immigration Consultant', image: 'https://res.cloudinary.com/dyp8op8ov/image/upload/v1777387132/Immigration-Consultant_xv8k8t.jpg' },
  { id: 11, title: 'Immigration Service', image: 'https://res.cloudinary.com/dyp8op8ov/image/upload/v1777387134/Immigration-Service_k9ej4y.jpg' },
  { id: 12, title: 'Pilot Programs', image: 'https://res.cloudinary.com/dyp8op8ov/image/upload/v1777387133/Pilot-Programs_wc5lg9.jpg' },
  { id: 13, title: 'Paralegal', image: 'https://res.cloudinary.com/dyp8op8ov/image/upload/v1777387133/Paralegal_bd4mg1.jpg' },
];

const REVIEWS = [
  { id: 1, name: 'bala naik', date: '3 months ago', text: 'Anwarul Karim is an excellent immigration lawyer with exceptional expertise in handling immigration applications. He is very...', rating: 5, avatar: 'B' },
  { id: 2, name: 'James S. Adhikary', date: '3 months ago', text: 'Excellent service and highly recommended.', rating: 5, avatar: 'J' },
  { id: 3, name: 'Ron Smith', date: '3 months ago', text: 'Explore immigration these guys are really excellent with their work they get everything done for and time no hassle no...', rating: 5, avatar: 'R' },
];

export default function Home() {
  const [currentHeroImage, setCurrentHeroImage] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentHeroImage((prev) => (prev + 1) % HERO_IMAGES.length);
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  return (
    <>
      {/* Welcome Section */}
      <section className="bg-bg py-24 px-4 md:px-8 relative overflow-hidden">
        <div className="absolute font-serif text-[150px] md:text-[300px] text-big-number font-black z-0 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 select-none pointer-events-none leading-none">01</div>
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-10 relative z-10">
          <div className="w-full md:w-1/2 flex flex-col justify-center text-center md:text-left">
            <h1 className="font-serif text-[40px] md:text-[64px] leading-[0.9] m-0 tracking-[-2px] text-ink">
              Welcome <span className="italic text-[#E31B23] block pl-6 md:pl-16">to Explore Immigration.</span>
            </h1>
            <h2 className="text-[10px] uppercase tracking-[4px] font-semibold text-accent mt-8 mb-4">Your One Stop Immigration Solution</h2>
            <p className="mt-4 text-ink/80 leading-[1.6] text-sm sm:text-base max-w-md">
              Explore Immigration is a professionally managed immigration consulting firm based in Canada. With a distinguished success record in immigration domain, we help professionals & students across the world gain a hassle-free immigration experience to transform dreams into reality.
            </p>
            <div className="mt-8 flex justify-center md:justify-start">
              <button className="w-24 h-24 sm:w-32 sm:h-32 rounded-full border border-ink flex items-center justify-center text-[9px] sm:text-[10px] uppercase tracking-[2px] font-bold transition-colors cursor-pointer bg-transparent text-ink hover:bg-[#E31B23] hover:border-[#E31B23] hover:text-white">
                Let's Talk
              </button>
            </div>
          </div>
          <div className="w-full md:w-1/2 relative">
            <div className="vertical-text absolute -left-8 md:-left-12 bottom-0 writing-vertical transform rotate-180 text-[10px] uppercase tracking-[4px] text-accent hidden md:block">
              Architectural Approach to Immigration
            </div>
            <div className="relative w-full">
              {HERO_IMAGES.map((img, index) => (
                <img 
                  key={index}
                  src={img} 
                  alt={`Hero image ${index + 1}`} 
                  className={`w-full object-cover hover:grayscale-0 transition-opacity duration-1000 ${
                    index === 0 ? 'relative h-auto' : 'absolute inset-0 h-full'
                  } ${
                    index === currentHeroImage ? 'opacity-100 z-10' : 'opacity-0 z-0'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="bg-bg py-24 relative overflow-hidden border-t border-ink/10">
          <div className="absolute font-serif text-[150px] md:text-[300px] text-big-number font-black z-0 top-0 right-0 select-none pointer-events-none leading-none -mt-10 mr-10">02</div>
        <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10">
          <div className="flex justify-between items-end mb-16">
            <h2 className="font-serif text-[40px] md:text-[60px] tracking-[-2px] text-ink leading-none">
              Our Services.
            </h2>
            <span className="text-[10px] uppercase tracking-[2px] font-bold text-accent hidden sm:block">Explore All</span>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {SERVICES.map((service) => (
              <div key={service.id} className="bg-transparent flex flex-col group cursor-pointer">
                <div className="relative overflow-hidden mb-4 aspect-square">
                  <img 
                    src={service.image} 
                    alt={service.title} 
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 scale-100 group-hover:scale-105"
                  />
                </div>
                <div className="flex flex-col items-start px-2">
                  <h3 className="font-serif font-bold text-xl tracking-tight text-ink mb-3">{service.title}</h3>
                  <div className="bg-accent-light rounded-full py-2 px-5 text-[10px] font-semibold uppercase tracking-[1px] text-ink hover:bg-[#E31B23] hover:text-white transition-colors">
                    Details
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Commissioner Section */}
      <section className="bg-bg py-24 border-t border-ink/10 relative overflow-hidden">
        <div className="absolute font-serif text-[150px] md:text-[300px] text-big-number font-black z-0 top-1/2 left-0 -translate-y-1/2 select-none pointer-events-none leading-none -ml-10">03</div>
        <div className="max-w-6xl mx-auto px-4 md:px-8 relative z-10 grid grid-cols-1 md:grid-cols-[1fr_2fr] gap-12 items-center">
            <div className="md:pr-8">
              <h2 className="font-serif text-[30px] md:text-[50px] text-ink tracking-tight mb-6 leading-[1.1]">
                Commissioner<br/><span className="text-[#E31B23] italic">for Oaths</span>
              </h2>
              <p className="text-[10px] uppercase tracking-[2px] font-semibold text-accent max-w-xs">
                Service in Alberta and Saskatchewan.
              </p>
            </div>
            <div className="w-full bg-accent-light p-6">
              <img 
                src="https://res.cloudinary.com/dyp8op8ov/image/upload/v1777461197/explore-1024x558_bdj7jj.jpg" 
                alt="Commissioner Service" 
                className="w-full max-h-[400px] object-cover hover:grayscale-0 transition-all duration-700"
              />
            </div>
        </div>
      </section>

      {/* Reviews Section */}
      <section className="bg-bg py-24 border-y border-ink/10 overflow-hidden relative">
        <div className="absolute font-serif text-[150px] md:text-[300px] text-big-number font-black z-0 bottom-0 right-0 select-none pointer-events-none leading-none translate-y-1/4">04</div>
        <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10">
          <h2 className="font-serif text-[40px] md:text-[60px] tracking-[-2px] text-ink mb-16 leading-none">
            Client <span className="italic text-[#E31B23]">Stories.</span>
          </h2>
          
          <div className="flex flex-col lg:flex-row items-stretch gap-6">
            
            {/* Overall Rating Block */}
            <div className="bg-accent-light p-10 w-full lg:w-1/3 flex flex-col items-start justify-center">
                <h3 className="font-serif text-2xl tracking-tight text-ink">Explore Immigration</h3>
                <div className="flex items-center mt-4 space-x-4">
                  <span className="text-6xl font-serif text-ink tracking-tighter">5.0</span>
                </div>
                <div className="flex text-ink mt-2">
                  <Star className="w-5 h-5 fill-current" />
                  <Star className="w-5 h-5 fill-current" />
                  <Star className="w-5 h-5 fill-current" />
                  <Star className="w-5 h-5 fill-current" />
                  <Star className="w-5 h-5 fill-current" />
                </div>
                <p className="text-xs text-ink/60 mt-4 uppercase tracking-widest">Based on 48 reviews</p>
            </div>

            {/* Review Carousel */}
            <div className="w-full lg:w-2/3 flex items-center relative gap-4">
                <div className="flex gap-6 w-full overflow-x-auto snap-x hide-scroll-bar pb-6">
                  {REVIEWS.map((review) => (
                    <div key={review.id} className="bg-white p-8 min-w-[300px] sm:min-w-[360px] flex-shrink-0 snap-center flex flex-col justify-between group hover:bg-[#E31B23] transition-colors duration-500">
                        <div>
                          <div className="flex justify-between items-start mb-6">
                            <div className="flex items-center space-x-4">
                              <span className="font-sans font-medium text-sm text-ink group-hover:text-bg transition-colors">{review.name}</span>
                            </div>
                            <span className="text-[10px] uppercase tracking-[1px] text-accent group-hover:text-bg/60 transition-colors">{review.date}</span>
                          </div>
                          <p className="text-sm text-ink/80 leading-relaxed font-serif italic mb-8 group-hover:text-bg/80 transition-colors">"{review.text}"</p>
                        </div>
                        <div className="flex text-ink group-hover:text-bg transition-colors mt-auto">
                          {[...Array(review.rating)].map((_, i) => (
                            <Star key={i} className="w-4 h-4 fill-current mr-1" />
                          ))}
                        </div>
                    </div>
                  ))}
                </div>
            </div>
          </div>
        </div>
        {/* Simple injected CSS for hiding scrollbar of carousel */}
        <style>{`
          .hide-scroll-bar::-webkit-scrollbar { display: none; }
          .hide-scroll-bar { -ms-overflow-style: none; scrollbar-width: none; }
        `}</style>
      </section>
    </>
  );
}
