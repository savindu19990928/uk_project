import React from 'react';
import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Testimonials from './Home/Testimonials'

const Home = () => {
    return (
        <main className="page-wrapper">
            <section className="pt-5">
                <div className="container position-relative zindex-2 pt-5 mt-3 mt-sm-4 mt-md-5">
                    <div className="row pt-xl-3 pt-xxl-4">
                        <div className="col-lg-7 col-xxl-6">
                            <h1 className="display-3 text-center text-lg-start texta"><span className='text-primary title1'>SMART PARK & FLY</span><br />Secure Your Spot with Ease</h1>
                        </div>
                        <div className="col-lg-5 offset-xxl-1 pt-sm-3">
                            <p className="text-center text-lg-start pb-3 pb-sm-0 pb-md-2 mb-4 mb-sm-5 textp">
                                Magna in purus in facilisis pretium eleifend in nullamer magna morbi eleifend vel convallis quis utrices neque tellus purus in facilisis pretium eleifend vel convallio.
                            </p>
                            <div id='heromobile' style={{ height: '200px', position: 'relative', backgroundImage: 'url(assets/img/herolottie.gif)', backgroundSize: 'contain', backgroundPosition: 'center', backgroundRepeat: 'no-repeat' }}>
                            </div>
                            {/* Contact form */}
                            <div className="card border-0 bg-primary py-4 px-xxl-4">
                                <form className="card-body dark-mode">
                                    <h2 className="h3 card-title text-center pb-2 pb-xxl-3 titlea">Reserve your spot</h2>
                                    <div className="mb-3">
                                        <label className="form-label fs-base textfr" htmlFor="location">Location</label>
                                        <select className="form-select form-select-lg textfr" required id="location">
                                            <option style={{ color: '#121519' }} value="london airport" selected>London airport</option>
                                        </select>
                                    </div>
                                    <div className="mb-3">
                                        <label className="form-label fs-base textfr" htmlFor="terminal">Terminal</label>
                                        <select className="form-select form-select-lg textfr" required id="terminal">
                                            <option style={{ color: '#121519' }} value="any">Any terminal</option>
                                            <option style={{ color: '#121519' }} value="terminal 1">Terminal 1</option>
                                            <option style={{ color: '#121519' }} value="terminal 2">Terminal 2</option>
                                            <option style={{ color: '#121519' }} value="terminal 3">Terminal 3</option>
                                            <option style={{ color: '#121519' }} value="terminal 4">Terminal 4</option>
                                        </select>
                                    </div>
                                    <div className="mb-3">
                                        <label className="form-label textfr">Parking from</label>
                                        <div className="position-relative textfr">
                                            <input
                                                className="form-control form-control-lg date-picker pe-5 textfr"
                                                type="text"
                                                placeholder="Choose date/time"
                                                data-datepicker-options='{"enableTime": true, "altInput": true, "altFormat": "F j, Y H:i", "dateFormat": "Y-m-d H:i"}'
                                            />
                                            <i className="ai-calendar position-absolute top-50 end-0 translate-middle-y fs-lg text-white opacity-80 me-3"></i>
                                        </div>
                                    </div>
                                    <div className="mb-3">
                                        <label className="form-label textfr">Parking to</label>
                                        <div className="position-relative textfr">
                                            <input
                                                className="form-control form-control-lg date-picker pe-5 textfr"
                                                type="text"
                                                placeholder="Choose date/time"
                                                data-datepicker-options='{"enableTime": true, "altInput": true, "altFormat": "F j, Y H:i", "dateFormat": "Y-m-d H:i"}'
                                            />
                                            <i className="ai-calendar position-absolute top-50 end-0 translate-middle-y fs-lg text-white opacity-80 me-3"></i>
                                        </div>
                                    </div>
                                    <div className="mb-3">
                                        <label className="form-label fs-base textfr" htmlFor="promo">Promo code</label>
                                        <input className="form-control form-control-lg textfr" type="text" placeholder="Enter your promo code" required id="promo" />
                                    </div>
                                    <div className="d-flex flex-column flex-sm-row flex-lg-column flex-xxl-row align-items-center justify-content-center justify-content-lg-start pt-3 pt-xxl-4">
                                        <button className="btn btn-light w-100 w-sm-auto w-lg-100 w-xxl-auto mb-2 mb-sm-0 mb-lg-2 mb-xxl-0 me-sm-3 me-lg-0 me-xxl-3 text-primary texta" type="submit">Book space now</button>
                                        <a className="d-flex align-items-center fs-sm text-white text-decoration-none px-3 py-2 texta" href="tel:+15262200459">
                                            <i className="ai-phone fs-xl me-2"></i>+1 526 220 0459
                                        </a>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Parallax image */}
                <div id='herodesktop' style={{ position: 'relative', backgroundImage: 'url(assets/img/herolottie.gif)', backgroundSize: 'contain', backgroundPosition: 'center', backgroundRepeat: 'no-repeat' }}>
                    <div className="d-none d-xxl-block" style={{ height: '830px', marginTop: '-700px' }}></div>
                    <div className="d-none d-xl-block d-xxl-none" style={{ height: '780px', marginTop: '-490px' }}></div>
                    <div className="d-none d-lg-block d-xl-none" style={{ height: '700px', marginTop: '-560px' }}></div>
                    <div className="d-none d-sm-block d-lg-none" style={{ height: '520px', marginTop: '-450px' }}></div>
                    <div className="d-sm-none" style={{ height: '500px', marginTop: '-450px' }}></div>
                </div>
            </section>
            <section className="container pt-0 mt-lg-0 mt-xl-0 mt-xxl-0">
                <div className="text-center pb-3 pt-4 pt-sm-0 pt-md-0 pt-xl-0 mx-auto mb-sm-2 mb-md-3 mb-lg-4" style={{ maxWidth: '525px' }}>
                    <h2 className="h1 texta">About<br /><span className='text-primary title2'>SMART PARK & FLY</span></h2>
                    <p className="mb-0 textp">Enim aenean phasellus in hendrerit interdum lorem proin pretium, dictum urna suspendisse quis risus vivamus.</p>
                </div>
                <div className="row row-cols-1 row-cols-sm-3 gy-sm-2 g-md-4">
                    <div className="col card border-0 bg-transparent p-xxl-2">
                        <div className="card-body text-center p-3 p-sm-4"><i className="lni lni-pointer display-1 text-primary mb-3 mb-sm-4 icon1"></i>
                            <div className="h2 mb-0 textr">Easy to book</div>
                        </div>
                    </div>
                    <div className="col card border-0 bg-transparent p-xxl-2">
                        <div className="card-body text-center p-3 p-sm-4"><i className="lni lni-shield display-1 text-primary mb-3 mb-sm-4 icon1"></i>
                            <div className="h2 mb-0 textr">Best security</div>
                        </div>
                    </div>
                    <div className="col card border-0 bg-transparent p-xxl-2">
                        <div className="card-body text-center p-3 p-sm-4"><i className="ai-clock display-1 text-primary mb-3 mb-sm-4 icon1" style={{ fontWeight: 'bolder' }}></i>
                            <div className="h2 mb-0 textr">24/7 access</div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="container pt-5 mt-lg-3 mt-xl-4 mt-xxl-5">
                <div className="row text-center text-md-start pb-3 pt-1 pt-sm-3 pt-md-4 pt-xl-5 mt-lg-2 mt-xl-0 mb-3 mb-lg-4">
                    <div className="col-md-6">
                        <h2 className="h1 mb-md-0 texta">Why choose us?</h2>
                    </div>
                    <div className="col-md-6 pt-2">
                        <p className="mb-0 textp">
                            Morbi et massa fames ac scelerisque sit commodo dignissim aucibus vel quisque proin lectus laoreet sem
                            adipiscing sollicitudin erat massa tellus lorem aenean.
                        </p>
                    </div>
                </div>
                <div className="rounded-5 overflow-hidden">
                    <div className="ratio ratio-16x9 d-flex align-items-center">
                        <div style={{ backgroundImage: 'url(assets/img/lottie1.gif)', backgroundSize: 'contain', backgroundPosition: 'center', backgroundRepeat: 'no-repeat', height: "80%" }}></div>
                    </div>
                </div>
            </section>
            <section className="container pt-0 mt-0 mt-sm-0 mt-lg-0 mt-xxl-0">
                <div className="row align-items-center pt-2 pt-sm-3 pt-md-4 pt-xl-5 mt-xxl-2">
                    {/* CTA */}
                    <div className="col-md-5 col-xl-4 offset-lg-1 mt-0 mt-md-n5 mb-5 mb-md-0">
                        <div className="pe-md-4">
                            <h2 className="h1 text-center text-md-start mb-4 texta">
                                More than 1 million clients have booked our parking spots
                            </h2>
                            <ul className="list-unstyled d-flex d-md-block flex-wrap justify-content-center pb-2 pb-lg-0 mb-4 mb-lg-5">
                                <li className="d-flex pt-1 mt-2 mx-2 mx-md-0 textp">
                                    <i className="ai-check-alt text-primary fs-4 mt-n1 me-2 "></i>24/7 access to the parking areas
                                </li>
                                <li className="d-flex pt-1 mt-2 mx-2 mx-md-0 textp">
                                    <i className="ai-check-alt text-primary fs-4 mt-n1 me-2"></i>Book with few clicks
                                </li>
                                <li className="d-flex pt-1 mt-2 mx-2 mx-md-0 textp">
                                    <i className="ai-check-alt text-primary fs-4 mt-n1 me-2"></i>Payment is refundable
                                </li>
                            </ul>
                            <div className="text-center text-md-start">
                                <a className="btn btn-lg btn-primary texta" href="#">
                                    Book your spot now
                                </a>
                            </div>
                        </div>
                    </div>
                    <Testimonials />
                </div>
            </section>
        </main>
    );
};

export default Home;