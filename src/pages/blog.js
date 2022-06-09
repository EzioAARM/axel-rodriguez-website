import React, { useState } from "react";
import Header from "../Header";
import { graphql, Link } from "gatsby";
import { Helmet } from "react-helmet";
import profile_picture from "./../assets/img/profile.png";
import { Index } from "elasticlunr";

const Blog = ({ data }) => {
    return (
        <>
            <Helmet>
                <body className="profile-page" />
                <title>Blog de Axel</title>
                <meta itemProp="image" content={profile_picture} />
                <meta charset="UTF-8" />
                <meta
                    name="description"
                    content="Sitio web de Axel Rodriguez, apasionado por el desarrollo de software y el Cloud Computing."
                />
                <meta
                    name="keywords"
                    content="Blog,Tecnología,Serverless,AWS,Amazon Web Services, Python, Nodejs, Lambda"
                />
                <meta name="author" content="Axel Rodriguez" />
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1.0"
                />
            </Helmet>
            <Header page="home"></Header>
            <div className="wrapper">
                <div className="section section-hero section-shaped">
                    <div className="shape">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 1440 320"
                            preserveAspectRatio="none"
                            style={{
                                width: "100%",
                                height: "28rem",
                            }}
                        >
                            <path
                                fill="#5e72e4"
                                fillOpacity="1"
                                d="M0,192L120,208C240,224,480,256,720,272C960,288,1200,288,1320,288L1440,288L1440,0L1320,0C1200,0,960,0,720,0C480,0,240,0,120,0L0,0Z"
                            ></path>
                        </svg>
                    </div>
                    <div className="page-header">
                        <div className="container shape-container d-flex align-items-center">
                            <div className="col px-0">
                                <div className="row align-items-center justify-content-center mt-md-2">
                                    <div className="col-lg-6 text-center">
                                        <h1 className="text-white display-1">
                                            Blog
                                        </h1>
                                        <div className="row">
                                            <div className="col-md-12">
                                                <div className="form-group">
                                                    <div className="input-group input-group-alternative mb-4">
                                                        <div className="input-group-prepend">
                                                            <span className="input-group-text">
                                                                <i className="ni ni-zoom-split-in"></i>
                                                            </span>
                                                        </div>
                                                        <input
                                                            className="form-control"
                                                            placeholder="Posts, tecnologias, etc"
                                                            type="text"
                                                        />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="container mt-5">
                        <div className="row">
                            {posts.length === 0 ? (
                                <h3>No hay posts recientes</h3>
                            ) : (
                                posts.map((item, index) => {
                                    return (
                                        <div className="col-md-4 blog-item">
                                            <Link
                                                to={`/blog/${item.url}`}
                                                key={index}
                                            >
                                                <div className="card hoverable-card shadow">
                                                    <img
                                                        src={item.heroImage.url}
                                                        className="card-img-top"
                                                        alt={
                                                            item.heroImage.title
                                                        }
                                                    ></img>
                                                    <div className="card-body">
                                                        <h5 className="card-title">
                                                            {item.title}
                                                        </h5>
                                                        <p
                                                            className="description"
                                                            style={{
                                                                color: "#1d1d1d",
                                                            }}
                                                        >
                                                            {
                                                                item.description
                                                                    .description
                                                            }
                                                        </p>
                                                    </div>
                                                </div>
                                            </Link>
                                        </div>
                                    );
                                })
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export const query = graphql`
    query Posts {
        allContentfulPost(limit: 9) {
            nodes {
                title
                url
                heroImage {
                    url
                    title
                }
                description {
                    description
                }
            }
            pageInfo {
                currentPage
                hasNextPage
                hasPreviousPage
                totalCount
            }
        }
    }
`;

export default Blog;
