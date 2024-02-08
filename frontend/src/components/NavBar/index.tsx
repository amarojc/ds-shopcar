import './styles.css';
import '@popperjs/core';
import 'bootstrap/js/dist/collapse';

import { ReactComponent as MenuBurguerIcon } from 'assets/images/menu-burger-icon.svg';

const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-md bg-menu main-nav">
      <div className="container-fluid">
        <a href="link" className="nav-logo-text">
          <h4>Carros Top</h4>
        </a>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#shopcar-navbar"
          aria-controls="shopcar-navbar"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
        <span><MenuBurguerIcon /></span>
        </button>

        <div className="collapse navbar-collapse" id="shopcar-navbar">
          <ul className="navbar-nav offset-md-8 main-menu">
            <li>
              <a href="link" className="active">
                Home
              </a>
            </li>
            <li>
              <a href="link" >
                Catálogo
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
