import Home from './Pages/LandingPage/HomePage'
import About from './Pages/AboutUs/AboutUs'
import Donor from "./Pages/Donors/Donor";
import { Routes, Route } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";
import NGO from './Pages/NGOs/NGO'
import Volunteer from './Pages/Volunteer/Volunteer'
import Chatbot1 from './Pages/ChatBot/ChatBot1';
import Chatbot from './Pages/ChatBot/ChatBot';
import VolunteerRewards from './Pages/Reward/VolunteerRewards'
import History from './Pages/History/History'
import FAQSection from './Pages/FAQ/FAQ';
function App() {
  return (
    <>
    <BrowserRouter>
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/aboutus" element={<About />} />
          <Route path="/donors" element={<Donor />} />
          <Route path="/NGOs" element={<NGO />} />
          <Route path="/Volunteer" element={<Volunteer />} />
          <Route path="/chatbot1" element={<Chatbot1 />} />
          <Route path="/chatbot" element={<Chatbot />} />
          <Route path="/vr" element={<VolunteerRewards />} />
          <Route path="/history" element={<History />} />
          <Route path="/FAQ" element={<FAQSection />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
