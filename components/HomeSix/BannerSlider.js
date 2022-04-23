import React, { Component } from 'react';
import Link from 'next/link';
import dynamic from 'next/dynamic';
import VisibilitySensor from "react-visibility-sensor";
const OwlCarousel = dynamic(import('react-owl-carousel3'));
const ModalVideo = dynamic(() => import('react-modal-video'), {
    ssr: false
});

const options = {
    items: 1,
    loop: true,
    nav: true,
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

class BannerSlider extends Component {

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
                {/* If you want change the video need to update below videoID */}

                <ModalVideo 
                    channel='youtube' 
                    isOpen={this.state.isOpen} 
                    videoId='szuchBiLrEM' 
                    onClose={() => this.setState({isOpen: false})} 
                />

                {this.state.display ? <OwlCarousel 
                    className="seo-banner-slider owl-carousel owl-theme"
                    {...options}
                >
                    <div className="seo-banner">
                        <div className="d-table">
                            <div className="d-table-cell">
                                <div className="container mt-50">
                                    <div className="row align-items-center">
                                        <div className="col-lg-6">
                                            <VisibilitySensor>
                                                {({ isVisible }) => (
                                                    <div className="banner-content">
                                                        <h1
                                                        className={
                                                            isVisible ? "animated fadeInUp opacityOne" : 'opacityZero'
                                                            }
                                                        >
                                                        Infonetmedia <br/> an IT Company
                                                        </h1>

                                                        <p
                                                            className={
                                                                isVisible ? "animated fadeInUp opacityOne" : 'opacityZero'
                                                            }
                                                        >
                                                            is the perfect partner for any company or anyone that needs IT Services. We provide services for homes and businesses, so you can have peace of mind knowing your devices, networks & systems are in good hands.
                                                        </p>
                                                        <p
                                                            className={
                                                                isVisible ? "animated fadeInUp opacityOne" : 'opacityZero'
                                                            }
                                                        >
                                                        {/* INFONETMEDIA is the best IT Service Provider in Portsmouth Area. We provide you with all the IT services you need to succeed – Computer Services (computer repairs, Laptop repairs), website design, web hosting, digital marketing services (SEO Optimization, Graphics Design), Computer & IT Training, Industrial Placement, IT consultancy and support, IT security, web security, database design, and network management */}
                                                                                                                </p>
                                
                                                        <div 
                                                            className={
                                                                `banner-btn ${isVisible ? "animated fadeInUp opacityOne" : 'opacityZero'}`
                                                            }
                                                        >
                                                            {/* <Link href="/contact">
                                                                <a className="default-btn mr-3">
                                                                    Get Started <span></span>
                                                                </a>
                                                            </Link> */}
                                                            
                                                            <div
                                                                onClick={e => {e.preventDefault(); this.openModal()}}
                                                                className="video-btn popup-youtube"
                                                            > 
                                                                <i className="flaticon-play-button"></i>
                                                            </div>
                                                        </div>
                                                    </div>
                                                )}
                                            </VisibilitySensor>
                                        </div>

                                        <div className="col-lg-6">
                                            <div className="seo-banner-image animate-tb">
                                                <img src="/images/seo-banner/seo-banner1.png" alt="image" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                        {/* Shape Images */}
                        <div className="shape-img2">
                            <img src="/images/shape/shape2.svg" alt="image" />
                        </div>
                        <div className="shape-img3">
                            <img src="/images/shape/shape3.svg" alt="image" />
                        </div>
                        <div className="shape-img4">
                            <img src="/images/shape/shape4.png" alt="image" />
                        </div>
                        <div className="shape-img5">
                            <img src="/images/shape/shape5.png" alt="image" />
                        </div>
                        <div className="shape-img6">
                            <img src="/images/shape/shape6.png" alt="image" />
                        </div>
                        <div className="shape-img7">
                            <img src="/images/shape/shape7.png" alt="image" />
                        </div>
                        <div className="shape-img8">
                            <img src="/images/shape/shape8.png" alt="image" />
                        </div>
                        <div className="shape-img9">
                            <img src="/images/shape/shape9.png" alt="image" />
                        </div>
                        <div className="shape-img10">
                            <img src="/images/shape/shape10.png" alt="image" />
                        </div>
                        <div className="shape-img13">
                            {/* <img src="/images/shape/shape13.png" alt="image" /> */}
                        </div>
                        <div className="shape-img14">
                            {/* <img src="/images/shape/shape14.png" alt="image" /> */}
                        </div>
                    </div>

                    <div className="seo-banner">
                        <div className="d-table">
                            <div className="d-table-cell">
                                <div className="container mt-50">
                                    <div className="row align-items-center">
                                        <div className="col-lg-6">
                                            <VisibilitySensor>
                                                {({ isVisible }) => (
                                                    <div className="banner-content">
                                                        <h1
                                                        className={
                                                            isVisible ? "animated fadeInUp opacityOne" : 'opacityZero'
                                                            }
                                                        >
                                                            We offer excellent IT Services and Support
                                                        </h1>
                                                        <p
                                                            className={
                                                                isVisible ? "animated fadeInUp opacityOne" : 'opacityZero'
                                                            }
                                                        >
                                                           We provide computer services, laptop & computer repairs, IT Services, Network Management, IT Security, and IT Consultancy services. Our prices are highly competitive as we provide an overall price saver.
                                                        </p>
                                                        
                                                        <div 
                                                            className={
                                                                `banner-btn ${isVisible ? "animated fadeInUp opacityOne" : 'opacityZero'}`
                                                            }
                                                        >
                                                            {/* <Link href="/contact">
                                                                <a className="default-btn mr-3">
                                                                    Get Started <span></span>
                                                                </a>
                                                            </Link> */}
                                                            
                                                            <div
                                                                onClick={e => {e.preventDefault(); this.openModal()}}
                                                                className="video-btn popup-youtube"
                                                            > 
                                                                <i className="flaticon-play-button"></i>
                                                            </div>
                                                        </div>
                                                    </div>
                                                )}
                                            </VisibilitySensor>
                                        </div>

                                        <div className="col-lg-6">
                                            <div className="seo-banner-image animate-tb">
                                                <img src="/images/seo-banner/seo-banner2.png" alt="image" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                        {/* Shape Images */}
                        <div className="shape-img2">
                            <img src="/images/shape/shape2.svg" alt="image" />
                        </div>
                        <div className="shape-img3">
                            <img src="/images/shape/shape3.svg" alt="image" />
                        </div>
                        <div className="shape-img4">
                            <img src="/images/shape/shape4.png" alt="image" />
                        </div>
                        <div className="shape-img5">
                            <img src="/images/shape/shape5.png" alt="image" />
                        </div>
                        <div className="shape-img6">
                            <img src="/images/shape/shape6.png" alt="image" />
                        </div>
                        <div className="shape-img7">
                            <img src="/images/shape/shape7.png" alt="image" />
                        </div>
                        <div className="shape-img8">
                            <img src="/images/shape/shape8.png" alt="image" />
                        </div>
                        <div className="shape-img9">
                            <img src="/images/shape/shape9.png" alt="image" />
                        </div>
                        <div className="shape-img10">
                            <img src="/images/shape/shape10.png" alt="image" />
                        </div>
                        <div className="shape-img13">
                            {/* <img src="/images/shape/shape13.png" alt="image" /> */}
                        </div>
                        <div className="shape-img14">
                            {/* <img src="/images/shape/shape14.png" alt="image" /> */}
                        </div>
                    </div>

                    <div className="seo-banner">
                        <div className="d-table">
                            <div className="d-table-cell">
                                <div className="container mt-50">
                                    <div className="row align-items-center">
                                        <div className="col-lg-6">
                                            <VisibilitySensor>
                                                {({ isVisible }) => (
                                                    <div className="banner-content">
                                                        <h1
                                                        className={
                                                            isVisible ? "animated fadeInUp opacityOne" : 'opacityZero'
                                                            }
                                                        >
                                                           A company, you can trust!
                                                        </h1>
                                                        <p
                                                            className={
                                                                isVisible ? "animated fadeInUp opacityOne" : 'opacityZero'
                                                            }
                                                        >
                                                            Infonetmedia is a top-rated IT Service Provider with an impeccable track record, offering all of the services you need for your business or personal needs.
                                                        </p>
                                                        
                                                        <div 
                                                            className={
                                                                `banner-btn ${isVisible ? "animated fadeInUp opacityOne" : 'opacityZero'}`
                                                            }
                                                        >
                                                            {/* <Link href="/contact">
                                                                <a className="default-btn mr-3">
                                                                    Get Started <span></span>
                                                                </a>
                                                            </Link> */}
                                                            
                                                            <div
                                                                onClick={e => {e.preventDefault(); this.openModal()}}
                                                                className="video-btn popup-youtube"
                                                            > 
                                                                <i className="flaticon-play-button"></i>
                                                            </div>
                                                        </div>
                                                    </div>
                                                )}
                                            </VisibilitySensor>
                                        </div>

                                        <div className="col-lg-6">
                                            <div className="seo-banner-image animate-tb">
                                                <img src="/images/seo-banner/seo-banner3.png" alt="image" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                        {/* Shape Images */}
                        <div className="shape-img2">
                            <img src="/images/shape/shape2.svg" alt="image" />
                        </div>
                        <div className="shape-img3">
                            <img src="/images/shape/shape3.svg" alt="image" />
                        </div>
                        <div className="shape-img4">
                            <img src="/images/shape/shape4.png" alt="image" />
                        </div>
                        <div className="shape-img5">
                            <img src="/images/shape/shape5.png" alt="image" />
                        </div>
                        <div className="shape-img6">
                            <img src="/images/shape/shape6.png" alt="image" />
                        </div>
                        <div className="shape-img7">
                            <img src="/images/shape/shape7.png" alt="image" />
                        </div>
                        <div className="shape-img8">
                            <img src="/images/shape/shape8.png" alt="image" />
                        </div>
                        <div className="shape-img9">
                            <img src="/images/shape/shape9.png" alt="image" />
                        </div>
                        <div className="shape-img10">
                            <img src="/images/shape/shape10.png" alt="image" />
                        </div>
                        <div className="shape-img13">
                            {/* <img src="/images/shape/shape13.png" alt="image" /> */}
                        </div>
                        <div className="shape-img14">
                            {/* <img src="/images/shape/shape14.png" alt="image" /> */}
                        </div>
                    </div>
                </OwlCarousel> : ''}
            </>
        );
    }
}

export default BannerSlider;