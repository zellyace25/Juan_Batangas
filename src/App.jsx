import Footer from "./pages/Footer";
import Header from "./pages/Header";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import AboutUs from "./pages/AboutUs";

function App() {
  return (
    <>
      <Header />
      <AboutUs />
      <Home/>
      <Footer />
    </>
  );
}

export default App;
