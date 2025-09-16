import img1 from "../../assets/reason1.png";
import img2 from "../../assets/reason2.png";
import img3 from "../../assets/reason3.png";

function Features(){

    const reasons = [
      {
        img: img1,
        title: "Understand Your Screen Time",
        content:
          "Get clear insights into how you spend time on your phone and identify patterns that matter.",
      },
      {
        img: img2,
        title: "Smarter Blocking Tools",
        content:
          "Build custom blocks to match your lifestyle—whether it’s Pomodoro focus sessions, time limits, or adding a delay.",
      },
      {
        img: img3,
        title: "Track your progress",
        content:
          "Track your focus journey over time and share progress with friends to keep each other accountable.",
      },
    ];

    return(
        <div className="flex flex-col justify-center items-center relative py-24">
            {/* glow effect*/}
            <div className="absolute top-10 left-10 w-72 h-72 bg-purple-500/10 rounded-full blur-3xl"></div>
            <div className="absolute bottom-10 right-10 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>

            {/* 1x3 grid of images */}
            <div className="flex flex-col justify-center items-center relative py-24 space-y-16">
              
              <div className="flex flex-col text-left w-full space-y-8">
                <h1 className="text-4xl font-medium">Simple and Effective Features</h1>
                <h2 className="text-2xl text-gray-600">
                  Everything you need to take control of your screen time and build healthier digital habits.
                </h2>
              </div>

              {/* glow effect*/}
              <div className="absolute top-10 left-10 w-72 h-72 bg-purple-500/10 rounded-full blur-3xl"></div>
              <div className="absolute bottom-10 right-10 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>

              {/* Responsive grid */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-16 relative z-10 w-full max-w-6xl px-12 ">
                  {reasons.map((reason, idx) => (
                  <div
                      key={idx}
                      className="flex flex-col items-center w-2/3 sm:w-1/2 md:w-full mx-auto space-y-12"
                  >
                      {/* Image scales proportionally */}
                      <img
                      src={reason.img}
                      alt={reason.title}
                      className="w-full h-auto rounded-2xl"
                      />
                      <div className="w-full text-left">
                      <h3 className="text-lg sm:text-xl font-semibold mb-2">{reason.title}</h3>
                      <p className="text-gray-700 text-sm sm:text-base">{reason.content}</p>
                      </div>
                  </div>
                  ))}
              </div>
            </div>


        </div>
    )
}

export default Features; 