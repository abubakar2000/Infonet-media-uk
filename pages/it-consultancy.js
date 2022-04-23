import React, { Component } from 'react';
import Navbar from '../components/Layout/Navbar';
import PageHeader from '../components/Common/PageHeader';
import ItConsultancyDetails from '../components/ServiceDetails/ItConsultancyDetails';
import Footer from '../components/Layout/Footer';

class ItConsultancy extends Component {
    render() {
        return (
            <>
                <Navbar />

                <PageHeader 
                    pageTitle="IT Consultancy " 
                    breadcrumbTextOne="Home" 
                    breadcrumbUrl="/" 
                    breadcrumbTextTwo="Service" 
                />

                <ItConsultancyDetails />
                
                <Footer />
            </>
        );
    }
}

export default ItConsultancy;