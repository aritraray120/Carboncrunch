import { assets } from "../assets/assets";

function Analytics() {
  return (
    <div className="mt-[-90px] flex justify-center items-center px-4">
      <img 
        src={assets.analytics_img} 
        alt="Analytics" 
        className="w-full max-w-[90%] md:max-w-[80%] lg:max-w-[60%] h-auto"
      />
    </div>
  );
}

export default Analytics;
