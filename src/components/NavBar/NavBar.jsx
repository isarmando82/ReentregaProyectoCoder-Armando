import "../NavBar/NavBar.css";
import CartWidget from "../CartWidget/CartWidget";
import { NavLink, Link } from 'react-router-dom';
import { useState } from 'react';

const NavBar = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="navbar">
      <Link to='/' className="link"><h1 className="n">TodoMovil</h1></Link>

      <div className={`navbar-toggle ${isMenuOpen ? 'open' : ''}`} onClick={toggleMenu}>
        <span></span>
        <span></span>
        <span></span>
      </div>

      <div className={`navbar-links ${isMenuOpen ? 'open' : ''}`}>
        <div className="navbar-link">
          <button className="link-button rounded">
            <NavLink to={`/category/smartphone`} className="link-text">SmartPhones</NavLink>
          </button>
        </div>
        <div className="navbar-link">
          <button className="link-button rounded">
            <NavLink to={`/category/tablet`} className="link-text">Tablets</NavLink>
          </button>
        </div>
        <div className="navbar-link">
          <button className="link-button rounded">
            <NavLink to={`/category/smartwatch`} className="link-text">SmartWatches</NavLink>
          </button>
        </div>
      </div>
<div className="n">
      <CartWidget  />
</div>
    </nav>
  );
};

export default NavBar;

