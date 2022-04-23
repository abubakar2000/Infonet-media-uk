import React, { Component } from 'react';
import Link from 'next/link';

class Services extends Component {
    render() {
        return (
            <>
                <section className="services-area ptb-100 bg-F4F7FC" style={{cursor:'default'}}>
                    <div className="container">
                        <div className="section-title">
                            <h2>Our Services</h2>
                            <p>We provide you with all the IT services you need to succeed</p>
                        </div>

                        <div className="row">
                            <div className="col-lg-4 col-md-6 col-sm-6">
                                <div className="single-services-box">
                                    <div className="icon">
                                        <i className="flaticon-digital-marketing"></i>
                                    </div>
                                    <h5>
                                        <Link href="/it-and-support">
                                            <div>IT Services & Support </div>
                                        </Link>
                                    </h5>
                                    <p>Whether you need help with your laptop, desktop, network, wi-fi or anything else Infonetmedia has you covered.</p>

                                    <Link href="/it-and-support">
                                        <a className="read-more-btn">
                                            Learn 
                                            <i className="flaticon-right-arrow"></i>
                                        </a>
                                    </Link>
                                </div>
                            </div>

                            <div className="col-lg-4 col-md-6 col-sm-6">
                                <div className="single-services-box">
                                    <div className="icon bg-00aeff">
                                        <i className="flaticon-research"></i>
                                    </div>
                                    <h5>
                                        <Link href="/computer-services">
                                            <div>Computer Services </div>
                                        </Link>
                                    </h5>
                                    <p>We have experts who can help you with your IT needs, whether it's computer repairs, laptop repair.</p>

                                    <Link href="/computer-services">
                                        <a className="read-more-btn">
                                            Learn 
                                            <i className="flaticon-right-arrow"></i>
                                        </a>
                                    </Link>
                                </div>
                            </div>

                            <div className="col-lg-4 col-md-6 col-sm-6">
                                <div className="single-services-box">
                                    <div className="icon bg-f78acb">
                                        <i className="flaticon-analytics"></i>
                                    </div>
                                    <h5>
                                        <Link href="/web-development">
                                            <div>Web Development</div>
                                        </Link>
                                    </h5>
                                    <p>Responsive, Dynamic, user-friendly, Websites Designed To Represent Your Brand.</p>

                                    <Link href="/web-development">
                                        <a className="read-more-btn">
                                            Learn 
                                            <i className="flaticon-right-arrow"></i>
                                        </a>
                                    </Link>
                                </div>
                            </div>

                            <div className="col-lg-4 col-md-6 col-sm-6">
                                <div className="single-services-box">
                                    <div className="icon bg-cdf1d8">
                                        <i className="flaticon-analysis"></i>
                                    </div>
                                    <h5>
                                        <Link href="/web-development">
                                            <div>Mobile App Development </div>
                                        </Link>
                                    </h5>
                                    <p>Need full-fledged mobile app development services? At Infonetmedia, we offer app development using React Native framework</p>

                                    <Link href="/web-development">
                                        <a className="read-more-btn">
                                            Learn 
                                            <i className="flaticon-right-arrow"></i>
                                        </a>
                                    </Link>
                                </div>
                            </div>

                            <div className="col-lg-4 col-md-6 col-sm-6">
                                <div className="single-services-box">
                                    <div className="icon bg-c679e3">
                                        <i className="flaticon-mail"></i>
                                    </div>
                                    <h5>
                                        <Link href="/digital-marketing">
                                            <div>Digital Marketing </div>
                                        </Link>
                                    </h5>
                                    <p>Do you need help with digital marketing? Whether it's SEO optimization, social media marketing (SMM), search engine marketing (SEM), </p>

                                    <Link href="/digital-marketing">
                                        <a className="read-more-btn">
                                            Learn 
                                            <i className="flaticon-right-arrow"></i>
                                        </a>
                                    </Link>
                                </div>
                            </div>

                            <div className="col-lg-4 col-md-6 col-sm-6">
                                <div className="single-services-box">
                                    <div className="icon bg-eb6b3d">
                                        <i className="flaticon-seo"></i>
                                    </div>

                                    <h5>
                                        <Link href="/it-consultancy">
                                            <div>IT Consultancy Business </div>
                                        </Link>
                                    </h5>

                                    <p>Our IT Consultancy service offers a plan-from-the-ground-up service for any business. Our IT consultancy is just what you need.</p>

                                    <Link href="/it-consultancy">
                                        <a className="read-more-btn">
                                            Learn 
                                            <i className="flaticon-right-arrow"></i>
                                        </a>
                                    </Link>
                                </div>
                            </div>

                            <div className="col-lg-4 col-md-6 col-sm-6">
                                <div className="single-services-box">
                                    <div className="icon bg-00aeff">
                                        <i className="flaticon-seo"></i>
                                    </div>

                                    <h5>
                                        <Link href="/industrial-placement">
                                            <div>Industrial Placement </div>
                                        </Link>
                                    </h5>

                                    <p>With the help of Industrial Work Placement at Infonetmedia, you can get started on your career even before you finish college or university. </p>

                                    <Link href="/industrial-placement">
                                        <a className="read-more-btn">
                                            Learn 
                                            <i className="flaticon-right-arrow"></i>
                                        </a>
                                    </Link>
                                </div>
                            </div>

                            <div className="col-lg-4 col-md-6 col-sm-6">
                                <div className="single-services-box">
                                    <div className="icon bg-f78acb">
                                        <i className="flaticon-seo"></i>
                                    </div>

                                    <h5>
                                        <Link href="/graphics-designing">
                                            <div>Graphics & Design   </div>
                                        </Link>
                                    </h5>

                                    <p> Are you seeking graphic design? If so, then come to Infonetmedia Graphics Design Team! We'll take your ideas and make them a reality.</p>

                                    <Link href="/graphics-designing">
                                        <a className="read-more-btn">
                                            Learn 
                                            <i className="flaticon-right-arrow"></i>
                                        </a>
                                    </Link>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6 col-sm-6">
                                <div className="single-services-box">
                                    <div className="icon bg-cdf1d8">
                                        <i className="flaticon-seo"></i>
                                    </div>

                                    <h5>
                                        <Link href="/network-management">
                                            <div>Network Management </div>
                                        </Link>
                                    </h5>

                                    <p> Do you need to design, install and manage a new or existing networking solution? Our Network Management Experts can help.</p>

                                    <Link href="/network-management">
                                        <a className="read-more-btn">
                                            Learn 
                                            <i className="flaticon-right-arrow"></i>
                                        </a>
                                    </Link>
                                </div>
                            </div>
                            {/* <div className='d-flex justify-content-center'> */}
                            <div className="col-lg-4 col-md-6 col-sm-6">
                                <div className="single-services-box">
                                    <div className="icon bg-c679e3">
                                        <i className="flaticon-seo"></i>
                                    </div>

                                    <h5>
                                        <Link href="/database-design">
                                            <div>Database Management  </div>
                                        </Link>
                                    </h5>

                                    <p> Our database design and management services can help your business by ensuring your databases are properly designed and managed.</p>

                                    <Link href="/database-design">
                                        <a className="read-more-btn">
                                            Learn 
                                            <i className="flaticon-right-arrow"></i>
                                        </a>
                                    </Link>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6 col-sm-6">
                                <div className="single-services-box">
                                    <div className="icon bg-eb6b3d">
                                        <i className="flaticon-seo"></i>
                                    </div>

                                    <h5>
                                        <Link href="/it-consultancy">
                                            <div>Computer & IT Training</div>
                                        </Link>
                                    </h5>

                                    <p> At Infonetmedia Computer and IT Training, we provide a variety of training for anyone looking to expand their knowledge.</p>

                                    <Link href="/it-consultancy">
                                        <a className="read-more-btn">
                                            Learn 
                                            <i className="flaticon-right-arrow"></i>
                                        </a>
                                    </Link>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6 col-sm-6">
                                <div className="single-services-box">
                                    <div className="icon bg-00aeff">
                                        <i className="flaticon-seo"></i>
                                    </div>

                                    <h5>
                                        <Link href="/web-security">
                                            <div>Web Security</div>
                                        </Link>
                                    </h5>

                                    <p> Infonetmedia's web security experts will first perform a comprehensive and thorough analysis of your site.</p>
                                    <Link href="/web-security">
                                        <a className="read-more-btn">
                                            Learn 
                                            <i className="flaticon-right-arrow"></i>
                                        </a>
                                    </Link>
                                </div>
                            </div>
                            {/* </div> */}
                        </div>
                    </div>
                </section>
            </>
        );
    }
}

export default Services;