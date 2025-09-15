import Navbar from "../src/components/comp-577";
import Footer from "../src/components/sections/footer/Footer";
import MainContent from "../src/components/sections/Main";
import "./index.css";



import img1 from "../src/assets/reason1.jpg";
import img2 from "../src/assets/reason2.jpg";
import img3 from "../src/assets/reason3.jpg";

function App() {
  const reasons = [
    {
      img: img1,
      title: "Track your usage",
      content:
        "See how you spend your precious time on your phone",
    },
    {
      img: img2,
      title: "Custom Blocks",
      content:
        "Create custom blocks that are tailored to your needs, pomodoro focus, delay block, time limit and schedule ",
    },
    {
      img: img3,
      title: "Reason Three",
      content:
        "Track your own focus progress alongside with friends!",
    },
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <MainContent />
      
      <div className="relative flex justify-center items-center my-24">
        {/* glow effect again*/}
        <div className="absolute -top-20 -left-20 w-72 h-72 bg-purple-500/20 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-16 right-10 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl"></div>

        {/* Fun fact text */}
        <h1 className="relative z-10 text-4xl md:text-5xl text-center p-12 bg-white/10 backdrop-blur-md rounded-3xl max-w-4xl">
          The average Gen-Z person spends 7 hours of screen time a day — that's a significant chunk of your life!
        </h1>
      </div>



      <div className="flex flex-col justify-center items-center relative py-24">
        {/* glow effect*/}
        <div className="absolute top-10 left-10 w-72 h-72 bg-purple-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>

        {/* 1x3 grid of images */}
        <div className="flex flex-col justify-center items-center relative py-24">
          {/* glow effect*/}
          <div className="absolute top-10 left-10 w-72 h-72 bg-purple-500/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-10 right-10 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>

          {/* Responsive grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative z-10 w-full max-w-6xl px-12">
            {reasons.map((reason, idx) => (
              <div
                key={idx}
                className="flex flex-col items-center w-2/3 sm:w-1/2 md:w-full mx-auto"
              >
                {/* Image scales proportionally */}
                <img
                  src={reason.img}
                  alt={reason.title}
                  className="w-full h-auto rounded-2xl mb-4"
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

      

      <Footer />
    </div>
  );
}

export default App;

