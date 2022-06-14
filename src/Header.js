import React, { Component } from "react";
import { Link } from "gatsby";
import "./assets/css/styles.css";
import "./assets/css/nucleo-icons.css";
import "./assets/css/nucleo-svg.css";
import "./assets/css/font-awesome.css";
import "./assets/css/argon-design-system.css?v=1.2.2";
import "jquery/dist/jquery.min.js";
import "popper.js/dist/popper";
import "bootstrap/dist/js/bootstrap.min";

class Header extends Component {
    render() {
        return (
            <>
                <nav
                    className={
                        "navbar navbar-main navbar-expand-lg navbar-transparent navbar-light py-2"
                    }
                >
                    <div className="container">
                        <Link to="/" className="navbar-brand">
                            Axel Rodriguez
                        </Link>
                        <button
                            className="navbar-toggler"
                            type="button"
                            data-toggle="collapse"
                            data-target="#main-navbar"
                            aria-controls="main-navbar"
                            aria-expanded="false"
                            aria-label="Toggle navigation"
                        >
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div
                            className="collapse navbar-collapse"
                            id="main-navbar"
                        >
                            <div className="navbar-collapse-header">
                                <div className="row">
                                    <div className="col-5 collapse-brand">
                                        Axel Rodriguez
                                    </div>
                                    <div className="col-6 collapse-close">
                                        <button
                                            className="navbar-toggler"
                                            data-toggle="collapse"
                                            data-target="#main-navbar"
                                            aria-controls="main-navbar"
                                            aria-expanded="false"
                                            aria-label="Toggle navigation"
                                        >
                                            <span></span>
                                            <span></span>
                                        </button>
                                    </div>
                                </div>
                            </div>
                            <ul className="navbar-nav ml-lg-auto">
                                <li className="nav-item">
                                    <Link to="/blog" className="nav-link">
                                        <span className="nav-link-inner--text">
                                            &nbsp;Blog
                                        </span>
                                    </Link>
                                </li>
                                <li className="nav-item">
                                    <a
                                        className="nav-link nav-link-icon"
                                        href="https://github.com/EzioAARM"
                                        target="_blank"
                                        rel="noreferrer"
                                        data-toggle="tooltip"
                                        title="Sígueme en github"
                                    >
                                        <i className="fa fa-github"></i>
                                        <span className="nav-link-inner--text d-lg-none">
                                            Github
                                        </span>
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a
                                        className="nav-link nav-link-icon"
                                        href="https://www.linkedin.com/in/axelrm/"
                                        target="_blank"
                                        rel="noreferrer"
                                        data-toggle="tooltip"
                                        title="Sígueme en LinkedIn"
                                    >
                                        <i className="fa fa-linkedin"></i>
                                        <span className="nav-link-inner--text d-lg-none">
                                            LinkedIn
                                        </span>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </>
        );
    }
}

export default Header;
