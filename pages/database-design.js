import React, { Component } from 'react';
import Navbar from '../components/Layout/Navbar';
import PageHeader from '../components/Common/PageHeader';
import DatabaseDesignDetails from '../components/ServiceDetails/DatabaseDesignDetails';
import Footer from '../components/Layout/Footer';
 
class ProjectDetails extends Component {
    render() {
        return (
            <>
                <Navbar />

                <PageHeader 
                    pageTitle="Database Design & Management" 
                    breadcrumbTextOne="Home" 
                    breadcrumbUrl="/" 
                    breadcrumbTextTwo="Services" 
                />

                <DatabaseDesignDetails />
                
                <Footer />
            </>
        );
    }
}

export default ProjectDetails;