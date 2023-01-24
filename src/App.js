import "./App.css";
import NavBar from "./components/NavBar";
import Home from "./pages/Home";

import { Routes, Route } from "react-router-dom";
import { CartContextProvider } from "./CartContext";
import MenuPage from "./pages/MenuPage";
import ContactPage from "./pages/ContactPage";
import AboutPage from "./pages/AboutPage";
import Footer from "./components/Footer";
import FloatingCart from "./components/FloatingCart";
import CoffeePage from "./pages/CoffeePage";
import TeaPage from "./pages/TeaPage";
import FoodPage from "./pages/FoodPage";
import ProductPage from "./pages/ProductPage";

function App() {
  return (
    <CartContextProvider>
      <div className="App">
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/menu" element={<MenuPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/menu/coffee" element={<CoffeePage />} />
          <Route path="/menu/tea" element={<TeaPage />} />
          <Route path="/menu/food" element={<FoodPage />} />
          <Route path="/menu/product" element={<ProductPage />} />
        </Routes>
        <FloatingCart />
        <Footer />
      </div>
    </CartContextProvider>
  );
}

export default App;
