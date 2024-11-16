import "./App.css";
import Nav from "./components/Nav";
import Running from "./components/Running";
import Conditioning from "./components/Conditionining";
import Today from "./components/Today";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h2>Running, Stretching and Conditioning 🏃🏼‍♂️</h2>
      </header>
      <Router>
        <Nav />
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
