import "./App.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { Routes, Route } from "react-router-dom";

import HomePage from "./Pages/HomePage";
import DesignPage from "./Pages/DesignPage";
import LoginPage from "./Pages/LoginPage";
import SignupPage from "./Pages/SignupPage";
import FormComponent from "./Pages/FormComponent";
import DesignForm from "./Pages/DesignForm";

function App() {
  return (
    <Routes>
      <Route path="/home" element={<HomePage />}></Route>
      <Route path="/design/:id/feedback" element={<FormComponent />}></Route>
      <Route path="/design/:id" element={<DesignPage />}></Route>
      <Route path="/" element={<LoginPage />}></Route>
      <Route path="/register" element={<SignupPage />}></Route>
      <Route path="/designform" element={<DesignForm />}></Route>
    </Routes>
  );
}

export default App;
