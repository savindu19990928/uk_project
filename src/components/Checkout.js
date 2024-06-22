import React, { useState, useEffect } from 'react';
import InputMask from 'react-input-mask';
import validator from 'validator';
import '../App.css';
import { Collapse } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

function Checkout() {
    const [isActive1, setIsActive1] = useState(false);
    const [isActive2, setIsActive2] = useState(false);
    const [isActive3, setIsActive3] = useState(false);

    const [currentStep, setCurrentStep] = useState(1);
    const [showNext, setShowNext] = useState(false);
    const isMobile = () => window.innerWidth <= 768;

    const [openSummary, setOpenSummary] = useState(() => !isMobile());

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

    const [paymentDetails, setPaymentDetails] = useState({
        cardNumber: '',
        cardHolder: '',
        expiryDate: '',
        cvv: ''
    });

    const [showContactDetails, setShowContactDetails] = useState(true);
    const [showFlightDetails, setShowFlightDetails] = useState(false);
    const [showCarDetails, setShowCarDetails] = useState(false);
    const [showPaymentDetails, setShowPaymentDetails] = useState(false);

    const [isCardNumberValid, setIsCardNumberValid] = useState(true);
    const [isCvvValid, setIsCvvValid] = useState(true);
    const [isExpiryDateValid, setIsExpiryDateValid] = useState(true);
    const handleNextStep = () => {
       
        if (currentStep === 1 && Object.values(contactDetails).every(value => value !== '')) {
            setCurrentStep(2);
            setShowContactDetails(false);
            setShowFlightDetails(true);
            setIsActive1(true);
            setShowNext(false);
        } else if (currentStep === 2 && Object.values(flightDetails).every(value => value !== '')) {
            setCurrentStep(3);
            setShowContactDetails(false);
            setShowFlightDetails(false);
            setShowCarDetails(true);
            setIsActive2(true);
            setShowNext(false);
        } else if (currentStep === 3 && Object.values(carDetails).every(value => value !== '')) {
            setCurrentStep(4);
            setShowContactDetails(false);
            setShowFlightDetails(false);
            setShowCarDetails(false);
            setShowPaymentDetails(true);
            setIsActive3(true);
            setShowNext(false);
        } else if (currentStep === 4 && Object.values(paymentDetails).every(value => value !== '')) {
            //Submit form
            console.log('Form submitted', { contactDetails, flightDetails, carDetails, paymentDetails });
        }
    };

    const handleContactChange = (e) => {
        const { id, value } = e.target;
        const allFieldsFilled = Object.values({ ...contactDetails, [id]: value }).every(value => value !== '');
        setContactDetails(prevState => ({ ...prevState, [id]: value }));
        setShowNext(allFieldsFilled);
    };

    const handleFlightChange = (e) => {
        const { id, value } = e.target;
        const allFieldsFilled = Object.values({ ...flightDetails, [id]: value }).every(value => value !== '');
        setFlightDetails(prevState => ({ ...prevState, [id]: value }));
        setShowNext(allFieldsFilled);
    };

    const handleCarChange = (e) => {
        const { id, value } = e.target;
        const allFieldsFilled = Object.values({ ...carDetails, [id]: value }).every(value => value !== '');
        setCarDetails(prevState => ({ ...prevState, [id]: value }));
        setShowNext(allFieldsFilled);
    };

    const handlePaymentChange = (e) => {
        const { id, value } = e.target;
        const allFieldsFilled = Object.values({ ...paymentDetails, [id]: value }).every(value => value !== '');
        setPaymentDetails(prevState => ({ ...prevState, [id]: value }));

        if (id === 'cardNumber') {
            const plainNumber = value.replace(/\s+/g, '');
            setIsCardNumberValid(validator.isCreditCard(plainNumber));
        }
        if (id === 'cvv') {
            const plainCvv = value.replace(/\s+/g, '');
            setIsCvvValid(/^\d{3,4}$/.test(plainCvv));
        }
        if (id === 'expiryDate') {
            if (value.expiryDate) {
                const [month, year] = value.split('/');
                const isValidDate = validator.isInt(month, { min: 1, max: 12 }) && validator.isInt(year, { min: 0, max: 99 });
                setIsExpiryDateValid(isValidDate && value.length === 5);
            } else {
                setIsExpiryDateValid(false);
            }
        }
        setIsActive3(allFieldsFilled);
        setShowNext(allFieldsFilled);
    };

    const handleOpenSummary = (e) => {
        setOpenSummary(true);
    };
    const handleOpenedSummary = (e) => {
        setOpenSummary(false);
    };
    return (
        <div style={{ paddingTop: '70px' }}>
            <div className="d-none d-lg-block bg-secondary position-fixed top-0 start-0 h-100" style={{ width: '52.5%' }}></div>
            <form className="needs-validation container position-relative zindex-2 pt-5 pb-lg-5 pb-md-4 pb-2" noValidate>
                <div className="row checkoutwrapper">
                    <div className="col-lg-6">
                        <button className="btn btn-primary texta mb-4" type="button"><i className="ai-arrow-left text-white pe-2 fs-5" style={{ color: '#0051C9' }}></i>Edit your search</button>
                        <div className="card mb-5">
                            <div className="booking-steps-container">
                                <div className="booking-steps">
                                    <div className="step">
                                        <div className={isActive1 ? 'step-icon contact2-icon' : 'step-icon contact-icon'}></div>
                                    </div>
                                    <div className={isActive1 ? 'arrow arrow-color-filled' : 'arrow arrow-color'}></div>
                                    <div className="step">
                                        <div className={isActive2 ? 'step-icon flight2-icon' : 'step-icon flight-icon'}></div>
                                    </div>
                                    <div className={isActive2 ? 'arrow arrow-color-filled' : 'arrow arrow-color'}></div>
                                    <div className="step">
                                        <div className={isActive3 ? 'step-icon payment2-icon' : 'step-icon payment-icon'}></div>
                                    </div>
                                    <div className={isActive3 ? 'arrow arrow-color-filled' : 'arrow arrow-color'}></div>
                                    <div className="step">
                                        <div className='step-icon finished-icon'></div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <h1 className="h2 pb-3 textpa">Checkout</h1>
                        <Collapse in={showContactDetails}>
                            <div>
                        <h3 className="fs-base fw-normal text-body text-uppercase pb-2 pb-sm-3">
                            1.<span className="text-decoration-underline ms-1 textpr">Contact details</span>
                        </h3>
                        <div className="row g-4 pb-4 pb-md-5 mb-2 mb-md-0" id="contact-details">
                            <div className="col-sm-6">
                                <label className="form-label fs-base textpr" htmlFor="title">Title</label>
                                <select className="form-select form-select-lg textpr" required id="title" value={contactDetails.title} onChange={handleContactChange}>
                                    <option value="" disabled>Select your title</option>
                                    <option value="mr">Mr.</option>
                                    <option value="miss">Miss</option>
                                    <option value="mrs">Mrs.</option>
                                </select>
                            </div>
                            <div className="col-sm-6">
                                <label className="form-label fs-base textpr" htmlFor="firstName">First name</label>
                                <input className="form-control form-control-lg textpr" type="text" placeholder="Your first name" required id="firstName" value={contactDetails.firstName} onChange={handleContactChange} />
                            </div>
                            <div className="col-sm-6">
                                <label className="form-label fs-base textpr" htmlFor="lastName">Last name</label>
                                <input className="form-control form-control-lg textpr" type="text" placeholder="Your last name" required id="lastName" value={contactDetails.lastName} onChange={handleContactChange} />
                            </div>
                            <div className="col-sm-6">
                                <label className="form-label fs-base textpr" htmlFor="email">Email</label>
                                <div className="position-relative">
                                    <input className="form-control form-control-lg  textpr" type="email" placeholder="Email address" required id="email" value={contactDetails.email} onChange={handleContactChange} />
                                </div>
                            </div>
                            <div className="col-sm-6">
                                <label className="form-label fs-base textpr" htmlFor="phone">Phone</label>
                                <div className="position-relative">
                                    <input className="form-control form-control-lg  textpr" type="tel" placeholder="+1 ___ ___ __" required id="phone" value={contactDetails.phone} onChange={handleContactChange} />
                                </div>
                            </div>
                            <div className="col-sm-6">
                                <label className="form-label fs-base textpr" htmlFor="numberOfPeople">Number of people</label>
                                <select className="form-select form-select-lg textpr" required id="numberOfPeople" value={contactDetails.numberOfPeople} onChange={handleContactChange}>
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
                        </div>
                        </Collapse>
                        <Collapse in={showFlightDetails}>
                            <div>
                                <h3 className="fs-base fw-normal text-body text-uppercase mt-n4 mt-md-n3 pt-5 pb-2 pb-sm-3">
                                    2.<span className="text-decoration-underline ms-1 textpr">Flight details</span>
                                </h3>
                                <div className="row g-4 pb-4 pb-md-5 mb-3 mb-md-1" id="flight-details">
                                    <div className="col-sm-6">
                                        <label className="form-label fs-base textpr" htmlFor="departureTerminal">Departure terminal</label>
                                        <select className="form-select form-select-lg textpr" required id="departureTerminal" value={flightDetails.departureTerminal} onChange={handleFlightChange}>
                                            <option value="" disabled>Select departure terminal</option>
                                            <option value="1">Terminal 1</option>
                                            <option value="2">Terminal 2</option>
                                            <option value="3">Terminal 3</option>
                                            <option value="4">Terminal 4</option>
                                        </select>
                                    </div>
                                    <div className="col-sm-6">
                                        <label className="form-label fs-base textpr" htmlFor="departureFlightNo">Departure flight no.</label>
                                        <input className="form-control form-control-lg textpr" type="text" placeholder="Enter departure flight no." required id="departureFlightNo" value={flightDetails.departureFlightNo} onChange={handleFlightChange} />
                                    </div>
                                    <div className="col-sm-6">
                                        <label className="form-label fs-base textpr" htmlFor="arrivalTerminal">Arrival terminal</label>
                                        <select className="form-select form-select-lg textpr" required id="arrivalTerminal" value={flightDetails.arrivalTerminal} onChange={handleFlightChange}>
                                            <option value="" disabled>Select arrival terminal</option>
                                            <option value="1">Terminal 1</option>
                                            <option value="2">Terminal 2</option>
                                            <option value="3">Terminal 3</option>
                                            <option value="4">Terminal 4</option>
                                        </select>
                                    </div>
                                    <div className="col-sm-6">
                                        <label className="form-label fs-base textpr" htmlFor="arrivalFlightNo">Arrival flight no.</label>
                                        <input className="form-control form-control-lg textpr" type="text" placeholder="Enter arrival flight no." required id="arrivalFlightNo" value={flightDetails.arrivalFlightNo} onChange={handleFlightChange} />
                                    </div>
                                </div>
                            </div>
                        </Collapse>
                        <Collapse in={showCarDetails}>
                            <div>
                                <h3 className="fs-base fw-normal text-body text-uppercase mt-n4 mt-md-n3 pt-5 pb-2 pb-sm-3">
                                    3.<span className="text-decoration-underline ms-1 textpr">Car details</span>
                                </h3>
                                <div className="row g-4 pb-4 pb-md-5 mb-3 mb-md-1" id="car-details">
                                    <div className="col-sm-6">
                                        <label className="form-label fs-base textpr" htmlFor="make">Make</label>
                                        <input className="form-control form-control-lg textpr" type="text" placeholder="Company that made it" required id="make" value={carDetails.make} onChange={handleCarChange} />
                                    </div>
                                    <div className="col-sm-6">
                                        <label className="form-label fs-base textpr" htmlFor="model">Model</label>
                                        <input className="form-control form-control-lg textpr" type="text" placeholder="Model of the car" required id="model" value={carDetails.model} onChange={handleCarChange} />
                                    </div>
                                    <div className="col-sm-6">
                                        <label className="form-label fs-base textpr" htmlFor="color">Color</label>
                                        <input className="form-control form-control-lg textpr" type="text" placeholder="Color of the car" required id="color" value={carDetails.color} onChange={handleCarChange} />
                                    </div>
                                    <div className="col-sm-6">
                                        <label className="form-label fs-base textpr" htmlFor="regNumber">Reg. number</label>
                                        <input className="form-control form-control-lg textpr" type="text" placeholder="Registration number" required id="regNumber" value={carDetails.regNumber} onChange={handleCarChange} />
                                    </div>
                                </div>
                            </div>
                        </Collapse>
                        <Collapse in={showPaymentDetails}>
                            <div>
                                <h3 className="fs-base fw-normal text-body text-uppercase mt-n4 mt-md-n3 pt-5 pb-2 pb-sm-3">
                                    4.<span className="text-decoration-underline ms-1 textpr">Payment details</span>
                                </h3>
                                <div className="row g-4 pb-4 pb-md-5 mb-3 mb-md-1" id="payment-details">
                                    <div className="col-sm-6">
                                        <label className="form-label fs-base textpr" htmlFor="cardNumber">Card number</label>
                                        <InputMask
                                            mask="9999 9999 9999 9999"
                                            maskChar=""
                                            value={paymentDetails.cardNumber}
                                            onChange={handlePaymentChange}
                                        >
                                            {(inputProps) => (
                                                <input
                                                    {...inputProps}
                                                    className={`form-control form-control-lg textpr ${isCardNumberValid ? '' : 'error'}`}
                                                    type="text"
                                                    placeholder="Your card number"
                                                    required
                                                    id="cardNumber"
                                                />
                                            )}
                                        </InputMask>
                                    </div>
                                    <div className="col-sm-6">
                                        <label className="form-label fs-base textpr" htmlFor="cardHolder">Card holder name</label>
                                        <input
                                            className="form-control form-control-lg textpr"
                                            type="text"
                                            placeholder="Name on the card"
                                            required
                                            id="cardHolder"
                                            value={paymentDetails.cardHolder}
                                            onChange={handlePaymentChange}
                                        />
                                    </div>
                                    <div className="col-sm-6">
                                        <label className="form-label fs-base textpr" htmlFor="expiryDate">Expiry date</label>
                                        <InputMask
                                            mask="99/99"
                                            maskChar=""
                                            value={paymentDetails.expiryDate}
                                            onChange={handlePaymentChange}
                                        >
                                            {(inputProps) => (
                                                <input
                                                    {...inputProps}
                                                    className={`form-control form-control-lg textpr ${isExpiryDateValid ? '' : 'error'}`}
                                                    type="text"
                                                    placeholder="MM/YY"
                                                    required
                                                    id="expiryDate"
                                                />
                                            )}
                                        </InputMask>
                                    </div>
                                    <div className="col-sm-6">
                                        <label className="form-label fs-base textpr" htmlFor="cvv">CVV</label>
                                        <InputMask
                                            mask="9999"
                                            maskChar=""
                                            value={paymentDetails.cvv}
                                            onChange={handlePaymentChange}
                                        >
                                            {(inputProps) => (
                                                <input
                                                    {...inputProps}
                                                    className={`form-control form-control-lg textpr ${isCvvValid ? '' : 'error'}`}
                                                    type="text"
                                                    placeholder="CVV"
                                                    required
                                                    id="cvv"
                                                />
                                            )}
                                        </InputMask>
                                    </div>
                                </div>
                            </div>
                        </Collapse>
                        {showNext && (
                            <div>
                                <div className="d-none d-lg-block pt-4 mt-0">
                                    <button className="btn btn-lg btn-primary texta" type="button" onClick={handleNextStep}>{(currentStep === 4) ? 'Reserve your spot' : 'Next'}</button>
                                </div>
                                <div className="d-lg-none pb-2 mb-5 my-lg-0 pt-4 pt-lg-5">
                                    <button className="btn btn-lg btn-primary w-100 w-sm-auto texta" type="button" onClick={handleNextStep}>{(currentStep === 4) ? 'Reserve your spot' : 'Next'}</button>
                                </div>
                            </div>
                        )}
                    </div>
                    <div className={openSummary ? 'col-lg-5 offset-lg-1 pricing-fixed text-white' : 'col-lg-5 offset-lg-1 text-white'}>
                        <div className={openSummary ? 'px-5 pt-4 pt-md-1 pb-5 blue-card' : 'blue-card px-5'}>
                            {openSummary ? <h2 className="mt-lg-5 textpa text-white" onClick={isMobile() ? handleOpenedSummary : null}>Summary {isMobile() ? <i class="ai-chevron-up text-white pe-2 fs-5 float-right"></i> : ''}</h2> : <div style={{ cursor: 'pointer', backgroundColor: '#0051c9', borderRadius: '32px' }} className="d-flex align-items-center justify-content-between my-4 my-lg-5 py-4 textpa fs-3 text-white" onClick={handleOpenSummary}>Summary<span className="fs-3 ms-2 textpa text-white">£85.00<i class="ai-chevron-down text-white pe-2 fs-5 float-right"></i></span></div>}
                            <Collapse in={openSummary}>
                                <div>
                                    <ul className="list-unstyled py-2 mb-0">
                                        <li className="d-flex justify-content-between mb-2 textpr">Departure airport:<span className="ms-2 textpr">London city</span></li>
                                        <li className="d-flex justify-content-between mb-2 textpr">Departure date:<span className="ms-2 textpr">19 Jun 2024</span></li>
                                        <li className="d-flex justify-content-between mb-2 textpr">Departure time:<span className="ms-2 textpr">12:00</span></li>
                                    </ul>
                                    <ul className="list-unstyled py-2 mb-0">
                                        <li className="d-flex justify-content-between mb-2 textpr">Arrival airport:<span className="ms-2 textpr">Heathrow</span></li>
                                        <li className="d-flex justify-content-between mb-2 textpr">Arrival date:<span className="ms-2 textpr">30 Jun 2024</span></li>
                                        <li className="d-flex justify-content-between mb-2 textpr">Arrival time:<span className="ms-2 textpr">12:00</span></li>
                                    </ul>
                                    <ul className="list-unstyled py-2 mb-0">
                                        <li className="d-flex justify-content-between mb-2 textpr">Subtotal:<span className="ms-2 textpr">£92.00</span></li>
                                        <li className="d-flex justify-content-between mb-2 textpr">Taxes:<span className="ms-2 textpr">£8.00</span></li>
                                        <li className="d-flex justify-content-between mb-2 textpr">Discount:<span className="ms-2 textpr">- £15.00</span></li>
                                    </ul>
                                    <div className="d-flex align-items-center justify-content-between border-top fs-3 fw-semibold pt-4 textpr text-white">Total:<span className="fs-3 fw-semibold text-white ms-2 textpr">£85.00</span></div>
                                </div>
                            </Collapse>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    );
}

export default Checkout;