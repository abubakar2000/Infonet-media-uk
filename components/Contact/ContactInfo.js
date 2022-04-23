import React, { Component } from 'react';
import Image from 'next/image';
class ContactInfo extends Component {
    render() {
        return (
            <section className="pt-100 pb-70">
                <div className="container">
                    <div className="row justify-content-center">

                        <div className="col-lg-4 col-md-6 col-sm-6">
                            <div className="contact-info-box">
                                <div className="icon">
                                    <img src={'/images/pngs/location.png'} alt="image" />
                                    {/* <i className="flaticon-marker"></i> */}
                                </div>
                                <h3>Office Address</h3>
                                <p>Ground Floor Building, 1000 Lakeside North Harbour</p>
                                <p>Western Road Portsmouth, PO6 3EZ United Kingdom</p>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6 col-sm-6">
                            <div className="contact-info-box">
                                <div className="icon">
                                    <img src={'/images/pngs/email.png'} alt="image" />
                                    {/* <i className="flaticon-email"></i> */}
                                </div>
                                <h3>Contact us</h3>
                                <p>
                                    info@infonetmedia.co.uk
                                </p>
                                <br />
                                <p>(44) 7535010016</p>
                                <p>(44) 1489611450</p>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6 col-sm-6">
                            <div className="contact-info-box">
                                <div className="icon">
                                    <img src={'/images/pngs/office.png'} alt="image" />
                                    {/* <i className="flaticon-phone-call"></i> */}
                                </div>
                                <h3>Opening Hours</h3>
                                <p>Monday – Friday: 9am – 5pm</p>
                                <p>Saturday: 10am – 2pm</p>
                                <p>Sunday & Bank Holidays: CLOSED</p>
                                <br />

                            </div>
                        </div>


                    </div>
                </div>
            </section>
        );
    }
}

export default ContactInfo;