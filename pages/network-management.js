import React, { Component } from 'react';
import Navbar from '../components/Layout/Navbar';
import PageHeader from '../components/Common/PageHeader';
import NetworkDetails from '../components/ServiceDetails/NetworkDetails';
import Footer from '../components/Layout/Footer';
 
class NetworkMangement extends Component {
    render() {
        return (
            <>
                <Navbar />

                <PageHeader 
                    pageTitle="Network Management" 
                    breadcrumbTextOne="Home" 
                    breadcrumbUrl="/" 
                    breadcrumbTextTwo="Services" 
                />

                <NetworkDetails />
                
                <Footer />
            </>
        );
    }
}

export default NetworkMangement;