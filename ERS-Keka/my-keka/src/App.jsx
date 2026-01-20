import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { BrowserRouter, Routes, Route } from "react-router-dom";

import NavBar from "../Components/NavBar";
import MainPage from "../Components/MainPage.jsx";
import LogoSlider from "../Components/LogoSlider.jsx";
import CreateAccount from "../Components/CreateAccount.jsx";
import Awarded from "../Components/Awarded.jsx";
import Products from "../Components/Products.jsx";
import FeatureSlider from "../Components/FeatureSlider.jsx";
import Industry from "../Components/Industry.jsx";
import AppStructure from "../Components/AppStructure.jsx";
import LoginPage from "../Components/LoginPage.jsx";

function App() {
  return (
    <BrowserRouter>
      <NavBar />

      <Routes>
        {/* HOME PAGE */}
        <Route
          path="/"
          element={
            <>
              <MainPage />
              <LogoSlider />
              <Awarded />
              <FeatureSlider />
              <Products />
              <Industry />
              <AppStructure />
            </>
          }
        />

        {/* CREATE ACCOUNT PAGE */}
        <Route path="/create-account" element={<CreateAccount />} />
        <Route path="/login-page" element={<LoginPage/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
