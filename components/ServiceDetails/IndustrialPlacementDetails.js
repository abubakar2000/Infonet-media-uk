import React, { Component } from 'react';
import Link from 'next/link';
import IpDetailsPart from "./IpDetailsPart"

class IndustrialPlacementDetails extends Component {
    render() {
        return (
            <>
                <section className="services-details-area">
                    <div className="container">
                        <div className="services-details-overview">
                            <div className="services-details-desc">
                                <h3>Industrial Placement</h3>
                                <p>With the help of Industrial Work Placement at Infonetmedia, you can get started on your career even before you finish college or university. You will not only gain practical work experience at one of the highly reputable IT companies in the United Kingdom,  but you will also develop an innovative mind that is ready for the future! We offer industrial work placement opportunities that are hands-on, creative, and innovative where you learn and gain practical transferable skills. </p>

                                <div className="features-text">
                                    <h4><i className="flaticon-tick"></i> Industrial Work Placement</h4>
                                    <p>Infonetmedia IT Company gives opportunities to students to develop their practical and technical skills in an IT role directly relevant to their vocational course. We help to prepare the students for the future by developing their skills and providing relevant hands-on experience that is needed in the industry. </p>
                                </div>
                                <div className="banner-btn">
                                        <Link href="/contact">
                                            <a className="default-btn mr-4">
                                                Learn More <span></span>
                                            </a>
                                        </Link>

                                        <Link href="/contact">
                                            <a className="default-btn-two">
                                                Contact Us <span></span>
                                            </a>
                                        </Link>
                                    </div>
                            </div>

                            <div className="services-details-image wow fadeInUp">
                                <img src="/images/features-image/feature-image4.png" alt="image" />
                            </div>
                        </div>

                    </div>
                </section>
                <section className="pt-100 pb-70 gray-bg">
                <div className="container">
                    <div className="section-title">
                        <h3>Complete your apprenticeship, build your skills, and find a job</h3>
                        <p>We offer industrial work placement opportunities that are hands-on, creative, and innovative where you learn and gain practical transferable skills.</p>
                    </div>
                    <div className="row">
                        <div className="col-lg-4 col-sm-6">
                            <div className="service-card-one bg-white center">
                                <div className="icon">
                                    <i className="bx bx-conversation"></i>
                                    <i className='bx bxs-badge-check check-icon'></i>
                                </div>
                                <h3>
                                    <Link href="#">
                                        <a>Industrial Placement</a>
                                    </Link>
                                </h3>
                                <p>Become a part of a team, on-the-job, in an environment where you will learn from the experts and assist in the progresssion of the company.</p>
                            </div>
                        </div>

                        <div className="col-lg-4 col-sm-6">
                            <div className="service-card-one bg-white center">
                                <div className="icon">
                                    <i className="bx bx-laptop"></i>
                                    <i className='bx bxs-badge-check check-icon'></i>
                                </div>
                                <h3>
                                    <Link href="#">
                                        <a>Starting a Career</a>
                                    </Link>
                                </h3>
                                <p>Work experience can be an important step towards starting a career</p>
                            </div>
                        </div>

                        <div className="col-lg-4 col-sm-6">
                            <div className="service-card-one bg-white center">
                                <div className="icon">
                                    <i className="bx bxs-megaphone"></i>
                                    <i className='bx bxs-badge-check check-icon'></i>
                                </div>
                                <h3>
                                    <Link href="#">
                                        <a>Work Placement</a>
                                    </Link>
                                </h3>
                                <p>Find a placement at a company that matches your interests, and experience a new career without having to quit your current job.</p>
                            </div>
                        </div>
                        
                    </div>
                </div>
            </section>
            {/* Section Continue */}
            <IpDetailsPart/>
            </>
        );
    }
}

export default IndustrialPlacementDetails;