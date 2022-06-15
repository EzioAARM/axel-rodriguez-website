import React, { useState, useEffect, useRef } from "react";
import Header from "../Header";
import { Helmet } from "react-helmet";
import profile_picture from "./../assets/img/profile.png";
import * as THREE from "three";
import CLOUDS from "vanta/dist/vanta.clouds.min";
import { graphql, Link } from "gatsby";
import { GatsbySeo } from "gatsby-plugin-next-seo";

const NotFoundPage = ({ data }) => {
    const [vantaEffect, setVantaEffect] = useState(0);
    const myRef = useRef(null);
    useEffect(() => {
        if (!vantaEffect) {
            setVantaEffect(
                CLOUDS({
                    el: myRef.current,
                    mouseControls: true,
                    touchControls: true,
                    gyroControls: false,
                    scale: 1.0,
                    scaleMobile: 1.0,
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
                image={profile_picture}
            />
            <Helmet>
                <title>Página no encontrada</title>
            </Helmet>
            <Header></Header>
            <div className="wrapper">
                <div className="section section-hero section-shaped">
                    <div className="shape">
                        <div
                            ref={myRef}
                            style={{
                                width: "100vw",
                                height: "100vh",
                            }}
                        ></div>
                    </div>
                    <div className="page-header">
                        <div className="container shape-container d-flex align-items-center">
                            <div className="col px-0">
                                <div className="row align-items-center justify-content-center mt-md-2">
                                    <div className="col-lg-6 text-center">
                                        <h1 className="display-1 text-muted">
                                            Lo siento, pero no encontramos lo
                                            que buscabas :c
                                        </h1>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <section className="section bg-secondary">
                    <div className="container">
                        <div className="card card-profile shadow mt--100">
                            <div className="px-4 mt-5 mb-5">
                                <div className="text-center">
                                    <h3 className="text-muted">
                                        Pero te pueden interesar nuestros
                                        últimos Posts
                                    </h3>
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
                                                                key={index}
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
    query NotFoundPosts {
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

export default NotFoundPage;
