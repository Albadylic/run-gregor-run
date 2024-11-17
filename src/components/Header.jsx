import Nav from "./Nav";

export default function Header() {
  return (
    <header className="Header">
      <div className="Header_logo">
        <h2>🏃🏼‍♂️</h2>
      </div>
      <div className="Header_title">
        <h2>Running, Stretching and Conditioning </h2>
        <Nav />
      </div>
    </header>
  );
}
