import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

function Header() {
 const linkStyle = { fontSize: '28px' };
 const brandStyle = { fontSize: '34px' };

 return (
    <header className="header fixed-top">
      <nav className="navbar navbar-expand-lg navbar-light bg-dark"> 
        <Link className="navbar-brand" to="/">
          <span style={brandStyle} className="text-white">Gil Rosario's Professional Site</span>
        </Link>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <Link className="nav-link text-white" to="/" style={linkStyle}>Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-white" to="/portfolio" style={linkStyle}>Portfolio</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-white" to="/contact" style={linkStyle}>Contact</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-white" to="/resume" style={linkStyle}>Resume</Link>
            </li>
          </ul>
        </div>
      </nav>
    </header>
 );
}

export default Header;

