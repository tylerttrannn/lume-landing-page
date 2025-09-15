import Navbar from "../src/components/comp-577"
import Footer from "../src/components/sections/footer/Footer"
import MainContent from "../src/components/sections/Main"
import "./index.css"



function App() {

  return (
    <div className="flex flex-col min-h-screen">
      
      <Navbar />
      <MainContent/>


      {/* Footer */}
      <Footer />
      
    </div>
  );
}

export default App;
