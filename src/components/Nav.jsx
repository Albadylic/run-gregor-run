import { Link } from "react-router-dom";

export default function Nav() {
  return (
    <nav className="Navigation">
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/running">Running</Link>
        </li>
        <li>
          <Link to="/stretching">Stretching</Link>
        </li>
        <li>
          <Link to="/conditioning">Conditioning</Link>
        </li>
      </ul>
    </nav>
  );
}
