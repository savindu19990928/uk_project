import React from 'react';
import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function Checkout() {
    return (
        <div style={{ paddingTop: '70px' }}>
            <div className="d-none d-lg-block bg-secondary position-fixed top-0 start-0 h-100" style={{ width: '52.5%' }}></div>
            <form className="needs-validation container position-relative zindex-2 pt-5 pb-lg-5 pb-md-4 pb-2" noValidate>
                <div className="row">
                    <div className="col-lg-6">
                        <h1 className="h2 pb-3">Checkout</h1>
                        <h3 className="fs-base fw-normal text-body text-uppercase pb-2 pb-sm-3">
                            1.<span className="text-decoration-underline ms-1">Contact details</span>
                        </h3>
                        <div className="row g-4 pb-4 pb-md-5 mb-3 mb-md-1">
                        <div className="col-sm-6">
                                <label className="form-label fs-base" htmlFor="t-title">Title</label>
                                <select className="form-select form-select-lg" required id="t-title">
                                    <option value="" selected disabled>Select your title</option>
                                    <option value="mr">Mr.</option>
                                    <option value="miss">Miss</option>
                                    <option value="mrs">Mrs.</option>
                                </select>
                            </div>
                            <div className="col-sm-6">
                                <label className="form-label fs-base" htmlFor="c-fn">First name</label>
                                <input className="form-control form-control-lg" type="text" placeholder="Your first name" required id="c-fn" />
                            </div>
                            <div className="col-sm-6">
                                <label className="form-label fs-base" htmlFor="c-ln">Last name</label>
                                <input className="form-control form-control-lg" type="text" placeholder="Your last name" required id="c-ln" />
                            </div>
                            <div className="col-sm-6">
                                <label className="form-label fs-base" htmlFor="c-email">Email</label>
                                <div className="position-relative">
                                    <i className="ai-mail fs-lg position-absolute top-50 start-0 translate-middle-y ms-3"></i>
                                    <input className="form-control form-control-lg ps-5" type="email" placeholder="Email address" required id="c-email" />
                                </div>
                            </div>
                            <div className="col-sm-6">
                                <label className="form-label fs-base" htmlFor="c-phone">Phone</label>
                                <div className="position-relative">
                                    <i className="ai-phone fs-lg position-absolute top-50 start-0 translate-middle-y ms-3"></i>
                                    <input className="form-control form-control-lg ps-5" type="tel" data-format="{&quot;numericOnly&quot;: true, &quot;delimiters&quot;: [&quot;+1 &quot;, &quot; &quot;, &quot; &quot;], &quot;blocks&quot;: [0, 3, 3, 2]}" placeholder="+1 ___ ___ __" required id="c-phone" />
                                </div>
                            </div>
                            <div className="col-sm-6">
                                <label className="form-label fs-base" htmlFor="p-people">Number of people</label>
                                <select className="form-select form-select-lg" required id="p-people">
                                    <option value="" selected disabled>Select number of people</option>
                                    <option value="1">1</option>
                                    <option value="2">2</option>
                                    <option value="3">3</option>
                                    <option value="4">4</option>
                                    <option value="5">5</option>
                                    <option value="6">6</option>
                                </select>
                            </div>
                        </div>
                        <h3 className="fs-base fw-normal text-body text-uppercase pb-2 pb-sm-3">
                            2.<span className="text-decoration-underline ms-1">Shipping method</span>
                        </h3>
                        <div className="form-check mb-4">
                            <input className="form-check-input" type="radio" name="shipping" id="standard" />
                            <label className="form-check-label d-flex justify-content-between" htmlFor="standard">
                                <span>
                                    <span className="d-block fs-base text-dark fw-medium mb-1">Standard Delivery</span>
                                    <span className="text-body">Delivery in 5 - 8 working days</span>
                                </span>
                                <span className="fs-base text-dark fw-semibold">$8.00</span>
                            </label>
                        </div>
                        <div className="form-check mb-4">
                            <input className="form-check-input" type="radio" name="shipping" checked id="express" />
                            <label className="form-check-label d-flex justify-content-between" htmlFor="express">
                                <span>
                                    <span className="d-block fs-base text-dark fw-medium mb-1">Express Shipping</span>
                                    <span className="text-body">Delivery in 3 - 5 working days</span>
                                </span>
                                <span className="fs-base text-dark fw-semibold">$15.00</span>
                            </label>
                        </div>
                        <div className="form-check mb-4">
                            <input className="form-check-input" type="radio" name="shipping" id="local" />
                            <label className="form-check-label d-flex justify-content-between" htmlFor="local">
                                <span>
                                    <span className="d-block fs-base text-dark fw-medium mb-1">Local Pickup</span>
                                    <span className="text-body">Delivery in 1 - 2 working days</span>
                                </span>
                                <span className="fs-base text-dark fw-semibold">Free</span>
                            </label>
                        </div>
                        <h3 className="fs-base fw-normal text-body text-uppercase mt-n4 mt-md-n3 pt-5 pb-2 pb-sm-3">
                            3.<span className="text-decoration-underline ms-1">Payment method</span>
                        </h3>
                        <div className="form-check mb-4">
                            <input className="form-check-input" type="radio" name="payment" checked id="card" />
                            <label className="form-check-label" htmlFor="card">
                                <span>
                                    <span className="d-block fs-base text-dark fw-medium mb-1">Credit Card</span>
                                    <span className="text-body">Mastercard, Maestro, American Express, Visa are accepted</span>
                                </span>
                            </label>
                        </div>
                        <div className="form-check mb-4">
                            <input className="form-check-input" type="radio" name="payment" id="cash" />
                            <label className="form-check-label" htmlFor="cash">
                                <span>
                                    <span className="d-block fs-base text-dark fw-medium mb-1">Cash on Delivery</span>
                                    <span className="text-body">Pay with cash upon the delivery</span>
                                </span>
                            </label>
                        </div>
                        <div className="d-none d-lg-block pt-5 mt-n3">
                            <button className="btn btn-lg btn-primary" type="submit">Place an order</button>
                        </div>
                    </div>
                    <div className="col-lg-5 offset-lg-1 pt-1 pricing-fixed">
                        <h2 className="pb-2 pt-md-2 my-4 mt-lg-5">Summary</h2>
                        <ul className="list-unstyled py-3 mb-0">
                            <li className="d-flex justify-content-between mb-2">Subtotal:<span className="fw-semibold ms-2">$92.00</span></li>
                            <li className="d-flex justify-content-between mb-2">Taxes:<span className="fw-semibold ms-2">$8.00</span></li>
                            <li className="d-flex justify-content-between mb-2">Shipping cost:<span className="fw-semibold ms-2">$15.00</span></li>
                        </ul>
                        <div className="d-flex align-items-center justify-content-between border-top fs-xl pt-4">Total:<span className="fs-3 fw-semibold text-dark ms-2">$115.00</span></div>
                    </div>
                </div>
                <div className="d-lg-none pb-2 mt-2 mt-lg-0 pt-4 pt-lg-5">
                    <button className="btn btn-lg btn-primary w-100 w-sm-auto" type="submit">Place an order</button>
                </div>
            </form>
        </div>
    );
}

export default Checkout;