import React, { Component } from 'react';
import Link from 'next/link';

class WebDevelopmentServicesDetails extends Component {
    render() {
        return (
            <section className="pt-100 pb-70 gray-bg">
                <div className="container">
                    <div className="section-title">
                        <h3>Web Development & Web Design</h3>
                        <p>The service platforms that we offer!</p>
                    </div>
                    <div className="row">
                        <div className="col-lg-4 col-sm-6">
                            <div className="service-card-one bg-white center">
                                <div className="icon">
                                    <i className="bx bx-conversation"></i>
                                    <i className='bx bxs-badge-check check-icon'></i>
                                </div>
                                <h3>
                                    <Link href="/service-details">
                                        <a>Wordpress Websites</a>
                                    </Link>
                                </h3>
                                {/* <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.</p> */}
                            </div>
                        </div>

                        <div className="col-lg-4 col-sm-6">
                            <div className="service-card-one bg-white center">
                                <div className="icon">
                                    <i className="bx bx-laptop"></i>
                                    <i className='bx bxs-badge-check check-icon'></i>
                                </div>
                                <h3>
                                    <Link href="/service-details">
                                        <a>AngularJs Website Design</a>
                                    </Link>
                                </h3>
                                {/* <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.</p> */}
                            </div>
                        </div>

                        <div className="col-lg-4 col-sm-6">
                            <div className="service-card-one bg-white center">
                                <div className="icon">
                                    <i className="bx bxs-megaphone"></i>
                                    <i className='bx bxs-badge-check check-icon'></i>
                                </div>
                                <h3>
                                    <Link href="/service-details">
                                        <a>React Website Design</a>
                                    </Link>
                                </h3>
                                {/* <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.</p> */}
                            </div>
                        </div>

                        <div className="col-lg-4 col-sm-6">
                            <div className="service-card-one bg-white center">
                                <div className="icon">
                                    <i className='bx bx-mobile-alt'></i>
                                    <i className='bx bxs-badge-check check-icon'></i>
                                </div>
                                <h3>
                                    <Link href="/service-details">
                                        <a>Mobile App Development</a>
                                    </Link>
                                </h3>
                                {/* <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.</p> */}
                            </div>
                        </div>

                        <div className="col-lg-4 col-sm-6">
                            <div className="service-card-one bg-white center">
                                <div className="icon">
                                    <i className='bx bx-cart'></i>
                                    <i className='bx bxs-badge-check check-icon'></i>
                                </div>
                                <h3>
                                    <Link href="/service-details">
                                        <a>PHP Website Development</a>
                                    </Link>
                                </h3>
                                {/* <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.</p> */}
                            </div>
                        </div>

                        <div className="col-lg-4 col-sm-6">
                            <div className="service-card-one bg-white center">
                                <div className="icon">
                                    <i className='bx bx-list-check'></i>
                                    <i className='bx bxs-badge-check check-icon'></i>
                                </div>
                                <h3>
                                    <Link href="/service-details">
                                        <a>VUE / Bootstrap Website</a>
                                    </Link>
                                </h3>
                                {/* <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.</p> */}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default WebDevelopmentServicesDetails;