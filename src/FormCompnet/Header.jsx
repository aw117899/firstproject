// import React, { useState } from 'react';
// import Container from 'react-bootstrap/Container';
// import Nav from 'react-bootstrap/Nav';
// import { Link } from 'react-router-dom';
// import Navbar from 'react-bootstrap/Navbar';
// // import Home from './Home';
// // import About from './About';
// import {
//   BrowserRouter as Router,
//   Routes,
//   Route,
// } from "react-router-dom";
// import About from './About';
// // import Loginpage from './Loginpage';
// // import Contact from './Contact';
// // import Singup from './Singup';



// function Header() {

    // const logout = () =>{
    //     window.localStorage.removeItem('singup')
    //     window.location.reload()
    // }
    // const logoutdelet = () => {
    //     localStorage.clear()
    //     window.location.reload()
    // }
    

//   return (
//     <Router>
//     <div>
//     <Navbar collapseOnSelect expand="lg" sticky="top"  className="" data-aos="fade-up-right">
//       <Container className='then'>
//         <Navbar.Brand>React-Bootstrap</Navbar.Brand>
//         <Navbar.Toggle aria-controls="responsive-navbar-nav" />
//         <Navbar.Collapse id="responsive-navbar-nav">
//           <Nav className="ms-auto">
//             <Nav.Link as={Link} to="/">Home</Nav.Link>
//             <Nav.Link as={Link} to="/about">About Us</Nav.Link>
//             <Nav.Link as={Link} to="/contact">Contact Us</Nav.Link>
//             </Nav>
//         </Navbar.Collapse>

//         <Link  to="/Login"  className='btn btn-primary mx-2' onClick={logout}>SingUp</Link>
//         <Link  to="/Singup"  className='btn btn-primary' onClick={logoutdelet}>Delete</Link>
//       </Container>

      
//       </Navbar>
      
//       </div>
     
//       <div>

      
//   </div>
//     </Router>
//   );
// }

// export default Header;



import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Offcanvas from 'react-bootstrap/Offcanvas';
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link,
  } from "react-router-dom";
  import Home from './Home';
  import About from './About';
import Contact from './Contact';




function Header() {

    const logout = () =>{
        window.localStorage.removeItem('singup')
        window.location.reload()
    }
    const logoutdelet = () => {
        localStorage.clear()
        window.location.reload()
    }

  return (
    <div>
    {[ 'md' ].map((expand) => (
          <Router>
        <Navbar key={expand} expand={expand} className="navcolor mb-3">
          <Container fluid>
            <Navbar.Brand href="#">Navbar Offcanvas</Navbar.Brand>
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="end"
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                  Offcanvas
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className="justify-content-end flex-grow-1 pe-3">
                  <Nav.Link as={Link} to='/'>Home</Nav.Link>
                  <Nav.Link as={Link} to='/About'>About Us</Nav.Link>
                  <Nav.Link as={Link} to='/Contact'>Contact Us</Nav.Link>
                  </Nav>
                  
        <Link  to="/Login"  className='btn btn-primary mx-2' onClick={logout}>SingUp</Link>
        <Link  to="/Singup"  className='btn btn-primary' onClick={logoutdelet}>Delete</Link>

              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
          </Navbar>
                    
          <Routes>
          <Route path='/about' element={<About/>} />
          <Route path='/contact' element={<Contact />} />
          </Routes>
          
          </Router>

      ))}
    </div>
  );
}

export default Header;