import React, { useState } from 'react';
import { Navbar, Nav, Button, Container } from 'react-bootstrap';
import { Link, useLocation } from 'react-router-dom';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai'; // Importing icons from react-icons
import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const NavbarC = () => {
    const location = useLocation();
    const [navbarOpen, setNavbarOpen] = useState(false);

    const handleToggle = () => {
        setNavbarOpen(!navbarOpen);
    };

    const isActive = (path) => location.pathname === path;

    return (
        <header>
            <Navbar expand="lg" fixed="top" className="navbar navbar-expand-lg fixed-top">
                <Container>
                    <Navbar.Brand as={Link} to="/" className="text-primary">
                        <span className="text-primary flex-shrink-0 me-2">
                            <img src="./assets/img/logo.png" alt="Logo" className="fit-image" />
                        </span>
                        <span style={{ color: '#1272FF', fontSize: '16px' }}>
                            SMART
                            <br />
                            PARK & FLY
                        </span>
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbarCollapse2" onClick={handleToggle}>
                        {navbarOpen ? (
                            <AiOutlineClose size={24} color="black" />
                        ) : (
                            <AiOutlineMenu size={24} color="black" />
                        )}
                    </Navbar.Toggle>
                    <Navbar.Collapse id="navbarCollapse2" in={navbarOpen}>
                        <Nav className="m-auto">
                            <Nav.Link as={Link} to="/" className={`nav-item ${isActive('/') ? 'active' : ''}`}>
                                Home
                            </Nav.Link>
                            <Nav.Link as={Link} to="/services" className={`nav-item ${isActive('/services') ? 'active' : ''}`}>
                                Services
                            </Nav.Link>
                            <Nav.Link as={Link} to="/about" className={`nav-item ${isActive('/about') ? 'active' : ''}`}>
                                About
                            </Nav.Link>
                            <Nav.Link as={Link} to="/contact" className={`nav-item ${isActive('/contact') ? 'active' : ''}`}>
                                Contact
                            </Nav.Link>
                        </Nav>
                        <Link to="/login" className="btn btn-outline-primary btn-sm order-lg-3 d-none d-lg-inline-flex login">
                            <i className="ai-login me-2 ms-n1"></i>
                            Login
                        </Link>
                        <Button as={Link} to="/login" variant="outline-primary" className="d-lg-none ms-3 mb-4 mb-lg-0 login">
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