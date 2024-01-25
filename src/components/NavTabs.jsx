// NavTabs.js
import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

function NavTabs() {
  const currentPage = useLocation().pathname;
  const [isNavCollapsed, setIsNavCollapsed] = useState(true);

  const handleNavCollapse = () => setIsNavCollapsed(!isNavCollapsed);

  return (
    <nav className="navbar navbar-expand-md">
      <div className="navbar-brand">Ryan Caltabiano</div>
      <button className="navbar-toggler" type="button" onClick={handleNavCollapse}>
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className={`navbar-collapse ${isNavCollapsed ? 'collapse' : ''}`}>
        <ul className="nav justify-content-end w-100">
          <li className="nav-item">
            <Link
              to="/about"
              className={`nav-link ${currentPage === "/about" ? "active" : ""}`}
              onClick={() => setIsNavCollapsed(true)}
            >
              About Me{" "}
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/portfolio"
              className={`nav-link ${currentPage === "/portfolio" ? "active" : ""}`}
              onClick={() => setIsNavCollapsed(true)}
            >
              Portfolio
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/contact"
              className={`nav-link ${currentPage === "/contact" ? "active" : ""}`}
              onClick={() => setIsNavCollapsed(true)}
            >
              Contact
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/resume"
              className={`nav-link ${currentPage === "/resume" ? "active" : ""}`}
              onClick={() => setIsNavCollapsed(true)}
            >
              Resume
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default NavTabs;
