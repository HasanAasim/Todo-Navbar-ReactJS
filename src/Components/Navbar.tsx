import "../Assets/Css/styles.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <nav className="nav">
        <Link to="/" className="site-title">
          Todo List
        </Link>
        <ul>
          <li>
            <Link to="/list">List</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
        </ul>
      </nav>
    </>
  );
};
export default Navbar;
