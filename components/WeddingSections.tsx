import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Reveal } from './Reveal';
import { ASSETS } from '../utils/assets';

// --- HERO SECTION ---
export const HeroSection = () => {
  return (
    <div className="relative min-h-screen w-full flex flex-col">
      <div className="absolute inset-0 z-0">
        <img
          alt="Blurred artistic shot of a wedding couple"
          className="h-full w-full object-cover"
          src={ASSETS.hero.bg}
        />
        <div className="absolute inset-0 bg-black/40 backdrop-blur-[1px]"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/30"></div>
      </div>
      <main className="relative z-10 flex-grow flex flex-col items-center justify-center px-4 text-center pb-20 pt-20">
        <Reveal width="100%" className="flex flex-col items-center justify-center" delay={0.2}>
          <p className="text-white/90 text-xs md:text-sm font-bold tracking-[0.3em] uppercase mb-4 md:mb-6 font-display">
            The Wedding of
          </p>
        </Reveal>
        <Reveal width="100%" className="flex flex-col items-center justify-center" delay={0.4}>
          <h1 className="text-primary text-5xl sm:text-6xl md:text-8xl lg:text-9xl font-merriweather leading-tight mb-4 md:mb-6 drop-shadow-2xl">
            Ikhsan <span className="text-white/80 font-serif text-3xl sm:text-4xl md:text-6xl align-middle mx-2">&</span> Rara
          </h1>
        </Reveal>
        <Reveal width="100%" className="flex flex-col items-center justify-center" delay={0.6}>
          <div className="flex flex-col md:flex-row items-center gap-3 md:gap-6">
            <div className="hidden md:block h-[1px] w-8 md:w-16 bg-white/40"></div>
            <p className="text-white text-base sm:text-lg md:text-2xl font-serif italic font-light tracking-wide">
              Saturday, 25 April 2026
            </p>
            <div className="hidden md:block h-[1px] w-8 md:w-16 bg-white/40"></div>
          </div>
        </Reveal>
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
           <Reveal delay={0.8}>
             <div className="flex flex-col items-center gap-2">
                <span className="text-white/60 text-[10px] uppercase tracking-widest font-display">Scroll Down</span>
                <div className="animate-bounce-slow text-primary">
                    <span className="material-symbols-outlined text-3xl">keyboard_arrow_down</span>
                </div>
             </div>
           </Reveal>
        </div>
      </main>
    </div>
  );
};

// --- QUOTE SECTION ---
export const QuoteSection = () => {
  return (
    <section className="relative w-full py-20 md:py-32 px-6 flex justify-center items-center bg-background-light">
      <Reveal width="100%">
        <div className="max-w-4xl w-full mx-auto flex flex-col items-center text-center space-y-6 md:space-y-8">
          <div className="text-primary mb-2">
            <span aria-hidden="true" className="material-symbols-outlined text-[40px] md:text-[64px] opacity-90">
              local_florist
            </span>
          </div>
          <h1 className="text-text-main font-arabic text-2xl sm:text-3xl md:text-5xl leading-loose md:leading-[1.6] font-medium tracking-wide drop-shadow-sm px-2">
            هُنَّ لِبَاسٌ لَّكُمْ وَأَنتُمْ لِبَاسٌ لَّهُنَّ
          </h1>
          <p className="text-text-main font-serif italic text-lg md:text-2xl leading-relaxed max-w-2xl mx-auto opacity-90 px-4">
            “They are clothing for you and you are clothing for them”
          </p>
          <div className="w-16 h-px bg-primary/40 my-4"></div>
          <h2 className="text-primary font-display font-bold text-xs md:text-sm tracking-[0.2em] uppercase">
            Quran 2:187
          </h2>
        </div>
      </Reveal>
    </section>
  );
};

// --- COUPLE SECTION ---
export const CoupleSection = () => {
  // Reusable classes biar konsisten (dan gampang di-tuning)
  const nameClass =
    "font-merriweather text-[40px] sm:text-5xl md:text-6xl lg:text-[64px] " +
    "leading-[1.05] tracking-wide text-text-main " +
    "max-w-[18ch] sm:max-w-[22ch] mx-auto break-words";

  return (
    <section className="relative w-full bg-[#faf9f6] overflow-hidden">
      {/* Fullscreen landscape image (single asset) */}
      <div className="relative w-full min-h-[100svh]">
        <img
          src={ASSETS.couple.main}
          alt="The Happy Couple"
          className="absolute inset-0 w-full h-full object-cover object-top scale-x-[-1] brightness-150 sm:brightness-100"
        />

        {/* Overlays for readability - adjusted opacity */}
        <div className="absolute inset-0 bg-[#faf9f6]/20" />

        {/* Top readability gradient (for header) */}
        <div className="absolute top-0 left-0 w-full h-[35%] bg-gradient-to-b from-[#faf9f6]/90 via-[#faf9f6]/50 to-transparent" />

        {/* Bottom readability gradient (for couple info) */}
        <div className="absolute inset-x-0 bottom-0 h-[55%] bg-gradient-to-t from-[#faf9f6] via-[#faf9f6]/80 to-transparent" />

        {/* Background blobs */}
        <div className="absolute inset-0 pointer-events-none opacity-[0.06] overflow-hidden">
          <div className="absolute -top-24 -left-24 w-80 h-80 sm:w-96 sm:h-96 bg-primary rounded-full blur-[110px]" />
          <div className="absolute top-24 sm:top-28 right-0 w-60 h-60 sm:w-72 sm:h-72 bg-primary rounded-full blur-[90px]" />
        </div>

        {/* HEADER - pinned at top of image */}
        <Reveal width="100%">
          <div className="absolute top-0 left-0 w-full z-20">
            <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8 pt-10 sm:pt-12 lg:pt-14 text-center">
              <span className="text-wedding-accent font-cinzel text-[11px] sm:text-xs md:text-sm font-bold tracking-[0.25em] uppercase">
                The Happy Couple
              </span>

              <div className="mt-2 sm:mt-3 flex justify-center items-center">
                <h2 className="font-script text-4xl sm:text-5xl md:text-6xl text-text-main">
                  Groom &amp; Bride
                </h2>
              </div>
            </div>
          </div>
        </Reveal>

        {/* CONTENT */}
        <div className="relative z-10 mx-auto w-full max-w-screen-xl px-4 sm:px-6 lg:px-8">
          {/* Push content to lower portion while keeping header at top */}
          <div className="min-h-[100svh] flex flex-col justify-end pb-12 sm:pb-14 lg:pb-16">
            <div className="w-full max-w-7xl mx-auto">
              {/* Couple Grid (text-only, still 2 columns) */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-10 md:gap-12 lg:gap-16 items-start">
                {/* Groom */}
                <Reveal width="100%">
                  <div className="text-center px-3 sm:px-4">
                    <span className="font-cinzel text-wedding-accent text-[11px] sm:text-xs font-bold tracking-[0.25em] uppercase mb-3 block">
                      The Groom
                    </span>

                    <h3 className={nameClass + " text-black sm:text-text-main mb-3 sm:mb-4"}>
                      R. Ikhsan Nur Akbar
                    </h3>

                    <p className="font-display text-sm text-black sm:text-text-muted leading-relaxed max-w-[32ch] mx-auto opacity-80">
                      Putra dari Alm Bapak Teguh Susatia &amp; Ibu Teti Kristanti
                    </p>
                  </div>
                </Reveal>

                {/* Bride */}
                <Reveal width="100%" delay={0.2}>
                  <div className="text-center px-3 sm:px-4">
                    <span className="font-cinzel text-wedding-accent text-[11px] sm:text-xs font-bold tracking-[0.25em] uppercase mb-3 block">
                      The Bride
                    </span>

                    <h3 className={nameClass + " mb-3 sm:mb-4"}>Rara Tiara</h3>

                    <p className="font-display text-sm text-black sm:text-text-muted leading-relaxed max-w-[32ch] mx-auto opacity-80">
                      Putri dari Bapak Pujiono &amp; Ibu Sutarni
                    </p>
                  </div>
                </Reveal>
              </div>

              {/* Decoration */}
              <div className="flex justify-center mt-10 sm:mt-12 lg:mt-14 opacity-30">
                <div className="flex items-center gap-4">
                  <div className="h-[1px] w-14 sm:w-16 bg-wedding-accent" />
                  <span className="material-symbols-outlined text-wedding-accent text-xl">
                    favorite
                  </span>
                  <div className="h-[1px] w-14 sm:w-16 bg-wedding-accent" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// --- EVENTS SECTION ---
export const EventsSection = () => {
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    const targetDate = new Date("2026-04-25T07:30:00").getTime();
    const interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = targetDate - now;

      if (distance < 0) {
        clearInterval(interval);
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      } else {
        setTimeLeft({
          days: Math.floor(distance / (1000 * 60 * 60 * 24)),
          hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((distance % (1000 * 60)) / 1000),
        });
      }
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const TimeUnit = ({ value, label, delay }: { value: number; label: string; delay: number }) => (
    <Reveal delay={delay} className="group flex flex-col items-center gap-2 sm:gap-3">
      <div className="flex h-16 w-16 sm:h-20 sm:w-20 md:h-24 md:w-24 lg:h-28 lg:w-28 flex-col items-center justify-center rounded-xl bg-[#333333] shadow-xl border border-gray-800 group-hover:-translate-y-1 transition-transform duration-300">
        <span className="font-cinzel text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-wedding-accent">
          {value}
        </span>
      </div>
      <span className="font-sans text-[8px] sm:text-[10px] font-bold uppercase tracking-[0.2em] text-gray-500">
        {label}
      </span>
    </Reveal>
  );

  // Reusable card classes biar konsisten ukurannya
  const cardOuter =
    "relative flex w-full flex-col items-center text-center bg-white border border-transparent shadow-[0_4px_30px_-5px_rgba(0,0,0,0.05)] " +
    "hover:shadow-[0_10px_40px_-5px_rgba(0,0,0,0.1)] transition-shadow duration-300";

  const cardInner = "flex w-full flex-1 flex-col items-center px-5 sm:px-8 lg:px-12";

  return (
    <section className="relative w-full bg-[#faf9f6] overflow-hidden">
      {/* Wrapper: center + responsive padding + fit screen */}
      <div className="mx-auto w-full max-w-screen-xl px-4 sm:px-6 lg:px-8">
        <div className="min-h-[100svh] flex flex-col justify-center py-14 sm:py-16 lg:py-20">
          {/* Header Text */}
          <Reveal width="100%">
            <div className="text-center mb-10 sm:mb-12 lg:mb-14 max-w-3xl mx-auto">
              <p className="font-montserrat text-[#8c8c8c] uppercase tracking-[0.2em] text-[10px] md:text-xs font-bold">
                Join us in celebrating our love
              </p>
            </div>
          </Reveal>

          {/* Event Cards + Countdown */}
          <div className="w-full z-10">
            {/* Cards grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 items-stretch">
              {/* Card 1 */}
              <Reveal width="100%" className="h-full w-full">
                <div className={cardOuter + " h-full"}>
                  {/* Top Gold Line */}
                  <div className="w-[92%] mx-auto h-1 bg-wedding-accent rounded-b-sm mb-8 sm:mb-10" />

                  <div className={cardInner}>
                    {/* Icon Pill */}
                    <div className="mb-5 sm:mb-6 h-14 w-20 sm:h-16 sm:w-24 rounded-[2rem] bg-[#f9f5e6] flex items-center justify-center text-wedding-accent">
                      <span className="material-symbols-outlined text-3xl">mosque</span>
                    </div>

                    <h3 className="font-serif text-2xl md:text-3xl font-normal text-text-main tracking-wide mb-5 sm:mb-6">
                      HOLY MATRIMONY
                    </h3>

                    <div className="w-10 h-[2px] bg-[#f0f0f0] mb-5 sm:mb-6" />

                    {/* Date */}
                    <div className="mb-6 flex flex-col gap-1 w-full">
                      <span className="text-[9px] md:text-[10px] text-[#a3a3a3] font-bold uppercase tracking-[0.25em] font-montserrat">
                        Date & Time
                      </span>
                      <p className="text-text-main font-serif font-medium text-base md:text-lg tracking-wide mt-1">
                        SATURDAY, APRIL 25TH, 2026
                      </p>
                      <p className="text-[#8c8c8c] text-[10px] md:text-xs font-medium font-sans uppercase tracking-wider">
                        07:30 AM - 08:30 AM
                      </p>
                    </div>

                    {/* Location */}
                    <div className="mb-10 flex flex-col gap-1 w-full">
                      <span className="text-[9px] md:text-[10px] text-[#a3a3a3] font-bold uppercase tracking-[0.25em] font-montserrat">
                        Location
                      </span>
                      <p className="text-wedding-accent font-bold text-xs md:text-sm uppercase tracking-[0.15em] font-cinzel mt-1">
                        Kediaman Mempelai Wanita
                      </p>
                      <p className="text-[#8c8c8c] text-[10px] md:text-xs font-sans mt-0.5">
                        Kosambi, East Karawang
                      </p>
                    </div>

                    {/* Push button to bottom consistently */}
                    <div className="mt-auto w-full" />
                    <a 
                      href="https://maps.app.goo.gl/WyGPjTAVg6Q884Fh6?g_st=ic" 
                      target="_blank" 
                      rel="noopener noreferrer"
                    >
                    <button className="mt-2 px-7 sm:px-8 py-3 border border-[#d4b067] text-[#d4b067] text-[10px] font-bold uppercase tracking-[0.25em] rounded-[2px] hover:bg-[#d4b067] hover:text-white transition-all duration-300">
                      View Map
                    </button>
                    </a>
                    {/* Extra bottom breathing space */}
                    <div className="h-8 sm:h-10" />
                  </div>
                </div>
              </Reveal>

              {/* Card 2 */}
              <Reveal width="100%" delay={0.2} className="h-full w-full">
                <div className={cardOuter + " h-full"}>
                  <div className="w-[92%] mx-auto h-1 bg-wedding-accent rounded-b-sm mb-8 sm:mb-10" />

                  <div className={cardInner}>
                    <div className="mb-5 sm:mb-6 h-14 w-20 sm:h-16 sm:w-24 rounded-[2rem] bg-[#f9f5e6] flex items-center justify-center text-wedding-accent">
                      <span className="material-symbols-outlined text-3xl">celebration</span>
                    </div>

                    <h3 className="font-serif text-2xl md:text-3xl font-normal text-text-main tracking-wide mb-5 sm:mb-6">
                      WEDDING RECEPTION
                    </h3>

                    <div className="w-10 h-[2px] bg-[#f0f0f0] mb-5 sm:mb-6" />

                    <div className="mb-6 flex flex-col gap-1 w-full">
                      <span className="text-[9px] md:text-[10px] text-[#a3a3a3] font-bold uppercase tracking-[0.25em] font-montserrat">
                        Date & Time
                      </span>
                      <p className="text-text-main font-serif font-medium text-base md:text-lg tracking-wide mt-1">
                        SATURDAY, APRIL 25TH, 2026
                      </p>
                      <p className="text-[#8c8c8c] text-[10px] md:text-xs font-medium font-sans uppercase tracking-wider">
                        09:30 AM - 16:00 PM
                      </p>
                    </div>

                    <div className="mb-10 flex flex-col gap-1 w-full">
                      <span className="text-[9px] md:text-[10px] text-[#a3a3a3] font-bold uppercase tracking-[0.25em] font-montserrat">
                        Location
                      </span>
                      <p className="text-wedding-accent font-bold text-xs md:text-sm uppercase tracking-[0.15em] font-cinzel mt-1">
                        Kediaman Mempelai Wanita
                      </p>
                      <p className="text-[#8c8c8c] text-[10px] md:text-xs font-sans mt-0.5">
                        Kosambi, East Karawang
                      </p>
                    </div>

                    {/* Push button to bottom consistently */}
                    <div className="mt-auto w-full" />
                    <a 
                      href="https://maps.app.goo.gl/WyGPjTAVg6Q884Fh6?g_st=ic" 
                      target="_blank" 
                      rel="noopener noreferrer"
                    >
                    <button className="mt-2 px-7 sm:px-8 py-3 border border-[#d4b067] text-[#d4b067] text-[10px] font-bold uppercase tracking-[0.25em] rounded-[2px] hover:bg-[#d4b067] hover:text-white transition-all duration-300">
                      View Map
                    </button>
                    </a>
                    <div className="h-8 sm:h-10" />
                  </div>
                </div>
              </Reveal>
            </div>

            {/* Countdown */}
            <div className="flex flex-col items-center justify-center pt-10 sm:pt-12 lg:pt-14 mt-10 sm:mt-12">
              <Reveal>
                <p className="font-script text-3xl md:text-4xl text-gray-400 mb-8 md:mb-10 transform -rotate-2 text-center">
                  Counting down the days...
                </p>
              </Reveal>

              <div className="flex flex-wrap justify-center gap-3 sm:gap-5 md:gap-6 lg:gap-8">
                <TimeUnit value={timeLeft.days} label="Days" delay={0.1} />
                <TimeUnit value={timeLeft.hours} label="Hours" delay={0.2} />
                <TimeUnit value={timeLeft.minutes} label="Minutes" delay={0.3} />
                <TimeUnit value={timeLeft.seconds} label="Seconds" delay={0.4} />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Background Gradients */}
      <div className="pointer-events-none absolute bottom-0 left-0 h-[260px] w-[260px] sm:h-[320px] sm:w-[320px] md:h-[500px] md:w-[500px] bg-gradient-to-tr from-wedding-accent/5 to-transparent opacity-100 blur-[80px] md:blur-[100px] rounded-full" />
      <div className="pointer-events-none absolute top-0 right-0 h-[260px] w-[260px] sm:h-[320px] sm:w-[320px] md:h-[500px] md:w-[500px] bg-gradient-to-bl from-wedding-accent/5 to-transparent opacity-100 blur-[80px] md:blur-[100px] rounded-full" />
    </section>
  );
};

// --- GALLERY SECTION ---
export const GallerySection = () => {
    return (
        <section className="relative w-full py-16 md:py-20 px-4 md:px-12 lg:px-24 bg-background-light">
            {/* Masonry Layout using Tailwind Columns */}
            <div className="columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-4 md:gap-6 space-y-4 md:space-y-6">
                {ASSETS.gallery.map((img, idx) => (
                    <Reveal key={idx} delay={idx * 0.1}>
                        <div className="break-inside-avoid relative group overflow-hidden rounded-lg shadow-sm hover:shadow-xl transition-all duration-500 cursor-pointer">
                            <div className={`${img.aspect} w-full overflow-hidden`}>
                                <img
                                    alt="Wedding gallery moment"
                                    className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                                    src={img.src}
                                />
                            </div>
                            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-500"></div>
                        </div>
                    </Reveal>
                ))}
            </div>

            <Reveal width="100%" className="flex justify-center mt-12 md:mt-16 opacity-40">
                 <span className="material-symbols-outlined text-3xl text-wedding-accent">filter_vintage</span>
            </Reveal>
        </section>
    );
};

// --- GIFT SECTION ---
export const GiftSection = () => {
    const [showMap, setShowMap] = useState(false);

    return (
        <section className="w-full px-4 py-12 md:py-20 flex flex-col items-center bg-background-light">
            <Reveal width="100%">
                 <div className="w-full max-w-4xl flex flex-col gap-12 md:gap-16 mx-auto">
                    <div className="text-center space-y-4 md:space-y-6">
                        <div className="flex flex-col items-center gap-2">
                            <span className="text-primary tracking-[0.2em] uppercase text-xs font-bold font-montserrat">Wedding Gift</span>
                            <h1 className="text-3xl md:text-5xl font-cinzel font-bold text-text-main">A Token of Love</h1>
                            <div className="h-1 w-20 bg-primary/40 mt-2 rounded-full"></div>
                        </div>
                        <p className="max-w-2xl mx-auto text-text-muted text-base md:text-lg leading-relaxed font-montserrat">
                            Your presence at our wedding is the greatest gift of all. However, if you wish to honor us with a gift, a contribution to our future together would be warmly appreciated.
                        </p>
                    </div>

                    <div className="flex justify-center w-full">
                        {/* Premium Dark Card Style */}
                        <div className="group relative flex flex-col justify-between h-[220px] md:h-[240px] w-full max-w-lg rounded-xl bg-gradient-to-br from-[#2c2c2c] to-[#1a1a1a] p-6 md:p-8 shadow-xl border border-gray-800 transition-all hover:-translate-y-1 hover:shadow-2xl overflow-hidden text-white">
                            <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-transparent opacity-30"></div>
                            
                            <div className="flex justify-between items-start relative z-10">
                                <div className="flex items-center gap-2">
                                    <span className="material-symbols-outlined text-primary">savings</span>
                                    <h3 className="font-cinzel text-lg md:text-xl font-bold text-white">Honeyfund</h3>
                                </div>
                                <span className="material-symbols-outlined text-white/50 text-2xl">contactless</span>
                            </div>

                            <div className="relative z-10 py-4">
                                <div className="flex flex-col gap-1">
                                    <label className="text-[10px] uppercase tracking-widest text-white/60 font-bold font-montserrat">BCA / Account</label>
                                   <div className="flex items-center justify-between gap-2">
                                    <p className="font-mono text-lg sm:text-2xl text-white tracking-widest truncate">
                                      574 582 150 0
                                    </p>
                                    <button
                                      aria-label="Copy Account Number"
                                      onClick={() => navigator.clipboard.writeText("574 582 150 0")}
                                      className="flex items-center justify-center p-2 rounded-lg text-primary hover:bg-white/10 active:scale-95 transition-all"
                                    >
                                      <span className="material-symbols-outlined text-[20px]">
                                        content_copy
                                      </span>
                                    </button>
                                  </div>
                                </div>
                            </div>

                            <div className="flex justify-between items-end relative z-10">
                                <div>
                                    <label className="text-[10px] uppercase tracking-widest text-white/60 font-bold font-montserrat">Reference</label>
                                    <p className="font-medium text-white mt-0.5 font-montserrat">Rara Tiara / Wedding Gift</p>
                                </div>
                                <div className="text-right">
                                    <p className="font-script text-xl md:text-2xl text-primary">Thank You</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="flex flex-col items-center justify-center gap-6 py-8 border-t border-gray-200">
                        <p className="text-text-muted text-center font-montserrat text-sm md:text-base">Prefer to send a physical gift?</p>
                        <button 
                            onClick={() => setShowMap(true)}
                            className="group flex items-center gap-3 pl-1 pr-4 py-1 rounded-full bg-white border border-gray-200 hover:border-primary/50 transition-all shadow-sm"
                        >
                            <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                                <span className="material-symbols-outlined text-[18px]">location_on</span>
                            </div>
                            <span className="text-sm font-medium text-text-main font-montserrat">View Shipping Address</span>
                        </button>
                    </div>
                 </div>
            </Reveal>

            {/* Map Modal */}
            {showMap && (
                <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm" onClick={() => setShowMap(false)}>
                    <div className="relative w-full max-w-3xl bg-white rounded-xl overflow-hidden shadow-2xl animate-in fade-in zoom-in duration-300" onClick={e => e.stopPropagation()}>
                        <div className="flex justify-between items-center p-4 border-b bg-background-light">
                            <h3 className="font-cinzel text-lg font-bold text-text-main">Shipping Address</h3>
                            <button onClick={() => setShowMap(false)} className="text-gray-500 hover:text-red-500 transition-colors p-1 rounded-full hover:bg-gray-100">
                                <span className="material-symbols-outlined">close</span>
                            </button>
                        </div>
                        <div className="aspect-video w-full bg-gray-100">
                            <iframe 
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3965.4141651835657!2d107.37663780000001!3d-6.340369599999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69774301bda70b%3A0xad13c55975ceeb0e!2sTK%20HARAPAN%20MULIA!5e0!3m2!1sid!2sid!4v1773028580442!5m2!1sid!2sid" 
                                width="100%" 
                                height="100%" 
                                style={{ border: 0 }} 
                                allowFullScreen 
                                loading="lazy" 
                                referrerPolicy="no-referrer-when-downgrade"
                            ></iframe>
                        </div>
                    </div>
                </div>
            )}
        </section>
    );
};

// --- FOOTER SECTION ---
export const FooterSection = () => {
    return (
        <footer className="relative w-full overflow-hidden bg-[#1a1a1a] text-white">
            <div className="absolute inset-0 z-0 opacity-20">
                <img alt="Abstract dark floral wedding texture background" className="w-full h-full object-cover" src={ASSETS.footer.texture} />
            </div>
            <div className="absolute inset-0 z-0 bg-gradient-to-t from-[#1a1a1a] via-[#1a1a1a]/90 to-transparent"></div>
            
            <div className="relative z-10 w-full max-w-4xl mx-auto px-6 py-16 md:py-32 flex flex-col items-center text-center space-y-8 md:space-y-10">
                <Reveal>
                    <div className="flex flex-col items-center space-y-6 md:space-y-10">
                        <div className="text-primary/60 mb-2">
                            <span className="material-symbols-outlined text-3xl md:text-4xl">local_florist</span>
                        </div>
                        <div className="space-y-4">
                            <h2 className="font-serif text-2xl md:text-4xl lg:text-5xl font-medium tracking-wide text-white/90">
                                Thank You for joining us
                            </h2>
                            <p className="font-serif italic text-white/60 text-base md:text-xl max-w-lg mx-auto leading-relaxed">
                                For your love, prayers, and for sharing in the beginning of our new chapter together.
                            </p>
                        </div>
                    </div>
                </Reveal>

                <Reveal delay={0.2} width="100%">
                     <div className="py-6">
                        <h1 className="font-merriweather text-4xl md:text-8xl lg:text-8xl text-primary leading-tight transform origin-center" style={{ textShadow: "0 0 20px rgba(236, 182, 19, 0.3)" }}>
                            Ikhsan & Rara
                        </h1>
                    </div>
                </Reveal>

                <Reveal delay={0.4}>
                     <div className="flex items-center justify-center gap-4 w-full max-w-xs opacity-50 mx-auto">
                        <div className="h-[1px] bg-primary flex-1 w-12 md:w-16"></div>
                        <span className="material-symbols-outlined text-primary text-sm">favorite</span>
                        <div className="h-[1px] bg-primary flex-1 w-12 md:w-16"></div>
                    </div>
                    <div className="pt-6">
                        <span className="inline-block px-4 md:px-6 py-2 rounded-full border border-primary/30 bg-primary/5 backdrop-blur-sm text-primary font-display font-semibold tracking-[0.2em] text-xs md:text-base uppercase hover:bg-primary/10 transition-colors cursor-default">
                            #IkhsanRaraWedding
                        </span>
                    </div>
                </Reveal>

                <div className="mt-12 md:mt-16 pt-8 md:pt-10 w-full border-t border-white/10 flex flex-col items-center gap-3">
                    <p className="text-white/40 text-xs md:text-sm font-light tracking-wide font-sans">
                        © 2026 AI. All Rights Reserved.
                    </p>
                    {/* <div className="flex gap-4 text-white/40">
                        <button className="hover:text-primary transition-colors"><span className="material-symbols-outlined text-lg">photo_camera</span></button>
                        <button className="hover:text-primary transition-colors"><span className="material-symbols-outlined text-lg">share</span></button>
                        <button className="hover:text-primary transition-colors"><span className="material-symbols-outlined text-lg">mail</span></button>
                    </div> */}
                </div>
            </div>
            <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary/50 to-transparent opacity-30"></div>
        </footer>
    );
};