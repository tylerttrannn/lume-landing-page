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
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <div className="pt-32 sm:pt-20 md:pt-16 lg:pt-16 xl:pt-16 bg-gradient-to-b from-gray-50 to-white">
        
        {/* Main Section */}
        <section id="home">
          <MainContent />
        </section>

        <section id="statistics">
          <Statistic />
        </section>

        <div className="h-24 bg-gradient-to-b from-white to-gray-50"></div>

        <section id="features">
          <Features />
        </section>

        <div className="h-24 bg-gradient-to-b from-white to-gray-50"></div>

        <section id="pricing" className="scroll-mt-24">
          <Pricing />
        </section>


        <div className="h-24 bg-gradient-to-b from-white to-gray-50"></div>

        <section id="reassure">
          <Reassure />
        </section>

        <div className="h-24 bg-gradient-to-b from-white to-gray-50"></div>

        <section id="footer">
          <Footer />
        </section>

      </div>
    </div>
  );
}


export default App;

