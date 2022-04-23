import React, { Component } from 'react';
import NavbarTwo from '../components/Layout/NavbarTwo';
import Banner from '../components/HomeNine/Banner';
import SidePoster from '../components/HomeNine/SidePoster';
import PricingStyle from '../components/HomeNine/PricingStyle';
import Services from '../components/HomeNine/Services';
import ContactForm from '../components/Contact/ContactForm';
import ContactInfo from '../components/Contact/ContactInfo';
import HomePageServices from '../components/HomeNine/HomePageServices';
// Not included until now
import Projects from '../components/HomeNine/Projects';
import FunFacts from '../components/Common/FunFacts';
import TestimonialsTwo from '../components/Common/TestimonialsTwo';
import OurTeamTwo from '../components/Common/OurTeamTwo';
import LetsGetToWork from '../components/Common/LetsGetToWork';
import Clients from '../components/HomeSeven/Clients';
// import SubscribeBoxed from '../components/HomeNine/SubscribeBoxed';
import Footer from '../components/Layout/Footer';

class Index9 extends Component {
    render() {
        return (
            <>
                <NavbarTwo />
                <Banner />
                <SidePoster/>
                <Services/>
                <PricingStyle />
                <HomePageServices/>
                <ContactForm />
                <ContactInfo />
                
                <Projects />
                {/* <FunFacts /> */}
                {/* <TestimonialsTwo /> */}
                {/* <OurTeamTwo /> */}
                {/* <LetsGetToWork />  */}
                {/* <Clients /> */}
                {/* <SubscribeBoxed /> */}
                <Footer/> 
            </>
        );
    }
}

export default Index9;