import React, { Component } from 'react';
import ScrollAnimation from 'react-animate-on-scroll';
import Link from 'next/link';


class DatabaseDesignDetails extends Component {
    render() {
        return (
            <>
            
                <section className="services-details-area">
                    <div className="container">
                        <div className="services-details-overview">
                            <div className="services-details-desc">
                                <h3>Database Design & Management</h3>
                                <p>Our database design and management services can help your business by ensuring your databases are properly designed and managed. This can help improve performance, optimize storage, and ensure data integrity. Database design and management services can also help you to migrate your data to new platforms, optimize your database for specific applications, and more. There are a number of different database design and management services that we provide..</p>
                                <a className="default-btn">
                                Book for Free Consultation Today!
                                            <span></span>
                                        </a>
                            </div>
                            <div className="services-details-image wow fadeInUp">
                                <img src="/images/services/it-service3.png" alt="image" />
                            </div>
                        </div>
                        <h2 className='text-center text-primary ptb-50'>Types of Database that we offer Database Management</h2>
                        <br/>
                         {/* Our Services Two */}
                         <div className="overview-box ">
                            <div className="overview-image">
                                <div className="image">
                                    <img src="/images/features-image/feature-image2.png" alt="image" />
                                </div>
                            </div>
                            
                            <div className="overview-content">
                                <div className="content right-content">
                                    <p>The data stored in your database is vital to your business. Our experienced Oracle and SQL Server DBAs  and MYSQL experts can help you look after it. We can design your database, manage it and also provide all of your database support work to save you money as we are competitive and you will experience improved and secure database system.</p>
                                    <ul className="features-list">
                                        <li><span><i className="fas fa-check"></i> My SQL Database</span></li>
                                        <li><span><i className="fas fa-check"></i> Oracle Database</span></li>
                                        <li><span><i className="fas fa-check"></i> Microsoft Database</span></li>
                                       </ul>
                                    <p>We provide MSQL, ORACLE and MICROSOFT managed database services to companies across the world and in the UK.  We can adapt our services to your business or individual needs. Our DBAs experts are available 24/7. Book for a Free Consultation Today.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="ptb-100">
            <div className="section-title">
                        <h2>Our Services</h2>
                        <p>The services that we offer in database design and management</p>
                </div>
                <div className="container" style={{textAlign:'center'}}>
                    <div className="row">
                        <div className="col-lg-4 col-sm-6">
                            <div className="service-card-one gray-bg">
                                <div className="icon">
                                    <i className='bx bx-conversation'></i>
                                    <i className='bx bxs-badge-check check-icon'></i>
                                </div>
                                <h3>
                                        <a>Consulting</a>
                                </h3>
                                {/* <p>Our web hosting packages include one-click installation of your favourite software such as WordPress and our servers are super fast with 99.9% uptime. </p> */}
                                <ul style={{textAlign:'start'}}>
                                    <li>Database assessment Architecture</li>
                                    <li>Hardware Sizing & estimation</li>
                                    <li>Upgrades & Mitigation Assessment</li>
                                </ul>
                            </div>
                        </div>

                        <div className="col-lg-4 col-sm-6">
                            <div className="service-card-one gray-bg">
                                <div className="icon">
                                    <i className='bx bx-search-alt'></i>
                                    <i className='bx bxs-badge-check check-icon'></i>
                                </div>
                                <h3>
                                    <Link href="#">
                                        <a>Design</a>
                                    </Link>
                                </h3>
                                <ul style={{textAlign:'start'}}>
                                    <li>Database physical and Logical design</li>
                                    <li>High availability design</li>
                                    <li>Backup and Recovery Design</li>
                                </ul>
                                {/* <p>We provide additional SEO Package website to improve your website visibility, the rankings and also get you the right online leads. </p> */}
                            </div>
                        </div>
    
                        
    
                        <div className="col-lg-4 col-sm-6">
                            <div className="service-card-one gray-bg">
                                <div className="icon">
                                    <i className='bx bx-bar-chart-alt-2'></i>
                                    <i className='bx bxs-badge-check check-icon'></i>
                                </div>
                                <h3>
                                    <Link href="#">
                                        <a>Admin & Security</a>
                                    </Link>
                                </h3>
                                {/* <p>Your can manage all of your website pages and products from Infonetmedia with our easy-to-use control panel: to renew domains, manage websites, add SSL certificates, install WordPress, and much more. Upload and manage files and be in control of all of your transactions in our billing platfom.</p> */}
                            <ul style={{textAlign:'start'}}>
                                <li>DB Administration</li>
                                <li>DB Security implementation</li>
                            </ul>
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
                                        <a>DB Support Service</a>
                                    </Link>
                                </h3>
                                {/* <p>If you choose our Ultimate Hosting or Business Hosting Plans, we provide powerful hosting solutions for unlimited web hosting and ecommerce hosting at cheap web hosting prices, you can also run multiple websites simultaneously on any hosting package!</p> */}
                                <ul style={{textAlign:'start'}}>
                                    <li>DB performance & growth Monitoring</li>
                                    <li>Performance optimization</li>
                                    <li>DB Health Check</li>
                                    <li>DB Cloning</li>
                                    <li>Archival & maintenance</li>
                                </ul>
                           </div>
                        </div>
    
                        <div className="col-lg-4 col-sm-6">
                            <div className="service-card-one gray-bg">
                                <div className="icon">
                                    <i className='bx bx-bar-chart-alt-2'></i>
                                    <i className='bx bxs-badge-check check-icon'></i>
                                </div>
                                <h3>
                                    <Link href="#">
                                        <a>Backup & Resolution</a>
                                    </Link>
                                </h3>
                                <ul style={{textAlign:'start'}}>
                                    <li>Backup & Resolution</li>
                                    <li>Patch management</li>
                                    <li>DB Version Upgrade</li>
                                    <li>DB Migration</li>
                                    <li>OS level Support</li>
                                </ul>
                                {/* <p>Our starter Hosting provides you with powerful yet affordable web hosting from Infonetmedia</p> */}
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
                                        <a>Implementation & Development</a>
                                    </Link>
                                </h3>
                                <ul style={{textAlign:'start'}}>
                                    <li>Relational database implementation & configuration</li>
                                    <li>No SQL development</li>
                                    <li>In-Memory database implementation</li>
                                    <li>Appliance implementation</li>
                                    <li>Relational database to appliance migration</li>
                                    <li>Relational database to NoSQL Migration</li>
                                </ul>
                                {/* <p>With our Ultimate, Business Hosting and Business Cloud Hosting accounts, we include a free SSL certificate for a 12 months. It is better to protect your website and make it more secure.</p> */}
                            </div>
                        </div>

                        {/* <div className="col-lg-4 col-sm-6">
                            <div className="service-card-one gray-bg">
                                <div className="icon">
                                    <i className='bx bx-search-alt'></i>
                                    <i className='bx bxs-badge-check check-icon'></i>
                                </div>
                                <h3>
                                    <Link href="/service-details">
                                        <a>Award-winning supports</a>
                                    </Link>
                                </h3>
                                <p>Our smart, friendly domain experts are here to help.</p>
                                <br/>
                                <h3><span className='text-primary'>Call us:</span> 020 3014 1446</h3>
                            </div>
                        </div> */}

                        {/* <div className="col-lg-4 col-sm-6">
                            <div className="service-card-one gray-bg">
                                <div className="icon">
                                    <i className='bx bx-mail-send'></i>
                                    <i className='bx bxs-badge-check check-icon'></i>
                                </div>
                                <h3>
                                    <Link href="/service-details">
                                        <a>Live Chat Response</a>
                                    </Link>
                                </h3>
                                <p>we will respond within 60 seconds. Our experts are available to help 24/7/365 days. Get in touch today.</p>
                            </div>
                        </div> */}

                        {/* <div className="col-lg-4 col-sm-6">
                            <div className="service-card-one gray-bg">
                                <div className="icon">
                                    <i className='bx bx-data'></i>
                                    <i className='bx bxs-badge-check check-icon'></i>
                                </div>
                                <h3>
                                    <Link href="/service-details">
                                        <a>Why Choose Us</a>
                                    </Link>
                                </h3>
                                <p>More people trust us than any other domain provider. Buy from of the trusted largest registrar.</p>
                            </div>
                        </div> */}
                    </div>
                </div>
            </section>
            </>
        );
    }
}

export default DatabaseDesignDetails;