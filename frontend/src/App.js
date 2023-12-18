import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import LandingPage from "./Components/LandingPage/LandingPage";
import Battle from "./Components/Battle/Battle";
import Gallery from "./Components/Gallery/Gallery";
import Result from "./Components/Result/Result";
import Info from "./Components/Info/Info";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/battle" element={<Battle />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/result" element={<Result />} />
          <Route path="/info" element={<Info />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
