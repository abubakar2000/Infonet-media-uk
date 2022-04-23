import React, { Component } from 'react';
import Link from 'next/link';
import axios from 'axios';
import serverConfig from '../../serverConfig';

class BlogCard extends Component {
    constructor(props) {
        super(props)
        this.state = {
            Blogs: [
                // {
                //     image: "/images/blog-image/blog-image1.jpg",
                //     by: "Sarah Taylor",
                //     date: "June 29, 2019",
                //     title: "How To Boost Your Digital Marketing Company",
                //     description: "Lorem ipsum dolor sit amet, constetur adipiscing elit, sed do eiusmod tempor incididunt.",
                //     readmoreLink: ''
                // },
            ]
        }
    }

    componentDidMount() {






        axios.get(`${serverConfig}/blogs/getBlogs`)
            .then(r => {
                this.setState(
                    {
                        Blogs: r.data
                    }
                )
            })
            .catch(e => {
                alert('Coundn\'t Add, Is server online?')
            });

    }
    render() {
        return (
            <>
                <div className="blog-area blog-ptb-100">
                    <div className="container">
                        <div className="row">
                            {
                                this.state.Blogs.map(blog => {
                                    return (
                                        <div className="col-lg-4 col-md-6">
                                            <div className="single-blog-post">
                                                <div className="post-image">
                                                    <Link href="/blog-details">
                                                        <a>
                                                            <img src={`${serverConfig}/${blog.image}`} alt="image" />
                                                        </a>
                                                    </Link>
                                                </div>
                                                <div className="post-content">
                                                    <div className="post-meta">
                                                        <ul>
                                                            <li>
                                                                By:
                                                                <Link href="/blog">
                                                                    <a>{blog.by}</a>
                                                                </Link>
                                                            </li>
                                                            <li>{blog.date}</li>
                                                        </ul>
                                                    </div>
                                                    <h3>
                                                        <Link href="/blog-details">
                                                            <a>{blog.title}</a>
                                                        </Link>
                                                    </h3>
                                                    <p>{blog.description}</p>

                                                    <Link href="/blog-details">
                                                        <a className="read-more-btn">
                                                            Read More <i className="flaticon-right-arrow"></i>
                                                        </a>
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>
                                    );
                                })
                            }


                        </div>
                    </div>
                </div>
            </>
        );
    }
}

export default BlogCard;