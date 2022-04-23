import React, { Component } from 'react';
import ScrollAnimation from 'react-animate-on-scroll';
import WebDevelopmentServicesDetails from "./WebDevelopmentServicesDetails"
import WebDevProjectsDetails from "./WebDevProjectsDetails"

class WebDevelopmentDetails extends Component {
    render() {
        return (
            <>
                <section className="services-details-area ptb-100">
                    <div className="container">
                        <div className="services-details-overview">
                            <div className="services-details-desc">
                                <h3>We Make Websites </h3>
                                <p>Responsive, Dynamic, user-friendly, Websites Designed To Represent Your Brand. We're Your Go-To Website Designers for responsive, dynamic Websites. </p>
                                <h4 className='text-primary'>Let us design You A New Website Today!</h4>
                                <h5>Our web designers are available 24/7 to help.</h5>
                                <br/>
                                <a target="_blank" href="">
                                        <a className="default-btn">
                                        Get started today!
                                            <span></span>
                                        </a>
                                    </a>
                                <br/>
                                <br/>
                                <p>Whether you need a basic website, business, educational, real estate, blog, personal, event website, news portal website or an entire e-commerce store, we will help you develop your online presence. We create websites with the best design and navigation to ensure that your business is successful online.</p>
                            </div>

                            {/* <div className="services-details-image wow fadeInUp">
                                <img src="/images/about-img1.png" alt="image" />
                            </div> */}
                            <div className="col-lg-6 col-md-12">
                                    <div className="hero-main-banner-image">
                                        <ScrollAnimation animateIn="fadeInDown" delay={50} animateOnce={true}>
                                            <img src="/images/banner-image/man.png" alt="man" />
                                        </ScrollAnimation>

                                        <ScrollAnimation animateIn="fadeInUp" delay={50} animateOnce={true}>
                                            <img src="/images/banner-image/code.png" alt="code" />
                                        </ScrollAnimation>
 
                                        <ScrollAnimation animateIn="fadeInLeft" delay={50} animateOnce={true}>
                                            <img src="/images/banner-image/carpet.png" alt="carpet" />
                                        </ScrollAnimation>
 
                                        <ScrollAnimation animateIn="zoomIn" delay={50} animateOnce={true}>
                                            <img src="/images/banner-image/bin.png" alt="bin" />
                                        </ScrollAnimation>
 
                                        <ScrollAnimation animateIn="bounceIn" delay={50} animateOnce={true}>
                                            <img src="/images/banner-image/book.png" alt="book" />
                                        </ScrollAnimation>
 
                                        <ScrollAnimation animateIn="fadeInDown" delay={50} animateOnce={true}>
                                            <img src="/images/banner-image/desktop.png" alt="desktop" />
                                        </ScrollAnimation>
 
                                        <ScrollAnimation animateIn="zoomIn" delay={50} animateOnce={true}>
                                            <img src="/images/banner-image/dot.png" alt="dot" />
                                        </ScrollAnimation>
 
                                        <ScrollAnimation animateIn="fadeInUp" delay={50} animateOnce={true}>
                                            <img src="/images/banner-image/flower-top-big.png" alt="flower-top-big" />
                                        </ScrollAnimation>
                                         
                                        <ScrollAnimation animateIn="rotateIn" delay={50} animateOnce={true}>
                                            <img src="/images/banner-image/flower-top.png" alt="flower-top" />
                                        </ScrollAnimation>
                                         
                                        <ScrollAnimation animateIn="fadeInUp" delay={50} animateOnce={true}>
                                            <img src="/images/banner-image/keyboard.png" alt="keyboard" />
                                        </ScrollAnimation>
                                         
                                        <ScrollAnimation animateIn="zoomIn" delay={50} animateOnce={true}>
                                            <img src="/images/banner-image/pen.png" alt="pen" />
                                        </ScrollAnimation>
 
                                        <ScrollAnimation animateIn="zoomIn" delay={50} animateOnce={true}>
                                            <img src="/images/banner-image/table.png" alt="table" />
                                        </ScrollAnimation>
                                         
                                        <ScrollAnimation animateIn="fadeInLeft" delay={50} animateOnce={true}>
                                            <img src="/images/banner-image/tea-cup.png" alt="tea-cup" />
                                        </ScrollAnimation>
                                         
                                        <ScrollAnimation animateIn="rollIn" delay={50} animateOnce={true}>
                                            <img src="/images/banner-image/headphone.png" alt="headphone" />
                                        </ScrollAnimation>
                                        
                                        {/* Main Images */} 
                                        <ScrollAnimation animateIn="fadeInUp" delay={50} animateOnce={true}>
                                            <img src="/images/banner-image/main-pic.png" alt="main-pic" />
                                        </ScrollAnimation>
                                    </div>
                                </div>
                        </div>
                        <br/>
                        <WebDevelopmentServicesDetails/>
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
                                    <ul className="features-list">
                                        <li><span><i className="fas fa-check"></i> Responsive Website</span></li>
                                        <li><span><i className="fas fa-check"></i> Custom Website</span></li>
                                        <li><span><i className="fas fa-check"></i>  ECommerce Website</span></li>
                                        <li><span><i className="fas fa-check"></i>  News Portal Website</span></li>
                                    </ul>
                                    <br/>
                                    
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                        <WebDevProjectsDetails/>
                        {/* <div className="services-details-overview">
                            <div className="services-details-image wow fadeInUp">
                                <img src="/images/why-choose-img1.png" alt="image" />
                            </div>

                            <div className="services-details-desc">
                                <h3>Social Media Marketing</h3>
                                <p>We believe brand interaction is key in communication. Real innovations and a positive customer experience are the heart of successful communication. No fake products and services. The customer is king, their lives and needs are the inspiration.</p>

                                <div className="features-text">
                                    <h4><i className="flaticon-tick"></i> Core Development</h4>
                                    <p>No fake products and services. The customer is king, their lives and needs are the inspiration.</p>
                                </div>

                                <div className="features-text">
                                    <h4><i className="flaticon-tick"></i> Define Your Choices</h4>
                                    <p>No fake products and services. The customer is king, their lives and needs are the inspiration.</p>
                                </div>
                            </div>
                        </div> */}
                    </div>
                </section>
            </>
        );
    }
}

export default WebDevelopmentDetails;