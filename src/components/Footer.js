import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const Footer = () => {
    return (
        <footer className="footer py-5">
            <div className="container pt-lg-3 mt-xl-3">
                <div className="border-bottom text-center pb-4">
                    <ul className="nav justify-content-center py-1 pb-sm-2 texta">
                        <li className="nav-item"><Link className="nav-link py-2 px-3 mx-1" to="/tt">Terms of use</Link></li>
                        <li className="nav-item"><Link className="nav-link py-2 px-3 mx-1" to="/pp">Privacy policy</Link></li>
                        <li className="nav-item"><Link className="nav-link py-2 px-3 mx-1" to="/reviews">Reviews</Link></li>
                        <li className="nav-item"><Link className="nav-link py-2 px-3 mx-1" to="/blog">Blog</Link></li>
                    </ul>
                </div>
                <div className="d-sm-flex align-items-center justify-content-between pt-4 mt-2 mt-sm-0">
                    <div className="d-flex justify-content-center order-sm-2 mb-4 mb-sm-0">
                        <a className="btn btn-icon btn-sm btn-secondary btn-instagram rounded-circle me-3" href="#"><i className="ai-instagram"></i></a>
                        <a className="btn btn-icon btn-sm btn-secondary btn-facebook rounded-circle me-3" href="#"><i className="ai-facebook"></i></a>
                        <a className="btn btn-icon btn-sm btn-secondary btn-youtube rounded-circle" href="#"><i className="ai-youtube"></i></a>
                    </div>
                    <p className="fs-sm order-sm-1 text-center mb-0 textp">
                        <span className="opacity-70">&copy; All rights reserved. Made by </span>
                        <a className="nav-link d-inline p-0" href="https://www.devrious.lk/" target="_blank" rel="noopener">Devrious</a>
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;