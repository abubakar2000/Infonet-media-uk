import React, { Component } from 'react';
import Link from 'next/link';

class SidePoster extends Component {
    render() {
        return (
            <>
                <section className="overview-area ptb-100 pt-0 mt-5">
                    <div className="container">

                        {/* Our Services Two */}
                        <div className="overview-box">
                            <div className="overview-image">
                                <div className="image">
                                    <img src="/images/why-choose-img1.png" alt="image" />
                                </div>
                            </div>
                            
                            <div className="overview-content">
                                <div className="content right-content">
                                    <span className="sub-title">Computer Services & Repairs</span>
                                    <h3>COMPUTER SERVICES & REPAIRS</h3>
                                    <p>We provide a wide range of IT Support & Services as well as Computer Services & Repairs.  Infonetmedia offers the best IT Support, Computer Services, Computer Repairs, Web Design, Web Hosting, Digital Marketing,  Computer & IT Training, Network Management, Graphics & Design, and Programming & Technology.</p>

                                    <div className="banner-btn">
                                        <Link href="/contact">
                                            <a className="default-btn mr-4">
                                                Get Started <span></span>
                                            </a>
                                        </Link>

                                        <Link href="/index9">
                                            <a className="default-btn-two">
                                                Try It Free <span></span>
                                            </a>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>    
                    </div>
                </section>
            </>
        );
    }
}

export default SidePoster;