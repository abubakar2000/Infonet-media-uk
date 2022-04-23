import React, { Component } from 'react';
import NavbarTwo from '../components/Layout/Navbar';
import BannerSlider from '../components/HomeSix/BannerSlider';
// import SidePoster from '../components/HomeNine/SidePoster';
import FeaturedSolutions from '../components/HomeEight/FeaturedSolutions';
import Services from '../components/HomeNine/Services';
import PricingStyle from '../components/HomeNine/PricingStyle';
import HomePageServices from '../components/HomeNine/HomePageServices';
import ContactForm from '../components/Contact/ContactForm';
import ContactInfo from '../components/Contact/ContactInfo';
import HomeBanner from '../components/HomeEight/HomeBanners';
// import Services from '../components/HomeEight/Services';
// import Projects from '../components/HomeEight/Projects';
// import FunFacts from '../components/Common/FunFacts';
// import TestimonialsTwo from '../components/Common/TestimonialsTwo';
// import PricingStyleFour from '../components/Pricing/PricingStyleFour';
// import OurTeamTwo from '../components/Common/OurTeamTwo';
// import Faq from '../components/HomeSeven/Faq';
import Clients from '../components/HomeSeven/Clients';
// import RecentStory from '../components/HomeEight/RecentStory';
// import FreeTrial from '../components/HomeEight/FreeTrial';
import Footer from '../components/Layout/Footer';
import Link from 'next/link';
import Blog2 from './blog2';
import Blog from './blog';
import Faq from './faq';
import TestimonialsTwo from '../components/Common/TestimonialsTwo';
import ClientSlider from '../components/ClientSlider/ClientSlider';

class Index8 extends Component {
    render() {
        return (
            <>
                {/* 
                
                Our Loving Clients
Client Reviews
Pricing
Faqs
Contact Section
Contact Form Section
Footer
                
                */}
                <NavbarTwo />
                <BannerSlider />
                <HomeBanner />
                <Services />
                <Clients />
                <ClientSlider/>
                <TestimonialsTwo />
                <PricingStyle />
                <Faq />
                <ContactInfo />
                <ContactForm />
                {/* <SidePoster/> */}

                {/* <HomePageServices/> */}
                <Blog />
                

                <Footer />
                {/* Section for more edit */}
                {/* <FeaturedSolutions /> */}
                {/* <AboutUs />
                <Services />
                <Projects />
                <FunFacts />
                <TestimonialsTwo />
                <PricingStyleFour />
                <OurTeamTwo />
                <Faq />
                <Clients />
                <FreeTrial />
                <RecentStory /> */}
            </>
        );
    }
}

export default Index8;