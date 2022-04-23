import React, { Component } from 'react';
import Link from 'next/link';

class WebHostingFeaturesDetails extends Component {
    render() {
        return (
            <section className="ptb-100">
            <div className="section-title">
                        <h2>Our Hosting Features</h2>
                        <p>High Perfomance Hosting Plans Include</p>
                </div>
                <div className="container">
                    <div className="row" style={{textAlign:'center'}}>
                        <div className="col-lg-4 col-sm-6" style={{height:'100%'}}>
                            <div className="service-card-one gray-bg">
                                <div className="icon">
                                    <i className='bx bx-conversation'></i>
                                    <i className='bx bxs-badge-check check-icon'></i>
                                </div>
                                <h3>
                                        <a>Super Fast</a>
                                </h3>
                                <p>Our web hosting packages include one-click installation of your favourite software such as WordPress and our servers are super fast with 99.9% uptime. </p>
                            </div>
                        </div>

                        <div className="col-lg-4 col-sm-6" >
                            <div className="service-card-one gray-bg">
                                <div className="icon">
                                    <i className='bx bx-search-alt'></i>
                                    <i className='bx bxs-badge-check check-icon'></i>
                                </div>
                                <h3>
                                    <Link href="/service-details">
                                        <a>Search Engine Optimisation</a>
                                    </Link>
                                </h3>
                                <p>We provide additional SEO Package website to improve your website visibility, the rankings and also get you the right online leads. </p>
                            </div>
                        </div>
    
                        <div className="col-lg-4 col-sm-6">
                            <div className="service-card-one gray-bg">
                                <div className="icon">
                                    <i className='bx bx-check-shield' ></i>
                                    <i className='bx bxs-badge-check check-icon'></i>
                                </div>
                                <h3>
                                    <Link href="/service-details">
                                        <a>Secure & Scalable</a>
                                    </Link>
                                </h3>
                                <p>With our Ultimate, Business Hosting and Business Cloud Hosting accounts, we include a free SSL certificate for a 12 months. It is better to protect your website and make it more secure.</p>
                            </div>
                        </div>
    
                        <div className="col-lg-4 col-sm-6">
                            <div className="service-card-one gray-bg">
                                <div className="icon">
                                    <i className='bx bx-bar-chart-alt-2'></i>
                                    <i className='bx bxs-badge-check check-icon'></i>
                                </div>
                                <h3>
                                    <Link href="/service-details">
                                        <a>Control Panel</a>
                                    </Link>
                                </h3>
                                <p>Your can manage all of your website pages and products from Infonetmedia with our easy-to-use control panel: to renew domains, manage websites, add SSL certificates, install WordPress, and much more. Upload and manage files and be in control of all of your transactions in our billing platfom.</p>
                            </div>
                        </div>

                        <div className="col-lg-4 col-sm-6">
                            <div className="service-card-one gray-bg">
                                <div className="icon">
                                     <i className='bx bx-bullseye'></i>
                                    <i className='bx bxs-badge-check check-icon'></i>
                                </div>
                                <h3>
                                    <Link href="/service-details">
                                        <a>Multiple Website Hosting</a>
                                    </Link>
                                </h3>
                                <p>If you choose our Ultimate Hosting or Business Hosting Plans, we provide powerful hosting solutions for unlimited web hosting and ecommerce hosting at cheap web hosting prices, you can also run multiple websites simultaneously on any hosting package!</p>
                            </div>
                        </div>
    
                        <div className="col-lg-4 col-sm-6">
                            <div className="service-card-one gray-bg">
                                <div className="icon">
                                    <i className='bx bx-bar-chart-alt-2'></i>
                                    <i className='bx bxs-badge-check check-icon'></i>
                                </div>
                                <h3>
                                    <Link href="/service-details">
                                        <a>Cheap Web Hosting Options</a>
                                    </Link>
                                </h3>
                                <p>Our starter Hosting provides you with powerful yet affordable web hosting from Infonetmedia</p>
                            </div>
                        </div>

                        <div className="col-lg-4 col-sm-6">
                            <div className="service-card-one gray-bg">
                                <div className="icon">
                                    <i className='bx bx-search-alt'></i>
                                    <i className='bx bxs-badge-check check-icon'></i>
                                </div>
                                <h3>
                                    <Link href="/service-details">
                                        <a>Award-winning supports</a>
                                    </Link>
                                </h3>
                                <p>Our smart, friendly domain experts are here to help.</p>
                                <br/>
                                <h3><span className='text-primary'>Call us:</span> 020 3014 1446</h3>
                            </div>
                        </div>

                        <div className="col-lg-4 col-sm-6">
                            <div className="service-card-one gray-bg">
                                <div className="icon">
                                    <i className='bx bx-mail-send'></i>
                                    <i className='bx bxs-badge-check check-icon'></i>
                                </div>
                                <h3>
                                    <Link href="/service-details">
                                        <a>Live Chat Response</a>
                                    </Link>
                                </h3>
                                <p>we will respond within 60 seconds. Our experts are available to help 24/7/365 days. Get in touch today.</p>
                            </div>
                        </div>

                        <div className="col-lg-4 col-sm-6">
                            <div className="service-card-one gray-bg">
                                <div className="icon">
                                    <i className='bx bx-data'></i>
                                    <i className='bx bxs-badge-check check-icon'></i>
                                </div>
                                <h3>
                                    <Link href="/service-details">
                                        <a>Why Choose Us</a>
                                    </Link>
                                </h3>
                                <p>More people trust us than any other domain provider. Buy from of the trusted largest registrar.</p>
                            </div>
                        </div>
                    </div>
                    <div style={{textAlign:'center',marginTop:'5vh'}}>
                        <Link href={'/contact'}><div style={{paddingLeft:'20pt',paddingRight:'20pt',paddingTop:'5pt',fontSize:'2.5vh'}} className="btn btn-primary">Get in Touch</div></Link>
                    </div>
                </div>
            </section>
        );
    }
}

export default WebHostingFeaturesDetails;