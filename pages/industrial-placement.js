import React, { Component } from 'react';
import Navbar from '../components/Layout/Navbar';
import PageHeader from '../components/Common/PageHeader';
import IndustrialPlacementDetails from '../components/ServiceDetails/IndustrialPlacementDetails';
import Footer from '../components/Layout/Footer';
import ClientSlider from '../components/ClientSlider/ClientSlider';

class IndustrialPlacement extends Component {
    render() {
        return (
            <>
                <Navbar />

                <PageHeader 
                    pageTitle="Industrial Placement" 
                    breadcrumbTextOne="Home" 
                    breadcrumbUrl="/" 
                    breadcrumbTextTwo="Service Details" 
                />

                <IndustrialPlacementDetails />
                <ClientSlider/>
                <Footer />
            </>
        );
    }
}

export default IndustrialPlacement;