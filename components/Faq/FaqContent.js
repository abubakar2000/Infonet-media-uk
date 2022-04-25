import React, { Component } from 'react';
import {
    Accordion,
    AccordionItem,
    AccordionItemHeading,
    AccordionItemPanel,
    AccordionItemButton
} from 'react-accessible-accordion';


class FaqContent extends Component {
    constructor() {
        super()
        this.state = {
            Faqs: [
                {
                    question: " Which material types can you work with?",
                    answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
                },
                {
                    question: "Is Smart Lock required for instant apps?",
                    answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
                },
                {
                    question: "Can I have multiple activities in a single feature?",
                    answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
                },
                {
                    question: "Which material types can you work with?",
                    answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
                },
                {
                    question: "How To Get Start With Us?",
                    answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
                },
                {
                    question: "Why Choose Our Services In Your Business?",
                    answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
                },
                {
                    question: `Is Infonetmedia an IT Company?`,
                    answer: `YES, Infonetmedia is an IT company.`,
                },
                {
                    question: `What Services do you provide?`,
                    answer: `Infonetmedia offers a variety of IT services. The company offers IT Services and Support, Web Development and Web Hosting, Digital Marketing, Graphic Design, Computer Services, Network Management, IT Consulting, Computer and IT Training and more.`,
                },
                {
                    question: `What are your opening hours?`,
                    answer: `Infonetmedia Offices are open between 9am - 6pm Mondays to Fridays
                    Monday: 		9am - 6pm
                    Tuesday: 		9am - 6pm
                    Wednesday: 		9am - 6pm
                    Thursday: 		9am - 6pm
                    Friday: 		9am - 6pm
                    Saturday: 		10am - 2pm
                    Sunday and Bank Holidays: CLOSED

                    `,
                },
                {
                    question: `Where is Infonetmedia Headquarter located?`,
                    answer: `Our office address is: Infonetmedia Ltd, Ground Floor, Building 1000 Lakeside
                    North Harbour, Western Road, Portsmouth, PO6 3EZ, United Kingdom`,
                },
                {
                    question: `Do you provide Work Placement/Work Experience?`,
                    answer: `Yes, we do.`,
                },
                {
                    question: `What are the IT Roles that you offer for Work Placement?`,
                    answer: `We offer Network Administrator Trainee roles, Web Developer role, Cybersecurity Specialist Trainee role, Digital Ma, IT Support Specialist role and Artificial Intelligence role and much more.`,
                },
                {
                    question: `How long is the work placement?`,
                    answer: `It ranges from a week to 12 Months. It all depends on the type of work placement you opted for or the type of work experience you prefer or required.`,
                },
                {
                    question: `Do you provide IT Home Supports for over 60s?`,
                    answer: `Yes, we do. Many seniors feel left out and isolated because they cannot keep up with new technology. They may have trouble using a computer or smartphone, and they may not be able to stay connected with family and friends who live far away. At Infonetmedia we offer home support for seniors. And help seniors set up their home networks, wi-fi, computers, tablets, and phones, as well as teach them how to use basic applications like email, social media, Whatsapps,  Zoom, and Skype.`,
                },
                {
                    question: `Do you offer home and business IT Services and Computer Repairs?`,
                    answer: `Yes, our IT Experts can visit your home or business to provide computer servicing, computer repairs, IT Services & Support at your convenience. 
                    Our experience in the IT field spans web development, web hosting, digital marketing, graphic design, computer services, and more. We offer IT support and consultancy alongside training and security services.
                    `,
                },
            ]
        }
    }
    render() {
        return (
            <>
                <section className="faq-area ptb-100">
                    <div className="container">
                        <div className="section-title">
                            <span className="sub-title">About Our Services</span>
                            <h2>Frequently Asked Questions</h2>
                            <p>We believe brand interaction is key in communication. Real innovations and a positive customer experience are the heart of successful communication.</p>
                        </div>

                        <div className="row">
                            <div className="col-lg-12">
                                <div className="faq-accordion">
                                    <Accordion allowZeroExpanded preExpanded={['a']}>
                                        {

                                            this.state.Faqs.map(faq => (
                                                <AccordionItem key={faq.answer} uuid={faq.question}>
                                                    <AccordionItemHeading>
                                                        <AccordionItemButton>
                                                            {faq.question}
                                                        </AccordionItemButton>
                                                    </AccordionItemHeading>

                                                    <AccordionItemPanel>
                                                        <p className="accordion-content">{faq.answer}</p>
                                                    </AccordionItemPanel>
                                                </AccordionItem>
                                            ))
                                        }
                                    </Accordion>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </>
        );
    }
}

export default FaqContent;