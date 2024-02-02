import { BrowserRouter, Route, Routes } from "react-router-dom";
import Banner from "./components/Banner";
import Clienttestimonial from "./components/Clienttestimonial";
import Contactus from "./components/Contactus";
import Features from "./components/Features";
import Footer from "./components/Footer";
import Herosection from "./components/Herosection";
import Imageslider from "./components/Imageslider";
import Nav from "./components/Nav";
import Navbar from "./components/Navbar";
import Popularplaces from "./components/Popularplaces";
import SliderComponent from "./components/Slick";
import Themes from "./components/Themes";
import Itenary from "./components/Itenary";
import Ourservices from "./components/Ourservices";
import Aboutus from "./components/Aboutus";
import BackToTopButton from "./components/Backtotopbutton";

function App() {
  return (
    <BrowserRouter>
    <>
   
    <Navbar/>
    <BackToTopButton/>
    <Routes>
    

    </Routes>
    <Herosection/>
    <Popularplaces/>
    

    <Features/>
    <Imageslider/>
    <Banner/>
    <Themes/>

    <Clienttestimonial/>
    <Contactus/>
    <Footer/>
    {/* <SliderComponent/> */}
    
    <Itenary/>
    <Ourservices/>
   
    
    
    </>
    </BrowserRouter>
  );
}

export default App;
