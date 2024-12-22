import "./App.css";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { Routes, Route } from "react-router-dom";

import HomePage from "./Pages/HomePage";
import DesignPage from "./Pages/DesignPage";
import LoginPage from "./Pages/LoginPage";
import PaymentPage from "./Pages/PaymentPage";

function App() {
  return (
    <Routes>
      <Route path="/home" element={<HomePage />}></Route>
      <Route path="/design/:id" element={<DesignPage />}></Route>
      <Route path="/payment/:id" element={<PaymentPage />}></Route>
      <Route path="/" element={<LoginPage />}></Route>
    </Routes>
  );
}

export default App;
