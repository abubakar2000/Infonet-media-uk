import React, { Component } from 'react';
import Navbar from '../components/Layout/Navbar';
import PageHeader from '../components/Common/PageHeader';
import ComputerServicesDetails from '../components/ServiceDetails/ComputerServicesDetails';
import Footer from '../components/Layout/Footer';

class ComputerServices extends Component {
    render() {
        return (
            <>
                <Navbar />

                <PageHeader 
                    pageTitle="Computer Services (Computer Repair & Laptop Repair)  " 
                    breadcrumbTextOne="Home" 
                    breadcrumbUrl="/" 
                    breadcrumbTextTwo="Services" 
                />

                <ComputerServicesDetails />
                
                <Footer />
            </>
        );
    }
}

export default ComputerServices;