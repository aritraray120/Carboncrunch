import { assets } from "../assets/assets"; // Import assets

function Analytics() {
  return (
    <div className="mt-[-90px] flex justify-center items-center px-4">
      {/* Analytics Image: Positioned centrally */}
      <img 
        src={assets.analytics_img} // Set the source of the image from assets
        alt="Analytics" // Alt text for the image
        className="w-full max-w-[90%] md:max-w-[80%] lg:max-w-[60%] h-auto" // Responsive width and auto height
      />
    </div>
  );
}

export default Analytics;
