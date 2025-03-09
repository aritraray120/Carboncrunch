import { assets } from "../assets/assets";

function Why() {
  return (
    <div className="flex flex-col lg:flex-row justify-center gap-12 lg:gap-[180px] mt-20 lg:mt-[200px] px-6">
      <div className="text-center lg:text-left">
        <p className="mb-[23px] text-xl lg:text-2xl font-bold text-[#239C0C]">
          Why Carboncrunch
        </p>
        <p className="mb-[16px] text-3xl lg:text-5xl font-bold text-[#2D2D2D] leading-[55px]">
          Leading Sustainability <br className="hidden lg:block" /> with Carboncrunch
        </p>
        <p className="text-lg lg:text-2xl font-medium text-[#3A3A3A] leading-[31px]">
          GHG (Greenhouse Gas) Accounting is a framework <br className="hidden lg:block" />
          used to measure and report greenhouse gas <br className="hidden lg:block" />
          emissions.
        </p>
      </div>

      <div className="flex flex-col justify-between h-full space-y-8">
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

        <div className="flex flex-col items-center text-center lg:items-start lg:text-left">
          <img src={assets.box_img} alt="" className="mb-4 lg:mb-6" />
          <p className="text-xl lg:text-2xl font-bold text-[#28B30E] mb-2 lg:mb-4">
            Meeting Sustainability Goals and Net-Zero Targets
          </p>
          <p className="text-sm lg:text-base text-[#2D2D2D]">
            Governments and regulatory bodies worldwide are implementing stricter climate <br className="hidden lg:block" />
            policies and carbon reporting requirements
          </p>
        </div>

        <div className="flex flex-col items-center text-center lg:items-start lg:text-left">
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
