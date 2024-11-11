import "./App.css";
import Nav from "./components/Nav";
import Month from "./components/Month";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h2>Running, Stretching and Conditioning 🏃🏼‍♂️</h2>
      </header>
      <Nav />
      <Month />
    </div>
  );
}

export default App;
