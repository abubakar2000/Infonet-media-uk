import React, { Component } from 'react';
import Link from 'next/link';

class Clients extends Component {
    constructor() {
        super();
        this.state = {
            Clients: [
                {
                    image1: '/images/partner-image/partner-img1.png',
                    image2: '/images/partner-image/partner-img1.png',
                    redirect: ''
                },
                {
                    image1: '/images/partner-image/partner-img2.png',
                    image2: '/images/partner-image/partner-img2.png',
                    redirect: ''
                },
                {
                    image1: '/images/partner-image/partner-img3.png',
                    image2: '/images/partner-image/partner-img3.png',
                    redirect: ''
                },
                {
                    image1: '/images/partner-image/partner-img4.png',
                    image2: '/images/partner-image/partner-img4.png',
                    redirect: ''
                },
                {
                    image1: '/images/partner-image/partner-img5.png',
                    image2: '/images/partner-image/partner-img5.png',
                    redirect: ''
                },
                {
                    image1: '/images/partner-image/partner-img6.png',
                    image2: '/images/partner-image/partner-img6.png',
                    redirect: ''
                },
                {
                    image1: '/images/partner-image/partner-img7.png',
                    image2: '/images/partner-image/partner-img7.png',
                    redirect: ''
                },
                {
                    image1: '/images/partner-image/partner-img8.png',
                    image2: '/images/partner-image/partner-img8.png',
                    redirect: ''
                },
                {
                    image1: '/images/partner-image/partner-img9.png',
                    image2: '/images/partner-image/partner-img9.png',
                    redirect: ''
                },
                {
                    image1: '/images/partner-image/partner-img10.png',
                    image2: '/images/partner-image/partner-img10.png',
                    redirect: ''
                },
            ]
        }
    }
    render() {
        return (
            <>
                <section className="partner-area ptb-100">
                    <div className="container">
                        <div className="section-title">
                            <span className="sub-title">Clients</span>
                            <h2>Our Loving Clients</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                        </div>

                        <div className="row align-items-center">
                            {
                                this.state.Clients.map(client => (
                                    <div className="single-partner-item">
                                        <a href="/partner" target="_blank">
                                            <img src={client.image1} alt="image" />
                                            <img src={client.image2} alt="image" />
                                        </a>
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                    {/* Animation Shape Image */}
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
                </section>
            </>
        );
    }
}

export default Clients;