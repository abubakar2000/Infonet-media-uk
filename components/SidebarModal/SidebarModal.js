import React, { Component } from 'react';
import Link from 'next/link';

export class SidebarModal extends Component {

    state = {
        modal: false
    };

    closeModal = () => {
        this.props.onClick(this.state.modal);
    }

    render() {
        return (
            <>
                <div className={`sidebar-modal ${this.props.active}`}>
                    <div className="sidebar-modal-inner">
                        <div className="sidebar-about-area">
                            <div className="title">
                                <h2>About Us</h2>
                                <p>We believe brand interaction is key in communication. Real innovations and a positive customer experience are the heart of successful communication. No fake products and services. The customer is king, their lives and needs are the inspiration.</p>
                            </div>
                        </div>



                        <div className="sidebar-contact-area">
                            <div className="contact-info">
                                <div className="contact-info-content">
                                    <h2>
                                        <span className="main-color">
                                            <a href="tel:(44) 2392297338">(44) 753510016</a>
                                        </span>
                                        <span className="or">OR</span>
                                        <span><a href="mailto:info@infonetmedia.co.uk">info@infonetmedia.co.uk</a></span>
                                    </h2>

                                    <ul className="social">
                                        <li>
                                            <a href="https://www.twitter.com/infonetmedia" target="_blank">
                                                <i className="fab fa-twitter"></i>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="https://www.facebook.com/infonetmedia" target="_blank">
                                                <i className="fab fa-facebook-f"></i>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="https://www.linkedin.com/in/infonet-media-2a60a519a/" target="_blank">
                                                <i className="fab fa-linkedin-in"></i>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="http://www.instagram/infonet.media" target="_blank">
                                                <i className="fab fa-instagram"></i>
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        <span onClick={this.closeModal} className="close-btn sidebar-modal-close-btn">
                            <i className="flaticon-close"></i>
                        </span>
                    </div>
                </div>
            </>
        );
    }
}

export default SidebarModal;