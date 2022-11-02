import { signOut } from 'firebase/auth';
import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../../firebase.init';
import logo from '../../../images/logo.png'
const Header = () => {

  const [user]=useAuthState(auth);
  const handleSignOut=()=>{
    signOut(auth)
  }
    return (
        <Navbar collapseOnSelect expand="lg" sticky='top' bg="primary" variant="dark">
      <Container>
        <Navbar.Brand as={Link} to="/">
            <img src={logo} height="30px" alt=''/>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            {/* <Nav.Link href="#features"></Nav.Link> */}
            <Nav.Link href="home#services">Services</Nav.Link>
            <Nav.Link href="home#experts">Experts</Nav.Link>
    
          </Nav>
          <Nav>
            <Nav.Link as={Link} to="/about">About</Nav.Link>
            {
              user?
              <>
              <p className='mt-2 '>{user.displayName}</p>
              <button className='btn btn-link text-decoration-none text-white mb-2' onClick={handleSignOut}>SignOut</button>
              </>
              :
              <Nav.Link eventKey={2} as ={Link} to="/login">
              Login
            </Nav.Link>
            }
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    );
};

export default Header;