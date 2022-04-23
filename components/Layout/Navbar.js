import React, { Component } from 'react';
import { connect } from 'react-redux';
import Link from '../../utils/ActiveLink';
import SidebarModal from '../SidebarModal/SidebarModal';

class Navbar extends Component {

    // Sidebar Modal
    state = {
        sidebarModal: false
    };
    toggleModal = () => {
        this.setState({
            sidebarModal: !this.state.sidebarModal
        });
    }
    // Search Form
    state = {
        searchForm: false,
    };
    handleSearchForm = () => {
        this.setState(prevState => {
            return {
                searchForm: !prevState.searchForm
            };
        });
    }

    // Navbar
    _isMounted = false;
    state = {
        display: false,
        collapsed: true
    };
    toggleNavbar = () => {
        this.setState({
            collapsed: !this.state.collapsed,
        });
    }
    componentDidMount() {
        let elementId = document.getElementById("navbar");
        document.addEventListener("scroll", () => {
            if (window.scrollY > 170) {
                elementId.classList.add("is-sticky");
            } else {
                elementId.classList.remove("is-sticky");
            }
        });
        window.scrollTo(0, 0);
    }
    componentWillUnmount() {
        this._isMounted = false;
    }

    render() {
        let { products } = this.props;
        const { collapsed } = this.state;
        const classOne = collapsed ? 'collapse navbar-collapse' : 'collapse navbar-collapse show';
        const classTwo = collapsed ? 'navbar-toggler navbar-toggler-right collapsed' : 'navbar-toggler navbar-toggler-right';

        return (
            <>
                <div id="navbar" className="navbar-area">
                    <div style={{ backgroundColor: '#2EA2F1',color:'white',  fontSize: 'smaller', paddingTop: '8pt', paddingBottom: '5pt' }}>
                        <div className='container'>
                            <div style={{display:'inline',marginLeft:'5pt',marginRight:'5pt'}}>
                                <a target="_blank"><i className="fab flaticon-phone-call"></i></a>
                            </div>
                            +44753510016 l +441489611450 l
                            <div style={{display:'inline',marginLeft:'5pt',marginRight:'5pt'}}>
                                <a target="_blank"><i className="fab flaticon-mail"></i></a>
                            </div>
                            info@infonetmedia.co.uk
                            <div style={{display:'inline',marginLeft:'5pt',marginRight:'5pt'}}>
                                <a target="_blank" href='https://www.facebook.com/infonetmedia' style={{color:'white'}}><i className="fab fa-facebook-f"></i></a>
                            </div>
                            <div style={{display:'inline',marginLeft:'5pt',marginRight:'5pt'}}>
                                <a target="_blank" href='https://twitter.com/Infonetmedia' style={{color:'white'}}><i className="fab fa-twitter"></i></a>
                            </div>
                            <div style={{display:'inline',marginLeft:'5pt',marginRight:'5pt'}}>
                                <a target="_blank" href='https://www.instagram.com/infonet.media' style={{color:'white'}}><i className="fab fa-instagram"></i></a>
                            </div>
                            <div style={{display:'inline',marginLeft:'5pt',marginRight:'5pt'}}>
                                <a target="_blank" href='www.google.com' style={{color:'white'}}><i className="fab fa-rss"></i></a>
                            </div>
                        </div>
                    </div>
                    <div className="adani-nav">
                        <div style={{ maxWidth: "100%" }} className="container-fluid">
                            <nav className="navbar navbar-expand-md navbar-light">
                                <Link href="/">
                                    <a className="navbar-brand">
                                        <img src="/images/logo.png" style={{ height: '50px' }} className="black-logo" alt="logo" />
                                    </a>
                                </Link>

                                <button
                                    onClick={this.toggleNavbar}
                                    className={classTwo}
                                    type="button"
                                    data-toggle="collapse"
                                    data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                                    aria-expanded="false"
                                    aria-label="Toggle navigation"
                                >
                                    <span className="icon-bar top-bar"></span>
                                    <span className="icon-bar middle-bar"></span>
                                    <span className="icon-bar bottom-bar"></span>
                                </button>

                                <div className={classOne} id="navbarSupportedContent">
                                    <ul className="navbar-nav">

                                        <li className="nav-item">
                                            <Link href="/index" activeClassName="active">
                                                <a className="nav-link">
                                                    Home <i className="nav-link"></i>
                                                </a>
                                            </Link>


                                        </li>

                                        <li className="nav-item">
                                            <Link href="/about" activeClassName="active">
                                                <a className="nav-link">About</a>
                                            </Link>
                                        </li>

                                        <li className="nav-item">
                                            <Link href="/web-development" activeClassName="active">
                                                <a className="nav-link">
                                                    Web Development
                                                </a>
                                            </Link>
                                        </li>

                                        <li className="nav-item">
                                            <Link href="/web-hosting" activeClassName="active">
                                                <a className="nav-link">
                                                    Web Hosting
                                                </a>
                                            </Link>
                                        </li>

                                        <li className="nav-item">
                                            <Link href="/digital-marketing" activeClassName="active">
                                                <a className="nav-link">
                                                    Digital Marketing
                                                </a>
                                            </Link>
                                        </li>

                                        <li className="nav-item">
                                            <Link href="/computer-services" activeClassName="active">
                                                <a className="nav-link">
                                                    Computer Services
                                                </a>
                                            </Link>
                                        </li>

                                        <li className="nav-item">
                                            <Link href="/it-and-support" activeClassName="active">
                                                <a className="nav-link">
                                                    IT Services & Support
                                                </a>
                                            </Link>
                                        </li>

                                        <li className="nav-item">
                                            <Link href="/contact" activeClassName="active">
                                                <a className="nav-link">Contact</a>
                                            </Link>
                                        </li>

                                        {/*
                                        <li className="nav-item">
                                            <Link href="#" activeClassName="active">
                                                <a className="nav-link" onClick={e => e.preventDefault()}>
                                                    Web Services <i className="fas fa-chevron-down"></i>
                                                </a>
                                            </Link>

                                             <ul className="dropdown-menu">

                                                <li className="nav-item">
                                                    <Link href="/web-development" activeClassName="active">
                                                        <a className="nav-link">
                                                            Web Development
                                                        </a>
                                                    </Link>
                                                </li>
                                                <li className="nav-item">
                                                    <Link href="/web-hosting" activeClassName="active">
                                                        <a className="nav-link">
                                                            Web Hosting
                                                        </a>
                                                    </Link>
                                                </li>

                                                <li className="nav-item">
                                                    <Link href="/database-design" activeClassName="active">
                                                        <a className="nav-link">
                                                            Database Design
                                                        </a>
                                                    </Link>
                                                </li>

                                                <li className="nav-item">
                                                    <Link href="/web-security" activeClassName="active">
                                                        <a className="nav-link">
                                                            Web Security
                                                        </a>
                                                    </Link>
                                                </li>
                                            </ul> 
                                        </li>
                                        */}

                                        {/* <li className="nav-item">
                                            <Link href="#" activeClassName="active">
                                                <a className="nav-link" onClick={e => e.preventDefault()}>
                                                    Digitalization Services <i className="fas fa-chevron-down"></i>
                                                </a>
                                            </Link>

                                            <ul className="dropdown-menu">

                                                <li className="nav-item">
                                                    <Link href="/digital-marketing" activeClassName="active">
                                                        <a className="nav-link">
                                                            Digital Marketing
                                                        </a>
                                                    </Link>
                                                </li>


                                                <li className="nav-item">
                                                    <Link href="/graphics-designing" activeClassName="active">
                                                        <a className="nav-link">
                                                            Graphics Designing
                                                        </a>
                                                    </Link>
                                                </li>
                                            </ul>
                                        </li> */}
                                        {/* <li className="nav-item">
                                            <Link href="#" activeClassName="active">
                                                <a className="nav-link" onClick={e => e.preventDefault()}>
                                                    IT Services <i className="fas fa-chevron-down"></i>
                                                </a>
                                            </Link>

                                            <ul className="dropdown-menu">
                                                <li className="nav-item">
                                                    <Link href="/it-and-support" activeClassName="active">
                                                        <a className="nav-link">
                                                            IT Services & Support
                                                        </a>
                                                    </Link>
                                                </li>
                                                <li className="nav-item">
                                                    <Link href="/computer-services" activeClassName="active">
                                                        <a className="nav-link">
                                                            Computer Services
                                                        </a>
                                                    </Link>
                                                </li>
                                                <li className="nav-item">
                                                    <Link href="/it-consultancy" activeClassName="active">
                                                        <a className="nav-link">
                                                            It Consultancy
                                                        </a>
                                                    </Link>
                                                </li>
                                                <li className="nav-item">
                                                    <Link href="/computer-it" activeClassName="active">
                                                        <a className="nav-link">
                                                            Computer & IT Training
                                                        </a>
                                                    </Link>
                                                </li>
                                            </ul>
                                        </li> */}
                                        {/* <li className="nav-item">
                                            <Link href="#" activeClassName="active">
                                                <a className="nav-link" onClick={e => e.preventDefault()}>
                                                    Other Services <i className="fas fa-chevron-down"></i>
                                                </a>
                                            </Link>

                                            <ul className="dropdown-menu">
                                                <li className="nav-item">
                                                    <Link href="/industrial-placement" activeClassName="active">
                                                        <a className="nav-link">
                                                            Industrial Placement
                                                        </a>
                                                    </Link>
                                                </li>
                                                <li className="nav-item">
                                                    <Link href="/network-management" activeClassName="active">
                                                        <a className="nav-link">
                                                            Network Management
                                                        </a>
                                                    </Link>
                                                </li>
                                            </ul>
                                        </li> */}

                                        {/* <li className="nav-item">
                                            <Link href="/contact" activeClassName="active">
                                                <a className="nav-link">Contact</a>
                                            </Link>
                                        </li> */}
                                    </ul>
                                </div>

                                <div className="others-options">
                                    {/* <div className="cart-items">
                                        <Link href="/cart">
                                            <a>
                                                <i className="fas fa-shopping-cart"></i> 
                                                <span>{products.length}</span>
                                            </a>
                                        </Link>
                                    </div>

                                    <div className="option-item">
                                        <i 
                                            onClick={this.handleSearchForm} 
                                            className="search-btn flaticon-search"
                                            style={{
                                                display: this.state.searchForm ? 'none' : 'block'
                                            }}
                                        ></i>

                                        <i 
                                            onClick={this.handleSearchForm} 
                                            className={`close-btn flaticon-close ${this.state.searchForm ? 'active' : ''}`}
                                        ></i>
                                        
                                        <div 
                                            className="search-overlay search-popup"
                                            style={{
                                                display: this.state.searchForm ? 'block' : 'none'
                                            }}
                                        >
                                            <div className='search-box'>
                                                <form className="search-form">
                                                    <input className="search-input" name="search" placeholder="Search" type="text" />
                                                    <button className="search-button" type="submit">
                                                        <i className="fas fa-search"></i>
                                                    </button>
                                                </form>
                                            </div>
                                        </div>
                                    </div> */}

                                    <div className="burger-menu" onClick={this.toggleModal}>
                                        <span></span>
                                        <span></span>
                                        <span></span>
                                    </div>
                                </div>
                            </nav>
                        </div>
                    </div>
                </div>

                {/* Right Sidebar Modal */}
                <SidebarModal onClick={this.toggleModal} active={this.state.sidebarModal ? 'active' : ''} />
            </>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        products: state.addedItems
    }
}

export default connect(mapStateToProps)(Navbar);

// export default Navbar;
