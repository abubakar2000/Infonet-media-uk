import React, { Component } from 'react';
import Link from 'next/link';
import NetworkDetailsPart from "./NetworkDetailsPart"

class NetworkDetails extends Component {
    render() {
        return (
            <>
                <section className="services-details-area ptb-100">
                    <div className="container">
                        <div className="services-details-overview">
                            <div className="services-details-desc">
                                <h3>We Provide Network Management. Network Desian and Network Administration For All types of Businesses</h3>
                                <br />
                                {/* <p>Do you need to design, install and manage a new or existing networking solution? Our Network Management Experts can help. We'll design and manage your network so that every component works seamlessly. And if you have problems with an existing network, we can help you fix it too. With decades of experience in the field, we're the experts to work with. </p> */}
                                <p>Infonet Media is a leading provider of Network Management, Network Design and
                                    Network Administration for all types of businesses.</p>
                                <br />
                                <div className="banner-btn">
                                    <Link href="/contact">
                                        <a className="default-btn mr-4">
                                            Contact Us Today <span></span>
                                        </a>
                                    </Link>
                                    <Link href="#">
                                        <a className="default-btn mr-4">
                                            Book a Free Consultation <span></span>
                                        </a>
                                    </Link>

                                    {/* <Link href="#">
                                            <a className="default-btn-two">
                                                Learn More <span></span>
                                            </a>
                                        </Link> */}
                                </div>
                            </div>
                            <div className="services-details-image wow fadeInUp">
                                <img src="/images/about-img1.png" alt="image" />
                            </div>
                        </div>
                    </div>
                    <div className="container ptb-100">
                        <div className="row">
                            <div className="col-lg-4 col-sm-6">
                                <div className="service-card-one gray-bg">
                                    <div className="icon">
                                        <i className='bx bx-bar-chart-alt-2'></i>
                                        <i className='bx bxs-badge-check check-icon'></i>
                                    </div>
                                    <h3>
                                        <a>Cloud Network Management</a>
                                    </h3>
                                    <p>Automate your network management with Cloud Network Management</p>
                                </div>
                            </div>

                            <div className="col-lg-4 col-sm-6">
                                <div className="service-card-one gray-bg">
                                    <div className="icon">
                                        <i className='bx bx-bullseye'></i>
                                        <i className='bx bxs-badge-check check-icon'></i>
                                    </div>
                                    <h3>
                                        <Link href="#">
                                            <a>Design Your Network</a>
                                        </Link>
                                    </h3>
                                    <p>Design your network, improve speed, and ensure your business is secure.</p>
                                </div>
                            </div>

                            <div className="col-lg-4 col-sm-6">
                                <div className="service-card-one gray-bg">
                                    <div className="icon">
                                        <i className='bx bx-check-shield' ></i>
                                        <i className='bx bxs-badge-check check-icon'></i>
                                    </div>
                                    <h3>
                                        <Link href="#">
                                            <a>Cloud Administration</a>
                                        </Link>
                                    </h3>
                                    <p>Infonet Media provides cloud administration for your business so that you can focus on more important things.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <div style={{
                    paddingTop: '5vh', paddingBottom: '5vh', display: 'flex', alignItems: 'center', justifyContent: 'center',
                    backgroundColor: '#0078CA', color: 'white', flexDirection: 'column', textAlign: 'center'
                }}>
                    <h2>A fully featured cloud control panel</h2>
                    <div style={{ fontSize: '2vh',marginTop:'2vh',marginBottom:'4vh' }}>Our web-based cloud control panel offers a full range of network management<br />
                        functions, including fault, performance, reporting and monitoring.</div>
                        <Link href={'/contact'}><div className='btn btn-light'>Learn More</div></Link>
                </div>

            </>
        );
    }
}

export default NetworkDetails;