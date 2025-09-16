import Device from "../../assets/Device.jpg"
import { AppStoreButton } from "react-mobile-app-button";
 
function Main() {
  const IOSUrl = "https://apps.apple.com/us/app/expo-go/id982107779";

  return (
    <div className="flex-1 relative">
      {/* Screenshot / main attraction section */}
      <div className="flex-1 flex items-center justify-center bg-gradient-to-b from-gray-50 to-white py-16 px-6 relative overflow-hidden">

        {/* Warm bottom glow */}
        <div className="absolute -bottom-64 left-1/2 w-[1200px] h-[600px] rounded-t-full bg-gradient-to-t from-yellow-400 via-orange-400 to-red-400 opacity-30 -translate-x-1/2 blur-3xl"></div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center max-w-6xl w-full relative z-10">
          
          {/* Text */}
          <div className="space-y-6 text-center md:text-left">
            <h1 className="text-4xl md:text-5xl font-semibold leading-snug text-gray-800">
              Take control of your screen time and start reclaiming your life
            </h1>
            <p className="text-lg md:text-xl text-gray-600 max-w-lg mx-auto md:mx-0">
              Build healthier habits and find balance with powerful tools that put you back in charge of your digital life.
            </p>

            <div className="flex justify-center md:justify-start">
              <AppStoreButton
                url={IOSUrl}
                theme="dark"
                className="scale-110 hover:scale-115 transition-transform duration-200"
              />
            </div>
          </div>

          {/* Image side */}
          <div className="flex justify-center">
            <img 
              src={Device} 
              alt="App preview on device" 
              className="rounded-2xl shadow-2xl max-w-xs md:max-w-sm w-full transform transition duration-300"
            />
          </div>

        </div>
      </div>
    </div>
  );
}

export default Main;
