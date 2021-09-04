import logo from "../images/lpl-logo.png";
import { useRef, useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faSearch,
  faShoppingCart,
  faStore,
  faTimesCircle,
} from "@fortawesome/free-solid-svg-icons";
const Nav = () => {
  const navRef = useRef(null);
  const [isScrolled, setIsScrolled] = useState(false);
  const toggleMenu = () => {
    navRef.current.classList.toggle("opened");
  };
  const styleNavOnScroll = () => {
    window.addEventListener("scroll", () => {
      window.scrollY > 20 ? setIsScrolled(true) : setIsScrolled(false);
    });
  };
  styleNavOnScroll();
  return (
    <nav className={isScrolled ? "scrolled" : ""} ref={navRef}>
      <div className="content">
        <Link to="/">
          <img className="logo" src={logo} alt="Logo" />
        </Link>

        <ul>
          <div className="nav-links">
            <Link to="/pay">Pay</Link>
            <Link to="/about">About</Link>
            <Link to="/contact">Contact</Link>
          </div>

          <div className="nav-icons">
            <FontAwesomeIcon className="icon" icon={faSearch} />

            <FontAwesomeIcon className="icon" icon={faStore} />

            <Link to="/pay">
              <FontAwesomeIcon className="icon" icon={faShoppingCart} />
            </Link>

            <FontAwesomeIcon
              onClick={toggleMenu}
              className="open hamburger icon"
              icon={faBars}
            />
          </div>
        </ul>

        <div className="nav-links-mobile">
          <FontAwesomeIcon
            onClick={toggleMenu}
            className="hamburger icon"
            icon={faTimesCircle}
          />

          <Link onClick={toggleMenu} to="/pay">
            Pay
          </Link>
          <Link onClick={toggleMenu} to="/about">
            About
          </Link>
          <Link onClick={toggleMenu} to="/contact">
            Contact
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
