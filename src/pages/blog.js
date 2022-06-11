import React from "react";
import Header from "../Header";
import { graphql, Link } from "gatsby";
import { Helmet } from "react-helmet";
import profile_picture from "./../assets/img/profile.png";
import algoliasearch from "algoliasearch/lite";
import {
    InstantSearch,
    SearchBox,
    connectHits,
    connectPagination,
} from "react-instantsearch-dom";
import "../assets/css/algolia-search.css";

const searchClient = algoliasearch(
    process.env.GATSBY_ALGOLIA_APP_ID,
    process.env.GATSBY_ALGOLIA_SEARCH_KEY
);

const Pagination = ({ currentRefinement, nbPages, refine }) => {
    if (nbPages === 0) return null;
    const pagesArray = new Array(nbPages).fill(null);
    return (
        <nav aria-label="Page navigation">
            <ul className="pagination justify-content-center">
                <li
                    className={
                        "page-item" +
                        (currentRefinement === 1 ? " disabled" : "")
                    }
                >
                    <button
                        className="page-link"
                        onClick={(e) => {
                            e.preventDefault();
                            refine(currentRefinement - 1);
                        }}
                    >
                        <i className="fa fa-angle-left"></i>
                        <span className="sr-only">Previous</span>
                    </button>
                </li>
                {pagesArray.map((_, index) => (
                    <li
                        className={
                            "page-item" +
                            (currentRefinement === index + 1 ? " active" : "")
                        }
                    >
                        <button
                            className="page-link"
                            onClick={(e) => {
                                e.preventDefault();
                                refine(index + 1);
                            }}
                        >
                            {index + 1}
                        </button>
                    </li>
                ))}
                <li
                    class={
                        "page-item" +
                        (currentRefinement === pagesArray.length
                            ? " disabled"
                            : "")
                    }
                >
                    <button
                        class="page-link"
                        onClick={(e) => {
                            e.preventDefault();
                            refine(currentRefinement - 1);
                        }}
                    >
                        <i class="fa fa-angle-right"></i>
                        <span class="sr-only">Next</span>
                    </button>
                </li>
            </ul>
        </nav>
    );
};

const Hits = ({ hits }) => {
    if (hits.length > 0)
        return hits.map((hit) => (
            <div className="col-md-4 blog-item" key={hit.objectID}>
                <Link to={`/blog/${hit.url}`}>
                    <div className="card hoverable-card shadow">
                        <img
                            src={hit.imageUrl}
                            className="card-img-top"
                            alt={hit.imageTitle}
                        ></img>
                        <div className="card-body">
                            <h5 className="card-title">{hit.title}</h5>
                            <p
                                className="description"
                                style={{
                                    color: "#1d1d1d",
                                }}
                            >
                                {hit.description}
                            </p>
                        </div>
                    </div>
                </Link>
            </div>
        ));
    else
        return (
            <div className="col-md-12 text-center">
                <div className="alert alert-default" role="alert">
                    No se encontraron resultados
                </div>
            </div>
        );
};

const Blog = () => {
    const CustomHits = connectHits(Hits);
    const CustomPagination = connectPagination(Pagination);
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
                    <InstantSearch
                        indexName="Pages"
                        searchClient={searchClient}
                    >
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
                                                    <SearchBox
                                                        translations={{
                                                            placeholder:
                                                                "Posts, tecnologías, etc...",
                                                        }}
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="container mt-5">
                            <div className="row">
                                <CustomHits />
                            </div>
                            <div className="row mt-3">
                                <div className="col-md-12">
                                    <CustomPagination />
                                </div>
                            </div>
                        </div>
                    </InstantSearch>
                </div>
            </div>
        </>
    );
};

export default Blog;
