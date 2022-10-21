import { logDOM } from "@testing-library/react";
import React from "react";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import logo from './dot.png';


const MyNavbar = () => {
  return (
    <header>
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="/Home">
            <img
              src={logo}
              width="30"
              height="30"
              className="d-inline-block align-top"
              alt="React Bootstrap logo"
            />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="/David">David</Nav.Link>
              <Nav.Link href="/Example">Example</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>

    // <header>

    //     <nav className="navbar navbar-dark navbar-expand-lg bg-dark shadow small mb-3">
    //         <div className="container-fluid">
    //             <a href="dash.html" className="navbar-brand">
    //                 <span className="brand-gradient">.NET ACADEMY</span>
    //             </a>

    //             <button 

    //             className="navbar-toggler border-0" 
    //             type="button" 
    //             data-bs-toggle="collapse" 
    //             data-bs-target="#navbar-supported-content" 
    //             aria-controls="navbar-supported-content" 
    //             aria-expanded="false" 
    //             aria-label="Toggle Navigation">

    //                 <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-list" viewBox="0 0 16 16">
    //                     <path fillRule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"/>
    //                 </svg>

    //             </button>

    //             {/* <!-- Header --> */}
    //             <div className="collapse navbar-collapse" id="navbar-supported-content">
    //                 <ul className="navbar-nav me-auto mb-2 mb-lg-0">

    //                     {/* <!-- Home NavLink --> */}
    //                     <li className="nav-item">
    //                         <NavLink  className="nav-link active" aria-current="page" to = "/Home">Home</NavLink>
    //                     </li>

    //                     {/* <!-- Users NavLink --> */}
    //                     <li className="nav-item">
    //                         <NavLink className="nav-link active" to = "/David">David</NavLink>
    //                     </li>

    //                     {/* <!-- Jobs Link --> */}
    //                     <li className="nav-item">
    //                         <Link className="nav-link active" to = "/Example">Example</Link>
    //                     </li>

    //                 </ul>

    //             </div>

    //         </div>
    //     </nav>

    // </header>
  );
}

export default MyNavbar;