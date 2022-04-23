import React, { Component } from 'react';
import Link from 'next/link';
import dynamic from 'next/dynamic';
const ModalVideo = dynamic(() => import('react-modal-video'), {
    ssr: false
});

class NetworkDetailsPart extends Component {

    state = {
        isOpen: false
    };

    openModal = () => {
        this.setState({isOpen: true})
    };

    render() {
        return (
            <>
                <section className="solution-area ptb-100 extra-pb jarallax">
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-lg-6 col-md-12">
                                <div className="solution-content">
                                    <span className="sub-title">Network Management</span>
                                    <h2>A fully featured cloud control panel</h2>
                                    <p>Our web-base cloud control panel offers a full range of network management functions, including falut, performance, reporting and monitoring.</p>

                                    <Link href="">
                                        <a className="default-btn">Learn More <span></span></a>
                                    </Link>
                                </div>
                            </div>

                            <div className="col-lg-6 col-md-12">
                                <div className="solution-video">
                                    <div
                                        onClick={e => {e.preventDefault(); this.openModal()}}
                                        className="video-btn popup-youtube"
                                    > 
                                        <i className="flaticon-play-button"></i>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* If you want change the video need to update below videoID */}
                <ModalVideo 
                    channel='youtube' 
                    isOpen={this.state.isOpen} 
                    videoId='szuchBiLrEM' 
                    onClose={() => this.setState({isOpen: false})} 
                />

                {/* <section className="services-details-area ptb-100">
                    <div className="container">
                        <div className="services-details-overview">
                            <div className="services-details-desc">
                                <h3>Benefits of Industrial Work Placement</h3>
                                <br/>
                                <div className="features-text">
                                    <h4><i className="flaticon-tick"></i>Provides the opportunity to work with a more diverse group of people.</h4>
                                    <h4><i className="flaticon-tick"></i>Adds invaluable work experience to your CV which is attractive to employers.</h4>
                                    <h4><i className="flaticon-tick"></i>Gives you an insight into the work environment and to allow you to understand how things works</h4>
                                    <h4><i className="flaticon-tick"></i>Increased employability</h4>
                                    <h4><i className="flaticon-tick"></i>Improved skills and knowledge</h4>
                                    <h4><i className="flaticon-tick"></i>Accelerated person growth and skills growth</h4>
                                    <h4><i className="flaticon-tick"></i>Grow your professional network</h4>
                                </div>
                            </div>

                            <div className="services-details-image wow fadeInUp">
                                <img src="/images/features-image/feature-image5.png" alt="image" />
                            </div>
                        </div>

                        <div className="services-details-overview">
                            <div className="services-details-image wow fadeInUp">
                                <img src="/images/services/it-service2.png" alt="image" />
                            </div>

                            <div className="services-details-desc">
                                <h3>Why to choose us?</h3>
                                <div className="features-text">
                                    <h4><i className="flaticon-tick"></i>Innovation: We promote innovative work experience by putting theory into practice</h4>
                                    <h4><i className="flaticon-tick"></i>High-quality work experience</h4>
                                    <h4><i className="flaticon-tick"></i>Job’s prospect</h4>
                                    <h4><i className="flaticon-tick"></i>Excellent friendly Team with friendly environment</h4>
                                    <h4><i className="flaticon-tick"></i>We care about you and your career</h4>
                                    <h4><i className="flaticon-tick"></i>Strong & adaptive work environment</h4>
                                </div>
                            </div>
                        </div>
                    </div>
                </section> */}

            </>
        );
    }
}

export default NetworkDetailsPart;