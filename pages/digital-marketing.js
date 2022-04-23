import React, { Component } from 'react';
import Navbar from '../components/Layout/Navbar';
import PageHeader from '../components/Common/PageHeader';
import DigitalMarketingDetails from '../components/ServiceDetails/DigitalMarketingDetails';
import Footer from '../components/Layout/Footer';

class DigitalMarketing extends Component {
    render() {
        return (
            <>
                <Navbar />

                <PageHeader 
                    pageTitle="Digital Marketing (SEO Optimization) " 
                    breadcrumbTextOne="Home" 
                    breadcrumbUrl="/" 
                    breadcrumbTextTwo="Services" 
                />
                <DigitalMarketingDetails />
                
                <Footer />
            </>
        );
    }
}

export default DigitalMarketing;