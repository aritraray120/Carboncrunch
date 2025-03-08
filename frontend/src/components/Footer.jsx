

function Footer() {
  return (
   
    <div className="bg-[#222222] flex flex-col items-center py-[40px] w-full">
  <div className="flex justify-between max-w-[1100px] w-full">
    {/* Left Section: Subscription */}
    <div className="flex flex-col items-start gap-[12px] w-1/2">
      <img src="" alt="" />
      <span className="text-[16px] font-[600] leading-[21px] text-[#FFFFFF]">
        Subscribe to our mailing
      </span>
      <input
        type="email"
        placeholder="Enter email"
        className="w-full max-w-[417px] h-[57px] px-[13px] py-[11px] rounded-[12px] bg-[#FFFFFF] border border-gray-300"
      />
      <img src="" alt="" />
    </div>

    {/* Right Section: Links */}
    <div className="grid grid-cols-4 gap-x-[24px] gap-y-[24px] w-1/2">
      <div className="flex flex-col gap-[8px]">
        <span className="text-[16px] font-[500] leading-[126.7%] text-[#989898]">Home</span>
        <span className="text-[16px] font-[500] leading-[126.7%] text-[#989898]">About</span>
        <span className="text-[16px] font-[500] leading-[126.7%] text-[#989898]">How it works</span>
        <span className="text-[16px] font-[500] leading-[126.7%] text-[#989898]">Contact us</span>
      </div>

      <div className="flex flex-col gap-[8px]">
        <span className="text-[16px] font-[500] leading-[126.7%] text-[#989898]">FAQs</span>
        <span className="text-[16px] font-[500] leading-[126.7%] text-[#989898]">Start your transaction</span>
        <span className="text-[16px] font-[500] leading-[126.7%] text-[#989898]">Why choose us</span>
      </div>

      <div className="flex flex-col gap-[8px]">
        <span className="text-[16px] font-[500] leading-[126.7%] text-[#989898]">Businesses</span>
        <span className="text-[16px] font-[500] leading-[126.7%] text-[#989898]">Privacy Policy</span>
        <span className="text-[16px] font-[500] leading-[126.7%] text-[#989898]">Refund Policy</span>
        <span className="text-[16px] font-[500] leading-[126.7%] text-[#989898]">Terms & conditions</span>
      </div>

      <div className="flex flex-col gap-[8px]">
        <span className="text-[16px] font-[500] leading-[126.7%] text-[#989898]">Email</span>
        <span className="text-[16px] font-[500] leading-[126.7%] text-[#989898]">Facebook</span>
        <span className="text-[16px] font-[500] leading-[126.7%] text-[#989898]">X - Twitter</span>
        <span className="text-[16px] font-[500] leading-[126.7%] text-[#989898]">Instagram</span>
      </div>
    </div>
  </div>

  <div className="mt-[32px] flex w-full max-w-[1100px] items-center relative">
    <span className="absolute left-1/2 -translate-x-1/2 transform text-[16px] font-[500] leading-[126.7%] text-[#FFFFFF]">
      © Carboncrunch. All Rights Reserved.
    </span>
    <img src="" alt="" className="ml-auto" />
  </div>
</div>

  );
}

export default Footer;
