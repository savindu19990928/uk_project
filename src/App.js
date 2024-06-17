"use client";
import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavbarC from './components/Navbar';
import Footer from './components/Footer';
import Home from './components/Home';
import Catalog from './components/Catalog';

function App() {
  useEffect(() => {
    // Array to keep track of created elements for cleanup
    const links = [];
    const scripts = [];

    // Function to create and append link elements
    const createLink = (rel, href, media = "screen", crossOrigin = null) => {
      const link = document.createElement("link");
      link.rel = rel;
      link.href = href;
      if (media) link.media = media;
      if (crossOrigin) link.crossOrigin = crossOrigin;
      document.head.appendChild(link);
      links.push(link); // Track the link element
    };

    // Function to create and append script elements
    const createScript = (src, integrity, crossorigin) => {
      const script = document.createElement("script");
      script.src = src;
      if (integrity) {
        script.integrity = integrity;
      }
      if (crossorigin) {
        script.crossorigin = crossorigin;
      }
      document.body.appendChild(script);
      scripts.push(script);
    };

    // Creating and appending link elements
    createLink("preconnect", "https://fonts.googleapis.com");
    createLink("preconnect", "https://fonts.gstatic.com", null, "true");
    createLink("stylesheet", "https://fonts.googleapis.com/css2?family=Anton&family=Poetsen+One&family=Rowdies:wght@300;400;700&display=swap");
    createLink("stylesheet", "./assets/vendor/swiper/swiper-bundle.min.css");
    createLink("stylesheet", "./assets/css/theme.min.css");
    createLink("stylesheet", "./assets/vendor/flatpickr/dist/flatpickr.min.css");
    createLink("stylesheet", "./assets/vendor/lightgallery/css/lightgallery-bundle.min.css");
    createLink("stylesheet", "./assets/vendor/aos/dist/aos.css");
    createLink("stylesheet", "./assets/vendor/leaflet/dist/leaflet.css");
    createLink("stylesheet", "./assets/css/main.css");
    createLink("stylesheet", "https://cdn.lineicons.com/4.0/lineicons.css");

    // Creating and appending script elements
    createScript("./assets/vendor/bootstrap/dist/js/bootstrap.bundle.min.js");
    createScript("./assets/vendor/smooth-scroll/dist/smooth-scroll.polyfills.min.js");
    createScript("./assets/vendor/jarallax/dist/jarallax.min.js");
    createScript("./assets/vendor/swiper/swiper-bundle.min.js");
    createScript("./assets/vendor/timezz/dist/timezz.js");
    createScript("./assets/js/theme.min.js");
    createScript("./assets/vendor/flatpickr/dist/flatpickr.min.js");
    createScript("./assets/vendor/lightgallery/lightgallery.min.js");
    createScript("./assets/vendor/lightgallery/plugins/video/lg-video.min.js");
    createScript("./assets/vendor/lightgallery/plugins/fullscreen/lg-fullscreen.min.js");
    createScript("./assets/vendor/lightgallery/plugins/zoom/lg-zoom.min.js");
    createScript("./assets/vendor/lightgallery/plugins/thumbnail/lg-thumbnail.min.js");
    createScript("./assets/vendor/aos/dist/aos.js");
    createScript("./assets/vendor/leaflet/dist/leaflet.js");
    createScript("./assets/vendor/cleave.js/dist/cleave.min.js");
    createScript("https://code.jquery.com/jquery-3.7.1.min.js", "sha256-/JqT3SQfawRcv/BIHPThkBvs0OEvtFFmqPF/lYI/Cxo=", "anonymous");

    // Cleanup function
    return () => {
      links.forEach(link => document.head.removeChild(link));
      scripts.forEach(script => document.body.removeChild(script));
    };
  }, []);

  return (
    <Router>
      <div>
        <NavbarC />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Catalog />} />
          <Route path="/about" element={<Home />} />
          <Route path="/contact" element={<Home />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
