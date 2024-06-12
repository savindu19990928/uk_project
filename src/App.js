"use client";
import React, { useEffect } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Nav, Button, Container } from 'react-bootstrap';

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
    const createScript = (src) => {
      const script = document.createElement("script");
      script.src = src;
      document.body.appendChild(script);
      scripts.push(script); // Track the script element
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

    // Cleanup function
    return () => {
      links.forEach(link => document.head.removeChild(link));
      scripts.forEach(script => document.body.removeChild(script));
    };
  }, []);

  return (
    <main className="page-wrapper">
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
                <Nav.Link href="/" className="nav-item active">Home</Nav.Link>
                <Nav.Link href="/services" className="nav-item">Services</Nav.Link>
                <Nav.Link href="/about" className="nav-item">About</Nav.Link>
                <Nav.Link href="/contact" className="nav-item">Contact</Nav.Link>
              </Nav>
              <a href="tel:+94755746933" className="btn btn-outline-primary btn-sm order-lg-3 d-none d-lg-inline-flex">
                <i className="ai-login me-2 ms-n1"></i>
                Login
              </a>
              <Button href="tel:+94755746933" variant="outline-primary" className="d-lg-none ms-3 mb-4 mb-lg-0">
                <i className="ai-login me-2 ms-n1"></i>
                Login
              </Button>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </header>
      <section className="pt-0">
        <div className="container position-relative zindex-2 pt-5 mt-3 mt-sm-4 mt-md-5">
          <div className="row pt-xl-3 pt-xxl-4">
            <div className="col-lg-7 col-xxl-6">
              <h1 className="display-3 text-center text-lg-start formstyle" style={{ fontSize: '55px' }}><span className='text-primary' style={{ fontSize: '90px' }}>SMART PARK & FLY</span><br />Secure Your Spot with Ease</h1>
            </div>
            <div className="col-lg-5 offset-xxl-1 pt-sm-3">
              <p className="fs-lg text-center text-lg-start pb-3 pb-sm-0 pb-md-2 mb-4 mb-sm-5 textp">
                Magna in purus in facilisis pretium eleifend in nullamer magna morbi eleifend vel convallis quis utrices neque tellus purus in facilisis pretium eleifend vel convallio.
              </p>
              {/* Contact form */}
              <div className="card border-0 bg-primary py-4 px-xxl-4">
                <form className="card-body dark-mode">
                  <h2 className="h3 card-title text-center pb-2 pb-xxl-3 formstyle">Reserve your spot</h2>
                  <div className="mb-3">
                    <label className="form-label fs-base textr" htmlFor="location">Location</label>
                    <select className="form-select form-select-lg textr" required id="location">
                      <option style={{color: '#121519'}} value="london airport" selected>London airport</option>
                    </select>
                  </div>
                  <div className="mb-3">
                    <label className="form-label fs-base textr" htmlFor="terminal">Terminal</label>
                    <select className="form-select form-select-lg textr" required id="terminal">
                      <option style={{color: '#121519'}} value="any">Any terminal</option>
                      <option style={{color: '#121519'}} value="terminal 1">Terminal 1</option>
                      <option style={{color: '#121519'}} value="terminal 2">Terminal 2</option>
                      <option style={{color: '#121519'}} value="terminal 3">Terminal 3</option>
                      <option style={{color: '#121519'}} value="terminal 4">Terminal 4</option>
                    </select>
                  </div>
                  <div className="mb-3">
                    <label className="form-label textr">Parking from</label>
                    <div className="position-relative textr">
                      <input
                        className="form-control form-control-lg date-picker pe-5 textr"
                        type="text"
                        placeholder="Choose date/time"
                        data-datepicker-options='{"enableTime": true, "altInput": true, "altFormat": "F j, Y H:i", "dateFormat": "Y-m-d H:i"}'
                      />
                      <i className="ai-calendar position-absolute top-50 end-0 translate-middle-y fs-lg text-white opacity-80 me-3"></i>
                    </div>
                  </div>
                  <div className="mb-3">
                    <label className="form-label textr">Parking to</label>
                    <div className="position-relative textr">
                      <input
                        className="form-control form-control-lg date-picker pe-5 textr"
                        type="text"
                        placeholder="Choose date/time"
                        data-datepicker-options='{"enableTime": true, "altInput": true, "altFormat": "F j, Y H:i", "dateFormat": "Y-m-d H:i"}'
                      />
                      <i className="ai-calendar position-absolute top-50 end-0 translate-middle-y fs-lg text-white opacity-80 me-3"></i>
                    </div>
                  </div>
                  <div className="mb-3">
                    <label className="form-label fs-base textr" htmlFor="promo">Promo code</label>
                    <input className="form-control form-control-lg textr" type="text" placeholder="Enter your promo code" required id="promo" />
                  </div>
                  <div className="d-flex flex-column flex-sm-row flex-lg-column flex-xxl-row align-items-center justify-content-center justify-content-lg-start pt-3 pt-xxl-4">
                    <button className="btn btn-light w-100 w-sm-auto w-lg-100 w-xxl-auto mb-2 mb-sm-0 mb-lg-2 mb-xxl-0 me-sm-3 me-lg-0 me-xxl-3 text-primary formstyle" type="submit">Book space now</button>
                    <a className="d-flex align-items-center fs-sm text-white text-decoration-none px-3 py-2 formstyle" href="tel:+15262200459">
                      <i className="ai-phone fs-xl me-2"></i>+1 526 220 0459
                    </a>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
        {/* Parallax image */}
        <div style={{ position: 'relative', backgroundImage: 'url(assets/img/herolottie.gif)', backgroundSize: 'contain', backgroundPosition: 'center', backgroundRepeat: 'no-repeat' }}>
          <div className="d-none d-xxl-block" style={{ height: '830px', marginTop: '-500px' }}></div>
          <div className="d-none d-xl-block d-xxl-none" style={{ height: '780px', marginTop: '-520px' }}></div>
          <div className="d-none d-lg-block d-xl-none" style={{ height: '700px', marginTop: '-590px' }}></div>
          <div className="d-none d-sm-block d-lg-none" style={{ height: '520px', marginTop: '-480px' }}></div>
          <div className="d-sm-none" style={{ height: '500px', marginTop: '-480px' }}></div>
        </div>
      </section>
      <section className="container pt-0 mt-lg-0 mt-xl-0 mt-xxl-0">
        <div className="text-center pb-3 pt-0 pt-sm-0 pt-md-0 pt-xl-0 mx-auto mb-sm-2 mb-md-3 mb-lg-4" style={{ maxWidth: '525px' }}>
          <h2 className="h1 formstyle">About<br /><span style={{color: '#0051C9', fontSize: '48px'}}>SMART PARK & FLY</span></h2>
          <p className="mb-0 textp">Enim aenean phasellus in hendrerit interdum lorem proin pretium, dictum urna suspendisse quis risus vivamus.</p>
        </div>
        <div className="row row-cols-2 row-cols-sm-3 gy-sm-2 g-md-4">
          <div className="col card border-0 bg-transparent p-xxl-2">
            <div className="card-body text-center p-3 p-sm-4"><i className="lni lni-pointer display-1 text-primary mb-3 mb-sm-4" style={{fontSize: '80px'}}></i>
              <div className="h2 mb-0 textr">Easy to book</div>
            </div>
          </div>
          <div className="col card border-0 bg-transparent p-xxl-2">
            <div className="card-body text-center p-3 p-sm-4"><i className="lni lni-shield display-1 text-primary mb-3 mb-sm-4" style={{fontSize: '80px'}}></i>
              <div className="h2 mb-0 textr">Best security</div>
            </div>
          </div>
          <div className="col card border-0 bg-transparent p-xxl-2">
            <div className="card-body text-center p-3 p-sm-4"><i className="ai-clock display-1 text-primary mb-3 mb-sm-4" style={{fontSize: '80px', fontWeight: 'bolder'}}></i>
              <div className="h2 mb-0 textr">24/7 access</div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default App;
