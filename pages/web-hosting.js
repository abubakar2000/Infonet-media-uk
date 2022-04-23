import React, { Component } from 'react';
import Navbar from '../components/Layout/Navbar';
import PageHeader from '../components/Common/PageHeader';
import WebHostingDetails from '../components/ServiceDetails/WebHostingDetails';
import Footer from '../components/Layout/Footer';

class WebHosting extends Component {
    render() {
        return (
            <>
                <Navbar />

                <PageHeader 
                    pageTitle="Web Hosting " 
                    breadcrumbTextOne="Home" 
                    breadcrumbUrl="/" 
                    breadcrumbTextTwo="Services" 
                />

                <WebHostingDetails />
                
                <Footer />
            </>
        );
    }
}

export default WebHosting;