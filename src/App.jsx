import "./App.css";
import Nav from "./components/Nav";
import Month from "./components/Month";
import Conditioning from "./components/Conditionining";
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
          <Route path="/running" element={<Month />} />
          <Route path="/conditioning" element={<Conditioning />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
