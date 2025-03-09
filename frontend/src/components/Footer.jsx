import { assets } from "../assets/assets"; // Import assets

function Footer() {
  return (
    <div className="bg-[#222222] flex flex-col items-center py-[40px] pt-[138px] pb-[140px] w-full min-h-[320px] relative">
      <div className="flex flex-col max-w-[1100px] w-full px-4 sm:px-6 lg:px-0">
        {/* Top Section: Subscription & Links */}
        <div className="flex flex-col md:flex-row justify-between items-start w-full gap-10">
          {/* Left Section: Subscription */}
          <div className="flex flex-col items-start gap-[12px] w-full md:w-1/2 relative md:mt-[-86px]">
            <img src={assets.arrow_img} alt="Arrow" className="relative z-10" />

            <span className="text-[16px] font-[600] leading-[21px] text-white">
              Subscribe to our mailing
            </span>

            {/* Input with Email Icon & Subscribe Button */}
            <div className="relative w-full max-w-[417px]">
              <img
                src={assets.email_img}
                alt="Email Icon"
                className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5"
              />
              <input
                type="text"
                placeholder="Enter email"
                className="w-full h-[57px] pl-12 pr-[100px] py-[11px] rounded-[12px] bg-white border border-gray-300 text-black focus:outline-none"
              />
              <button className="absolute right-2 top-1/2 -translate-y-1/2 bg-[#28B30E] text-black px-4 py-2 rounded-[10px] font-bold transition-transform transform hover:scale-105 active:scale-95 duration-300 ease-in-out">
                Subscribe
              </button>
            </div>

            <img src={assets.logo} alt="Logo" className="mt-[12px]" />
          </div>

          {/* Right Section: Links */}
          <div className="w-full md:w-1/2 flex flex-col">
            <img src={assets.divider_img} alt="Divider" className="w-full my-4 hidden md:block" />

            {/* Grid Links - Fully Responsive */}
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 md:gap-[40px]">
              <div className="flex flex-col gap-[12px]">
                <span className="text-[16px] font-[500] text-[#989898] cursor-pointer">Home</span>
                <span className="text-[16px] font-[500] text-[#989898] cursor-pointer">About</span>
                <span className="text-[16px] font-[500] text-[#989898] cursor-pointer">How it works</span>
                <span className="text-[16px] font-[500] text-[#989898] cursor-pointer">Contact us</span>
              </div>

              <div className="flex flex-col gap-[12px]">
                <span className="text-[16px] font-[500] text-[#989898] cursor-pointer">FAQs</span>
                <span className="text-[16px] font-[500] text-[#989898] cursor-pointer">Start your transaction</span>
                <span className="text-[16px] font-[500] text-[#989898] cursor-pointer">Why choose us</span>
              </div>

              <div className="flex flex-col gap-[12px]">
                <span className="text-[16px] font-[500] text-[#989898] cursor-pointer">Businesses</span>
                <span className="text-[16px] font-[500] text-[#989898] cursor-pointer">Privacy Policy</span>
                <span className="text-[16px] font-[500] text-[#989898] cursor-pointer">Refund Policy</span>
                <span className="text-[16px] font-[500] text-[#989898] cursor-pointer">Terms & Conditions</span>
              </div>

              <div className="flex flex-col gap-[12px]">
                <span className="text-[16px] font-[500] text-[#989898] cursor-pointer">Email</span>
                <span className="text-[16px] font-[500] text-[#989898] cursor-pointer">Facebook</span>
                <span className="text-[16px] font-[500] text-[#989898] cursor-pointer">X - Twitter</span>
                <span className="text-[16px] font-[500] text-[#989898] cursor-pointer">Instagram</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section: Copyright & Socials */}
        <div className="mt-[32px] flex flex-col-reverse md:flex-row items-center justify-center md:justify-between w-full gap-6 md:gap-0">
          <span className="text-[16px] font-[500] text-white text-center md:flex-1">
            © Carboncrunch. All Rights Reserved.
          </span>
          <img src={assets.socials_img} alt="Social Icons" className="w-[160px] md:w-auto" />
        </div>
      </div>
    </div>
  );
}

export default Footer;

