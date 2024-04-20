import {
  BrowserRouter as Router,
  Routes,
  Route,
  useNavigate,
} from "react-router-dom";

import Home from "./pages/Home";
import About from "./pages/AboutUs";
import Government from "./pages/Government";
import News from "./pages/News";
import ProgramAndServices from "./pages/ProgramAndServices";
import Scholarships from "./pages/Scholarships";
import HELPPrograms from "./pages/HELPPrograms";
import SocialWelfare from "./pages/SocialWelfare";
import Header from "./pages/Header";
import Footer from "./pages/Footer";

function App() {
  return (
    <>
    <Header/>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/Government" element={<Government />} />
          <Route
            exact
            path="/Programs and Services"
            element={<ProgramAndServices />}
          />
          <Route exact path="/Scholarships" element={<Scholarships />} />
          <Route exact path="/HELPProgram" element={<HELPPrograms />} />
          <Route exact path="/SocialWelfare" element={<SocialWelfare />} />
          <Route exact path="/News and Events" element={<News />} />
          <Route exact path="/About us" element={<About />} />

          {/* Add Routes Here */}  
        </Routes>
    <Footer/>
    </> 
  );
}

export default App;
