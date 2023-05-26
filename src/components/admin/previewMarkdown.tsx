import ReactMarkdown from "react-markdown";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { solarizedlight } from "react-syntax-highlighter/dist/esm/styles/prism";
import remarkGfm from "remark-gfm";
import remarkMath from "remark-math";
import rehypeKatex from "rehype-katex";
import React from "react";
// import rehypeRaw from "rehype-raw";

interface PropsTypes {
  markdownContent: string;
}

const PreviewMarkdown: React.FC<PropsTypes> = ({ markdownContent }) => {
  return (
    <div className="markdown-preview-custom">
      <ReactMarkdown components={components}>{markdownContent}</ReactMarkdown>
    </div>
  );
};

const DetailsComponent = ({ children }: any) => <details>{children}</details>;
const SummaryComponent = ({ children }: any) => <summary>{children}</summary>;

const CodeComponent = ({
  node,
  inline,
  className,
  children,
  ...props
}: any) => {
  const match = /language-(\w+)/.exec(className || "");
  return !inline && match ? (
    <SyntaxHighlighter
      style={solarizedlight}
      language={match[1]}
      PreTag="div"
      {...props}
    >
      {String(children).replace(/\n$/, "")}
    </SyntaxHighlighter>
  ) : (
    <code className={className} {...props}>
      {children}
    </code>
  );
};

const components = {
  code: CodeComponent,
  details: DetailsComponent,
  summary: SummaryComponent,
};
console.log(components);
export default PreviewMarkdown;
