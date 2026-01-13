import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import NavBar from "../Components/NavBar";
import MainPage  from "../Components/MainPage.jsx";
import LogoSlider from "../Components/LogoSlider.jsx";
import CreateAccount from "../Components/CreateAccount.jsx";
import Awarded from "../Components/Awarded.jsx"
import Products from "../Components/Products.jsx";
import FeatureSlider from "../Components/FeatureSlider.jsx";
import Industry from "../Components/Industry.jsx";

function App() {
  return (
    <>
      <NavBar/>
      <MainPage/>
      <LogoSlider/>
      <Awarded/>
      <FeatureSlider/>
      <Products/>
      <CreateAccount/>
      <Industry/>
    </>
  )
}

export default App
