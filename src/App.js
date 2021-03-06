import Cards from "./components/Cards";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Info from "./components/Info";
import Navbar from "./components/Navbar";
import Newsletter from "./components/Newsletter";


function App() {
  return (
    <div className="App">
      <Navbar/>
      <Hero/>
      <Info/>
      <Newsletter/>
      <Cards/>
      <Footer/>
    </div>
  );
}

export default App;
