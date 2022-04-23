import React, { Component } from 'react';

class HomeBanners extends Component {
    render() {
        return (
            <>
                <section className="overview-area ptb-100 pt-0">
                    <div className="container">
                        {/* Our Services One */}
                        <div className="overview-box mt-5">
                            <div className="overview-content">
                                <div className="content">
                                    <span className="sub-title">Qverview</span>
                                    <h2>Infonetmedia, <br/>An IT Company</h2>
                                    <p>is the perfect partner for any company or anyone that needs IT Services. We provide services for homes and businesses, so you can have peace of mind knowing your devices, networks & systems are in good hands.</p>

                                    <div className="features-text">
                                        <h4><i className="flaticon-tick"></i> The Best IT Service Provider in Portsmouth Area</h4>
                                        <p>We provide you with all the IT services you need to succeed </p>
                                        <p>Computer Services (computer repairs, Laptop repairs), website design, web hosting, digital marketing services (SEO Optimization, Graphics Design), Computer & IT Training, Industrial Placement, IT consultancy and support, IT security, web security, database design, and network management</p>
                                        {/* <ul className="features-list">
                                        <li><span><i className="fas fa-check"></i> Computer Services</span></li>
                                        <li><span><i className="fas fa-check"></i> Web Design</span></li>
                                        <li><span><i className="fas fa-check"></i> Web Hosting</span></li>
                                        <li><span><i className="fas fa-check"></i> Digital Marketing</span></li>
                                        <li><span><i className="fas fa-check"></i> Computer & IT Training</span></li>
                                        <li><span><i className="fas fa-check"></i> Industrial Placement</span></li>
                                    </ul> */}
                                    </div>
                                </div>
                            </div>

                            <div className="overview-image">
                                <div className="image">
                                    <img src="/images/about-img1.png" alt="image" />
                                </div>
                            </div>
                        </div>

                        {/* Our Services Two */}
                        <div className="overview-box">
                            <div className="overview-image">
                                <div className="image">
                                    <img src="/images/why-choose-img1.png" alt="image" />
                                </div>
                            </div>
                            
                            <div className="overview-content">
                                <div className="content right-content">
                                    <span className="sub-title">Our Best Team</span>
                                    <h2>A team of experts on board</h2>
                                    <p>We have a team of experts in Web Development; Web Design; Web Hosting; Digital Marketing; SEO Optimisation; Graphics Design; IT Consultancy; IT Security; Web Security; Network Management; IT Services & Support; Database Management and Mobile App Development to ensure that you get the best service possible. </p>
                                    <p>However, if you're not sure about which type of service you need - no need to worry! We have Computer & IT Training courses for both,</p>
                                    <ul className="features-list">
                                        <li><span><i className="fas fa-check"></i> Individuals</span></li>
                                        <li><span><i className="fas fa-check"></i> businesses</span></li>
                                    </ul>
                                    <p>So, that everyone can be trained to use any type of technology!</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </>
        );
    }
}

export default HomeBanners;