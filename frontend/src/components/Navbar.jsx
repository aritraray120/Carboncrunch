

function Navbar() {
    return (

        <div class="flex justify-end gap-[20%]">
  <div class="flex gap-[60px]">
    <a href="#home" class="text-center text-[16px] leading-[21px] font-[500] text-[#2D2D2D]">Home</a>
    <a href="#services" class="text-center text-[16px] leading-[21px] font-[500] text-[#2D2D2D]">Services</a>
    <a href="#blog" class="text-center text-[16px] leading-[21px] font-[500] text-[#2D2D2D]">Blog</a>
    <a href="#about" class="text-center text-[16px] leading-[21px] font-[500] text-[#2D2D2D]">About Us</a>
    <a href="#contact" class="text-center text-[16px] leading-[21px] font-[500] text-[#2D2D2D]">Contact</a>
  </div>

  <div class="flex gap-[10px]">
    <button class="h-[41px] w-[134px] rounded-[6px] bg-[#D6FFD0] p-[10px_22px] text-[16px] leading-[21px] font-[700] text-[#28B30E]">Login</button>
    <button class="h-[41px] w-[136px] rounded-[6px] bg-[#28B30E] p-[10px_22px] text-[16px] leading-[21px] font-[700] text-[#000000]">Book Demo</button>
  </div>
</div>



    );
}

export default Navbar;