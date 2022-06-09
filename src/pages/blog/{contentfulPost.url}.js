import React from "react";
import Header from "./../../Header";
import { graphql } from "gatsby";
import ReactMarkdown from "react-markdown";
import codeFrontmatter from "remark-code-frontmatter";
import remarkGfm from "remark-gfm";
import { PrismAsyncLight as SyntaxHighlighter } from "react-syntax-highlighter";
import { dracula } from "react-syntax-highlighter/dist/esm/styles/prism";
import { Helmet } from "react-helmet";

export default (props) => {
    return (
        <>
            <Helmet>
                <title>{props.data.contentfulPost.title}</title>
                <meta charset="UTF-8" />
                <meta
                    itemProp="image"
                    content={props.data.contentfulPost.heroImage.url}
                />
                <meta
                    name="description"
                    content={props.data.contentfulPost.description.description}
                />
                <meta
                    name="keywords"
                    content={props.data.contentfulPost.keywords}
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
                                            {props.data.contentfulPost.title}
                                        </h1>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="container-fluid mt-5">
                        <div className="row">
                            <div className="col-md-1"></div>
                            <div className="col-md-10">
                                <div className="row">
                                    <div className="col-md-12">
                                        <div className="card shadow">
                                            <div className="px-4 mt-5 mb-5">
                                                <ReactMarkdown
                                                    components={{
                                                        em: "strong",
                                                        ol: ({
                                                            node,
                                                            ...props
                                                        }) => (
                                                            <ol
                                                                className="mt-2 mb-2"
                                                                {...props}
                                                            />
                                                        ),
                                                        ul: ({
                                                            node,
                                                            ...props
                                                        }) => (
                                                            <ul
                                                                className="mt-2 mb-2"
                                                                {...props}
                                                            />
                                                        ),
                                                        blockquote: ({
                                                            node,
                                                            children,
                                                            ...props
                                                        }) => (
                                                            <div className="row text-center mb-4 mt-4">
                                                                <div className="col-md-1"></div>
                                                                <div className="col-md-10">
                                                                    <h4
                                                                        className="display-4"
                                                                        {...props}
                                                                    >
                                                                        {
                                                                            children
                                                                        }
                                                                    </h4>
                                                                </div>
                                                            </div>
                                                        ),
                                                        p: ({
                                                            node,
                                                            ...props
                                                        }) => (
                                                            <span
                                                                className="mt-3 mb-3"
                                                                {...props}
                                                            />
                                                        ),
                                                        li: ({
                                                            node,
                                                            children,
                                                            ...props
                                                        }) => (
                                                            <li
                                                                className="mt-1 mb-1"
                                                                {...props}
                                                            >
                                                                <span>
                                                                    {children}
                                                                </span>
                                                            </li>
                                                        ),
                                                        h1: ({
                                                            node,
                                                            ...props
                                                        }) => (
                                                            <h1
                                                                className="display-3 text-center mt-3 mb-5"
                                                                {...props}
                                                            />
                                                        ),
                                                        h2: ({
                                                            node,
                                                            ...props
                                                        }) => (
                                                            <h2
                                                                className="display-4 text-center mt-3 mb-3"
                                                                {...props}
                                                            />
                                                        ),
                                                        h3: ({
                                                            node,
                                                            ...props
                                                        }) => <h4 {...props} />,
                                                        img: ({
                                                            node,
                                                            ...props
                                                        }) => (
                                                            <div className="row text-center mt-3 mb-3">
                                                                <div className="col-md-2"></div>
                                                                <div className="col-md-8">
                                                                    <img
                                                                        className="img-fluid img-thumbnail"
                                                                        {...props}
                                                                    />
                                                                </div>
                                                            </div>
                                                        ),
                                                        code({
                                                            node,
                                                            inline,
                                                            className,
                                                            children,
                                                            ...props
                                                        }) {
                                                            const match =
                                                                /language-(\w+)/.exec(
                                                                    className ||
                                                                        ""
                                                                );
                                                            return !inline &&
                                                                match ? (
                                                                <SyntaxHighlighter
                                                                    style={
                                                                        dracula
                                                                    }
                                                                    language={
                                                                        match[1]
                                                                    }
                                                                    PreTag="div"
                                                                    {...props}
                                                                >
                                                                    {String(
                                                                        children
                                                                    ).replace(
                                                                        /\n$/,
                                                                        ""
                                                                    )}
                                                                </SyntaxHighlighter>
                                                            ) : (
                                                                <code
                                                                    className={
                                                                        className
                                                                    }
                                                                    {...props}
                                                                >
                                                                    {children}
                                                                </code>
                                                            );
                                                        },
                                                    }}
                                                    children={
                                                        props.data
                                                            .contentfulPost.body
                                                            .body
                                                    }
                                                    remarkPlugins={[
                                                        codeFrontmatter,
                                                        remarkGfm,
                                                    ]}
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-1"></div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export const data = graphql`
    query postQuery($id: String) {
        contentfulPost(id: { eq: $id }) {
            title
            body {
                body
            }
            heroImage {
                filename
                url
                title
            }
            id
            url
            description {
                description
            }
            keywords
        }
    }
`;
