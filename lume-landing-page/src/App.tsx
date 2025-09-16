import Navbar from "../src/components/comp-577";
import Footer from "../src/components/sections/footer/Footer";
import MainContent from "../src/components/sections/Main";
import "./index.css";



import img1 from "../src/assets/reason1.jpg";
import img2 from "../src/assets/reason2.jpg";
import img3 from "../src/assets/reason3.jpg";
import { Card } from "./components/ui/card";

function App() {
  // Define the pricing plans
// Features common to all plans
  const commonFeatures = [
    "Track usage",
    "Custom blocks",
    "Advanced reports",
    "Team sharing",
    "Priority support",
  ];

  // Pricing plans only differ by title & price
  const pricingPlans = [
    { title: "Monthly", price: "$1.99", description: "$23.99 a year cancel anytime"},
    { title: "Yearly", price: "$14.99/mo" ,  description: "$14.99 a year cancel anytime"},
    { title: "Lifetime", price: "$49.99",  description: "One time payment" },
  ];



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
      title: "Track your progress",
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

      {/* Pricing model*/}

<div className="flex flex-col justify-center items-center relative p-24">
  <h2 className="text-4xl font-bold mb-12 text-center">Make Focusing Easier</h2>

  <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full px-4">
    {pricingPlans.map((plan, idx) => (
      <Card
        key={idx}
        className="flex flex-col items-start text-left p-8 hover:scale-105 transition-transform duration-300 shadow-lg w-full"
      >
        <h3 className="text-2xl font-semibold mb-4">{plan.title}</h3>

        {/* Price + aside */}
        <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between w-full mb-4">
          <div>
            <p className="text-3xl font-bold">{plan.price}</p>
            <p className="text-sm text-gray-500">{plan.description}</p>
          </div>

        </div>

        {/* Features */}
        <ul className="mb-6 space-y-2">
          {commonFeatures.map((feature, i) => (
            <li key={i} className="text-gray-700">{feature}</li>
          ))}
        </ul>

      </Card>
    ))}
  </div>
</div>





      <div className="relative flex justify-center items-center my-24">
        {/* glow effect again*/}
        <div className="absolute -top-20 -left-20 w-72 h-72 bg-purple-500/20 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-16 right-10 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl"></div>

        <div className = "flex flex-col justify-center items-center">
                  {/* Fun fact text */}
          <h1 className="relative z-10 text-4xl md:text-5xl text-center p-12 bg-white/10 backdrop-blur-md rounded-3xl max-w-4xl">
            What are you waiting for?
          </h1>

          Download
        </div>
      </div>



      <Footer />
    </div>
  );
}

export default App;

