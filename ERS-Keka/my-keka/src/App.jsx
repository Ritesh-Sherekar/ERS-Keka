import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import NavBar from "../Components/NavBar";
import MainPage  from "../Components/MainPage.jsx";
import LogoSlider from "../Components/LogoSlider.jsx";
import CreateAccount from "../Components/CreateAccount.jsx";
import Awarded from "../Components/Awarded.jsx"
import Products from "../Components/Products.jsx";
import FeatureSlider from "../Components/FeatureSlider.jsx";

function App() {
  return (
    <>
      <NavBar/>
      <MainPage/>
      <LogoSlider/>
      <Awarded/>
      <Products/>
      <CreateAccount/>
      <FeatureSlider/>
      
    </>
  )
}

export default App
