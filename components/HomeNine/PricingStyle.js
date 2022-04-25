import React, { Component } from 'react';
import Link from 'next/link';
import Axios from 'axios';
import serverConfig from '../../serverConfig';

class PricingStyle extends Component {
    constructor(props) {
        super(props)
        this.state = {
            plans: [],
            packages: []
        }
    }

    componentDidMount() {
        Axios.get(`${serverConfig}/plans/plans`)
            .then(r => {
                this.setState({
                    plans: r.data
                })
                // console.log(this.state.plans);
            })
            .catch(e => {
                // console.log(e);
            });
        Axios.get(`${serverConfig}/plans/packages`)
            .then(r => {
                this.setState({
                    packages: r.data
                })
                // console.log(this.state.packages);
            })
            .catch(e => {
                // console.log(e);
            });
    }

    render() {
        return (
            <section className="pricing-area-two pt-100 pb-70 bg-f4f7fe">
                <div className="container">
                    <div className="section-title">
                        <h2>Get Started</h2>
                        {/* <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p> */}
                    </div>

                    <div className="row justify-content-center">


                        {
                            this.state.plans.map(plan => {
                                return (
                                    <div key={plan.title} className="col-lg-4 col-sm-6">
                                        <div className="single-pricing-table center">
                                            <div className="pricing-header">
                                                <h3>{plan.title}</h3>
                                                <p>{plan.subtitle}</p>
                                            </div>
                                            <div className="price">
                                                <sup>£</sup> {plan.price}
                                            </div>
                                            <ul className="pricing-features">
                                                {
                                                    this.state.packages.filter(fpkgs => fpkgs.planName === plan.title).map(pkg => {
                                                        return (
                                                            <li key={pkg.name}>
                                                                <i className={pkg.present?'bx bxs-badge-check':'bx bxs-x-circle red'}></i>
                                                                {pkg.name}
                                                            </li>
                                                        );
                                                    })
                                                }
                                            </ul>
                                            <div className="btn-box">
                                                <Link href="http://hosting.infonetmedia.co.uk/">
                                                    <a className="default-btn">
                                                        Purchase
                                                        <span></span>
                                                    </a>
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                );
                            })
                        }
                    </div>
                    {/* below hard coded upper is dynamic */}
                    {/* <div className="row justify-content-center">

                        <div className="col-lg-4 col-sm-6">
                            <div className="single-pricing-table center">
                                <div className="pricing-header">
                                    <h3>Starter</h3>
                                    <p>Cheap Hosting Plan</p>
                                </div>

                                <div className="price">
                                    <sup>£</sup> 1.99
                                </div>

                                <ul className="pricing-features">
                                    <li>
                                        <i className='bx bxs-badge-check'></i>
                                        1 Website
                                    </li>
                                    <li>
                                        <i className='bx bxs-badge-check'></i>
                                        30 GB Storage
                                    </li>
                                    <li>
                                        <i className='bx bxs-badge-check'></i>
                                        Unmetered bandwidth
                                    </li>
                                    <li>
                                        <i className='bx bxs-badge-check'></i>
                                        Free Email
                                    </li>
                                    <li>
                                        <i className='bx bxs-x-circle red'></i>
                                        No MYSQL Support
                                    </li>
                                    <li>
                                        <i className='bx bxs-badge-check'></i>
                                        Full 24/7 Support
                                    </li>
                                </ul>

                                <div className="btn-box">
                                    <Link href="/contact">
                                        <a className="default-btn">
                                            Purchase
                                            <span></span>
                                        </a>
                                    </Link>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-4 col-sm-6">
                            <div className="single-pricing-table center">
                                <div className="pricing-header">
                                    <h3>Month plan</h3>
                                    <p>Good Value Hosting Plan</p>
                                </div>

                                <div className="price">
                                    <sup>£</sup> 6.99
                                </div>

                                <ul className="pricing-features">
                                    <li>
                                        <i className='bx bxs-badge-check'></i>
                                        1 Website
                                    </li>
                                    <li>
                                        <i className='bx bxs-badge-check'></i>
                                        100 GB space
                                    </li>
                                    <li>
                                        <i className='bx bxs-badge-check'></i>
                                        Unlimited bandwidth
                                    </li>
                                    <li>
                                        <i className='bx bxs-badge-check'></i>
                                        100 email accounts
                                    </li>
                                    <li>
                                        <i className='bx bxs-badge-check'></i>
                                        10 MYSQL database
                                    </li>
                                    <li>
                                        <i className='bx bxs-badge-check'></i>
                                        Full friendly 24/7 Support
                                    </li>
                                </ul>

                                <div className="btn-box">
                                    <Link href="/contact">
                                        <a className="default-btn">
                                            Purchase
                                            <span></span>
                                        </a>
                                    </Link>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-4 col-sm-6">
                            <div className="single-pricing-table center">
                                <div className="pricing-header">
                                    <h3>Deluxe</h3>
                                    <p>Overall Price Saver Hosting Plan</p>
                                </div>

                                <div className="price">
                                    <sup>£</sup> 8.99
                                </div>

                                <ul className="pricing-features">
                                    <li>
                                        <i className='bx bxs-badge-check'></i>
                                        Unlimited Websites
                                    </li>
                                    <li>
                                        <i className='bx bxs-badge-check'></i>
                                        Unlimited Space
                                    </li>
                                    <li>
                                        <i className='bx bxs-badge-check'></i>
                                        Unlimited bandwidth
                                    </li>
                                    <li>
                                        <i className='bx bxs-badge-check'></i>
                                        500 email accounts
                                    </li>
                                    <li>
                                        <i className='bx bxs-badge-check'></i>
                                        25 MYSQL database
                                    </li>
                                    <li>
                                        <i className='bx bxs-badge-check'></i>
                                        Full friendly 24/7 Support
                                    </li>
                                </ul>

                                <div className="btn-box">
                                    <Link href="/contact">
                                        <a className="default-btn">
                                            Purchase
                                            <span></span>
                                        </a>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div> */}
                </div>

                {/* Animation Image */}
                <div className="shape-img7">
                    <img src="/images/shape/shape7.png" alt="image" />
                </div>
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
                <div className="shape-img9">
                    <img src="/images/shape/shape9.png" alt="image" />
                </div>
                <div className="shape-img10">
                    <img src="/images/shape/shape10.png" alt="image" />
                </div>
            </section>
        );
    }
}

export default PricingStyle;