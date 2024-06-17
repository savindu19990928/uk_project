import React, { useState, useEffect, useRef } from 'react';
import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import ChatBox from './Catalog/FilterChatBox';
import FilterButton from './Catalog/FilterButton';

function ProductCard({ imageUrl, productName, productDes, price }) {
    return (
        <div className="col pb-2 pb-sm-3">
            <div className="card-hover position-relative bg-secondary rounded-1 p-3 mb-4">
                <div className="swiper swiper-nav-onhover" data-swiper-options="{&quot;loop&quot;: true, &quot;navigation&quot;: {&quot;prevEl&quot;: &quot;.btn-prev&quot;, &quot;nextEl&quot;: &quot;.btn-next&quot;}}">
                    <a className="swiper-wrapper">
                        <div className="swiper-slide p-2 p-xl-4">
                            <img className="d-block mx-auto" src={imageUrl} width="226" alt="Product" />
                        </div>
                    </a>
                </div>
            </div>
            <div className="d-flex mb-1">
                <h3 className="h6 mb-0 texta">{productName}</h3>
            </div>
            <div className="d-flex mb-1">
                <p className="mb-0 textp">{productDes}</p>
            </div>
            <div className="d-flex align-items-center mb-4">
                <span className="me-2 texta">${price}</span>
            </div>
            <div className="d-flex justify-content-center mb-2">
                <button className="btn btn-primary w-100 texta">Reserve your spot</button>
            </div>
        </div>
    );
}

function Catalog() {
    const [collapsed, setCollapsed] = useState(true);

    const toggleCollapse = () => {
        setCollapsed(!collapsed);
    };

    const [visibleChatBox, setVisibleChatBox] = useState(null);
    const chatBoxRefs = useRef([]);

    const handleButtonClick = (index) => {
        setVisibleChatBox(visibleChatBox === index ? null : index);
    };

    const handleClickOutside = (event) => {
        if (chatBoxRefs.current[visibleChatBox] && !chatBoxRefs.current[visibleChatBox].contains(event.target)) {
            setVisibleChatBox(null);
        }
    };

    const handleClickOption = (event) => {
        setVisibleChatBox(null);
    };

    useEffect(() => {
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [visibleChatBox]);

    const chatButtons = [
        { label: 'London city', options: ['London Gatwick', 'London Heathrow', 'London Stansted'] },
        { label: 'All terminals', options: ['Terminal 1', 'Terminal 2', 'Terminal 3', 'Terminal 4'] },
    ];

    return (
        <div className="container pt-5 mt-5 mt-lg-4 mt-xl-5">
            <div className="ignore-dark-mode rounded-1 overflow-hidden mb-5" style={{ backgroundColor: '#f6f9fc' }}>
                <div className="row align-items-center g-0">
                    <div className="col-md-6 offset-xl-1 text-center text-md-start">
                        <div className="py-4 px-4 px-sm-5 pe-md-0 ps-xl-4">
                            <h2 className="h1 pb-2 pb-xl-3">Enim aenean phasellus in hendrerit interdum lorem proin pretium.</h2>
                        </div>
                    </div>
                    <div className="col-md-6 col-xl-5 d-flex justify-content-end"><img src="assets/img/lottie2.gif" width="350" alt="Banner" /></div>
                </div>
            </div>
            <div className="row pb-2 pb-sm-4">
                {/* Product grid*/}
                <div className="d-flex align-items-start justify-content-between mb-4 mt-5">
                    <div className="me-3">
                        <div className="nav d-md-none">
                            <button
                                className="nav-link dropdown-toggle fs-sm p-0 mb-2 textcr"
                                onClick={toggleCollapse}
                            >
                                Active filters
                            </button>
                        </div>
                        <div className={`collapse d-md-block ${collapsed ? '' : 'show'}`} id="activeFilters">
                            <div className="pt-2 pt-md-0">
                                {chatButtons.map((button, index) => (
                                    <div key={index} className="chat-button-container">
                                        <FilterButton onClick={() => handleButtonClick(index)} btnLabel={button.label} />
                                        {visibleChatBox === index && (
                                            <div ref={(el) => (chatBoxRefs.current[index] = el)}>
                                                <ChatBox options={button.options} onClick={handleClickOption} />
                                            </div>
                                        )}
                                    </div>
                                ))}
                                <button
                                    className="btn btn-sm btn-secondary rounded-pill fw-medium py-1 px-2"
                                    type="button"
                                >
                                    <span className="px-1 textcr fs-sm">Remove all filters</span>
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="d-flex align-items-center flex-shrink-0 mb-2">
                        <span className="text-muted text-nowrap fs-sm textcr">Sort by:</span>
                        <select className="form-select form-select-flush py-0 textcr">
                            <option value="popular textcr">Most popular</option>
                            <option value="low-high textcr">Low-High price</option>
                            <option value="high-low textcr">High-Low price</option>
                            <option value="rating textcr">Average rating</option>
                            <option value="az textcr">A-Z order</option>
                            <option value="za textcr">Z-A order</option>
                        </select>
                    </div>
                </div>
                <div className='pt-4'>
                    {/* Your product grid goes here */}
                    <div className="row row-cols-1 row-cols-sm-3 row-cols-md-4 g-4">
                        <ProductCard imageUrl="assets/img/logo.png" productName="Meet & Greet" price="46.00" productDes="Enim aenean phasellus in hendrerit interdum lorem proin pretium, dictum urna suspendisse quis risus vivamus." />
                        <ProductCard imageUrl="assets/img/logo.png" productName="Park & Ride" price="17.00" productDes="Enim aenean phasellus in hendrerit interdum lorem proin pretium, dictum urna suspendisse quis risus vivamus." />
                        <ProductCard imageUrl="assets/img/logo.png" productName="Meet & Greet" price="13.00" productDes="Enim aenean phasellus in hendrerit interdum lorem proin pretium, dictum urna suspendisse quis risus vivamus." />
                        <ProductCard imageUrl="assets/img/logo.png" productName="Park & Ride" price="9.00" productDes="Enim aenean phasellus in hendrerit interdum lorem proin pretium, dictum urna suspendisse quis risus vivamus." />
                        <ProductCard imageUrl="assets/img/logo.png" productName="Meet & Greet" price="23.00" productDes="Enim aenean phasellus in hendrerit interdum lorem proin pretium, dictum urna suspendisse quis risus vivamus." />
                        <ProductCard imageUrl="assets/img/logo.png" productName="Meet & Greet" price="13.00" productDes="Enim aenean phasellus in hendrerit interdum lorem proin pretium, dictum urna suspendisse quis risus vivamus." />
                        <ProductCard imageUrl="assets/img/logo.png" productName="Park & Ride" price="9.00" productDes="Enim aenean phasellus in hendrerit interdum lorem proin pretium, dictum urna suspendisse quis risus vivamus." />
                        <ProductCard imageUrl="assets/img/logo.png" productName="Meet & Greet" price="23.00" productDes="Enim aenean phasellus in hendrerit interdum lorem proin pretium, dictum urna suspendisse quis risus vivamus." />
                        <ProductCard imageUrl="assets/img/logo.png" productName="Meet & Greet" price="13.00" productDes="Enim aenean phasellus in hendrerit interdum lorem proin pretium, dictum urna suspendisse quis risus vivamus." />
                        <ProductCard imageUrl="assets/img/logo.png" productName="Park & Ride" price="9.00" productDes="Enim aenean phasellus in hendrerit interdum lorem proin pretium, dictum urna suspendisse quis risus vivamus." />
                        <ProductCard imageUrl="assets/img/logo.png" productName="Meet & Greet" price="23.00" productDes="Enim aenean phasellus in hendrerit interdum lorem proin pretium, dictum urna suspendisse quis risus vivamus." />
                        <ProductCard imageUrl="assets/img/logo.png" productName="Meet & Greet" price="23.00" productDes="Enim aenean phasellus in hendrerit interdum lorem proin pretium, dictum urna suspendisse quis risus vivamus." />
                        {/* Add more ProductCard components as needed */}
                    </div>
                    {/* Pagination*/}
                    <div className="row gy-3 align-items-center pt-3 pt-sm-4 mt-md-2">
                        <div className="col col-md-4 col-6 order-md-1 order-1">
                            <div className="d-flex align-items-center">
                                <span className="text-muted fs-sm textcr">Show</span>
                                <select className="form-select form-select-flush w-auto textcr">
                                    <option value="12">12</option>
                                    <option value="18">18</option>
                                    <option value="24">24</option>
                                    <option value="30">30</option>
                                </select>
                            </div>
                        </div>
                        <div className="col col-md-4 col-6 order-md-3 order-2">
                            <nav aria-label="Page navigation">
                                <ul className="pagination pagination-sm justify-content-end textcr">
                                    <li className="page-item active" aria-current="page">
                                        <span className="page-link">1<span className="visually-hidden">(current)</span></span>
                                    </li>
                                    <li className="page-item"><a className="page-link" href="#">2</a></li>
                                    <li className="page-item"><a className="page-link" href="#">3</a></li>
                                    <li className="page-item"><a className="page-link" href="#">4</a></li>
                                </ul>
                            </nav>
                        </div>
                        <div className="col col-md-4 col-12 order-md-2 order-3">
                            {/* <p className="text-muted fs-sm mb-0 mt-2 mt-md-0 textcr">Showing 1-12 of 48 results</p> */}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Catalog;