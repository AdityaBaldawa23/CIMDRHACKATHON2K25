import { Link, useLocation, useNavigate } from "react-router-dom";
import "./HomePage.css";
import Navbar from "../../components/ui/Navbar";
import Card from "./Card";
import Tracker from "./Tracker";
import Why from "./Why";
import Footer from "../../components/ui/Footer";
import WhyGrid from "./WhyGrid";

function App() {
  const navigate = useNavigate();
  const location = useLocation();
  return (
    <>
      <div id="app">
        {/* <div className="tracing-beam"></div>   */}
        <Navbar />
        <Card />
        <Tracker />
        <div id="menu-section">
          <h1>Let us help you Choose Your Menu</h1>
          <button onClick={() => navigate("/chatbot1")}>
          Here
        </button>
        </div>
        <Why />
        <WhyGrid />
        <Footer />
      </div>
    </>
  );
}

export default App;
