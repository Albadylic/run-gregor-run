import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

export default function Nav() {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/running">Running</Link>
        </li>
        <li>
          <Link to="stretching">Stretching</Link>
        </li>
        <li>
          <Link to="/conditioning">Conditioning</Link>
        </li>
      </ul>
    </nav>
  );
}
