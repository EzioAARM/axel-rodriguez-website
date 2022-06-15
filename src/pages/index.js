import React, { useState, useEffect, useRef } from "react";
import Header from "../Header";
import profile_picture from "./../assets/img/profile.png";
import aws_logo from "./../assets/img/aws-logo.png";
import python_logo from "./../assets/img/python-logo.png";
import sql_server_logo from "./../assets/img/sql-server-logo.png";
import js_logo from "./../assets/img/js-logo.png";
import csharp_logo from "./../assets/img/csharp-logo.png";
import Helmet from "react-helmet";
import { graphql, Link } from "gatsby";
import * as THREE from "three";
import NET from "vanta/dist/vanta.net.min";
import { GatsbySeo } from "gatsby-plugin-next-seo";

const Index = ({ data }) => {
    const [vantaEffect, setVantaEffect] = useState(0);
    const myRef = useRef(null);
    useEffect(() => {
        if (!vantaEffect) {
            setVantaEffect(
                NET({
                    el: myRef.current,
                    mouseControls: true,
                    touchControls: true,
                    gyroControls: false,
                    minHeight: 800.0,
                    minWidth: 200.0,
                    scale: 1.0,
                    scaleMobile: 1.0,
                    color: "#eeeeee",
                    backgroundColor: "#5e72e4",
                    THREE: THREE,
                })
            );
        }
        return () => {
            if (vantaEffect) vantaEffect.destroy();
        };
    }, [vantaEffect]);
    let posts = data.allContentfulPost.nodes;
    return (
        <>
            <GatsbySeo
                title="Axel Rodriguez - Desarrollador web"
                description="Sitio web de Axel Rodriguez, apasionado por el desarrollo de software y el Cloud Computing."
                keywords="AWS,Lambda,Python,Javascript,Node,.NET,C#,DynamoDB"
                images={[{ url: profile_picture }]}
            />
            <Helmet>
                <body className="profile-page" />
                <title>Axel Rodriguez - Desarrollador web</title>
            </Helmet>
            <Header page="home"></Header>
            <div className="wrapper">
                <div className="section-profile-cover section-shaped my-0 index-background">
                    <div ref={myRef}></div>
                    <div className="separator separator-bottom separator-skew">
                        <svg
                            x="0"
                            y="0"
                            viewBox="0 0 2560 100"
                            preserveAspectRatio="none"
                            version="1.1"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <polygon
                                className="fill-secondary"
                                points="2560 0 2560 100 0 100"
                            ></polygon>
                        </svg>
                    </div>
                </div>
                <section className="section bg-secondary">
                    <div className="container">
                        <div className="card card-profile shadow mt--300">
                            <div className="px-4">
                                <div className="row justify-content-center">
                                    <div className="col-lg-3 order-lg-2">
                                        <div className="card-profile-image">
                                            <a>
                                                <img
                                                    src={profile_picture}
                                                    className="rounded-circle"
                                                />
                                            </a>
                                        </div>
                                    </div>
                                    <div className="col-lg-4 order-lg-3 text-lg-center align-self-lg-center">
                                        <div className="card-profile-actions py-4 mt-lg-0">
                                            <img
                                                alt="AWS Logo"
                                                src={aws_logo}
                                                width="75px"
                                                height="45px"
                                                className="mr-4"
                                            />
                                            <img
                                                alt="Python Logo"
                                                src={python_logo}
                                                width="45px"
                                                height="45px"
                                                className="float-right"
                                            />
                                        </div>
                                    </div>
                                    <div className="col-lg-4 order-lg-1">
                                        <div className="card-profile-stats d-flex justify-content-center">
                                            <div>
                                                <span className="heading">
                                                    <img
                                                        alt="SQL Server Logo"
                                                        src={sql_server_logo}
                                                        width="55px"
                                                        height="45px"
                                                    />
                                                </span>
                                            </div>
                                            <div>
                                                <span className="heading">
                                                    <img
                                                        alt="Javascript Logo"
                                                        src={js_logo}
                                                        width="45px"
                                                        height="45px"
                                                    />
                                                </span>
                                            </div>
                                            <div>
                                                <span className="heading">
                                                    <img
                                                        alt="CSharp Logo"
                                                        src={csharp_logo}
                                                        width="45px"
                                                        height="45px"
                                                    />
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="text-center mt-5">
                                    <h3>
                                        Axel Rodriguez
                                        <span className="font-weight-light">
                                            , {new Date().getFullYear() - 1997}
                                        </span>
                                    </h3>
                                    <div className="h6 font-weight-300">
                                        <i className="ni location_pin mr-2"></i>
                                        Guatemala, Guatemala
                                    </div>
                                    <div className="h6 mt-4">
                                        <i className="ni business_briefcase-24 mr-2"></i>
                                        Desarrollador de software
                                    </div>
                                    <div>
                                        <i className="ni education_hat mr-2"></i>
                                        Universidad Rafael Landívar
                                    </div>
                                </div>
                                <div className="mt-5 py-5 border-top text-center">
                                    <div className="row justify-content-center">
                                        <div className="col-lg-9">
                                            <p>
                                                Soy Axel Rodriguez,
                                                desarrollador web guatemalteco.
                                                Me gusta desarrollar
                                                aplicaciones utilizando la nube,
                                                principalmente en AWS. Tengo
                                                experiencia en tecnologías como
                                                Javascript y Python en servicios
                                                nativos de la nube como AWS
                                                Lambda. Me gusta aprender,
                                                siempre estoy abierto a nuevos
                                                conocimientos, a conocer
                                                personas y me gusta enseñar las
                                                cosas que se.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="mt-5 py-5 border-top text-center">
                                    <h3>Posts recientes</h3>
                                    <div className="container mt-5 justify-content-center">
                                        <div className="row">
                                            {posts.length === 0 ? (
                                                <h5>No hay posts recientes</h5>
                                            ) : (
                                                posts.map((item, index) => {
                                                    return (
                                                        <div
                                                            className="col-md-4 blog-item"
                                                            key={index}
                                                        >
                                                            <Link
                                                                to={`/blog/${item.url}`}
                                                            >
                                                                <div className="card hoverable-card shadow">
                                                                    <img
                                                                        src={
                                                                            item
                                                                                .heroImage
                                                                                .url
                                                                        }
                                                                        className="card-img-top"
                                                                        alt={
                                                                            item
                                                                                .heroImage
                                                                                .title
                                                                        }
                                                                    ></img>
                                                                    <div className="card-body">
                                                                        <h5 className="card-title">
                                                                            {
                                                                                item.title
                                                                            }
                                                                        </h5>
                                                                        <p
                                                                            className="description"
                                                                            style={{
                                                                                color: "#1d1d1d",
                                                                            }}
                                                                        >
                                                                            {
                                                                                item
                                                                                    .description
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
                        </div>
                    </div>
                </section>
            </div>
        </>
    );
};

export const query = graphql`
    query RecentPostsIndex {
        allContentfulPost(limit: 3, sort: { fields: createdAt }) {
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

export default Index;
