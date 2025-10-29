import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Publicfolder/Navbar";
import Socialmedia from "./Publicfolder/Socialmedia";
import Homescreen from "./Pages/Homescreen";
import Contact from "./Pages/Contact";
import About from "./Pages/About";
import Team from "./Pages/Team";
import Indrusties from "./Pages/Indrusties";
import Service from "./Pages/Service";
import Digital from "./Pages/Digital";
import Creative from "./Pages/Creative";
import Development from "./Pages/Development";
import DigitalMarketing from "./Pages/DigitalMarketing";
import Signup from "./Publicfolder/Signup";
import Authentication from "./Publicfolder/Authentication";
import Adacompliance from "./Pages/Adacompliance";
function App() {
  return (
    <Router>
      <div className="App">
        <Socialmedia />
        <Navbar />

        <Routes>
          {/* ✅ All paths now lowercase and consistent with Navbar */}
          <Route path="/" element={<Homescreen />} />
          <Route path="/about" element={<About />} />
          <Route path="/team" element={<Team />} />
          <Route path="/signup" element={<Signup/>} />
          <Route path="/Authentication " element={<Authentication/>} />
          <Route path="/indrusties" element={<Indrusties />} />
          <Route path="/service" element={<Service />} />
          <Route path="/Digital" element={<Digital />} />
          <Route path="/Creative" element={<Creative />} />
          <Route path="/Development" element={<Development />} />
          <Route path="/DigitalMarketing" element={<DigitalMarketing />} />
          <Route path="/ADA" element={<Adacompliance />} />
        </Routes>

        <Contact />
      </div>
    </Router>
  );
}

export default App;



































