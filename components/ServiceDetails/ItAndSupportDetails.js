import React, { Component } from 'react';
import Link from 'next/link';

class ItAndSupportDetails extends Component {
    render() {
        return (
            <>
                <section className="services-details-area">
                    <div className="container">
                        <div className="services-details-overview">
                            <div className="services-details-desc">
                                <h3>IT Services & Support </h3>
                                <p>Whether you need help with your laptop, desktop, network, wi-fi or anything else Infonetmedia has you covered. We provide a wide range of services that are customized to suit your needs. All our services are backed up by our extensive knowledge and expertise which will help you get back on track as quickly as possible.</p>

                                <div className="features-text">
                                
                                    <p>We're here to provide the best IT Services and support for you and your business. We're reliable, trustworthy, and we have friendly 24/7 customer support. You can count on Infonetmedia IT Company for all your computer needs!</p>
                                    <div className="btn-box">
                                    <a target="_blank" href="https://app.writesonic.com/template/d04698c4-bfeb-4344-9dec-e09cfa6ecdbd/landing-pages/c6bc50ae-f620-4ebc-9395-a006b463a9b4?filter=all&p=1">
                                        <a className="default-btn">
                                        Get The Best IT Support
                                            <span></span>
                                        </a>
                                    </a>
                                </div>
                                </div>
                            </div>

                            <div className="services-details-image wow fadeInUp">
                                <img src="/images/features-image/feature-image6.png" alt="image" />
                            </div>
                        </div>
                        <h2 className='text-center text-primary ptb-50'>Trustworthy and reliable services with 24/7 customer support</h2>
                        <br/>
                        {/* Our Services Two */}
                        <div className="overview-box ">
                            <div className="overview-image">
                                <div className="image">
                                    <img src="/images/features-image/feature-image2.png" alt="image" />
                                </div>
                            </div>
                            
                            <div className="overview-content">
                                <div className="content right-content">
                                    <p>Infonetmedia IT Services & Support you can count on, we deliver fast, efficient, cost-effective IT Services. Our friendly team of experts is available 24/7 to meet your IT needs:</p>
                                    <ul className="features-list">
                                        <li><span><i className="fas fa-check"></i> System Monitoring</span></li>
                                        <li><span><i className="fas fa-check"></i> Cyber Security</span></li>
                                        <li><span><i className="fas fa-check"></i>  IT Infrastructure</span></li>
                                        <li><span><i className="fas fa-check"></i> IT Audits</span></li>
                                        <li><span><i className="fas fa-check"></i> Firewall / Web Security</span></li>
                                        <li><span><i className="fas fa-check"></i> Managed Wi-Fi Solutions</span></li>
                                        <li><span><i className="fas fa-check"></i> Cloud Solutions</span></li>
                                        <li><span><i className="fas fa-check"></i> IT Help Desk</span></li>
                                        <li><span><i className="fas fa-check"></i> IT Consultancy</span></li>
                                        <li><span><i className="fas fa-check"></i> User Awareness Training</span></li>
                                        <li><span><i className="fas fa-check"></i> Network and Data Security</span></li>
                                    </ul>
                                    <p>We understand the desire for quality, and with our team of skilled and experienced IT Experts, we will serve you beyond your expectations.</p>
                                </div>
                            </div>
                        </div>
                        <br/>
                    </div>
                </section>
            </>
        );
    }
}

export default ItAndSupportDetails;