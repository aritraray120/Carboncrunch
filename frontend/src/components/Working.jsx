import { useState } from "react";

function Working() {
  const [activeCard, setActiveCard] = useState(null);

  return (
    <div className="mt-[320px] mb-[200px] px-4 md:px-10">
      {/* Heading */}
      <div className="flex flex-col text-center mb-[69px]">
        <span className="text-[#239C0C] font-bold text-[20px] leading-[26px] mb-[25px]">
          How It Works?
        </span>
        <span className="text-[#2D2D2D] font-bold text-[36px] md:text-[48px] leading-[45px] md:leading-[55px] mb-[16px]">
          Getting Started is Easy
        </span>
        <span className="text-[#2D2D2D] font-semibold text-[18px] md:text-[24px] leading-[26px] md:leading-[31px]">
          How CarbonCrunch SAAS Works
        </span>
      </div>

      {/* Cards Section */}
      <div className="flex flex-col lg:flex-row gap-[88px] lg:gap-[38px] justify-center items-center">
        {[1, 2, 3].map((num) => (
          <div
            key={num}
            className="relative flex flex-col w-full max-w-[393px] p-3 md:p-5 cursor-pointer transition-all duration-300"
            onClick={() => setActiveCard(num)}
          >
            {/* Green Line - Aligned to Start of Text */}
            {activeCard === num && (
              <div className="absolute top-0 left-[9.5px] md:left-[20.0px] w-[40%] h-[4px] bg-[#28B30E] transition-all duration-300"></div>
            )}
            <span
              className={`font-extrabold text-[16px] leading-[22px] mb-[16px] transition-all duration-300 ${
                activeCard === num ? "text-[#28B30E]" : "text-black"
              }`}
            >
              0{num}
            </span>
            <span
              className={`font-bold text-[16px] leading-[18px] mb-[8px] transition-all duration-300 ${
                activeCard === num ? "text-[#28B30E]" : "text-black"
              }`}
            >
              Track and manage your Net Zero Pathway
            </span>
            <span className="text-black font-normal text-[16px] leading-[21px] whitespace-normal">
              Set decarbonisation targets, obtain insights on the amount of emissions to be emitted by the target year, analyze the year-on-year progress against the targets, and gain valuable analytics.
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Working;
