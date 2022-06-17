import React from "react";
import "./Navbar.css";

const Navbar = () => {
  return (
    <div>
      <div className="header-bc">
        <div className="header-nav">
          <img width="100px" src="https://m-tv.imgix.net/5359e0fd147fd5d9e736611fa9cda18fe008de70e23d74640998b4fbe06a1b6a.png" />
          <nav>
            <ul className="header-ul">
              <li className="nav-li">contact</li>
              <li className="nav-li">address</li>
              <li className="nav-li">Ticket</li>
              <li className="nav-li">link</li>
              <li className="nav-li">link</li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
