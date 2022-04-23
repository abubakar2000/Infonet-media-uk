import React, { Component } from 'react';
import Link from 'next/link';


class ComputerITDetails extends Component {
    render() {
        return (
            <>
            <section className="choose-area-two">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-6">
                            <div className="choose-content">
                                <div className="section-title text-left">
                                    <span className="sub-title">Computer & IT Training</span>
                                    <h2>Expand your knowledge <br/> & skills</h2>

                                    <p>At Infonetmedia Computer and IT Training, we provide a variety of training for anyone looking to expand their knowledge and skills in the fields of technology. Our courses range from business analytics, data analytics, IT security, network management, digital marketing to home automation, and our trained instructors can help you learn at your own pace. If you're interested in starting your own business or just want to expand your knowledge, we also offer personalized tailored training. Free Consultation is available.</p>
                                </div>
    
                                <div className="choose-btn">
                                    <Link href="#">
                                        <a className="default-btn">
                                            Free Consultation <span></span>
                                        </a>
                                    </Link>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-6 col-md-12">
                            <div className="choose-image">
                                <img src="/images/features-image/feature-image1.png" alt="image" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="free-trial-area ptb-100 bg-f4f7fe">
                <div className="container">
                    <div className="row">
                    <div className="col-lg-6">
                            <div className="ft-img m-100">
                                <img src="/images/machine-learning/free-trial-img.png" alt="Image" />
                            </div>
                        </div>
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
                        
                    </div>
                </div>
            </section>
            </>
        );
    }
}

export default ComputerITDetails;