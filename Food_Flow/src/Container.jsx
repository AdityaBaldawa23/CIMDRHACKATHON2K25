import App from "./App";
import "./Container.css";
import RightImage from "./assets/Right Image.png";
import LeftImage from "./assets/left.png";
import Logo from "./assets/FoodFlow_Logo.png";


export default function Container() {
  return (
    <>
      <div class="background"></div>
      <div id="box">
  {/* Left Section with Logo and Left Image */}
  <div className="left-container">
    <img src={Logo} className="logo" alt="FoodFlow Logo" style={{height:"160px", borderRadius:"8px"}}/>
    <img src={LeftImage} className="side-image" alt="Left Illustration" style={{position: "fixed", bottom: "5px"}}/>
  </div>

  {/* Center Section with App */}
  <div id="container">
    <App />
  </div>

  {/* Right Section with Right Image */}
  <div className="right-container">
    <img src={RightImage} className="side-image" alt="Right Illustration" style={{position: "fixed", bottom: "5px"}}/>
  </div>
</div>

    </>
  );
}
 