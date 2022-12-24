import { Component } from "react";
import "./Navbar.Styles.css";
import { Link } from "react-router-dom";

class Navbar extends Component {
  render() {
    return (
      <nav className="NavbarItems">
        <h1 className="navbar-logo">Judul</h1>

        <ul className="nav-menu">
          <a href="/">
            <i className="fa-solid fa-house-user"></i>Home
          </a>
        </ul>
      </nav>
    );
  }
}

export default Navbar;
