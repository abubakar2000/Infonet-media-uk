import React, { Component } from 'react';
import Link from 'next/link';
import dynamic from 'next/dynamic';
import Dropdown from 'react-bootstrap/Dropdown'
const OwlCarousel = dynamic(import('react-owl-carousel3'));
const options = {
    items: 1,
    loop: true,
    nav: true,
    animateOut: 'fadeOut',
    dots: false,
    margin: 0,
    autoplayHoverPause: true,
    autoplay: true,
    mouseDrag: false,
    touchDrag: false,
    navText: [
        "<i class='flaticon-left-chevron'></i>",
        "<i class='flaticon-right-chevron'></i>"
    ],
}



class WebSecurityDetails extends Component {
    _isMounted = false;
    state = {
        display: false
    }

    componentDidMount() {
        this._isMounted = true;
        this.setState({ display: true })
    }

    componentWillUnmount() {
        this._isMounted = false;
    }

    // Open Popup Modal
    state = {
        isOpen: false
    };

    openModal = () => {
        this.setState({ isOpen: true })
    };
    render() {
        return (
            <>
                <section className="choose-area-two">
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-lg-6">
                                <div className="choose-content">
                                    <div className="section-title text-left">
                                        <span className="sub-title">Web Security</span>
                                        <h2>No matter the size of your company, we're here to protect you!</h2>

                                        <p>Infonetmedia's web security experts will first perform a comprehensive and thorough analysis of your site and provide you with personalized recommendations for protection. We offer a range of security solutions so you can feel confident in our protection.</p>
                                    </div>

                                    <div className="choose-btn">
                                        <Link href="#">
                                            <a className="default-btn">
                                                Secure Yourself <span></span>
                                            </a>
                                        </Link>
                                    </div>
                                </div>
                            </div>

                            {/* Animated Display */}
                            <div className="col-lg-6">
                                {this.state.display ? <OwlCarousel
                                    className="it-banner-image owl-carousel owl-theme"
                                    {...options}
                                >
                                    {/* <div className="animate-image">
                                            <img src="/images/it-banner/animate-img.jpg" alt="image" />
                                        </div> */}
                                    <div className="animate-image">
                                        <img src="/images/it-banner/animate-img4.jpg" alt="image" />
                                    </div>
                                </OwlCarousel> : ''}
                            </div>

                            {/* <div className="col-lg-6 col-md-12">
                            <div className="choose-image">
                                <img src="/images/services/it-services6.jpg" alt="image" />
                            </div>
                        </div> */}
                        </div>
                    </div>
                </section>
                <section className="services-details-area ptb-100">
                    <div className="container">
                        {/* Our Services Two */}
                        <div className="overview-box ">
                            <div className="overview-image">
                                <div className="image">
                                    <img src="/images/features-image/feature-image6.png" alt="image" />
                                </div>
                            </div>

                            <div className="overview-content">
                                <div className="content right-content">
                                    <h4>Stay safe online with Infonetmedia</h4>
                                    <p>We analyse your site to detect and identify cyber threats from JavaScript security, browser security, web application security, web protocol analysis, and much more.</p>
                                    <ul className="features-list">
                                        <li><span title='IT security that works for you'><i className="fas fa-check"></i>IT Security</span></li>
                                        <li><span title='IT security that works for you'><i className="fas fa-check"></i>Web Security</span></li>
                                    </ul>
                                    <h5 className='text-center'></h5>
                                    <p>When it comes to IT security, you don't have to have all the answers. With cyber threats in the news every day, it can be hard to know what does and doesn't work. That's why Cybersecurity is here for you! We keep up with the latest developments in cybersecurity technology so you don't have to. </p>
                                    <br />
                                    <div className="banner-btn" style={{display:'flex',flexWrap:'wrap'}}>
                                        <Link href="/contact">
                                            <a className="default-btn mr-4">
                                                Contact us <span></span>
                                            </a>
                                        </Link>

                                        <Dropdown>
                                            <Dropdown.Toggle className="default-btn-two" id="default-btn-two dropdown-basic">
                                                Professional Consultation
                                            </Dropdown.Toggle>

                                            <Dropdown.Menu>
                                                <Dropdown.Item href="#/action-1">How can I help</Dropdown.Item>
                                                <Dropdown.Item href="#/action-2">Get a Quote</Dropdown.Item>
                                                <Dropdown.Item href="#/action-3">Ask a Question</Dropdown.Item>
                                            </Dropdown.Menu>
                                        </Dropdown>
                                    </div>
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
                                    <h2 className='text-left'>Secure your data</h2>
                                    <span className="sub-title text-left">Fast, Reliable, High Quality, Excellent Web Security</span>
                                    <p className='text-left'>There's no time like the present to start securing your data. Hackers and cyber thieves are out there, set for their next attack. If you're not prepared, they'll have a field day with all of your most sensitive information. Let our experts secure your data so you can focus on the important parts of your business today.</p>
                                </div>
                                <br />
                                <a className="default-btn">
                                    Secure Yourself Now
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
                <section className="services-details-area">
                    <div className="container">
                        {/* Our Services Two */}
                        <div className="overview-box ">
                            <div className="overview-image">
                                <div className="image">
                                    <img src="/images/services/it-services7.jpg" alt="image" />
                                </div>
                            </div>

                            <div className="overview-content">
                                <div className="content right-content">
                                    <h4>Stop Cyber Attacks</h4>
                                    <p>Stop cybercriminals from getting unauthorized access to your networks and data. Protect yourself against the most common web-based threats with a proactive cybersecurity solution. Our Web Security Experts will analyse your site, detect and identify security holes, and implement a solution to help you stay safe.</p>
                                    <p>We analyse your site to detect and identify cyber threats: SQL injection</p>
                                    <p>XSS, Denial-of-service (DOS), Distributed-denial-of-service (DDOS), Buffer overflow, Memory corruption, browser vulnerabilities, web application exploits, broken authentication, Cross-site scripting, secure direct object references, security misconfiguration, sensitive data discovery, cross-site request forgery, insufficient supply chain security, failure to restrict URL access and much more!</p>
                                    <a className="default-btn">
                                        Get Started Now
                                        <span></span>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

            </>
        );
    }
}

export default WebSecurityDetails;