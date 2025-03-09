import { assets } from "../assets/assets"; // Import assets (like images) used in this component

function Why() {
  return (
    <div className="flex flex-col lg:flex-row justify-center gap-12 lg:gap-[180px] mt-20 lg:mt-[200px] px-6">
      {/* Text Section - Explains the heading and subheading */}
      <div className="text-center lg:text-left">
        {/* Title "Why Carboncrunch" */}
        <p className="mb-[23px] text-xl lg:text-2xl font-bold text-[#239C0C]">
          Why Carboncrunch
        </p>
        {/* Main Heading */}
        <p className="mb-[16px] text-3xl lg:text-5xl font-bold text-[#2D2D2D] leading-[55px]">
          Leading Sustainability <br className="hidden lg:block" /> with Carboncrunch
        </p>
        {/* Subheading explaining GHG accounting */}
        <p className="text-lg lg:text-2xl font-medium text-[#3A3A3A] leading-[31px]">
          GHG (Greenhouse Gas) Accounting is a framework <br className="hidden lg:block" />
          used to measure and report greenhouse gas <br className="hidden lg:block" />
          emissions.
        </p>
      </div>

      {/* Boxed Information - Displayed as cards with different opacity for emphasis */}
      <div className="flex flex-col justify-between h-full space-y-8">
        {/* First Div - Regulatory Compliance and Reporting */}
        <div className="flex flex-col items-center text-center lg:items-start lg:text-left">
          <img src={assets.box_img} alt="" className="mb-4 lg:mb-6" />
          <p className="text-xl lg:text-2xl font-bold text-[#28B30E] mb-2 lg:mb-4">
            Regulatory Compliance and Reporting
          </p>
          <p className="text-sm lg:text-base text-[#2D2D2D]">
            Governments and regulatory bodies worldwide are implementing stricter climate <br className="hidden lg:block" />
            policies and carbon reporting requirements
          </p>
        </div>

        {/* Second Div - Meeting Sustainability Goals and Net-Zero Targets */}
        <div className="flex flex-col items-center text-center lg:items-start lg:text-left opacity-80">
          <img src={assets.box_img} alt="" className="mb-4 lg:mb-6" />
          <p className="text-xl lg:text-2xl font-bold text-[#28B30E] mb-2 lg:mb-4">
            Meeting Sustainability Goals and Net-Zero Targets
          </p>
          <p className="text-sm lg:text-base text-[#2D2D2D]">
            Governments and regulatory bodies worldwide are implementing stricter climate <br className="hidden lg:block" />
            policies and carbon reporting requirements
          </p>
        </div>

        {/* Third Div - Cost Savings and Operational Efficiency */}
        <div className="flex flex-col items-center text-center lg:items-start lg:text-left opacity-60">
          <img src={assets.box_img} alt="" className="mb-4 lg:mb-6" />
          <p className="text-xl lg:text-2xl font-bold text-[#28B30E] mb-2 lg:mb-4">
            Cost Savings and Operational Efficiency
          </p>
          <p className="text-sm lg:text-base text-[#2D2D2D]">
            Governments and regulatory bodies worldwide are implementing stricter climate <br className="hidden lg:block" />
            policies and carbon reporting requirements
          </p>
        </div>
      </div>
    </div>
  );
}

export default Why;
