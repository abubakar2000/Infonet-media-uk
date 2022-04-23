import React, { Component } from 'react';
import Navbar from '../components/Layout/Navbar';
// import Banner from '../components/HomeOne/Banner';
import PageHeader from '../components/Common/PageHeader';
import WebDevelopmentDetails from '../components/ServiceDetails/WebDevelopmentDetails';
import Footer from '../components/Layout/Footer';

class WebDevelopment extends Component {
    render() {
        return (
            <>
                <Navbar />
                <PageHeader 
                    pageTitle="Web Development / Web Design Mini Content " 
                    breadcrumbTextOne="Home" 
                    breadcrumbUrl="/" 
                    breadcrumbTextTwo="Services" 
                />
                {/* <Banner /> */}
                

                <WebDevelopmentDetails />
                
                <Footer />
            </>
        );
    }
}

export default WebDevelopment;