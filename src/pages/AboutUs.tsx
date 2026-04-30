import React from 'react';

export default function AboutUs() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-bg py-24 px-4 md:px-8 relative overflow-hidden">
          <div className="absolute font-serif text-[150px] md:text-[300px] text-big-number font-black z-0 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 select-none pointer-events-none leading-none">ABOUT</div>
          <div className="max-w-7xl mx-auto relative z-10">
            <div className="w-full relative h-[400px]">
              <img 
                src="https://res.cloudinary.com/dyp8op8ov/image/upload/v1777459888/istockphoto-626545182-612x612_ynieuz.jpg"
                alt="Canadian Landscape for Explore Immigrations" 
                className="w-full h-full object-cover hover:grayscale-0 transition duration-700"
              />
            </div>
          </div>
      </section>

      {/* About Us Description */}
      <section className="bg-bg py-16 px-4 md:px-8 border-t border-ink/10 relative overflow-hidden">
          <div className="absolute font-serif text-[150px] md:text-[300px] text-big-number font-black z-0 top-0 left-0 -translate-y-1/4 select-none pointer-events-none leading-none -ml-10">01</div>
          <div className="max-w-6xl mx-auto relative z-10 grid grid-cols-1 md:grid-cols-[1fr_2fr] gap-12">
            <div>
                <h2 className="font-serif text-[30px] md:text-[50px] text-ink tracking-tight mb-6 leading-[1.1]">
                  About <span className="text-[#E31B23] italic">Us</span>
                </h2>
                <div className="bg-white p-6 border border-ink/10 relative mt-8 flex justify-center items-center h-64 hover:grayscale-0 transition duration-700">
                  <img src="https://res.cloudinary.com/dyp8op8ov/image/upload/v1777382352/explore-immigration-logo_ylfk6g.png" alt="Explore Immigration Logo" className="w-48 h-auto object-contain" />
                </div>
            </div>
            <div className="text-sm font-sans leading-relaxed text-ink/80 space-y-6 pt-4 md:pt-16">
              <p>
                <strong className="text-ink">DESCRIPTION:</strong> Explore Immigration is one of the leading Immigration and Education Consultancy Services in Canada. At Explore Immigration, we ensure aspiring travelers get to their destination in the least possible hassle. We provide top-notch services to our clients, which ensures a successful outcome.
              </p>
              <p>
                At Explore Immigration, we strive hard to serve the best interest of our clients. We are one of the best companies in the fields of Canadian Immigration and Student Counseling. We possess the services of most experienced and well-trained staff.
              </p>
              <p>
                Our Immigration and Student Counseling expertise will transform your dreams into realities. Our experienced counselors will provide you with proper direction and guidance by ensuring up-to-date knowledge of the ever-changing and most pressing immigration policies. You can rely on our expertise to expedite your migration cases. Our knowledge and accuracy will help to prevent mistakes and waste of valuable time. Our experience, hard work and quest to attain excellence are our competitive advantage. We are committed to providing our customers with state of the art services at the most competitive rates. Unlike our competitors, we are dedicatedly available for you for personalized service 24/7; which will keep you comfortable and make you feel honored and privileged.
              </p>
              <p>
                On the technical side, we are confident that we are the best in the business. We strive hard to keep ourselves abreast of all legal changes and new avenues which can benefit our clients. Therefore our clients can leave all their worries to us with full confidence. We don't leave our clients alone from the beginning to the end and even after the successful completion of the case; we provide full support and post-application services to help get the client settled in Canada.
              </p>
            </div>
          </div>
      </section>

      {/* Team Session */}
      <section className="bg-bg py-24 px-4 md:px-8 border-t border-ink/10 relative overflow-hidden">
          <div className="absolute font-serif text-[150px] md:text-[300px] text-big-number font-black z-0 top-0 right-0 select-none pointer-events-none leading-none -mt-10 mr-10">02</div>
          <div className="max-w-6xl mx-auto relative z-10 grid grid-cols-1 md:grid-cols-[1fr_2fr] gap-12">
              <div>
                  <h2 className="font-serif text-[30px] md:text-[50px] text-ink tracking-tight mb-6 leading-[1.1]">
                    Our <span className="text-[#E31B23] italic">Team</span>
                  </h2>
                  <div className="bg-accent-light p-2 mt-8">
                    <img 
                      src="https://res.cloudinary.com/dyp8op8ov/image/upload/v1777458156/Anwarul-Karim_eblegf.jpg"
                      alt="Anwarul Karim Explore Immigrations"
                      className="w-full h-auto object-cover hover:grayscale-0 transition duration-700"
                    />
                  </div>
              </div>
              <div className="pt-4 md:pt-24 font-sans text-ink/80 flex flex-col space-y-6">
                  <div>
                    <h3 className="text-3xl font-serif text-ink tracking-tight mb-1">Anwarul Karim, RCIC</h3>
                    <p className="text-[10px] uppercase tracking-[2px] font-bold text-accent">CEO & Lead Consultant</p>
                  </div>
                  
                  <ul className="space-y-4 text-sm leading-relaxed border-l-2 border-[#E31B23]/20 pl-6">
                    <li>Member College of Immigration and Citizenship Consultants (CICC) – R511978</li>
                    <li>Member Canadian Association of Professional Immigration Consultants (CAPIC) – R17115</li>
                    <li>Member Immigration Consultant and Recruiter in Saskatchewan (SINP) – 000904</li>
                  </ul>

                  <div className="flex flex-col sm:flex-row gap-6 mt-8">
                      <div className="border border-ink/10 bg-white p-4 flex items-center justify-center flex-1 h-24 hover:grayscale-0 transition duration-700 text-center font-bold text-ink">
                        <img 
                          src="https://res.cloudinary.com/dyp8op8ov/image/upload/v1777458477/rcic-_xom6sb.jpg" 
                          alt="RCIC Logo" 
                          className="w-full h-full object-contain" 
                        />
                      </div>
                      <div className="border border-ink/10 bg-white p-4 flex items-center justify-center flex-1 h-24 hover:grayscale-0 transition duration-700 text-center font-bold text-ink">
                        <img 
                          src="https://res.cloudinary.com/dyp8op8ov/image/upload/v1777458475/imgTeambannerCapic-600x133_plbjc0.jpg" 
                          alt="CAPIC Logo" 
                          className="w-full h-full object-contain" 
                        />
                      </div>
                  </div>

                  <div className="mt-8 pt-6 border-t border-ink/10 text-xs text-ink">
                    <p>Credentials verified by College of Immigration and Citizenship Consultants (CICC) – License #R511978</p>
                    <a href="https://college-ic.ca/protecting-the-public/find-an-immigration-consultant" target="_blank" rel="noopener noreferrer" className="text-[#E31B23] hover:underline font-bold mt-2 inline-block">Verify Now</a>
                  </div>
              </div>
          </div>
      </section>
    </>
  );
}
