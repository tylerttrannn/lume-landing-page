
import AppleLogo from "../../assets/apple.png"
import { Button } from "../ui/button";
function Reassure(){
    return(
      <div className="relative flex justify-center items-center my-24">
        {/* glow effect again*/}
        <div className="absolute -top-20 -left-20 w-72 h-72 bg-purple-500/20 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-16 right-10 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl"></div>

        <div className = "flex flex-col justify-center items-center">
                  {/* Fun fact text */}
          <h1 className="relative z-10 text-4xl md:text-5xl text-center p-12 bg-white/10 backdrop-blur-md rounded-3xl max-w-4xl">
            What are you waiting for?
          </h1>

          <Button size="lg" className="text-sm flex items-center gap-2">
            <img src={AppleLogo} alt="Apple" className="max-h-4 w-auto" />
            Download for iOS
          </Button>
        </div>
      </div>
    )
}

export default Reassure; 