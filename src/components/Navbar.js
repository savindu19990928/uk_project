import React from 'react';
import { Navbar, Nav, Button, Container } from 'react-bootstrap';
import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useLocation } from 'react-router-dom';

const NavbarC = () => {
    const location = useLocation();
    const isActive = (path) => location.pathname === path;
    return (
        <header>
            <Navbar bg="light" expand="lg" fixed="top" className="navbar navbar-expand-lg bg-light fixed-top">
                <Container>
                    <Navbar.Brand href="/" className="text-primary">
                        <span className="text-primary flex-shrink-0 me-2">
                            <img src="./assets/img/logo.png" alt="Logo" className="fit-image" />
                        </span>
                        <span style={{ color: '#1272FF', fontSize: '16px' }}>SMART<br />PARK & FLY</span>
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbarCollapse2" />
                    <Navbar.Collapse id="navbarCollapse2">
                        <Nav className="m-auto">
                            <Nav.Link to="/" className={`nav-item ${isActive('/') ? 'active' : ''}`}>Home</Nav.Link>
                            <Nav.Link to="/services" className={`nav-item ${isActive('/services') ? 'active' : ''}`}>Services</Nav.Link>
                            <Nav.Link to="/about" className={`nav-item ${isActive('/about') ? 'active' : ''}`}>About</Nav.Link>
                            <Nav.Link to="/contact" className={`nav-item ${isActive('/contact') ? 'active' : ''}`}>Contact</Nav.Link>
                        </Nav>
                        <a to="/login" className="btn btn-outline-primary btn-sm order-lg-3 d-none d-lg-inline-flex login">
                            <i className="ai-login me-2 ms-n1"></i>
                            Login
                        </a>
                        <Button to="/login" variant="outline-primary" className="d-lg-none ms-3 mb-4 mb-lg-0 login">
                            <i className="ai-login me-2 ms-n1"></i>
                            Login
                        </Button>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </header>
    );
};

export default NavbarC;