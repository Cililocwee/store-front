import "./App.css";
import NavBar from "./components/NavBar";
import Home from "./pages/Home";
import Cart from "./pages/Cart";
import TeaPage from "./pages/TeaPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/bubble-tea" element={<TeaPage type="Bubble Tea" />} />
          <Route path="/pearl-tea" element={<TeaPage type="Pearl Tea" />} />
          <Route path="/classic-tea" element={<TeaPage type="Classic Tea" />} />
          <Route path="/non-tea" element={<TeaPage type="Non-Tea" />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
