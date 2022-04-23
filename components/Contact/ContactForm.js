import React from 'react'
import 'isomorphic-fetch'
import serverConfig from '../../serverConfig';

export default class ContactForm extends React.Component {

    state = {
        submitting: false,
        submitted: false,
        buttonState: '',
        formFields: {
            name: '',
            email: '',
            subject: '',
            phone: '',
            text: ''
        },
        sentAlready: false
    };

    onSubmit = (e) => {
        e.preventDefault();
        const data = this.state.formFields;
        fetch(`${serverConfig}/messages`, {
            method: 'post',
            headers: {
                'Accept': 'application/json, text/plain, */*',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        }).then(res => {
            console.log(res)
            res.status === 200 ? this.setState({ submitted: true }) : ''
            res.status === 201 ? this.setState({ sentAlready: true }) : ''
            let formFields = Object.assign({}, this.state.formFields);
            formFields.name = '';
            formFields.email = '';
            formFields.phone = '';
            formFields.subject = '';
            formFields.text = '';
            this.setState({ formFields });
        });
    }

    nameChangeHandler = (e) => {
        let formFields = Object.assign({}, this.state.formFields);
        formFields.name = e.target.value;
        this.setState({ formFields });
    }

    emailChangeHandler = (e) => {
        let formFields = Object.assign({}, this.state.formFields);
        formFields.email = e.target.value;
        this.setState({ formFields });
    }

    phoneChangeHandler = (e) => {
        let formFields = Object.assign({}, this.state.formFields);
        formFields.phone = e.target.value;
        this.setState({ formFields });
    }

    subjectChangeHandler = (e) => {
        let formFields = Object.assign({}, this.state.formFields);
        formFields.subject = e.target.value;
        this.setState({ formFields });
    }

    textChangeHandler = (e) => {
        let formFields = Object.assign({}, this.state.formFields);
        formFields.text = e.target.value;
        this.setState({ formFields });
    }

    onHideSuccess = () => {
        this.setState({ submitted: false });
    }
    onHideSentAlready = () => {
        this.setState({ sentAlready: false });
    }

    successMessage = () => {
        if (this.state.submitted) {
            return (
                <div className="alert alert-success alert-dismissible mt-4">
                    <strong>Thank you!</strong> Your message is send to the owner
                    <button onClick={this.onHideSuccess} type="button" className="btn-close"></button>
                </div>
            );
        }

    }

    sentAlready = () => {
        if (this.state.sentAlready) {
            return (
                <div className="alert alert-danger alert-dismissible mt-4">
                    <strong>Thank you!</strong> But we've already recieved your request
                    <button onClick={this.onHideSentAlready} type="button" className="btn-close"></button>
                </div>
            );
        }
    }

    render() {
        return (
            <>
                <section className="contact-area ptb-100">
                    <div className="container">
                        <div className="section-title">
                            <span className="sub-title">Contact Us</span>
                            <h2>Send direct message to us</h2>
                            {/* <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p> */}
                        </div>

                        <div className="row align-items-center">
                            <div className="col-lg-4 col-md-4">
                                <div className="contact-image">
                                    <img src="/images/contact.png" alt="image" />
                                </div>
                            </div>

                            <div className="col-lg-8 col-md-8">
                                <div className="contact-form">
                                    <form
                                        id="contactForm"
                                        onSubmit={this.onSubmit}
                                    >
                                        <div className="row">
                                            <div className="col-lg-6 col-md-12">
                                                <div className="form-group">
                                                    <input
                                                        type="text"
                                                        name="name"
                                                        className="form-control"
                                                        placeholder="Name"
                                                        required
                                                        value={this.state.formFields.name}
                                                        onChange={this.nameChangeHandler}
                                                    />
                                                </div>
                                            </div>

                                            <div className="col-lg-6 col-md-12">
                                                <div className="form-group">
                                                    <input
                                                        type="email"
                                                        name="email"
                                                        className="form-control"
                                                        required
                                                        placeholder="Email"
                                                        value={this.state.formFields.email}
                                                        onChange={this.emailChangeHandler}
                                                    />
                                                </div>
                                            </div>

                                            <div className="col-lg-6 col-md-6">
                                                <div className="form-group">
                                                    <input
                                                        type="text"
                                                        name="phone"
                                                        className="form-control"
                                                        placeholder="Phone"
                                                        required
                                                        value={this.state.formFields.phone}
                                                        onChange={this.phoneChangeHandler}
                                                    />
                                                </div>
                                            </div>

                                            <div className="col-lg-6 col-md-6">
                                                <div className="form-group">
                                                    <input
                                                        type="text"
                                                        name="subject"
                                                        className="form-control"
                                                        placeholder="Subject"
                                                        required
                                                        value={this.state.formFields.subject}
                                                        onChange={this.subjectChangeHandler}
                                                    />
                                                </div>
                                            </div>

                                            <div className="col-lg-12 col-md-12">
                                                <div className="form-group">
                                                    <textarea
                                                        name="message"
                                                        className="form-control"
                                                        id="message"
                                                        cols="30"
                                                        required
                                                        rows="5"
                                                        placeholder="Your Message"
                                                        value={this.state.formFields.text}
                                                        onChange={this.textChangeHandler}
                                                    />
                                                </div>
                                            </div>

                                            <div className="col-lg-12 col-md-12 text-center">
                                                <button type="submit" className="default-btn">
                                                    Submit <span></span>
                                                </button>
                                            </div>
                                        </div>

                                        {this.successMessage()}
                                        {this.sentAlready()}
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </>
        )
    }
}
