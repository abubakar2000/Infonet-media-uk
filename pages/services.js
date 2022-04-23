import React, { Component } from 'react';
import Navbar from '../components/Layout/Navbar';
import PageHeader from '../components/Common/PageHeader';
import Service from '../components/HomeNine/Services';
import Footer from '../components/Layout/Footer';


class Services extends Component {
    render() {
        return (
            <>
                <Navbar />

                {/* <PageHeader 
                    pageTitle="Services" 
                    breadcrumbTextOne="Home" 
                    breadcrumbUrl="/" 
                    breadcrumbTextTwo="Services Style One" 
                /> */}

                

                <Service/>
                
                <Footer />
            </>
        );
    }
}

export default Services;