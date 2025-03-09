
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { assets } from "../assets/assets";

gsap.registerPlugin(ScrollTrigger);

function Hero() {
  const heroRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Fade out the Hero component as the next section comes into view
      gsap.to(heroRef.current, {
        opacity: 0, // Fade to transparent
        scrollTrigger: {
          trigger: heroRef.current, // Trigger based on the Hero section
          start: "top top", // When the top of the hero section reaches the top of the viewport
          end: "bottom top", // When the bottom of the hero section reaches the top of the viewport
          scrub: 1, // Smoothly scrub the animation with scroll
          markers: false, // Optional: turn on markers for debugging
        },
      });
    }, heroRef);

    ScrollTrigger.refresh();
    return () => ctx.revert();
  }, []);

  return (
    <div
      ref={heroRef}
      className="flex flex-col md:flex-row justify-center items-center min-h-screen w-full bg-cover bg-center bg-no-repeat overflow-hidden px-[80px] h-[820px] pb-[90px] sticky top-0 z-10" // Sticky and z-index added here
      style={{
        backgroundImage: `url(${assets.global_map})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        width: '100vw',
      }}
    >
      {/* Text Section */}
      <div className="text-center md:text-left w-full md:w-1/2 px-4">
        <p className="text-[#2D2D2D] font-[700] text-[36px] sm:text-[48px] md:text-[64px] lg:text-[81px] leading-[40px] sm:leading-[55px] md:leading-[72px] lg:leading-[92px]">
          GHG Accounting <br className="md:hidden" /> Scope 1, Scope 2, <br className="md:hidden" /> Scope 3
        </p>
        <p className="text-[#2D2D2D] font-[500] text-[16px] sm:text-[18px] md:text-[20px] lg:text-[24px] leading-[22px] sm:leading-[26px] md:leading-[28px] lg:leading-[31px] mt-[20px] md:mt-[27px]">
          Track, minimize, offset, and report your carbon emissions <br className="md:hidden" />
          effortlessly to drive faster decarbonization progress.
        </p>
      </div>

      {/* Image Section */}
      <div className="md:w-1/2 flex justify-center md:justify-end">
        <img
          src={assets.glass_world}
          alt="Glass World"
          className="w-[80%] sm:w-[60%] md:w-[80%] lg:w-auto max-w-[400px] md:max-w-none mt-8 md:mt-0"
        />
      </div>
    </div>
  );
}

export default Hero;



