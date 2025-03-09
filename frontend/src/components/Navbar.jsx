import { useState } from "react";

function Navbar() {
  // State to handle the visibility of the mobile menu
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative flex w-full items-center px-4 md:px-6 py-2 mt-[55px]">
      
      {/* Hamburger Menu - Toggle visibility on mobile (<= 1160px) */}
      <button 
        className="xl:hidden p-2 text-2xl font-bold z-50" 
        onClick={() => setIsOpen(!isOpen)} // Toggle the menu visibility on click
      >
        {isOpen ? "✖" : "☰"} {/* Display "✖" when the menu is open, otherwise "☰" */}
      </button>

      {/* Centered Navigation Links - Visible only on large screens (>= 1160px) */}
      <div className="hidden xl:flex absolute left-1/2 transform -translate-x-1/2 gap-[60px]">
        {/* These links are displayed in the center for large screens (xl and above) */}
        <a href="#home" className="text-[16px] font-[500] text-[#2D2D2D]">Home</a>
        <a href="#services" className="text-[16px] font-[500] text-[#2D2D2D]">Services</a>
        <a href="#blog" className="text-[16px] font-[500] text-[#2D2D2D]">Blog</a>
        <a href="#about" className="text-[16px] font-[500] text-[#2D2D2D]">About Us</a>
        <a href="#contact" className="text-[16px] font-[500] text-[#2D2D2D]">Contact</a>
      </div>

      {/* Buttons - Always visible on the right side */}
      <div className="flex gap-2 ml-auto">
        {/* Login Button */}
        <button className="h-[41px] w-[134px] rounded-[6px] bg-[#D6FFD0] p-2 text-[16px] font-[700] text-[#28B30E] transition-transform transform hover:scale-105 active:scale-95 duration-300 ease-in-out">
          Login
        </button>
        {/* Book Demo Button */}
        <button className="h-[41px] w-[136px] rounded-[6px] bg-[#28B30E] p-2 text-[16px] font-[700] text-[#000000] transition-transform transform hover:scale-105 active:scale-95 duration-300 ease-in-out">
          Book Demo
        </button>
      </div>

      {/* Mobile Menu - Displayed when the hamburger menu is open */}
      {isOpen && (
        <div className="absolute top-16 left-0 w-full bg-white shadow-lg flex flex-col items-center gap-4 py-4 xl:hidden z-50">
          {/* These links are displayed only when the mobile menu is open */}
          <a href="#home" className="text-[16px] font-[500] text-[#2D2D2D] hover:text-[#28B30E] transition-colors duration-300">Home</a>
          <a href="#services" className="text-[16px] font-[500] text-[#2D2D2D] hover:text-[#28B30E] transition-colors duration-300">Services</a>
          <a href="#blog" className="text-[16px] font-[500] text-[#2D2D2D] hover:text-[#28B30E] transition-colors duration-300">Blog</a>
          <a href="#about" className="text-[16px] font-[500] text-[#2D2D2D] hover:text-[#28B30E] transition-colors duration-300">About Us</a>
          <a href="#contact" className="text-[16px] font-[500] text-[#2D2D2D] hover:text-[#28B30E] transition-colors duration-300">Contact</a>
        </div>
      )}
    </div>
  );
}

export default Navbar;
