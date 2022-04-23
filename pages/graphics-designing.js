import React, { Component } from 'react';
import Navbar from '../components/Layout/Navbar';
import PageHeader from '../components/Common/PageHeader';
import GraphicsDesigningDetails from '../components/ServiceDetails/GraphicsDesigningDetails';
import Footer from '../components/Layout/Footer';
import ProjectsCard from '../components/Projects/ProjectsCard';


class GraphicsDesigning extends Component {
    render() {
        return (
            <>
                <Navbar />

                <PageHeader 
                    pageTitle="Graphics Desiging" 
                    breadcrumbTextOne="Home" 
                    breadcrumbUrl="/" 
                    breadcrumbTextTwo="Services" 
                />

                <GraphicsDesigningDetails />
                <ProjectsCard />
                <Footer />
            </>
        );
    }
}

export default GraphicsDesigning;