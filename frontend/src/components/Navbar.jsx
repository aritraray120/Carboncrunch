import { useState } from "react";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative flex w-full items-center px-4 md:px-6 py-2 mt-[55px]">
      {/* Hamburger Menu - Visible Only on <= 1160px */}
      <button 
        className="xl:hidden p-2 text-2xl font-bold z-50" 
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? "✖" : "☰"}
      </button>

      {/* Absolute Centered Nav Links - Hidden on <= 1160px */}
      <div className="hidden xl:flex absolute left-1/2 transform -translate-x-1/2 gap-[60px]">
        <a href="#home" className="text-[16px] font-[500] text-[#2D2D2D]">Home</a>
        <a href="#services" className="text-[16px] font-[500] text-[#2D2D2D]">Services</a>
        <a href="#blog" className="text-[16px] font-[500] text-[#2D2D2D]">Blog</a>
        <a href="#about" className="text-[16px] font-[500] text-[#2D2D2D]">About Us</a>
        <a href="#contact" className="text-[16px] font-[500] text-[#2D2D2D]">Contact</a>
      </div>

      {/* Buttons - Always on the Right */}
      <div className="flex gap-2 ml-auto">
        <button className="h-[41px] w-[134px] rounded-[6px] bg-[#D6FFD0] p-2 text-[16px] font-[700] text-[#28B30E]">
          Login
        </button>
        <button className="h-[41px] w-[136px] rounded-[6px] bg-[#28B30E] p-2 text-[16px] font-[700] text-[#000000]">
          Book Demo
        </button>
      </div>

      {/* Mobile Menu (Visible Only When Open) */}
      {isOpen && (
        <div className="absolute top-16 left-0 w-full bg-white shadow-lg flex flex-col items-center gap-4 py-4 xl:hidden">
          <a href="#home" className="text-[16px] font-[500] text-[#2D2D2D]">Home</a>
          <a href="#services" className="text-[16px] font-[500] text-[#2D2D2D]">Services</a>
          <a href="#blog" className="text-[16px] font-[500] text-[#2D2D2D]">Blog</a>
          <a href="#about" className="text-[16px] font-[500] text-[#2D2D2D]">About Us</a>
          <a href="#contact" className="text-[16px] font-[500] text-[#2D2D2D]">Contact</a>
        </div>
      )}
    </div>
  );
}

export default Navbar;
