import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  const linkStyle = { fontSize: '28px' };
  const brandStyle = { fontSize: '34px' };

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <Link className="navbar-brand" to="/">
        <span style={brandStyle}>Gil Rosario's Professional Site</span>
      </Link>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav ml-auto">
          <li className="nav-item">
            <Link className="nav-link" to="/" style={linkStyle}>Home</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/portfolio" style={linkStyle}>Portfolio</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/contact" style={linkStyle}>Contact</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/resume" style={linkStyle}>Resume</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Header;

