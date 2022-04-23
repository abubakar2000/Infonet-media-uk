import React, { Component } from 'react';
import Link from 'next/link';

class WebHostingPricingDetails extends Component {
    render() {
        return (
            <section className="pricing-area-two pt-100 pb-70 bg-f4f7fe">
                <div className="container">
                    <div className="section-title">
                        <h2>Flexible, Affordable Hosting Pricing Plans</h2>
                        <p>Secure Scalable and Super Fast</p>
                    </div>

                    <div className="row justify-content-center">
                        <div className="col-lg-3 col-sm-6">
                            <div className="single-pricing-table center" >
                                <div className="pricing-header">
                                    <div className="icon">
                                        <img width="50" height="50" src="/images/icon1.png" alt="Icon" />
                                    </div>
                                    <h3 style={{color:'orange'}}>Starter</h3>
                                </div>

                                <div className="price" style={{backgroundColor:'#FFF4E4'}}>
                                    <h2><sup>£</sup> 1.99 <sub>/Month</sub></h2>
                                </div>

                                <ul className="pricing-features">
                                    <li>
                                        <i className='bx bx-badge-check'></i>
                                        Unlimited visits 
                                    </li>
                                    <li>
                                        <i className='bx bx-badge-check'></i>
                                        1 Website
                                    </li>
                                    <li>
                                        <i className='bx bx-badge-check'></i>
                                        30 GB Storage
                                    </li>
                                    <li>
                                        <i className='bx bx-badge-check'></i>
                                        Unmetered Bandwidth
                                    </li>
                                    <li className='text-danger'>
                                        <i className='bx bx-badge-check'></i>
                                        MYSQL database
                                    </li>
                                    <li>
                                        <i className='bx bx-badge-check'></i>
                                        Unlimited emails
                                    </li>
                                    <li> 
                                        <i className='bx bx-badge-check'></i>
                                        1x processing power
                                    </li>
                                    <li className='text-danger'> 
                                        <i className='bx bx-badge-check'></i>
                                        Premium DNS
                                    </li>
                                    <li className='text-danger'> 
                                        <i className='bx bx-badge-check'></i>
                                        SSL Certificate
                                    </li>
                                   <li>
                                        <i className='bx bx-badge-check'></i>
                                        24/7 Support
                                    </li>
                                </ul>

                                <div className="btn-box">
                                    <Link href="/contact">
                                        <a className="default-btn">
                                            Get Started 
                                            <span></span>
                                        </a>
                                    </Link>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-3 col-sm-6">
                            <div className="single-pricing-table center">
                                <div className="pricing-header">
                                    <div className="icon">
                                        <img src="/images/icon2.png" alt="Icon" />
                                    </div>
                                    <h3 style={{color:'#97D491'}}>Economy</h3>
                                </div>

                                <div className="price" style={{backgroundColor:'#97D491'}}>
                                    <h2><sup>£</sup> 6.99 <sub>/ Month</sub></h2>
                                </div>

                                <ul className="pricing-features">
                                    <li>
                                        <i className='bx bx-badge-check'></i>
                                        Unlimited visits
                                    </li>
                                    <li>
                                        <i className='bx bx-badge-check'></i>
                                        1 Website
                                    </li>
                                    <li>
                                        <i className='bx bx-badge-check'></i>
                                        100 GB Storage
                                    </li>
                                    <li>
                                        <i className='bx bx-badge-check'></i>
                                        Unlimited <br/>Bandwidth
                                    </li>
                                    <li>
                                        <i className='bx bx-badge-check'></i>
                                        100 emails accounts
                                    </li>
                                    <li> 
                                        <i className='bx bx-badge-check'></i>
                                        10 MYSQL database
                                    </li>
                                    <li> 
                                        <i className='bx bx-badge-check'></i>
                                        1x processing power
                                    </li>
                                    <li className='text-danger'> 
                                        <i className='bx bx-badge-check'></i>
                                        Premium DNS
                                    </li>
                                    <li className='text-danger'> 
                                        <i className='bx bx-badge-check'></i>
                                        SSL Certificate
                                    </li>
                                    <li> 
                                        <i className='bx bx-badge-check'></i>
                                        24/7 Support
                                    </li>
                                </ul>

                                <div className="btn-box">
                                    <Link href="/contact">
                                        <a className="default-btn">
                                            Get Started
                                            <span></span>
                                        </a>
                                    </Link>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-3 col-sm-6">
                            <div className="single-pricing-table center">
                                <div className="pricing-header">
                                    <div className="icon">
                                        <img src="/images/icon3.png" alt="Icon" />
                                    </div>
                                    <h3 style={{color:'#2970FA'}}>Deluxe</h3>
                                </div>

                                <div className="price" style={{backgroundColor:'#2970FA',color:'white'}}>
                                    <h2><sup>£</sup> 8.99 <sub style={{color:'white'}}> / Month</sub></h2>
                                </div>

                                <ul className="pricing-features">
                                    <li>
                                        <i className='bx bx-badge-check'></i>
                                        Unlimited Visits
                                    </li>
                                    <li>
                                        <i className='bx bx-badge-check'></i>
                                        Unlimited Websites
                                    </li>
                                    <li>
                                        <i className='bx bx-badge-check'></i>
                                        Unlimited Space
                                    </li>
                                    <li>
                                        <i className='bx bx-badge-check'></i>
                                        Unlimited <br/> Bandwidth
                                    </li>
                                    <li>
                                        <i className='bx bx-badge-check'></i>
                                        500 emails accounts
                                    </li>
                                    <li>
                                        <i className='bx bx-badge-check'></i>
                                        25 MYSQL database
                                    </li>
                                    <li> 
                                        <i className='bx bx-badge-check'></i>
                                        1x processing power
                                    </li>
                                    <li className='text-danger'> 
                                        <i className='bx bx-badge-check'></i>
                                        Premium DNS
                                    </li>
                                    <li className='text-danger'> 
                                        <i className='bx bx-badge-check'></i>
                                        SSL Certificate
                                    </li>
                                    
                                    <li> 
                                        <i className='bx bx-badge-check'></i>
                                        24/7 Support
                                    </li>
                                </ul>

                                <div className="btn-box">
                                    <Link href="/contact">
                                        <a className="default-btn">
                                            Get Started 
                                            <span></span>
                                        </a>
                                    </Link>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-3 col-sm-6">
                            <div className="single-pricing-table center">
                                <div className="pricing-header">
                                    <div className="icon">
                                        <img src="/images/icon3.png" alt="Icon" />
                                    </div>
                                    <h3 style={{color:'#7A7A7A'}}>Ultimate</h3>
                                </div>

                                <div className="price" style={{backgroundColor:'#7A7A7A',color:'white'}}>
                                <h2><sup>£</sup> 12.99 <sub style={{color:'white'}}>/ month</sub></h2>
                                </div>

                                <ul className="pricing-features">
                                <li>
                                        <i className='bx bx-badge-check'></i>
                                        Unlimited Visits
                                    </li>
                                    <li>
                                        <i className='bx bx-badge-check'></i>
                                        Unlimited Websites
                                    </li>
                                    <li>
                                        <i className='bx bx-badge-check'></i>
                                        Unlimited Space
                                    </li>
                                    <li>
                                        <i className='bx bx-badge-check'></i>
                                        Unlimited <br/> Bandwidth
                                    </li>
                                    <li>
                                        <i className='bx bx-badge-check'></i>
                                        1000 emails accounts
                                    </li>
                                    <li> 
                                        <i className='bx bx-badge-check'></i>
                                        Unlimited MYSQL DB
                                    </li>
                                    <li> 
                                        <i className='bx bx-badge-check'></i>
                                        2x processing power
                                    </li>
                                    <li> 
                                        <i className='bx bx-badge-check'></i>
                                        Premium DNS
                                    </li>
                                    <li> 
                                        <i className='bx bx-badge-check'></i>
                                        1 year SSL Certificate
                                    </li>
                                    <li> 
                                        <i className='bx bx-badge-check'></i>
                                        24/7 Support
                                    </li>
                                </ul>

                                <div className="btn-box">
                                    <Link href="/contact">
                                        <a className="default-btn">
                                            Get Started
                                            <span></span>
                                        </a>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Shape Images */}
                <div className="shape-img2">
                    <img src="/images/shape/shape2.svg" alt="image" />
                </div>
                <div className="shape-img3">
                    <img src="/images/shape/shape3.svg" alt="image" />
                </div>
                <div className="shape-img4">
                    <img src="/images/shape/shape4.png" alt="image" />
                </div>
                <div className="shape-img5">
                    <img src="/images/shape/shape5.png" alt="image" />
                </div>
                <div className="shape-img6">
                    <img src="/images/shape/shape6.png" alt="image" />
                </div>
                <div className="shape-img7">
                    <img src="/images/shape/shape7.png" alt="image" />
                </div>
                <div className="shape-img8">
                    <img src="/images/shape/shape8.png" alt="image" />
                </div>
                <div className="shape-img9">
                    <img src="/images/shape/shape9.png" alt="image" />
                </div>
                <div className="shape-img10">
                    <img src="/images/shape/shape10.png" alt="image" />
                </div>   
            </section>
        );
    }
}

export default WebHostingPricingDetails;