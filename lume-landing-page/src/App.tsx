import Navbar from "../src/components/comp-577";
import Footer from "./components/sections/Footer";
import MainContent from "../src/components/sections/Main";
import Features from "./components/sections/Features";
import Statistic from "./components/sections/Statistic";
import Pricing from "./components/sections/Pricing";
import "./index.css";
import Reassure from "./components/sections/Reassure";

function App() {
 

  return (
    <div className="flex flex-col min-h-screen ">
      <Navbar />
      <MainContent />
      <Statistic/>
      <div className="h-24 bg-gradient-to-b from-white to-gray-50"></div>

      <Features/>
      <div className="h-24 bg-gradient-to-b from-white to-gray-50"></div>
      <Pricing/>
      <div className="h-24 bg-gradient-to-b from-white to-gray-50"></div>

      <Reassure/>
      <div className="h-24 bg-gradient-to-b from-white to-gray-50"></div>

      <Footer />
    </div>
  );
}

export default App;

