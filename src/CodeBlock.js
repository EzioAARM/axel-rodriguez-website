import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import { PrismAsyncLight as SyntaxHighlighter } from "react-syntax-highlighter";
import { dark } from "react-syntax-highlighter/dist/esm/styles/prism";
import {
    jsx,
    javascript,
    sass,
    scss,
    python,
    yaml,
    java,
    csharp,
    http,
    bash,
    json,
    css,
} from "react-syntax-highlighter/dist/esm/languages/prism";

class CodeBlock extends PureComponent {
    static propTypes = {
        value: PropTypes.string.isRequired,
        language: PropTypes.string,
    };

    static defaultProps = {
        language: "javascript",
    };

    componentWillMount() {
        console.log("Si llega");
        SyntaxHighlighter.registerLanguage("jsx", jsx);
        SyntaxHighlighter.registerLanguage("javascript", javascript);
        SyntaxHighlighter.registerLanguage("sass", sass);
        SyntaxHighlighter.registerLanguage("scss", scss);
        SyntaxHighlighter.registerLanguage("python", python);
        SyntaxHighlighter.registerLanguage("yaml", yaml);
        SyntaxHighlighter.registerLanguage("java", java);
        SyntaxHighlighter.registerLanguage("csharp", csharp);
        SyntaxHighlighter.registerLanguage("http", http);
        SyntaxHighlighter.registerLanguage("bash", bash);
        SyntaxHighlighter.registerLanguage("json", json);
        SyntaxHighlighter.registerLanguage("css", css);
    }

    render() {
        const { language, value } = this.props;
        return (
            <SyntaxHighlighter
                language={language}
                style={dark}
                showLineNumbers={true}
                useInlineStyles={true}
            >
                {value}
            </SyntaxHighlighter>
        );
    }
}

export default CodeBlock;
