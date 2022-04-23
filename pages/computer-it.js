import React, { Component } from 'react';
import Navbar from '../components/Layout/Navbar';
import PageHeader from '../components/Common/PageHeader';
import ComputerITDetails from '../components/ServiceDetails/ComputerITDetails';
import Footer from '../components/Layout/Footer';

class ComputerIt extends Component {
    render() {
        return (
            <>
                <Navbar />

                <PageHeader 
                    pageTitle="Computer & IT Training" 
                    breadcrumbTextOne="Home" 
                    breadcrumbUrl="/" 
                    breadcrumbTextTwo="Services" 
                />

                <ComputerITDetails />
                
                <Footer />
            </>
        );
    }
}

export default ComputerIt;