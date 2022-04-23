import React, { Component } from 'react';
import dynamic from 'next/dynamic';
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


class ItConsultancyDetails extends Component {
    _isMounted = false;
    state = {
        display:false
    }

    componentDidMount(){ 
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
        this.setState({isOpen: true})
    };
    render() {
        return (
            <>
                <section className="services-details-area">
                    <div className="container">
                        <div className="services-details-overview">
                            <div className="services-details-desc">
                                <h3>IT Consultancy for your business</h3>
                                <p>Our IT Consultancy service offers a plan-from-the-ground-up service for any business. Our IT consultancy is just what you need. With our help, you can be confident that your needs are being met and your organization is running smoothly. So if you need someone who knows what they're talking about, call us!</p>

                                <div className="features-text">
                                    <h4><i className="flaticon-tick"></i> Core Development</h4>
                                    <p>No fake products and services. The customer is king, their lives and needs are the inspiration.</p>
                                </div>

                                <div className="features-text">
                                    <h4><i className="flaticon-tick"></i> Define Your Choices</h4>
                                    <p>No fake products and services. The customer is king, their lives and needs are the inspiration.</p>
                                </div>
                            </div>
                            {/* Animated Display */}
                            <div className="col-lg-6">
                                    {this.state.display ? <OwlCarousel 
                                        className="it-banner-image owl-carousel owl-theme"
                                        {...options}
                                    >
                                        <div className="animate-image">
                                            <img src="/images/it-banner/animate-img.jpg" alt="image" />
                                        </div>
                                        {/* <div className="animate-image">
                                            <img src="/images/it-banner/animate-img2.jpg" alt="image" />
                                        </div> */}
                                    </OwlCarousel> : ''}
                            </div>
                        </div>

                        <div className="services-details-overview ptb-100">
                            <div className="services-details-image wow fadeInUp">
                                <img src="/images/seo-banner/seo-banner3.png" alt="image" />
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
                        </div>
                    </div>
                </section>
            </>
        );
    }
}

export default ItConsultancyDetails;