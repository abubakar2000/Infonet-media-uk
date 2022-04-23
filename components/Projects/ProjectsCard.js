import React, { Component } from 'react';
import Link from 'next/link';

class ProjectsCard extends Component {
    render() {
        return (
            <>
                  <section className="pt-100 pb-70">
                <div className="container">
                    <div className="section-title">
                        <h3>We deliver the perfect product for your success</h3>
                        <Link href="#">
                                            <a className="default-btn mr-4">
                                                Our Portfolio <span></span>
                                            </a>
                        </Link>
                          
                    </div>
                    
                    <div className="projects-area ptb-100">
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-lg-4 col-md-6 col-sm-6">
                                <div className="single-projects-box">
                                    <img src="/images/projects-image/project1.png" alt="image" />

                                    <div className="projects-content">
                                        <h3>
                                            
                                                <a>MD DRIVING SCHOOL FLYER DESIGN</a>
                                            
                                        </h3>
                                        <span className="category">LOGO & BRANDING – FLYER DESIGN</span>
                                    </div>

                                    
                                </div>
                            </div>

                            <div className="col-lg-4 col-md-6 col-sm-6">
                                <div className="single-projects-box">
                                    <img src="/images/projects-image/project2.jpg" alt="image" />

                                    <div className="projects-content">
                                        <h3>
                                            
                                                <a>MD DRIVING SCHOOL POSTER DESIGN</a>
                                            
                                        </h3>
                                        <span className="category">POSTER DESIGNS – LOGO & BRANDING</span>
                                    </div>

                                    
                                </div>
                            </div>

                            <div className="col-lg-4 col-md-6 col-sm-6">
                                <div className="single-projects-box">
                                    <img src="/images/projects-image/project3.png"alt="image" />

                                    <div className="projects-content">
                                        <h3>
                                            
                                                <a>BUSINESS CARD DESIGN</a>
                                            
                                        </h3>
                                        <span className="category">BUSINESS CARD DESIGN</span>
                                    </div>

                                    
                                </div>
                            </div>

                            <div className="col-lg-4 col-md-6 col-sm-6">
                                <div className="single-projects-box">
                                    <img src="/images/projects-image/project4.png" alt="image" />

                                    <div className="projects-content">
                                        <h3>
                                            
                                                <a>GAME COVER DESIGN</a>
                                            
                                        </h3>
                                        <span className="category">SMITE GRAPHIC COVER DESIGN</span>
                                    </div>

                                    
                                </div>
                            </div>

                            <div className="col-lg-4 col-md-6 col-sm-6">
                                <div className="single-projects-box">
                                    <img src="/images/projects-image/project5.png" alt="image" />

                                    <div className="projects-content">
                                        <h3>
                                            
                                                <a>GAME COVER DESIGN</a>
                                            
                                        </h3>
                                        <span className="category">FORTNITE GRAPHIC DESIGN</span>
                                    </div>

                                    
                                </div>
                            </div>

                            <div className="col-lg-4 col-md-6 col-sm-6">
                                <div className="single-projects-box">
                                    <img src="/images/projects-image/project6.png" alt="image" />

                                    <div className="projects-content">
                                        <h3>
                                            
                                                <a>GAME COVER DESIGN</a>
                                            
                                        </h3>
                                        <span className="category">DOTA2 GRAPHIC DESIGN</span>
                                    </div>

                                    
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6 col-sm-6">
                                <div className="single-projects-box">
                                    <img src="/images/projects-image/project7.jpg" alt="image" />

                                    <div className="projects-content">
                                        <h3>
                                            
                                                <a>ROLLUP GRAPHIC DESIGN</a>
                                            
                                        </h3>
                                        <span className="category">SMART ROLLUP DESIGN</span>
                                    </div>

                                    
                                </div>
                            </div>

                            
                            <div className="col-lg-4 col-md-6 col-sm-6">
                                <div className="single-projects-box">
                                    <img src="/images/projects-image/project8.jpg" alt="image" />

                                    <div className="projects-content">
                                        <h3>
                                            
                                                <a>LOGO DESIGN</a>
                                            
                                        </h3>
                                        <span className="category">LOGO DESIGN SAMPLE</span>
                                    </div>

                                    
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6 col-sm-6">
                                <div className="single-projects-box">
                                    <img src="/images/projects-image/project9.jpg" alt="image" />

                                    <div className="projects-content">
                                        <h3>
                                            
                                                <a>IT SERVICE GRAPHICS DESIGN</a>
                                            
                                        </h3>
                                        <span className="category">GRAPHICS & DESIGN BY INFONETMEDIA

</span>
                                    </div>

                                    
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                </div>

            </section>
               
            </>
        );
    }
}

export default ProjectsCard;