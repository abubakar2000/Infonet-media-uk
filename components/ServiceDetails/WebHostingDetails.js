import React, { Component } from 'react';
import WebHostingPricingDetails from "./WebHostingPricingDetails";
import WebHostingFeaturesDetails from "./WebHostingFeaturesDetails";
import WebHostingDomainDetails from "./WebHostingDomainDetails"

class WebHostingDetails extends Component {
    render() {
        return (
            <>
                <section className="services-details-area">
                    <div className="container">
                        <div className="services-details-overview">
                            <div className="services-details-desc">
                                <br/>
                                <h2>Web Hosting</h2>
                                <br/>
                                <p>Are you looking for a reliable and affordable web hosting provider? Look no further; we offer both shared and dedicated hosting solutions that will keep your website up and running without any downtime or security breaches.</p>

                                <div className="features-text">
                                    <h4>Have a Question?</h4>
                                    <p>Please feel free to contact with us!</p>
                                    <a className="default-btn">
                                        Get In Touch
                                            <span></span>
                                        </a>
                                </div>
                            </div>

                            <div className="services-details-image wow fadeInUp">
                                <img src="/images/services/it-service3.png" alt="image" />
                            </div>
                        </div>
                    </div>
                </section>

                {/* Pricing Details */}
                <WebHostingPricingDetails/>

                {/* Hosting Features */}
                <WebHostingFeaturesDetails/>
                
                {/* Satisfaction Gurantee with domain */}
                <div className="blog-area blog-ptb-100">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12 col-md-12">
                                <WebHostingDomainDetails />
                            </div>
                        </div>
                    </div>
                </div>
            </>
        );
    }
}

export default WebHostingDetails;