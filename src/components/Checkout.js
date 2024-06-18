import React, { useState, useEffect } from 'react';
import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function Checkout() {
    const [contactDetails, setContactDetails] = useState({
        title: '',
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        numberOfPeople: ''
    });

    const [flightDetails, setFlightDetails] = useState({
        departureTerminal: '',
        departureFlightNo: '',
        arrivalTerminal: '',
        arrivalFlightNo: ''
    });

    const [carDetails, setCarDetails] = useState({
        make: '',
        model: '',
        color: '',
        regNumber: ''
    });

    const [showFlightDetails, setShowFlightDetails] = useState(false);
    const [showCarDetails, setShowCarDetails] = useState(false);

    useEffect(() => {
        const allContactFilled = Object.values(contactDetails).every(value => value !== '');
        setShowFlightDetails(allContactFilled);
    }, [contactDetails]);

    useEffect(() => {
        const allFlightFilled = Object.values(flightDetails).every(value => value !== '');
        setShowCarDetails(allFlightFilled);
    }, [flightDetails]);

    const handleContactChange = (e) => {
        const { id, value } = e.target;
        setContactDetails(prevState => ({ ...prevState, [id]: value }));
    };

    const handleFlightChange = (e) => {
        const { id, value } = e.target;
        setFlightDetails(prevState => ({ ...prevState, [id]: value }));
    };

    const handleCarChange = (e) => {
        const { id, value } = e.target;
        setCarDetails(prevState => ({ ...prevState, [id]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form submitted', { contactDetails, flightDetails, carDetails });
    };
    return (
        <div style={{ paddingTop: '70px' }}>
            <div className="d-none d-lg-block bg-secondary position-fixed top-0 start-0 h-100" style={{ width: '52.5%' }}></div>
            <form className="needs-validation container position-relative zindex-2 pt-5 pb-lg-5 pb-md-4 pb-2" noValidate onSubmit={handleSubmit}>
                <div className="row">
                    <div className="col-lg-6">
                        <h1 className="h2 pb-3 texta">Checkout</h1>
                        <h3 className="fs-base fw-normal text-body text-uppercase pb-2 pb-sm-3">
                            1.<span className="text-decoration-underline ms-1 textr">Contact details</span>
                        </h3>
                        <div className="row g-4 pb-4 pb-md-5 mb-3 mb-md-1" id="contact-details">
                            <div className="col-sm-6">
                                <label className="form-label fs-base textr" htmlFor="title">Title</label>
                                <select className="form-select form-select-lg textr" required id="title" value={contactDetails.title} onChange={handleContactChange}>
                                    <option value="" disabled>Select your title</option>
                                    <option value="mr">Mr.</option>
                                    <option value="miss">Miss</option>
                                    <option value="mrs">Mrs.</option>
                                </select>
                            </div>
                            <div className="col-sm-6">
                                <label className="form-label fs-base textr" htmlFor="firstName">First name</label>
                                <input className="form-control form-control-lg textr" type="text" placeholder="Your first name" required id="firstName" value={contactDetails.firstName} onChange={handleContactChange} />
                            </div>
                            <div className="col-sm-6">
                                <label className="form-label fs-base textr" htmlFor="lastName">Last name</label>
                                <input className="form-control form-control-lg textr" type="text" placeholder="Your last name" required id="lastName" value={contactDetails.lastName} onChange={handleContactChange} />
                            </div>
                            <div className="col-sm-6">
                                <label className="form-label fs-base textr" htmlFor="email">Email</label>
                                <div className="position-relative">
                                    <input className="form-control form-control-lg ps-5 textr" type="email" placeholder="Email address" required id="email" value={contactDetails.email} onChange={handleContactChange} />
                                </div>
                            </div>
                            <div className="col-sm-6">
                                <label className="form-label fs-base textr" htmlFor="phone">Phone</label>
                                <div className="position-relative">
                                    <input className="form-control form-control-lg ps-5 textr" type="tel" placeholder="+1 ___ ___ __" required id="phone" value={contactDetails.phone} onChange={handleContactChange} />
                                </div>
                            </div>
                            <div className="col-sm-6">
                                <label className="form-label fs-base textr" htmlFor="numberOfPeople">Number of people</label>
                                <select className="form-select form-select-lg textr" required id="numberOfPeople" value={contactDetails.numberOfPeople} onChange={handleContactChange}>
                                    <option value="" disabled>Select number of people</option>
                                    <option value="1">1</option>
                                    <option value="2">2</option>
                                    <option value="3">3</option>
                                    <option value="4">4</option>
                                    <option value="5">5</option>
                                    <option value="6">6</option>
                                </select>
                            </div>
                        </div>

                        {showFlightDetails && (
                            <div>
                                <h3 className="fs-base fw-normal text-body text-uppercase mt-n4 mt-md-n3 pt-5 pb-2 pb-sm-3">
                                    2.<span className="text-decoration-underline ms-1 textr">Flight details</span>
                                </h3>
                                <div className="row g-4 pb-4 pb-md-5 mb-3 mb-md-1" id="flight-details">
                                    <div className="col-sm-6">
                                        <label className="form-label fs-base textr" htmlFor="departureTerminal">Departure terminal</label>
                                        <select className="form-select form-select-lg textr" required id="departureTerminal" value={flightDetails.departureTerminal} onChange={handleFlightChange}>
                                            <option value="" disabled>Select departure terminal</option>
                                            <option value="1">Terminal 1</option>
                                            <option value="2">Terminal 2</option>
                                            <option value="3">Terminal 3</option>
                                            <option value="4">Terminal 4</option>
                                        </select>
                                    </div>
                                    <div className="col-sm-6">
                                        <label className="form-label fs-base textr" htmlFor="departureFlightNo">Departure flight no.</label>
                                        <input className="form-control form-control-lg textr" type="text" placeholder="Enter departure flight no." required id="departureFlightNo" value={flightDetails.departureFlightNo} onChange={handleFlightChange} />
                                    </div>
                                    <div className="col-sm-6">
                                        <label className="form-label fs-base textr" htmlFor="arrivalTerminal">Arrival terminal</label>
                                        <select className="form-select form-select-lg textr" required id="arrivalTerminal" value={flightDetails.arrivalTerminal} onChange={handleFlightChange}>
                                            <option value="" disabled>Select arrival terminal</option>
                                            <option value="1">Terminal 1</option>
                                            <option value="2">Terminal 2</option>
                                            <option value="3">Terminal 3</option>
                                            <option value="4">Terminal 4</option>
                                        </select>
                                    </div>
                                    <div className="col-sm-6">
                                        <label className="form-label fs-base textr" htmlFor="arrivalFlightNo">Arrival flight no.</label>
                                        <input className="form-control form-control-lg textr" type="text" placeholder="Enter arrival flight no." required id="arrivalFlightNo" value={flightDetails.arrivalFlightNo} onChange={handleFlightChange} />
                                    </div>
                                </div>
                            </div>
                        )}

                        {showCarDetails && (
                            <div>
                                <h3 className="fs-base fw-normal text-body text-uppercase mt-n4 mt-md-n3 pt-5 pb-2 pb-sm-3">
                                    3.<span className="text-decoration-underline ms-1 textr">Car details</span>
                                </h3>
                                <div className="row g-4 pb-4 pb-md-5 mb-3 mb-md-1" id="car-details">
                                    <div className="col-sm-6">
                                        <label className="form-label fs-base textr" htmlFor="make">Make</label>
                                        <input className="form-control form-control-lg textr" type="text" placeholder="Company that made it" required id="make" value={carDetails.make} onChange={handleCarChange} />
                                    </div>
                                    <div className="col-sm-6">
                                        <label className="form-label fs-base textr" htmlFor="model">Model</label>
                                        <input className="form-control form-control-lg textr" type="text" placeholder="Model of the car" required id="model" value={carDetails.model} onChange={handleCarChange} />
                                    </div>
                                    <div className="col-sm-6">
                                        <label className="form-label fs-base textr" htmlFor="color">Color</label>
                                        <input className="form-control form-control-lg textr" type="text" placeholder="Color of the car" required id="color" value={carDetails.color} onChange={handleCarChange} />
                                    </div>
                                    <div className="col-sm-6">
                                        <label className="form-label fs-base textr" htmlFor="regNumber">Reg. number</label>
                                        <input className="form-control form-control-lg textr" type="text" placeholder="Registration number" required id="regNumber" value={carDetails.regNumber} onChange={handleCarChange} />
                                    </div>
                                </div>
                            </div>
                        )}

                        <div className="d-none d-lg-block pt-5 mt-n3">
                            <button className="btn btn-lg btn-primary texta" type="submit">Place an order</button>
                        </div>
                    </div>
                    <div className="col-lg-5 offset-lg-1 pt-1 pricing-fixed">
                        <h2 className="pb-2 pt-md-2 my-4 mt-lg-5 texta">Summary</h2>
                        <ul className="list-unstyled py-3 mb-0">
                            <li className="d-flex justify-content-between mb-2 textr">Subtotal:<span className="fw-semibold ms-2 textr">$92.00</span></li>
                            <li className="d-flex justify-content-between mb-2 textr">Taxes:<span className="fw-semibold ms-2 textr">$8.00</span></li>
                            <li className="d-flex justify-content-between mb-2 textr">Shipping cost:<span className="fw-semibold ms-2 textr">$15.00</span></li>
                        </ul>
                        <div className="d-flex align-items-center justify-content-between border-top fs-xl pt-4 textr">Total:<span className="fs-3 fw-semibold text-dark ms-2 textr">$115.00</span></div>
                    </div>
                </div>
                <div className="d-lg-none pb-2 mt-2 mt-lg-0 pt-4 pt-lg-5">
                    <button className="btn btn-lg btn-primary w-100 w-sm-auto texta" type="submit">Place an order</button>
                </div>
            </form>
        </div>
    );
}

export default Checkout;