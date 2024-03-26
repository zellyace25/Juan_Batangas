import Footer from "./pages/Footer";
import AboutGovernor from "./pages/Government/AboutGovernor";
import BoardMembers from "./pages/Government/BoardMembers";
import Congressmen from "./pages/Government/Congressmen";
import HeroGovernment from "./pages/Government/HeroGovernment";
import Header from "./pages/Header";

function App() {
  return (
    <div className="bg-[#F5F5F5]">
      <Header />
      <HeroGovernment/>
      <AboutGovernor/>
      <Congressmen/> 
      <BoardMembers/>
      <Footer/>
    </div>
  );
}

export default App;
