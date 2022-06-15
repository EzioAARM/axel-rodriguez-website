import React from "react";
import Header from "../Header";
import Helmet from "react-helmet";
import profile_picture from "./../assets/img/profile.png";
import { GatsbySeo } from "gatsby-plugin-next-seo";

const Contacto = () => {
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
                </div>
                <section className="section bg-secondary">
                    <div className="container">
                        <div className="card card-profile shadow mt--300">
                            <div className="px-4"></div>
                        </div>
                    </div>
                </section>
            </div>
        </>
    );
};

export default Contacto;
