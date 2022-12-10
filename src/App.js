import "./App.css";
import NavBar from "./components/NavBar";
import Home from "./pages/Home";
import Cart from "./pages/Cart";
import TeaPage from "./pages/TeaPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CoffeePage from "./pages/CoffeePage";
import FoodPage from "./pages/FoodPage";
import { CartContextProvider } from "./CartContext";
import MenuPage from "./pages/MenuPage";

function App() {
  return (
    <CartContextProvider>
      <div className="App">
        <NavBar />
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/menu" element={<MenuPage />} />
          <Route path="/coffee" element={<CoffeePage />} />
          <Route path="/food" element={<FoodPage />} />
        </Routes>
      </div>
    </CartContextProvider>
  );
}

export default App;
