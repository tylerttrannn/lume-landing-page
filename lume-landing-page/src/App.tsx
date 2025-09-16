import Navbar from "../src/components/comp-577";
import Footer from "./components/sections/Footer";
import MainContent from "../src/components/sections/Main";
import Features from "./components/sections/Features";
import Statistic from "./components/sections/Statistic";
import Pricing from "./components/sections/Pricing";
import "./index.css";

function App() {
 

  return (
    <div className="flex flex-col min-h-screen ">
      <Navbar />
      <MainContent />
      <Statistic/>
      <Features/>
      <Pricing/>
      <Footer />
    </div>
  );
}

export default App;

