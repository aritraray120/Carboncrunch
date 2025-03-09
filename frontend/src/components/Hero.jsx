import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { assets } from "../assets/assets";

// Register the ScrollTrigger plugin with GSAP
gsap.registerPlugin(ScrollTrigger);

function Hero() {
  const heroRef = useRef(null); // Reference to the Hero section element

  useEffect(() => {
    // Create a GSAP context to manage ScrollTrigger within the Hero section
    const ctx = gsap.context(() => {
      // Fade out the Hero component as the next section comes into view
      gsap.to(heroRef.current, {
        opacity: 0, // Fade the Hero section to transparent
        scrollTrigger: {
          trigger: heroRef.current, // Trigger based on the Hero section element
          start: "top top", // Animation starts when the top of Hero section reaches the top of the viewport
          end: "bottom top", // Animation ends when the bottom of Hero section reaches the top of the viewport
          scrub: 1, // Smooth animation that scrubs the opacity based on scroll
          markers: false, // Optional: Set to true to show markers for debugging scroll trigger
        },
      });
    }, heroRef);

    // Refresh ScrollTrigger after mounting
    ScrollTrigger.refresh();
    
    // Cleanup function to revert the GSAP context when the component unmounts
    return () => ctx.revert();
  }, []); // Empty dependency array to run only once when the component mounts

  return (
    <div
      ref={heroRef} // Attach the reference to the Hero section
      className="flex flex-col md:flex-row justify-center items-center min-h-screen w-full bg-cover bg-center bg-no-repeat overflow-hidden px-[80px] h-[820px] pb-[90px] sticky top-0 z-10" // Sticky positioning and z-index for Hero section
      style={{
        backgroundImage: `url(${assets.global_map})`, // Set the background image using a global map asset
        backgroundSize: 'cover', // Ensure the background image covers the entire Hero section
        backgroundPosition: 'center', // Center the background image
        width: '100vw', // Set the width to full viewport width
      }}
    >
      {/* Text Section - This part will display the text content of the Hero section */}
      <div className="text-center md:text-left w-full md:w-1/2 px-4">
        {/* Main Heading */}
        <p className="text-[#2D2D2D] font-[700] text-[36px] sm:text-[48px] md:text-[64px] lg:text-[81px] leading-[40px] sm:leading-[55px] md:leading-[72px] lg:leading-[92px]">
          GHG Accounting <br className="md:hidden" /> Scope 1, Scope 2, <br className="md:hidden" /> Scope 3
        </p>
        
        {/* Subheading */}
        <p className="text-[#2D2D2D] font-[500] text-[16px] sm:text-[18px] md:text-[20px] lg:text-[24px] leading-[22px] sm:leading-[26px] md:leading-[28px] lg:leading-[31px] mt-[20px] md:mt-[27px]">
          Track, minimize, offset, and report your carbon emissions <br className="md:hidden" />
          effortlessly to drive faster decarbonization progress.
        </p>
      </div>

      {/* Image Section - This part will display the image alongside the text */}
      <div className="md:w-1/2 flex justify-center md:justify-end">
        <img
          src={assets.glass_world} // Image asset for the Hero section
          alt="Glass World" // Alt text for the image
          className="w-[80%] sm:w-[60%] md:w-[80%] lg:w-auto max-w-[400px] md:max-w-none mt-8 md:mt-0"
        />
      </div>
    </div>
  );
}

export default Hero;
