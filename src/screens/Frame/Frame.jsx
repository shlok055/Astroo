import React, { useState } from "react";

export const Frame = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const services = [
    {
      title: "Natal Chart Reading",
      description:
        "Understand your life's blueprint and potential with a deep dive into your unique birth chart.",
    },
    {
      title: "Chart\nComparison",
      description:
        "Quickly check the dynamic between you and a partner, friend, or business associate.",
    },
    {
      title: "Book Your Consultation",
      description:
        "Schedule a private session to address your most urgent questions directly.",
    },
    {
      title: "Career Prediction",
      description:
        "Gain clarity on your profession path and financial timing to make strategic decisions.",
    },
  ];

  const zodiacSigns = [
    {
      name: "Aries",
      icon: "https://c.animaapp.com/F6QrhXVE/img/10-1@2x.png",
      image:
        "https://c.animaapp.com/F6QrhXVE/img/69130187-616d-4157-9dc9-1afcabc1b612-1@2x.png",
      iconAspect: "aspect-[1.24]",
      imageAspect: "aspect-[1.14]",
      top: "93px",
      left: "73px",
      width: "274px",
    },
    {
      name: "taurus",
      icon: "https://c.animaapp.com/F6QrhXVE/img/8-962@2x.png",
      image:
        "https://c.animaapp.com/F6QrhXVE/img/cf764ae5-aa17-4444-a6cb-c821d3f833de-1@2x.png",
      iconAspect: "aspect-[0.98]",
      imageAspect: "aspect-[1.32]",
      top: "93px",
      left: "388px",
      width: "252px",
    },
    {
      name: "gemini",
      icon: "https://c.animaapp.com/F6QrhXVE/img/7-1@2x.png",
      image:
        "https://c.animaapp.com/F6QrhXVE/img/7241d844-6fef-452a-bf05-5d3c5d2d6a9e-1@2x.png",
      iconAspect: "aspect-[0.8]",
      imageAspect: "aspect-[1.37]",
      top: "93px",
      left: "689px",
      width: "240px",
    },
    {
      name: "cancer",
      icon: "https://c.animaapp.com/F6QrhXVE/img/11-1@2x.png",
      image:
        "https://c.animaapp.com/F6QrhXVE/img/e3b8663a-b1be-48b0-8c22-cae83dc00b33-1@2x.png",
      iconAspect: "aspect-[1.17]",
      imageAspect: "aspect-[0.95]",
      top: "93px",
      left: "963px",
      width: "305px",
    },
    {
      name: "leo",
      icon: "https://c.animaapp.com/F6QrhXVE/img/3-1@2x.png",
      image:
        "https://c.animaapp.com/F6QrhXVE/img/0c6c5f1d-1a39-498d-970f-8d7ae07490a1-1@2x.png",
      iconAspect: "aspect-[0.64]",
      imageAspect: "aspect-[1.41]",
      top: "103px",
      left: "1272px",
      width: "280px",
    },
    {
      name: "virgo",
      icon: "https://c.animaapp.com/F6QrhXVE/img/6-1@2x.png",
      image:
        "https://c.animaapp.com/F6QrhXVE/img/fa6ba855-a51e-4f9c-8459-d59dc548fbc3-1@2x.png",
      iconAspect: "aspect-[1.43]",
      imageAspect: "aspect-[1.28]",
      top: "103px",
      left: "1573px",
      width: "262px",
    },
    {
      name: "libra",
      icon: "https://c.animaapp.com/F6QrhXVE/img/1-3@2x.png",
      image:
        "https://c.animaapp.com/F6QrhXVE/img/c1ca928d-a90c-4598-a2b2-b428a7952796-1@2x.png",
      iconAspect: "aspect-[1.77]",
      imageAspect: "aspect-[1.28]",
      top: "544px",
      left: "87px",
      width: "243px",
    },
    {
      name: "scorpio",
      icon: "https://c.animaapp.com/F6QrhXVE/img/4-1@2x.png",
      image:
        "https://c.animaapp.com/F6QrhXVE/img/8efb5d2e-b0e5-42ac-b873-fa853f14f4be-1@2x.png",
      iconAspect: "aspect-[1.33]",
      imageAspect: "aspect-[1.45]",
      top: "544px",
      left: "367px",
      width: "280px",
    },
    {
      name: "sagittarius",
      icon: "https://c.animaapp.com/F6QrhXVE/img/5-1@2x.png",
      image:
        "https://c.animaapp.com/F6QrhXVE/img/ceabc8da-fe8f-45f7-99b4-32a710da765d-1@2x.png",
      iconAspect: "aspect-[0.96]",
      imageAspect: "aspect-[1.1]",
      top: "544px",
      left: "692px",
      width: "240px",
    },
    {
      name: "capricorn",
      icon: "https://c.animaapp.com/F6QrhXVE/img/2-1@2x.png",
      image:
        "https://c.animaapp.com/F6QrhXVE/img/e8014808-0ad2-4140-b347-2643eee99450-1@2x.png",
      iconAspect: "aspect-[1.21]",
      imageAspect: "aspect-[1.67]",
      top: "544px",
      left: "969px",
      width: "288px",
    },
    {
      name: "aquarius",
      icon: "https://c.animaapp.com/F6QrhXVE/img/12-1@2x.png",
      image:
        "https://c.animaapp.com/F6QrhXVE/img/8961a801-6dac-45e9-b8b3-671f769f9cd6-1@2x.png",
      iconAspect: "aspect-[2.01]",
      imageAspect: "aspect-[1.11]",
      top: "554px",
      left: "1294px",
      width: "240px",
    },
    {
      name: "pisces",
      icon: "https://c.animaapp.com/F6QrhXVE/img/9-1@2x.png",
      image:
        "https://c.animaapp.com/F6QrhXVE/img/a7fa1993-e07d-4f73-b056-d126936afdbc-1@2x.png",
      iconAspect: "aspect-[0.79]",
      imageAspect: "aspect-[1.15]",
      top: "554px",
      left: "1577px",
      width: "243px",
    },
  ];

  const socialLinks = [
    {
      name: "Facebook",
      url: "https://c.animaapp.com/F6QrhXVE/img/facebook-1-1@2x.png",
      alt: "Facebook",
    },
    {
      name: "Instagram",
      url: "https://c.animaapp.com/F6QrhXVE/img/instagram-1-1@2x.png",
      alt: "Instagram",
    },
    {
      name: "Whatsapp",
      url: "https://c.animaapp.com/F6QrhXVE/img/whatsapp-1-1@2x.png",
      alt: "Whatsapp",
    },
  ];

  return (
    <div
      className="bg-black overflow-hidden w-full min-w-0 lg:min-w-[1920px] min-h-screen lg:min-h-[4695px] relative"
      data-model-id="17:2"
    >
      {/* Mobile Header */}
      <header className="lg:hidden sticky top-0 z-50 bg-black/95 backdrop-blur-sm border-b border-gray-800">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="[font-family:'Karla',Helvetica] text-white text-lg font-normal">
              Aacharya Pankaj Kashyap
            </div>
            
            <button
              className="text-white p-2"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle menu"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                {mobileMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>

          {mobileMenuOpen && (
            <nav
              className="mt-4 pb-4 flex flex-col gap-4 [font-family:'Karla',Helvetica] text-white text-base font-normal"
              role="navigation"
              aria-label="Mobile navigation"
            >
              <a href="#home" className="hover:text-[#00ccc2] transition-colors" onClick={() => setMobileMenuOpen(false)}>Home</a>
              <a href="#about" className="hover:text-[#00ccc2] transition-colors" onClick={() => setMobileMenuOpen(false)}>About</a>
              <a href="#horoscope" className="hover:text-[#00ccc2] transition-colors" onClick={() => setMobileMenuOpen(false)}>Horoscope</a>
              <a href="#services" className="hover:text-[#00ccc2] transition-colors" onClick={() => setMobileMenuOpen(false)}>Services</a>
              <a href="#contacts" className="hover:text-[#00ccc2] transition-colors" onClick={() => setMobileMenuOpen(false)}>Contacts</a>
            </nav>
          )}
        </div>
      </header>

      {/* Desktop Header */}
      <header className="hidden lg:inline-flex items-center gap-2.5 absolute top-[46px] left-0 z-50">
        <nav
          className="w-fit [font-family:'Karla',Helvetica] text-white text-[32px] whitespace-nowrap relative mt-[-1.00px] font-normal tracking-[0] leading-[normal]"
          role="navigation"
          aria-label="Main navigation"
        >
          <a 
            href="#home" 
            className="inline-block hover:text-[#00ccc2] transition-colors cursor-pointer"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
          >
            &nbsp;&nbsp;&nbsp;&nbsp; Aacharya Pankaj Kashyap&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          </a>
          <a 
            href="#home" 
            className="inline-block hover:text-[#00ccc2] transition-colors cursor-pointer"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
          >
            Home
          </a>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <a 
            href="#about" 
            className="inline-block hover:text-[#00ccc2] transition-colors cursor-pointer"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 3185 - 50, behavior: 'smooth' });
            }}
          >
            About
          </a>
          &nbsp;&nbsp;&nbsp;&nbsp;
          <a 
            href="#horoscope" 
            className="inline-block hover:text-[#00ccc2] transition-colors cursor-pointer"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 1262 - 50, behavior: 'smooth' });
            }}
          >
            Horoscope
          </a>
          &nbsp;&nbsp;&nbsp;&nbsp;
          <a 
            href="#services" 
            className="inline-block hover:text-[#00ccc2] transition-colors cursor-pointer"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 938 - 50, behavior: 'smooth' });
            }}
          >
            Services
          </a>
          &nbsp;&nbsp;&nbsp;&nbsp;
          <a 
            href="#contacts" 
            className="inline-block hover:text-[#00ccc2] transition-colors cursor-pointer"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 4073 - 50, behavior: 'smooth' });
            }}
          >
            Contacts
          </a>
        </nav>
      </header>

      {/* Mobile Hero Section */}
      <section id="home" className="lg:hidden relative w-full mt-4 px-4" aria-label="Hero section">
        <div className="relative w-full h-[400px] overflow-hidden rounded-2xl">
          <video
            className="absolute top-0 left-0 w-full h-full object-cover opacity-[0.48]"
            autoPlay
            loop
            muted
            playsInline
          >
            <source src="https://c.animaapp.com/F6QrhXVE/img/pexels-rostislav-uzunov-7533260--2160p--1.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          
          <div className="absolute inset-0 flex flex-col items-center justify-center px-4 text-center">
            <h1 className="relative z-10 [font-family:'Konkhmer_Sleokchher',Helvetica] font-normal text-white text-2xl sm:text-3xl text-center tracking-[0] leading-tight mb-4">
              Aacharya Pankaj Kashyap
            </h1>

            <p className="relative z-10 [font-family:'Kaushan_Script',Helvetica] font-normal text-white text-base sm:text-lg text-center tracking-[0] leading-normal mb-6">
              Are you worried ? Just One Call and Change Your Life
            </p>

            <button
              className="relative w-[180px] h-[60px] mb-4"
              aria-label="Contact us"
            >
              <div className="absolute w-full h-full top-0 left-0 bg-[#00747c] rounded-[32px] border-2 border-solid border-white blur-[2px]" />
              <div className="absolute w-full h-full top-0 left-0 bg-[#00cdc2] rounded-[32px] border-2 border-solid border-white blur-[2px]" />
              <div className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] [font-family:'Kokoro-Regular',Helvetica] font-normal text-white text-lg text-center tracking-[0] leading-[normal]">
                CONTACT
              </div>
            </button>

            <div
              className="flex items-center justify-center gap-4"
              role="list"
              aria-label="Social media links"
            >
              {socialLinks.map((social, index) => (
                <a key={index} href="#" aria-label={social.name} role="listitem" className="hover:opacity-80 transition-opacity">
                  <img
                    className="relative w-8 h-8 aspect-[1] object-cover"
                    alt={social.alt}
                    src={social.url}
                  />
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Desktop Hero Section */}
      <div id="home-desktop" className="hidden lg:block absolute top-0 left-0 w-full pointer-events-none" style={{ height: '103px' }}></div>
      
      {/* Full Screen Background Video - Starts below nav bar */}
      <div className="lg:block absolute top-[103px] left-0 w-full h-[calc(100vh-103px)] z-0" style={{ borderRadius: '40px 40px 0 0', overflow: 'hidden' }}>
        <video
          className="absolute top-0 left-0 w-full h-full object-cover"
          autoPlay
          loop
          muted
          playsInline
          style={{ borderRadius: '40px 40px 0 0' }}
        >
          <source src="../../../Assets/planet.mp4" type="video/mp4" />
        </video>
        {/* Dark overlay for better text readability */}
        <div className="absolute inset-0 bg-black/30" style={{ borderRadius: '40px 40px 0 0' }}></div>
      </div>

      {/* Hero Content Section */}
      <section className="hidden lg:block relative z-10" aria-label="Hero section">
        <img
          className="absolute top-[211px] left-[211px] w-[1547px] h-[627px] z-10"
          alt=""
          src="https://c.animaapp.com/F6QrhXVE/img/frame-7.svg"
        />

        <div className="inline-flex items-center justify-center gap-2.5 p-2.5 absolute top-[337px] left-[281px] z-10">
          <h1 className="relative w-fit mt-[-1.00px] [font-family:'Konkhmer_Sleokchher',Helvetica] font-normal text-white text-8xl text-center tracking-[0] leading-[normal] drop-shadow-2xl">
            Aacharya Pankaj Kashyap
          </h1>
        </div>

        <div className="inline-flex items-center justify-center gap-2.5 p-2.5 absolute top-[494px] left-[605px] z-10">
          <p className="relative w-fit mt-[-1.00px] [font-family:'Kaushan_Script',Helvetica] font-normal text-white text-[32px] text-center tracking-[0] leading-[normal] drop-shadow-2xl">
            Are you worried ?&nbsp;&nbsp;Just One Call and Change Your Life
          </p>
        </div>

        <button
          className="absolute top-[614px] left-[830px] w-[262px] h-[99px] z-10"
          aria-label="Contact us"
        >
          <div className="absolute w-full h-full top-0 left-0 bg-[#00747c] rounded-[64px] border-[3px] border-solid border-white blur-[2px]" />
          <div className="absolute w-full h-full top-0 left-0 bg-[#00cdc2] rounded-[64px] border-[3px] border-solid border-white blur-[2px]" />
          <div className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] [font-family:'Kokoro-Regular',Helvetica] font-normal text-white text-[32px] text-center tracking-[0] leading-[normal]">
            CONTACT
          </div>
        </button>

        <div className="flex flex-col w-[201px] items-start gap-2.5 p-2.5 absolute top-[735px] left-[859px] z-10">
          <div
            className="inline-flex items-center gap-[26px] relative flex-[0_0_auto]"
            role="list"
            aria-label="Social media links"
          >
            {socialLinks.map((social, index) => (
              <a key={index} href="#" aria-label={social.name} role="listitem" className="hover:opacity-80 transition-opacity">
                <img
                  className="relative w-[43px] h-[43px] aspect-[1] object-cover drop-shadow-lg"
                  alt={social.alt}
                  src={social.url}
                />
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Mobile Services Section */}
      <section
        id="services"
        className="lg:hidden container mx-auto px-4 py-12 mt-8"
        aria-label="Services"
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {services.map((service, index) => (
            <article key={index} className="relative w-full bg-[#0a090d] rounded-2xl p-6 min-h-[280px] flex flex-col">
              <h3 className="[font-family:'Hammersmith_One',Helvetica] font-normal text-[#00ccc2] text-xl text-center tracking-[0] leading-tight mb-4 whitespace-pre-line">
                {service.title}
              </h3>
              <p className="[font-family:'Julius_Sans_One',Helvetica] font-normal text-white text-base text-center tracking-[0] leading-normal flex-grow">
                {service.description}
              </p>
            </article>
          ))}
        </div>
      </section>

      {/* Desktop Services Section */}
      <div id="services-desktop" className="hidden lg:block absolute top-[938px] left-0 w-full pointer-events-none" style={{ height: '1px' }}></div>
      <section
        className="hidden lg:inline-flex items-center gap-[76px] absolute top-[938px] left-[366px]"
        aria-label="Services"
      >
        {services.map((service, index) => (
          <article key={index} className="relative w-[244px] h-[339px]">
            <div className="absolute top-0 left-0 w-60 h-[339px] bg-[#0a090d] rounded-[21px]" />
            <h3 className="absolute top-11 left-[25px] w-[190px] [font-family:'Hammersmith_One',Helvetica] font-normal text-[#00ccc2] text-[32px] text-center tracking-[0] leading-[normal] whitespace-pre-line">
              {service.title}
            </h3>
            <p className="absolute top-[143px] left-[29px] w-[186px] [font-family:'Julius_Sans_One',Helvetica] font-normal text-white text-xl text-center tracking-[0] leading-[normal]">
              {service.description}
            </p>
          </article>
        ))}
      </section>

      {/* Mobile Horoscope Section */}
      <section
        id="horoscope"
        className="lg:hidden w-full mt-8"
        aria-label="Horoscope introduction"
      >
        <div className="w-full">
          <img
            className="w-full h-auto object-cover"
            alt=""
            src="https://c.animaapp.com/F6QrhXVE/img/----------------------------------------------------------1.png"
          />
        </div>

        <div className="container mx-auto px-4 py-8">
          <h2 className="[font-family:'Judson',Helvetica] font-bold text-[#00ccc2] text-2xl sm:text-3xl text-center tracking-[0] leading-tight mb-6">
            Know About your stars and be ready for your future
          </h2>

          <p className="[font-family:'Judson',Helvetica] font-normal italic text-white text-base sm:text-lg text-center tracking-[0] leading-relaxed mb-8">
            Discover your true cosmic blueprint based on your exact date, time,
            and location of birth. This is the foundation of your astrological
            journey, offering deep insight into your core self.
          </p>

          <div className="flex justify-center">
            <img
              className="w-full max-w-[300px] h-auto aspect-[0.75] object-cover rounded-lg"
              alt="Astrological chart illustration"
              src="https://c.animaapp.com/F6QrhXVE/img/5c1bfeef-53b3-448f-9e96-a74fa17b43cf-1.png"
            />
          </div>
        </div>
      </section>

      {/* Desktop Horoscope Section */}
      <div id="horoscope-desktop" className="hidden lg:block absolute top-[1262px] left-0 w-full pointer-events-none" style={{ height: '1px' }}></div>
      <section
        className="hidden lg:flex flex-col w-[1923px] items-start gap-2.5 p-2.5 absolute top-[1262px] -left-px"
        aria-label="Horoscope introduction"
      >
        <img
          className="relative self-stretch w-full ml-[-0.31px] mr-[-0.32px] aspect-[0.43]"
          alt=""
          src="https://c.animaapp.com/F6QrhXVE/img/----------------------------------------------------------1.png"
        />
      </section>

      <div className="hidden lg:inline-flex items-center justify-center gap-2.5 p-2.5 absolute top-[1330px] left-[484px]">
        <h2 className="relative w-[932px] mt-[-1.00px] [font-family:'Judson',Helvetica] font-bold text-[#00ccc2] text-[64px] text-center tracking-[0] leading-[normal]">
          Know About your stars and be ready for your future
        </h2>
      </div>

      <div className="hidden lg:inline-flex items-center justify-center gap-2.5 p-2.5 absolute top-[1520px] left-[392px]">
        <p className="relative w-[1117px] mt-[-1.00px] [font-family:'Judson',Helvetica] font-normal italic text-white text-4xl text-center tracking-[0] leading-[normal]">
          Discover your true cosmic blueprint based on your exact date, time,
          and location of birth. This is the foundation of your astrological
          journey, offering deep insight into your core self.
        </p>
      </div>

      <div className="hidden lg:inline-flex items-center gap-2.5 p-2.5 absolute top-[1602px] left-[716px]">
        <img
          className="relative w-[468px] h-[624px] aspect-[0.75] object-cover"
          alt="Astrological chart illustration"
          src="https://c.animaapp.com/F6QrhXVE/img/5c1bfeef-53b3-448f-9e96-a74fa17b43cf-1.png"
        />
      </div>

      {/* Mobile Zodiac Signs Section */}
      <section
        className="lg:hidden relative w-full mt-8 bg-black"
        aria-label="Zodiac signs"
      >
        <div className="relative w-full">
          <img
            className="w-full h-auto object-cover opacity-50"
            alt="Constellations background"
            src="https://c.animaapp.com/F6QrhXVE/img/beautiful-constellations-planet-1.png"
          />
          <div className="absolute inset-0 bg-black/40"></div>
        </div>

        <div className="container mx-auto px-4 py-8">
          <h2 className="[font-family:'Marcellus_SC',Helvetica] font-normal text-[#00ccc2] text-xl sm:text-2xl text-center tracking-[0] leading-normal mb-8">
            Read Your Signs With Astrologer Acharya Pankaj Kashyap
          </h2>

          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
            {zodiacSigns.map((sign, index) => (
              <article
                key={index}
                className="relative w-full bg-[#06666d] rounded-xl overflow-hidden aspect-[0.72] min-h-[200px] flex flex-col items-center justify-center p-4"
              >
                <div className="relative w-full h-full flex flex-col items-center justify-center">
                  <img
                    className="object-cover w-12 h-12 sm:w-16 sm:h-16 mb-2 z-10"
                    alt={`${sign.name} zodiac symbol`}
                    src={sign.icon}
                  />
                  
                  <img
                    className={`absolute inset-0 object-cover w-full h-full opacity-30 ${sign.imageAspect}`}
                    alt={`${sign.name} constellation`}
                    src={sign.image}
                  />
                  
                  <h3 className="relative z-10 [font-family:'Julius_Sans_One',Helvetica] font-normal text-white text-sm sm:text-base tracking-[0] leading-normal text-center capitalize mt-auto mb-2">
                    {sign.name}
                  </h3>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Desktop Zodiac Signs Section */}
      <section
        className="hidden lg:flex flex-col w-[1920px] h-[996px] items-center justify-center gap-2.5 absolute top-[2154px] left-[3px] bg-black"
        aria-label="Zodiac signs"
      >
        <img
          className="relative w-[1917px] h-[990px] aspect-[1.94]"
          alt=""
          src="https://c.animaapp.com/F6QrhXVE/img/beautiful-constellations-planet-1.png"
        />

        <h2 className="absolute top-[916px] left-0 w-[1920px] [font-family:'Marcellus_SC',Helvetica] font-normal text-[#00ccc2] text-[40px] text-center tracking-[0] leading-[normal]">
          Read Your Signs With Astrologer&nbsp;&nbsp;Acharya Pankaj Kashyap
        </h2>

        {zodiacSigns.map((sign, index) => (
          <article
            key={index}
            className="absolute h-[339px]"
            style={{
              top: sign.top,
              left: sign.left,
              width: sign.width,
            }}
          >
            <div
              className="absolute h-full top-0 bg-[#06666d] rounded-[21px]"
              style={{
                width:
                  sign.name === "Aries"
                    ? "87.60%"
                    : sign.name === "taurus"
                      ? "95.24%"
                      : sign.name === "gemini"
                        ? "100%"
                        : sign.name === "cancer"
                          ? "78.76%"
                          : sign.name === "leo"
                            ? "85.71%"
                            : sign.name === "virgo"
                              ? "91.60%"
                              : sign.name === "libra"
                                ? "98.77%"
                                : sign.name === "scorpio"
                                  ? "85.71%"
                                  : sign.name === "sagittarius"
                                    ? "100%"
                                    : sign.name === "capricorn"
                                      ? "83.33%"
                                      : sign.name === "aquarius"
                                        ? "100%"
                                        : "98.77%",
                left:
                  sign.name === "Aries"
                    ? "5.11%"
                    : sign.name === "cancer"
                      ? "8.86%"
                      : sign.name === "leo"
                        ? "6.79%"
                        : sign.name === "scorpio"
                          ? "8.57%"
                          : sign.name === "capricorn"
                            ? "8.33%"
                            : "0",
              }}
            />
            <img
              className={`absolute object-cover ${sign.iconAspect}`}
              style={{
                width:
                  sign.name === "Aries"
                    ? "36.87%"
                    : sign.name === "taurus"
                      ? "38.49%"
                      : sign.name === "gemini"
                        ? "32.50%"
                        : sign.name === "cancer"
                          ? "33.14%"
                          : sign.name === "leo"
                            ? "24.29%"
                            : sign.name === "virgo"
                              ? "46.56%"
                              : sign.name === "libra"
                                ? "50.21%"
                                : sign.name === "scorpio"
                                  ? "43.57%"
                                  : sign.name === "sagittarius"
                                    ? "35.00%"
                                    : sign.name === "capricorn"
                                      ? "42.36%"
                                      : sign.name === "aquarius"
                                        ? "50.83%"
                                        : "29.22%",
                top:
                  sign.name === "Aries"
                    ? "38px"
                    : sign.name === "taurus"
                      ? "37px"
                      : sign.name === "gemini"
                        ? "28px"
                        : sign.name === "cancer"
                          ? "28px"
                          : sign.name === "leo"
                            ? "22px"
                            : sign.name === "virgo"
                              ? "30px"
                              : sign.name === "libra"
                                ? "28px"
                                : sign.name === "scorpio"
                                  ? "29px"
                                  : sign.name === "sagittarius"
                                    ? "30px"
                                    : sign.name === "capricorn"
                                      ? "32px"
                                      : sign.name === "aquarius"
                                        ? "37px"
                                        : "25px",
                left:
                  sign.name === "Aries"
                    ? "30.66%"
                    : sign.name === "taurus"
                      ? "30.56%"
                      : sign.name === "gemini"
                        ? "37.92%"
                        : sign.name === "cancer"
                          ? "32.49%"
                          : sign.name === "leo"
                            ? "38.57%"
                            : sign.name === "virgo"
                              ? "25.19%"
                              : sign.name === "libra"
                                ? "25.51%"
                                : sign.name === "scorpio"
                                  ? "29.64%"
                                  : sign.name === "sagittarius"
                                    ? "33.33%"
                                    : sign.name === "capricorn"
                                      ? "28.82%"
                                      : sign.name === "aquarius"
                                        ? "24.58%"
                                        : "35.80%",
                height:
                  sign.name === "Aries"
                    ? "82px"
                    : sign.name === "taurus"
                      ? "99px"
                      : sign.name === "gemini"
                        ? "98px"
                        : sign.name === "cancer"
                          ? "86px"
                          : sign.name === "leo"
                            ? "106px"
                            : sign.name === "virgo"
                              ? "86px"
                              : sign.name === "libra"
                                ? "69px"
                                : sign.name === "scorpio"
                                  ? "92px"
                                  : sign.name === "sagittarius"
                                    ? "88px"
                                    : sign.name === "capricorn"
                                      ? "101px"
                                      : sign.name === "aquarius"
                                        ? "61px"
                                        : "90px",
              }}
              alt={`${sign.name} zodiac symbol`}
              src={sign.icon}
            />
            <h3
              className="absolute [font-family:'Julius_Sans_One',Helvetica] font-normal text-white text-[32px] tracking-[0] leading-[normal]"
              style={{
                width:
                  sign.name === "Aries"
                    ? "48.18%"
                    : sign.name === "taurus"
                      ? "52.38%"
                      : sign.name === "gemini"
                        ? "55.00%"
                        : sign.name === "cancer"
                          ? "43.32%"
                          : sign.name === "leo"
                            ? "47.14%"
                            : sign.name === "virgo"
                              ? "50.38%"
                              : sign.name === "libra"
                                ? "54.32%"
                                : sign.name === "scorpio"
                                  ? "67.14%"
                                  : sign.name === "sagittarius"
                                    ? "85.83%"
                                    : sign.name === "capricorn"
                                      ? "69.79%"
                                      : sign.name === "aquarius"
                                        ? "72.08%"
                                        : "54.32%",
                top:
                  sign.name === "Aries"
                    ? "84.96%"
                    : sign.name === "taurus"
                      ? "85.13%"
                      : sign.name === "gemini"
                        ? "85.13%"
                        : sign.name === "cancer"
                          ? "85.09%"
                          : sign.name === "leo"
                            ? "83.19%"
                            : sign.name === "virgo"
                              ? "83.19%"
                              : sign.name === "libra"
                                ? "84.37%"
                                : sign.name === "scorpio"
                                  ? "83.78%"
                                  : sign.name === "sagittarius"
                                    ? "83.78%"
                                    : sign.name === "capricorn"
                                      ? "83.78%"
                                      : sign.name === "aquarius"
                                        ? "82.01%"
                                        : "82.60%",
                left:
                  sign.name === "Aries"
                    ? "33.22%"
                    : sign.name === "taurus"
                      ? "25.00%"
                      : sign.name === "gemini"
                        ? "28.75%"
                        : sign.name === "cancer"
                          ? "29.53%"
                          : sign.name === "leo"
                            ? "42.86%"
                            : sign.name === "virgo"
                              ? "30.15%"
                              : sign.name === "libra"
                                ? "30.86%"
                                : sign.name === "scorpio"
                                  ? "27.50%"
                                  : sign.name === "sagittarius"
                                    ? "12.08%"
                                    : sign.name === "capricorn"
                                      ? "21.88%"
                                      : sign.name === "aquarius"
                                        ? "19.17%"
                                        : "30.86%",
              }}
            >
              {sign.name}
            </h3>
            <img
              className={`absolute ${sign.imageAspect}`}
              style={{
                width:
                  sign.name === "Aries"
                    ? "85.05%"
                    : sign.name === "taurus"
                      ? "97.62%"
                      : sign.name === "gemini"
                        ? "97.92%"
                        : sign.name === "cancer"
                          ? "76.46%"
                          : sign.name === "leo"
                            ? "100%"
                            : sign.name === "virgo"
                              ? "100%"
                              : sign.name === "libra"
                                ? "99.18%"
                                : sign.name === "scorpio"
                                  ? "100%"
                                  : sign.name === "sagittarius"
                                    ? "88.75%"
                                    : sign.name === "capricorn"
                                      ? "100%"
                                      : sign.name === "aquarius"
                                        ? "84.17%"
                                        : "95.88%",
                top:
                  sign.name === "Aries"
                    ? "77px"
                    : sign.name === "taurus"
                      ? "102px"
                      : sign.name === "gemini"
                        ? "120px"
                        : sign.name === "cancer"
                          ? "20px"
                          : sign.name === "leo"
                            ? "96px"
                            : sign.name === "virgo"
                              ? "102px"
                              : sign.name === "libra"
                                ? "97px"
                                : sign.name === "scorpio"
                                  ? "97px"
                                  : sign.name === "sagittarius"
                                    ? "95px"
                                    : sign.name === "capricorn"
                                      ? "118px"
                                      : sign.name === "aquarius"
                                        ? "98px"
                                        : "99px",
                left:
                  sign.name === "Aries"
                    ? "0"
                    : sign.name === "taurus"
                      ? "2.38%"
                      : sign.name === "gemini"
                        ? "0"
                        : sign.name === "cancer"
                          ? "0"
                          : sign.name === "leo"
                            ? "0"
                            : sign.name === "virgo"
                              ? "0"
                              : sign.name === "libra"
                                ? "0"
                                : sign.name === "scorpio"
                                  ? "0"
                                  : sign.name === "sagittarius"
                                    ? "5.42%"
                                    : sign.name === "capricorn"
                                      ? "0"
                                      : sign.name === "aquarius"
                                        ? "7.08%"
                                        : "4.12%",
                height:
                  sign.name === "Aries"
                    ? "252px"
                    : sign.name === "taurus"
                      ? "186px"
                      : sign.name === "gemini"
                        ? "171px"
                        : sign.name === "cancer"
                          ? "312px"
                          : sign.name === "leo"
                            ? "198px"
                            : sign.name === "virgo"
                              ? "206px"
                              : sign.name === "libra"
                                ? "189px"
                                : sign.name === "scorpio"
                                  ? "193px"
                                  : sign.name === "sagittarius"
                                    ? "193px"
                                    : sign.name === "capricorn"
                                      ? "172px"
                                      : sign.name === "aquarius"
                                        ? "182px"
                                        : "203px",
              }}
              alt={`${sign.name} constellation`}
              src={sign.image}
            />
          </article>
        ))}
      </section>

      {/* Mobile About Section */}
      <section
        id="about"
        className="lg:hidden container mx-auto px-4 py-12 mt-8"
        aria-label="About section"
      >
        <h2 className="[font-family:'Marcellus_SC',Helvetica] font-normal text-white text-3xl text-center tracking-[0] leading-tight mb-8">
          You are welcome
        </h2>

        <div className="grid grid-cols-1 gap-8">
          <div>
            <h2 className="[font-family:'Marcellus_SC',Helvetica] text-[#00ccc2] text-2xl underline font-normal tracking-[0] leading-tight mb-4">
              Aacharya Pankaj Kashyap
            </h2>

            <p className="[font-family:'Kantumruy',Helvetica] font-normal text-white text-base tracking-[0] leading-relaxed mb-6">
              Welcome to the path of cosmic clarity. Aacharya Pankaj Kashyap is a
              revered Vedic astrologer with a deep-rooted knowledge passed down
              through generations. He has dedicated his life to the sacred study and
              precise application of astrology, providing profound guidance to
              clients across the globe.
            </p>

            <button
              className="relative w-[200px] h-[60px]"
              aria-label="Learn more about Aacharya Pankaj Kashyap"
            >
              <div className="absolute w-[102.34%] h-[106.45%] top-[-3.23%] left-0 bg-[#00ccc2] rounded-[32px] border-2 border-solid border-white blur-[2px]" />
              <div className="absolute w-[102.34%] h-[106.45%] top-[-3.23%] left-0 bg-[#00737b] rounded-[32px] border-2 border-solid border-white blur-[11.3px] opacity-[0.74]" />
              <div className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] [font-family:'Kokoro-Regular',Helvetica] font-normal text-white text-lg text-center tracking-[0] leading-[normal]">
                Learn More
              </div>
            </button>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="flex justify-center">
              <img
                className="w-full max-w-[200px] h-auto aspect-[0.67] object-cover rounded-lg"
                alt="Aacharya Pankaj Kashyap portrait"
                src="https://c.animaapp.com/F6QrhXVE/img/whatsapp-image-2025-11-01-at-5-50-07-pm-1.png"
              />
            </div>
            <div className="flex flex-col gap-4">
              <img
                className="w-full h-auto aspect-[1.5] object-cover rounded-lg"
                alt="Astrology consultation"
                src="https://c.animaapp.com/F6QrhXVE/img/whatsapp-image-2025-11-01-at-5-50-07-pm--1--1@2x.png"
              />
              <img
                className="w-full h-auto aspect-[1.5] object-cover rounded-lg"
                alt="Astrology session"
                src="https://c.animaapp.com/F6QrhXVE/img/whatsapp-image-2025-11-01-at-5-50-35-pm-1@2x.png"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Desktop About Section */}
      <div id="about-desktop" className="hidden lg:block absolute top-[3185px] left-0 w-full pointer-events-none" style={{ height: '1px' }}></div>
      <section
        className="hidden lg:flex flex-col w-[1923px] items-start absolute top-[3185px] left-px"
        aria-label="About section"
      >
        <h2 className="relative self-stretch h-[40.52px] mt-[-1.00px] [font-family:'Marcellus_SC',Helvetica] font-normal text-white text-[64px] text-center tracking-[0] leading-[normal] whitespace-nowrap">
          You are welcome
        </h2>
      </section>

      <img
        className="hidden lg:block absolute top-[3150px] left-[996px] w-[924px] h-[1199px] aspect-[0.81]"
        alt=""
        src="https://c.animaapp.com/F6QrhXVE/img/689f8e17-2497-4046-ab83-f4c37863e75e-1.png"
      />

      <div className="hidden lg:inline-flex items-center gap-2.5 p-2.5 absolute top-[3360px] left-[1261px]">
        <img
          className="relative w-[360px] h-[540px] aspect-[0.67]"
          alt="Aacharya Pankaj Kashyap portrait"
          src="https://c.animaapp.com/F6QrhXVE/img/whatsapp-image-2025-11-01-at-5-50-07-pm-1.png"
        />
      </div>

      <div className="hidden lg:flex flex-col w-[292px] items-start gap-2.5 p-2.5 absolute top-[3269px] left-[1592px]">
        <img
          className="relative self-stretch w-full aspect-[1.5] object-cover"
          alt="Astrology consultation"
          src="https://c.animaapp.com/F6QrhXVE/img/whatsapp-image-2025-11-01-at-5-50-07-pm--1--1@2x.png"
        />
      </div>

      <div className="hidden lg:flex flex-col w-[298px] items-start gap-2.5 p-2.5 absolute top-[3782px] left-[1046px]">
        <img
          className="relative self-stretch w-full aspect-[1.5] object-cover"
          alt="Astrology session"
          src="https://c.animaapp.com/F6QrhXVE/img/whatsapp-image-2025-11-01-at-5-50-35-pm-1@2x.png"
        />
      </div>

      <article className="hidden lg:flex flex-col w-[1013px] items-start gap-2.5 p-2.5 absolute top-[3404px] left-[110px]">
        <div className="flex flex-col h-[91px] items-start relative self-stretch w-full">
          <h2 className="self-stretch h-[154px] mb-[-62.00px] [font-family:'Marcellus_SC',Helvetica] text-[#00ccc2] text-[64px] underline relative mt-[-1.00px] font-normal tracking-[0] leading-[normal]">
            Aacharya Pankaj Kashyap
          </h2>
        </div>
      </article>

      <div className="hidden lg:inline-flex items-center justify-center gap-2.5 p-2.5 absolute top-[3529px] left-[114px]">
        <p className="relative w-[831px] mt-[-1.00px] [font-family:'Kantumruy',Helvetica] font-normal text-white text-3xl tracking-[0] leading-[normal]">
          Welcome to the path of cosmic clarity. Aacharya Pankaj Kashyap is a
          revered Vedic astrologer with a deep-rooted knowledge passed down
          through generations. He has dedicated his life to the sacred study and
          precise application of astrology, providing profound guidance to
          clients across the globe.
        </p>
      </div>

      <button
        className="hidden lg:block all-[unset] box-border absolute top-[3910px] left-[146px] w-64 h-[93px]"
        aria-label="Learn more about Aacharya Pankaj Kashyap"
      >
        <div className="absolute w-[102.34%] h-[106.45%] top-[-3.23%] left-0 bg-[#00ccc2] rounded-[64px] border-[3px] border-solid border-white blur-[2px]" />

        <div className="absolute w-[102.34%] h-[106.45%] top-[-3.23%] left-0 bg-[#00737b] rounded-[64px] border-[3px] border-solid border-white blur-[11.3px] opacity-[0.74]" />

        <div className="absolute w-[73.05%] h-[79.57%] top-[20.43%] left-[14.06%] [font-family:'Kokoro-Regular',Helvetica] font-normal text-white text-[32px] text-center tracking-[0] leading-[normal]">
          Learn More
        </div>
      </button>

      {/* Mobile Footer */}
      <footer id="contacts" className="lg:hidden relative w-full bg-black mt-8">
        <div className="w-full">
          <img
            className="w-full h-auto object-cover"
            alt=""
            src="https://c.animaapp.com/F6QrhXVE/img/----------------------------------------------------------2.png"
          />
        </div>

        <div className="relative w-full -mt-4">
          <img
            className="w-full h-auto object-cover opacity-60"
            alt=""
            src="https://c.animaapp.com/F6QrhXVE/img/mountains-landscape-pink-view-1.png"
          />
        </div>

        <div className="container mx-auto px-4 py-8">
          <div className="text-center mb-6">
            <a
              href="https://aacharyapankajkashyap.in"
              className="[font-family:'Marcellus_SC',Helvetica] font-normal text-[#00ccc2] text-lg sm:text-xl text-center tracking-[0] leading-normal underline break-all"
            >
              aacharyapankajkashyap.in
            </a>
          </div>

          <div className="space-y-6 mb-8">
            <p className="[font-family:'Kantumruy',Helvetica] font-bold text-[#00968f] text-base text-center tracking-[0] leading-relaxed">
              Know About Your Stars &amp; Predict Your Destiny With Aacharya
              Pankaj Kashyap.
            </p>

            <div className="space-y-4">
              <div>
                <p className="[font-family:'Kantumruy',Helvetica] font-bold text-[#00ccc2] text-base tracking-[0] leading-normal mb-1">
                  E-Mail
                </p>
                <a
                  href="mailto:astrologerpankajkashyap@gmail.com"
                  className="[font-family:'Kantumruy',Helvetica] font-normal text-white text-sm tracking-[0] leading-normal break-all"
                >
                  astrologerpankajkashyap@gmail.com
                </a>
              </div>

              <div>
                <div className="[font-family:'Kantumruy',Helvetica] font-bold text-[#00ccc2] text-base tracking-[0] leading-normal mb-1">
                  Contact
                </div>
                <a
                  href="tel:9101516365"
                  className="[font-family:'Kantumruy',Helvetica] font-normal text-white text-sm tracking-[0] leading-normal"
                >
                  9101516365
                </a>
              </div>

              <address className="flex flex-col items-start not-italic">
                <div className="[font-family:'Kantumruy',Helvetica] font-bold text-[#00ccc2] text-base tracking-[0] leading-normal mb-1">
                  Address
                </div>
                <p className="[font-family:'Kantumruy',Helvetica] font-normal text-white text-sm tracking-[0] leading-normal">
                   Baruah Chariali, Jorhat,
                  <br />
                  785001, Assam, India
                </p>
              </address>
            </div>
          </div>

          <div className="flex justify-center mb-6">
            <div
              className="flex items-center gap-4"
              role="list"
              aria-label="Footer social media links"
            >
              {socialLinks.map((social, index) => (
                <a key={index} href="#" aria-label={social.name} role="listitem" className="hover:opacity-80 transition-opacity">
                  <img
                    className="relative w-10 h-10 aspect-[1] object-cover"
                    alt={social.alt}
                    src={social.url}
                  />
                </a>
              ))}
            </div>
          </div>

          <div className="text-center">
            <p className="[font-family:'Judson',Helvetica] font-normal italic text-[#00ccc2] text-xs tracking-[0] leading-normal">
              © 2025 | Aacharya Pankaj Kashyap | All Right Reserved
            </p>
          </div>
        </div>
      </footer>

      {/* Desktop Footer */}
      <div id="contacts-desktop" className="hidden lg:block absolute top-[4073px] left-0 w-full pointer-events-none" style={{ height: '1px' }}></div>
      <footer className="hidden lg:block absolute top-[4073px] left-1.5 w-[1920px] h-[660px] bg-black">
        <div className="absolute top-0 left-0 w-[1900px] h-[609px]">
          <img
            className="w-full h-full object-cover"
            alt=""
            src="https://c.animaapp.com/F6QrhXVE/img/----------------------------------------------------------2.png"
          />
        </div>

        <div className="flex flex-col w-[1940px] items-start gap-2.5 p-2.5 absolute top-[100px] left-[-11px]">
          <img
            className="relative self-stretch w-full aspect-[2.91] object-cover"
            alt=""
            src="https://c.animaapp.com/F6QrhXVE/img/mountains-landscape-pink-view-1.png"
          />
        </div>

        <div className="inline-flex items-center justify-center gap-2.5 p-2.5 absolute top-[-27px] left-[563px]">
          <a
            href="https://aacharyapankajkashyap.in"
            className="relative w-fit mt-[-1.00px] [font-family:'Marcellus_SC',Helvetica] font-normal text-[#00ccc2] text-[64px] text-center tracking-[0] leading-[normal] underline"
          >
            aacharyapankajkashyap.in
          </a>
        </div>

        <div className="inline-flex items-center justify-center gap-2.5 p-2.5 absolute top-[140px] left-[39px]">
          <p className="relative w-[683px] mt-[-1.00px] [font-family:'Kantumruy',Helvetica] font-bold text-[#00968f] text-4xl tracking-[0] leading-[normal]">
            Know About Your Stars &amp; Predict Your Destiny With Aacharya
            Pankaj Kashyap.
          </p>
        </div>

        <div className="inline-flex items-center justify-center gap-2.5 p-2.5 absolute top-[155px] left-[931px]">
          <p className="relative w-fit mt-[-1.00px] [font-family:'Kantumruy',Helvetica] font-normal text-[#00ccc2] text-[29px] tracking-[0] leading-[normal]">
            <span className="font-bold">E-Mail</span>
            <span className="[font-family:'Kantumruy',Helvetica] font-normal text-[#00ccc2] text-[29px] tracking-[0]">
              {""}
            </span>
          </p>
        </div>

        <div className="inline-flex items-center justify-center gap-2.5 p-2.5 absolute top-[203px] left-[929px]">
          <a
            href="mailto:astrologerpankajkashyap@gmail.com"
            className="relative w-fit mt-[-1.00px] [font-family:'Kantumruy',Helvetica] font-normal text-white text-[26px] tracking-[0] leading-[normal]"
          >
            astrologerpankajkashyap@gmail.com
          </a>
        </div>

        <div className="inline-flex items-center justify-center gap-2.5 p-2.5 absolute top-[245px] left-[931px]">
          <div className="relative w-fit mt-[-1.00px] [font-family:'Kantumruy',Helvetica] font-bold text-[#00ccc2] text-[29px] tracking-[0] leading-[normal]">
            Contact
          </div>
        </div>

        <div className="inline-flex items-center justify-center gap-2.5 p-2.5 absolute top-[293px] left-[929px]">
          <a
            href="tel:9101516365"
            className="relative w-fit mt-[-1.00px] [font-family:'Kantumruy',Helvetica] font-normal text-white text-[26px] tracking-[0] leading-[normal]"
          >
            9101516365
          </a>
        </div>

        <address className="flex flex-col w-[408px] items-start absolute top-[165px] left-[1463px] not-italic">
          <div className="relative self-stretch mt-[-1.00px] [font-family:'Kantumruy',Helvetica] font-bold text-[#00ccc2] text-[29px] tracking-[0] leading-[normal]">
            Address
          </div>
          <p className="relative self-stretch [font-family:'Kantumruy',Helvetica] font-normal text-white text-[26px] tracking-[0] leading-[normal]">
            Baruah Chariali, Jorhat,
            <br />
            785001, Assam, India
          </p>
        </address>

        <div
          className="inline-flex items-center gap-[26px] absolute top-[488px] left-[897px]"
          role="list"
          aria-label="Footer social media links"
        >
          {socialLinks.map((social, index) => (
            <a key={index} href="#" aria-label={social.name} role="listitem">
              <img
                className="relative w-[43px] h-[43px] aspect-[1] object-cover"
                alt={social.alt}
                src={social.url}
              />
            </a>
          ))}
        </div>

        <div className="inline-flex items-center justify-center gap-2.5 p-2.5 absolute top-[542px] left-[630px]">
          <p className="relative w-fit mt-[-1.00px] [font-family:'Judson',Helvetica] font-normal italic text-[#00ccc2] text-[32px] tracking-[0] leading-[normal] whitespace-nowrap">
            © 2025 | Aacharya Pankaj Kashyap | All Right Reserved
          </p>
        </div>
      </footer>
    </div>
  );
};
