import { Link } from "react-router-dom";
import "./NavBar.css";

export const NavBar = () => {
  console.log("rerender");
  return (
    <nav className="navbar">
      <h2> Networking Cafe</h2>
      <Link className="nav-link" to="/">
        Network
      </Link>
      <Link className="nav-link" to="/profile">
        Profile
      </Link>
    </nav>
  );
};
