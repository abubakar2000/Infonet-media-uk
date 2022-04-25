import React, { Component } from 'react';
import dynamic from 'next/dynamic';
const OwlCarousel = dynamic(import('react-owl-carousel3'));

const options = {
    loop: true,
    nav: false,
    dots: true,
    autoplayHoverPause: true,
    autoplay: true,
    mouseDrag: false,
    touchDrag: false,
    navText: [
        "<i className='flaticon-left-chevron'></i>",
        "<i className='flaticon-right-chevron'></i>"
    ],
    responsive: {
        0: {
            items: 1,
        },
        768: {
            items: 2,
        },
        1200: {
            items: 3,
        },
        1550: {
            items: 4,
        }
    }
}

class TestimonialsTwo extends Component {

    constructor() {
        super()
        this.state = {
            Testimonials: [
                {
                    testimony: `Got my Laptop fixed by the Infonetmedia Team. Did an excellent job. I will recommend Infonetmedia for laptop repairs and computer services.
                    Excellent customer service.`,
                    image: "/images/client-image/client1.jpg",
                    name: "Xio Sung",
                    role: "Computer Repair",
                },
                {
                    testimony: "We believe brand interaction is key in communication. Real innovations and a positive customer experience are the heart of successful communication. No fake products and services.",
                    image: "/images/client-image/client1.jpg",
                    name: "Jon T",
                    role: "Champ",
                },
                {
                    testimony: `Excellent Home IT Support. I had a problem with my home network and laptops not working and I called Infonetmedia and one of their experts visited within the hour to fix the network problem and also fix my laptop. 
                    Good and trustworthy IT Company. I can recommend Infonetmedia for IT Services and support
                    `,
                    image: "/images/client-image/client1.jpg",
                    name: "Jason Roy",
                    role: "IT Services & Support",
                },
                {
                    testimony: `We booked for a new website design and Infonetmedia web development team contact us and we gave the description of what we needed and within 7 days, the website is well designed and I like their professional work and their customer service is one of the best I have ever seen.`,
                    image: "/images/client-image/client1.jpg",
                    name: "Adrian K ",
                    role: "Web Development ",
                },
                {
                    testimony: "We believe brand interaction is key in communication. Real innovations and a positive customer experience are the heart of successful communication. No fake products and services.",
                    image: "/images/client-image/client1.jpg",
                    name: "Jason Roy",
                    role: "CEO",
                },
                {
                    testimony: `Enjoyable work placement, professional and good work ethics
                    Wonderful work experience here
                    Very professional and good people are there in order to help you!
                    `,
                    image: "/images/client-image/client1.jpg",
                    name: "Antonio Bruno",
                    role: "",
                },
                {
                    testimony: `Infonetmedia hosting services are awesome. Good hosting plans and affordable too. Hosted our site with them and it was a good experience and their hosting team are very friendly and helpful. They also provide 24/7 hosting support which is helpful for us when we get stuck, they always help out and fix our hosting problems.
                    Good hosting company.`,
                    image: "/images/client-image/client1.jpg",
                    name: "LeadHC",
                    role: "Web Development & Web Hosting",
                },
            ]
        }
    }

    _isMounted = false;
    state = {
        display: false
    }

    componentDidMount() {
        this._isMounted = true;
        this.setState({ display: true })
    }

    componentWillUnmount() {
        this._isMounted = false;
    }

    render() {
        return (
            <>
                <section className="feedback-area feedback-area-two ptb-100">
                    <div className="container">
                        <div className="section-title">
                            <span className="sub-title">Testimonials</span>
                            <h2>Some Lovely Feedback From Our Clients</h2>
                        </div>
                    </div>

                    {this.state.display ? <OwlCarousel
                        className="feedback-slides owl-carousel owl-theme"
                        {...options}
                    >
                        {
                            this.state.Testimonials.map(testimony => (
                                <div className="single-feedback-item border">
                                    <p>“{testimony.testimony}”</p>
                                    <div className="client-info">
                                        <img src={testimony.image} alt="image" />
                                        <h3>{testimony.name}</h3>
                                        <span>{testimony.role}</span>
                                    </div>
                                </div>
                            ))
                        }

                        {/* <div className="single-feedback-item border">
                            <p>“We believe brand interaction is key in communication. Real innovations and a positive customer experience are the heart of successful communication. No fake products and services.”</p>
                            <div className="client-info">
                                <img src="/images/client-image/client2.jpg" alt="image" />
                                <h3>James Anderson</h3>
                                <span>Web Developer</span>
                            </div>
                        </div>

                        <div className="single-feedback-item border">
                            <p>“We believe brand interaction is key in communication. Real innovations and a positive customer experience are the heart of successful communication. No fake products and services.”</p>
                            <div className="client-info">
                                <img src="/images/client-image/client3.jpg" alt="image" />
                                <h3>Sarah Taylor</h3>
                                <span>Designer</span>
                            </div>
                        </div>

                        <div className="single-feedback-item border">
                            <p>“We believe brand interaction is key in communication. Real innovations and a positive customer experience are the heart of successful communication. No fake products and services.”</p>
                            <div className="client-info">
                                <img src="/images/client-image/client4.jpg" alt="image" />
                                <h3>Steven Smith</h3>
                                <span>Manager</span>
                            </div>
                        </div>

                        <div className="single-feedback-item border">
                            <p>“We believe brand interaction is key in communication. Real innovations and a positive customer experience are the heart of successful communication. No fake products and services.”</p>
                            <div className="client-info">
                                <img src="/images/client-image/client5.jpg" alt="image" />
                                <h3>Tom Nessham</h3>
                                <span>EnvyTheme</span>
                            </div>
                        </div> */}
                    </OwlCarousel> : ''}
                </section>
            </>
        );
    }
}

export default TestimonialsTwo;