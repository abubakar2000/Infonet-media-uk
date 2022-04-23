import React, { Component } from 'react';
import ScrollAnimation from 'react-animate-on-scroll';

class DigitalMarketingDetails extends Component {
    render() {
        return (
            <>
                <section className="services-details-area">
                    <div className="container">
                        <div className="services-details-overview">
                            <div className="services-details-desc">
                                <h3>Digital Marketing (SEO Optimization) </h3>
                                <p>Do you need help with digital marketing? Whether it's SEO optimization, social media marketing (SMM), search engine marketing (SEM), website conversion, content marketing, video marketing, web analytics, marketing research & strategy, e-commerce marketing, web design, or mobile marketing & advertising</p>
                                <p>Search Engine Optimization (SEO) is a crucial and integral part of marketing for businesses. Businesses need SEO to succeed online and offline because SEO can help build a name for your company. Likewise, link building and having up-to-date blog articles If not, then you run the risk of not being competitive in the market. There's no better time than now to invest in.</p>
                            </div>
                            <div className="col-lg-6 col-md-12">
                                    <div className="hero-banner-image">
                                        <ScrollAnimation animateIn="fadeInDown" delay={50} animateOnce={true}>
                                            <img src="/images/banner-image/main.png" alt="main" />
                                        </ScrollAnimation>
 
                                        <ScrollAnimation animateIn="fadeInUp" delay={50} animateOnce={true}>
                                            <img src="/images/banner-image/banner-shape1.png" alt="banner-shape1" />
                                        </ScrollAnimation>
 
                                        <ScrollAnimation animateIn="fadeInLeft" delay={50} animateOnce={true}>
                                            <img src="/images/banner-image/banner-shape2.png" alt="carpet" />
                                        </ScrollAnimation>
                                    </div>
                                </div>
                        </div>

                        {/* Our Services Two */}
                        <div className="overview-box ptb-100">
                            <div className="overview-image">
                                <div className="image">
                                    <img src="/images/seo-banner/seo-banner1.png" alt="image" />
                                </div>
                            </div>
                            
                            <div className="overview-content">
                                <div className="content right-content">
                                    <h4>Infonet Media digital marketing services</h4>
                                    <p>The 8 modified or new services that we offer</p>
                                    <ul className="features-list">
                                        <li><span><i className="fas fa-check"></i> SEO /ON-LINE & OFF-LINE</span></li>
                                        <li><span><i className="fas fa-check"></i> Search Engine Marketing </span></li>
                                        <li><span><i className="fas fa-check"></i>  Search Media Marketing</span></li>
                                        <li><span><i className="fas fa-check"></i>  Google Ads</span></li>
                                        <li><span><i className="fas fa-check"></i> E-Commerce Marketing</span></li>
                                        <li><span><i className="fas fa-check"></i> Web Analyis</span></li>
                                        <li><span><i className="fas fa-check"></i> Mobile App Marketing</span></li>
                                        <li><span><i className="fas fa-check"></i> Website Promotion</span></li>
                                    </ul>
                                    <br/>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </>
        );
    }
}

export default DigitalMarketingDetails;