import React, { Component } from 'react';
import Link from 'next/link';

class Footer extends Component {
    render() {
        let currentYear = new Date().getFullYear();
        return (
            <>
                <section className="footer-area">
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-lg-4 col-md-6 col-sm-6">
                                <div className="single-footer-widget">
                                    <h3>Contact Info</h3>

                                    <ul className="footer-contact-info">
                                        <li>
                                            <i className="flaticon-phone-call"></i>
                                            <span>Mon to Fri : 10:00AM - 05:00PM</span>
                                            <span>Saturday : 10:00AM - 02:00PM</span>
                                           
                                            <a href="tel:(44) 2392297338">(44) 2392297338</a>
                                        </li>
                                        <li>
                                            <i className="flaticon-email"></i>
                                            <span>Do You Have a Question?</span>
                                            <a href="mailto:info@infonetmedia.co.uk">info@infonetmedia.co.uk</a>
                                        </li>
                                        <li>
                                            <i className="flaticon-social-media"></i>
                                            <span>Socials Network</span>

                                            <ul className="social">
                                                <li>
                                                    <a href="https://twitter.com/Infonetmedia" target="_blank"><i className="fab fa-twitter"></i></a>
                                                </li>
                                                <li>
                                                    <a href="https://www.facebook.com/infonetmedia" target="_blank"><i className="fab fa-facebook-f"></i></a>
                                                </li>
                                                <li>
                                                    <a href="https://www.instagram.com/infonet.media" target="_blank"><i className="fab fa-instagram"></i></a>
                                                </li>
                                                <li>
                                                    <a href="https://www.linkedin.com/in/infonetmedia/" target="_blank"><i className="fab fa-linkedin"></i></a>
                                                </li>
                                                <li>
                                                    <a href="https://www.pinterest.co.uk/infonetmedia" target="_blank"><i className="fab fa-pinterest"></i></a>
                                                </li>
                                                <li>
                                                    <a href="https://infonetmediauk.tumblr.com" target="_blank"><i className="fab fa-tumblr"></i></a>
                                                </li>
                                            </ul>
                                        </li>
                                    </ul>
                                </div>
                            </div>

                            <div className="col-lg-4 col-md-6 col-sm-6">
                                <div className="single-footer-widget pl-5">
                                    <h3>Quick Links</h3>

                                    <ul className="footer-quick-links">
                                        <li>
                                            <Link href="/index">
                                                <a>Home</a>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="/about">
                                                <a>About</a>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="/contact">
                                                <a>Contact</a>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="/services">
                                                <a>Services</a>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="/it-consultancy">
                                                <a>IT Consultancy</a>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="/computer-it">
                                                <a>Computer & IT Training</a>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="/network-management">
                                                <a>Network Management</a>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="/web-security">
                                                <a>Web Security</a>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="/graphics-designing">
                                                <a>Graphic Design</a>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="/web-hosting">
                                                <a>Web Hosting</a>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="/database-design">
                                                <a>Database Design</a>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="/industrial-placement">
                                                <a>Industrial Placement</a>
                                            </Link>
                                        </li>
                                        
                                    </ul>
                                </div>
                            </div>

                            <div className="col-lg-4 col-md-6 col-sm-6">
                                <div className="single-footer-widget pl-5">
                                    <h3>Instagram</h3>

                                    <ul className="footer-instagram-post">
                                        <li>
                                            <a href="https://www.instagram.com/" target="_blank">
                                                <img src="/images/instagram-image/insta-img1.jpg" alt="image" />
                                            </a>
                                        </li>
                                        <li>
                                            <a href="https://www.instagram.com/" target="_blank">
                                                <img src="/images/instagram-image/insta-img2.jpg" alt="image" />
                                            </a>
                                        </li>
                                        <li>
                                            <a href="https://www.instagram.com/" target="_blank">
                                                <img src="/images/instagram-image/insta-img3.jpg" alt="image" />
                                            </a>
                                        </li>
                                        <li>
                                            <a href="https://www.instagram.com/" target="_blank">
                                                <img src="/images/instagram-image/insta-img4.jpg" alt="image" />
                                            </a>
                                        </li>
                                        <li>
                                            <a href="https://www.instagram.com/" target="_blank">
                                                <img src="/images/instagram-image/insta-img5.jpg" alt="image" />
                                            </a>
                                        </li>
                                        <li>
                                            <a href="https://www.instagram.com/" target="_blank">
                                                <img src="/images/instagram-image/insta-img6.jpg" alt="image" />
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        <div className="copyright-area">
                            <div className="row align-items-center">
                                {/* <div className="col-lg-6 col-sm-6 col-md-6">
                                    <p>
                                        Copyright &copy;{currentYear} Infonet Media. 
                                        All rights reserved <a href="https://codeaza.com/" target="_blank">Codeaza</a>
                                    </p>
                                </div> */}

                                <div className="col-lg-12 col-sm-12 col-md-12" style={{display:'flex',
                                flexDirection:'row',justifyContent:'flex-end',fontSize:'8pt'}}>
                                    <ul>
                                        <li>
                                            <Link href="#">
                                                <a>Terms & Conditions</a>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="#">
                                                <a>Privacy Policy</a>
                                            </Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </>
        );
    }
}

export default Footer;