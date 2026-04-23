import React from "react";
import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/pages/Home";
import AboutUs from "./components/pages/AboutUs";
import ContactUs from "./components/pages/ContactUs";
import OurTeam from "./components/pages/OurTeam";
import Services from "./components/pages/Services";
import HeroSection from "./components/HeroSection";
import ProductSaas from "./components/pages/Services/ProductSaas";
import WebApp from "./components/pages/Services/WebApp";
import SeoOptimization from "./components/pages/Services/SeoOptimization";
import MobileApp from "./components/pages/Services/MobileApp";
import SEO from "./components/pages/Services/SEO";
import MVP from "./components/pages/Services/MVP";
function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Header />
      <Routes>
        <Route path="/" element={<HeroSection />} />
        <Route path="/about us" element={<AboutUs />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/team" element={<OurTeam />} />
        <Route path="/services" element={<Services />} />
        <Route path="/services/product-saas" element={<ProductSaas />} />
        <Route path="/services/web-app" element={<WebApp />} />
        <Route path="/services/seo-optimization" element={<SeoOptimization />} />
        <Route path="/services/mobile-app" element={<MobileApp />} />
        <Route path="/services/seo" element={<SEO />} />
        <Route path="/services/mvp" element={<MVP />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
