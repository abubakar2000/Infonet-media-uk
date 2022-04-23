import React, { Component } from 'react';
import GraphicsDesigning from '../../pages/graphics-designing';
import Link from 'next/link';

class GraphicsDesigningDetails extends Component {
    render() {
        return (
            <>
                 <section 
                 style={{paddingBottom: "0px !important"}}
                 className="services-details-area ptb-100">
                    <div className="container">
                        <div className="services-details-overview">
                            <div className="services-details-desc">
                                <h3>Are you seeking graphics designer?</h3>
                                <br/>
                                <p>If so, then come to Infonetmedia Graphics Design Team! We'll take your ideas and make them a reality. Our designers specialize in a wide variety of designs for all kinds of occasions including brochures, flyers, logos, book cover designs, and more!</p>
                                <br/>
                                <div className="banner-btn">
                                        <Link href="/contact">
                                            <a className="default-btn mr-4">
                                                Contact Us Today <span></span>
                                            </a>
                                        </Link>
                                        <Link href="#">
                                            <a className="default-btn mr-4">
                                                Book a Free Consultation <span></span>
                                            </a>
                                        </Link>

                                        {/* <Link href="#">
                                            <a className="default-btn-two">
                                                Learn More <span></span>
                                            </a>
                                        </Link> */}
                                    </div>
                            </div>
                            <div className="services-details-image wow fadeInUp">
                                <img src="/images/features-image/highlights-banner.png" alt="image" />
                            </div>
                        </div>
                    </div>
                    <div style={{maxWidth: "100% !important"}} className="container ptb-100">
                    <div className="row">
                        <div className="col-lg-4 col-sm-6">
                            <div className="service-card-one gray-bg">
                                <div className="icon">
                                    <i className='bx bx-bar-chart-alt-2'></i>
                                    <i className='bx bxs-badge-check check-icon'></i>
                                </div>
                                <h3>
                                        <a>Custom Designs</a>
                                </h3>
                                <p>With the help of our skilled and experienced Graphic Designers get amazing web applications suiting your business needs.</p>
                            </div>
                        </div>

                        <div className="col-lg-4 col-sm-6">
                            <div className="service-card-one gray-bg">
                                <div className="icon">
                                <i className='bx bx-bullseye'></i>
                                    <i className='bx bxs-badge-check check-icon'></i>
                                </div>
                                <h3>
                                    <Link href="#">
                                        <a>Dedicated Designers</a>
                                    </Link>
                                </h3>
                                <p>Get Dedicated Graphic Designers focusing well on your needs so it's easy to meet your business goals.</p>
                            </div>
                        </div>
    
                        <div className="col-lg-4 col-sm-6">
                            <div className="service-card-one gray-bg">
                                <div className="icon">
                                    <i className='bx bx-check-shield' ></i>
                                    <i className='bx bxs-badge-check check-icon'></i>
                                </div>
                                <h3>
                                    <Link href="#">
                                        <a>Support & Maintenance</a>
                                    </Link>
                                </h3>
                                <p>Enjoy our 24/7 Professional support and Maintenance services in the arenam of Graphics Design.</p>
                            </div>
                        </div>
                    </div>
                    <div style={{ 
      background: `url("/images/features-image/feat-6-bg.jpg")`,
      backgroundPosition: "top center",
      backgroundRepeat: "no-repeat",
      backgroundSize: "cover"
                }} className="overview-box">
                        <div className="overview-image">
                        <h1 style={{fontSize:50}}>Graphic Design Services at Infonet Media</h1>  
                        <Link href="/contact">
                                            <a className="default-btn mr-4">
                                                Contact Us Today <span></span>
                                            </a>
                                        </Link>                      
                    </div>
                        
                        <div className="overview-content">
                            <div className="content right-content">
                              
                                <div className="features-text">
                                    <h4><i className="flaticon-tick"></i> Corporate Id Designs</h4>
                                    <p>Brochures are significant as it comes to marketing and sales and here we create simple and creative corporate ID designs and brochures so that it's easier to grab audience's attention</p>
                                </div>

                                <div className="features-text">
                                    <h4><i className="flaticon-tick"></i> Banner Standee Design</h4>
                                    <p>We can easily design a banner standee that leaves a lasting impact on your audience and urge them to take a step ahead.</p>
                                </div>

                                <div className="features-text">
                                    <h4><i className="flaticon-tick"></i> Custom Logo Design</h4>
                                    <p>Creating unique and professional logo designs presenting the image you are keen on making and it's certain to make you smile</p>
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

export default GraphicsDesigningDetails;