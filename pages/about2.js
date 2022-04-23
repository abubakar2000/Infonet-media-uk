import React, { Component } from 'react';
import Navbar from '../components/Layout/Navbar';
import PageHeader from '../components/Common/PageHeader';
import AboutArea from '../components/AboutTwo/AboutArea';
import FunFactsTwo from '../components/Common/FunFactsTwo';
import WhyChooseUs from '../components/AboutTwo/WhyChooseUs';
import Solution from '../components/Common/Solution';
import Testimonials from '../components/Common/Testimonials';
import OurTeamTwo from '../components/Common/OurTeamTwo';
import SubscribeStyleThree from '../components/Common/SubscribeStyleThree';
import PartnerWithTitle from '../components/Common/Partner/PartnerWithTitle';
import Footer from '../components/Layout/Footer';

class About2 extends Component {
    render() {
        return (
            <>
                <Navbar />
                <PageHeader 
                    pageTitle="About Us Two" 
                    breadcrumbTextOne="Home" 
                    breadcrumbUrl="/" 
                    breadcrumbTextTwo="About Us Two" 
                />
                <AboutArea />
                <FunFactsTwo />
                <WhyChooseUs />
                <Solution />
                <Testimonials />
                <div className="pt-0">
                    <OurTeamTwo />
                </div>
                <SubscribeStyleThree />
                <PartnerWithTitle />
                <Footer />
            </>
        );
    }
}

export default About2;