import React, { Component } from 'react';
import Navbar from '../components/Layout/Navbar';
import PageHeader from '../components/Common/PageHeader';
import ItAndSupportDetails from '../components/ServiceDetails/ItAndSupportDetails';
import Footer from '../components/Layout/Footer';

class ItAndSupport extends Component {
    render() {
        return (
            <>
                <Navbar />

                <PageHeader 
                    pageTitle="IT Services & Support " 
                    breadcrumbTextOne="Home" 
                    breadcrumbUrl="/" 
                    breadcrumbTextTwo="Services" 
                />
                <ItAndSupportDetails />
                
                <Footer />
            </>
        );
    }
}

export default ItAndSupport;