import {
  BrowserRouter as Router,
  Routes,
  Route,
  useNavigate,
} from "react-router-dom";

import Home from "./pages/Home";
import About from "./pages/AboutUs";
import Government from "./pages/Government";
import Programs from "./pages/Programs";
import News from "./pages/News";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route exact path="/Home" element={<Home />} />
          <Route exact path="/Government" element={<Government />} />
          <Route exact path="/Programs and Services" element={<Programs />} />
          <Route exact path="/News and Events" element={<News />} />
          <Route exact path="/About us" element={<About />} />

          {/* Add Routes Here */}
        </Routes>
      </Router>
    </>
  );
}

export default App;
