import React, { Component } from 'react';
import Link from 'next/link';

class WebHostingDomainDetails extends Component {
    render() {
        return (
            <>
                <div className="section-title">
                        <h2>Claim Your Domain</h2>
                        <p>Search your domain name</p>
                </div>
                <aside className="widget-area" id="secondary">
                    {/* Search */}
                    <div className="widget widget_search">
                        <form className="search-form">
                            <label>
                                <input width="50" type="search" className="search-field" placeholder="Search..." />
                            </label>
                            <button type="submit">
                                <i className="fas fa-search"></i>
                            </button>
                        </form>
                    </div>

                    {/* Tags */}
                    <div className="widget widget_tag_cloud">

                        <div className="tagcloud d-flex justify-content-center">
                            <Link href="">
                               <a><h3 > <span className='text-primary'>.</span> com <sub className='h6'>£0.99/yr</sub></h3></a>
                            </Link>
                            <Link href="">
                               <a><h3> <span className='text-primary'>.</span> biz <sub className='h6'>£7.10/yr</sub></h3></a>
                            </Link>
                            <Link href="">
                               <a><h3> <span className='text-primary'>.</span> org <sub className='h6'>£6.99/yr</sub></h3></a>
                            </Link>
                            <Link href="">
                               <a><h3> <span className='text-primary'>.</span> me <sub className='h6'>£2.99/yr</sub></h3></a>
                            </Link>
                            <Link href="">
                               <a><h3> <span className='text-primary'>.</span> social <sub className='h6'>£15.34/yr</sub></h3></a>
                            </Link>
                            <Link href="">
                               <a><h3> <span className='text-primary'>.</span> info <sub className='h6'>£2.99/yr</sub></h3></a>
                            </Link>
                            {/* <Link href="">
                               <a><h3> <span className='text-primary'>.</span> com <sub className='h6'>£0.99/yr</sub></h3></a>
                            </Link>
                            <Link href="">
                               <a><h3> <span className='text-primary'>.</span> biz <sub className='h6'>£7.10/yr</sub></h3></a>
                            </Link>
                            <Link href="">
                               <a><h3> <span className='text-primary'>.</span> org <sub className='h6'>£6.99/yr</sub></h3></a>
                            </Link>
                            <Link href="">
                               <a><h3> <span className='text-primary'>.</span> org <sub className='h6'>£6.99/yr</sub></h3></a>
                            </Link>
                            <Link href="">
                               <a><h3> <span className='text-primary'>.</span> org <sub className='h6'>£6.99/yr</sub></h3></a>
                            </Link>
                            <Link href="">
                               <a><h3> <span className='text-primary'>.</span> org <sub className='h6'>£6.99/yr</sub></h3></a>
                            </Link>
                            <Link href="">
                               <a><h3> <span className='text-primary'>.</span> org <sub className='h6'>£6.99/yr</sub></h3></a>
                            </Link> */}
                        </div>
                    </div>
                </aside>
            </>
        );
    }
}

export default WebHostingDomainDetails;