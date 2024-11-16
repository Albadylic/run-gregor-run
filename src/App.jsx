import "./App.css";
import Running from "./components/Running";
import Conditioning from "./components/Conditionining";
import Today from "./components/Today";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Today />} />
          <Route path="/running" element={<Running />} />
          <Route path="/conditioning" element={<Conditioning />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
