import logo from "../images/lpl-logo.png";
import { useRef, useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faSearch,
  faShoppingCart,
  faTimes,
} from "@fortawesome/free-solid-svg-icons";
const Nav = () => {
  const [isNavScrolled, setIsNavScrolled] = useState(false);
  const StyleOnScroll = () => {
    window.addEventListener("scroll", () => {
      window.scrollY > 20 ? setIsNavScrolled(true) : setIsNavScrolled(false);
    });
  };
  StyleOnScroll();
  const menuRef = useRef();
  const searchbarRef = useRef();
  const cartSidebarRef = useRef();
  const toggleMenu = () => {
    menuRef.current.classList.toggle("open");
  };
  const toggleSearchbar = () => {
    searchbarRef.current.classList.toggle("open");
  };
  const toggleCartSidebar = () => {
    cartSidebarRef.current.classList.toggle("open");
  };
  return (
    <nav className={isNavScrolled ? "scrolled" : ""}>
      <div ref={menuRef} className="menu-container">
        <FontAwesomeIcon
          onClick={toggleMenu}
          className="i hamburger"
          icon={faBars}
        />
        <ul className="nav-links">
          <FontAwesomeIcon
            onClick={toggleMenu}
            className="i close-icon hamburger"
            icon={faTimes}
          />

          <li onClick={toggleMenu}>
            <Link to="/">Home</Link>
          </li>
          <li onClick={toggleMenu}>
            <Link to="/about">About</Link>
          </li>
          <li onClick={toggleMenu}>
            <Link to="/contact">Contact</Link>
          </li>
          <li onClick={toggleMenu}>
            <Link to="/pay">Pay now</Link>
          </li>
        </ul>
      </div>
      <div className="logo">
        <Link to="/">
          <img src={logo} alt="logo" />
        </Link>
      </div>
      <div className="nav-icons">
        <div className="search-icon-container">
          <FontAwesomeIcon
            onClick={toggleSearchbar}
            className="i toggle-searchbar"
            icon={faSearch}
          />
          <div ref={searchbarRef} className="searchbar">
            <FontAwesomeIcon className="i" icon={faSearch} />
            <input type="text" placeholder="Search our store" />
            <FontAwesomeIcon
              onClick={toggleSearchbar}
              className="i close-icon toggle-searchbar"
              icon={faTimes}
            />
          </div>
        </div>
        <div className="cart-container">
          <FontAwesomeIcon
            onClick={toggleCartSidebar}
            className="i cart-icon toggle-cart-sidebar"
            icon={faShoppingCart}
          />
          <div ref={cartSidebarRef} className="cart-sidebar">
            <FontAwesomeIcon
              onClick={toggleCartSidebar}
              className="i close-icon toggle-cart-sidebar"
              icon={faTimes}
            />
            <p>Your cart is currently empty.</p>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
