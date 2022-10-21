import React from "react";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import logo from './dot.png';
import { NavLink } from "react-router-dom";


const MyNavbar = () => {

  return (
    
    <header>

      <nav className="navbar navbar-dark navbar-expand-lg bg-dark shadow small mb-3">
        <div className="container-fluid">

          {/* <!-- Header --> */}
          <div className="collapse navbar-collapse" id="navbar-supported-content">
            <NavLink className="nav-link active" aria-current="page" to = "/Users">
                <img
                  src={logo}
                  width="40"
                  height="40"
                  className="d-inline-block align-top"
                  alt="React Bootstrap logo"
                />
            </NavLink>
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">

              {/* <!-- Users NavLink --> */}
              <li className="nav-item">
                <NavLink className="nav-link active" to = "/Users">Users</NavLink>
              </li>

              {/* <!-- Items Link --> */}
              <li className="nav-item">
                <NavLink className="nav-link active" to = "/Items">Items</NavLink>
              </li>

            </ul>

          </div>

        </div>
      </nav>

    </header>
    
  );
}

export default MyNavbar;

