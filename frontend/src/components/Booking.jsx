import { assets } from "../assets/assets"; // Import assets

function Booking() {
  return (
    <div
      className="relative flex justify-center items-center min-h-screen bg-cover bg-center px-4"
      style={{ backgroundImage: `url(${assets.good_world})` }} // Background image set from assets
    >
      {/* Overlay with reduced opacity to darken the background */}
      <div className="absolute inset-0 bg-black opacity-50 z-0"></div>

      {/* Content Container - Positioned on top of the background with text and buttons */}
      <div className="relative w-full max-w-[95%] sm:max-w-[90%] md:max-w-[80%] lg:max-w-[1239px] h-auto text-center px-4 sm:px-6 md:px-8 z-10">
        
        {/* Text Section - Heading and subheading */}
        <div className="mb-[30px] sm:mb-[35px] md:mb-[42px]">
          {/* Heading: Main call-to-action */}
          <span className="block text-[22px] sm:text-[26px] md:text-[32px] leading-[30px] sm:leading-[36px] md:leading-[40px] font-bold text-white">
            Ready to take meaningful action on your ESG journey?
          </span>
          {/* Subtext: Brief description under the heading */}
          <span className="block text-[14px] sm:text-[15px] md:text-[16px] leading-[20px] sm:leading-[22px] md:leading-[24px] font-normal text-white mt-3 sm:mt-4">
            Drive impact with accurate carbon accounting, reduction strategies, and transparent reporting.
          </span>
        </div>

        {/* Button Section - Two buttons below the text */}
        <div className="flex flex-col sm:flex-row gap-[12px] sm:gap-[16px] justify-center w-full max-w-[300px] sm:max-w-none mx-auto">
          {/* Login Button */}
          <button className="h-[45px] sm:h-[48px] w-full sm:w-[140px] md:w-[150px] rounded-[6px] bg-[#D6FFD0] px-[18px] sm:px-[22px] py-[8px] sm:py-[10px] text-[14px] sm:text-[15px] md:text-[16px] leading-[19px] sm:leading-[21px] font-bold text-[#28B30E] transition-transform transform hover:scale-105 active:scale-95 duration-300 ease-in-out">
            Login
          </button>
          {/* Book Demo Button */}
          <button className="h-[45px] sm:h-[48px] w-full sm:w-[140px] md:w-[150px] rounded-[6px] bg-[#28B30E] px-[18px] sm:px-[22px] py-[8px] sm:py-[10px] text-[14px] sm:text-[15px] md:text-[16px] leading-[19px] sm:leading-[21px] font-bold text-black transition-transform transform hover:scale-105 active:scale-95 duration-300 ease-in-out">
            Book Demo
          </button>
        </div>
      </div>
    </div>
  );
}

export default Booking;
