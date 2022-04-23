import React, { Component } from 'react';
import Link from 'next/link';


class ComputerServicesDetails extends Component {
    render() {
        return (
            <>
            <section className="choose-area-two">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-6">
                            <div className="choose-content">
                                <div className="section-title text-left">
                                    <span className="sub-title">Computer Services</span>
                                    <h2>Computer Repair & <br/>Laptop Repair</h2>

                                    <p>We have experts who can help you with your IT needs, whether it's computer repairs, laptop repair, windows installation, virus, malware or spyware removal, or IT consultancy. Whether your computer is slow, down or you just need some advice, call us!</p>

                                    <p>Need any help with your technology!</p>
                                </div>
    
                                <div className="choose-btn">
                                    <Link href="#">
                                        <a className="default-btn">
                                            Call us Today <span></span>
                                        </a>
                                    </Link>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-6 col-md-12">
                            <div className="choose-image">
                                <img src="/images/machine-learning/about3.png" alt="image" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
                <section className="services-details-area ptb-100">
                    <div className="container">
                        {/* Our Services Two */}
                        <div className="overview-box ">
                            <div className="overview-image">
                                <div className="image">
                                    <img src="/images/services/it-service5.png" alt="image" />
                                </div>
                            </div>
                            
                            <div className="overview-content">
                                <div className="content right-content">
                                    <h4>Computer Services & Repair</h4>
                                    <p>The services that we offers</p>
                                    <ul className="features-list">
                                        <li><span><i className="fas fa-check"></i> Laptop screen replacement</span></li>
                                        <li><span><i className="fas fa-check"></i> Windows installation</span></li>
                                        <li><span><i className="fas fa-check"></i>  Running slow</span></li>
                                        <li><span><i className="fas fa-check"></i>  Running slow</span></li>
                                        <li><span><i className="fas fa-check"></i> Virus, malware removal</span></li>
                                        <li><span><i className="fas fa-check"></i> Battery replacements</span></li>
                                        <li><span><i className="fas fa-check"></i> Hard drive replacement</span></li>
                                        <li><span><i className="fas fa-check"></i> Data recovery</span></li>
                                    </ul>
                                    <br/>
                                    
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="free-trial-area ptb-100 bg-f4f7fe">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6">
                            <div className="subscribe-content">
                                <h2 className='text-left'>Our experts are available to help with all your IT and Computer Services needs</h2>
                                <span className="sub-title text-left">Fast, Reliable, High Quality, Excellent IT Services</span>
                                <p className='text-left'>We provide a wide range of IT Supports, Computer Services & Computer Repairs in Portsmouth area.</p>
                            </div>
                            <br/>
                            <a className="default-btn">
                                        Book Now
                                            <span></span>
                                        </a>
                        </div>
                        <div className="col-lg-6">
                            <div className="ft-img m-100">
                                <img src="/images/machine-learning/free-trial-img.png" alt="Image" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            </>
        );
    }
}

export default ComputerServicesDetails;