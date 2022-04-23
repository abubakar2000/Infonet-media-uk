import React, { Component } from 'react';
import Navbar from '../components/Layout/Navbar';
import PageHeader from '../components/Common/PageHeader';
import WebSecurityDetails from '../components/ServiceDetails/WebSecurityDetails';
import Footer from '../components/Layout/Footer';

class ComputerServices extends Component {
    render() {
        return (
            <>
                <Navbar />

                <PageHeader 
                    pageTitle="Web Security " 
                    breadcrumbTextOne="Home" 
                    breadcrumbUrl="/" 
                    breadcrumbTextTwo="Services" 
                />

                <WebSecurityDetails />
                
                <Footer />
            </>
        );
    }
}

export default ComputerServices;