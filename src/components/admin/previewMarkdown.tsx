import ReactMarkdown from "react-markdown";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { solarizedlight } from "react-syntax-highlighter/dist/esm/styles/prism";
import remarkGfm from "remark-gfm";
import remarkMath from "remark-math";
import rehypeKatex from "rehype-katex";
import React from 'react';

interface PropsTypes {
  markdownContent: string;
}

const PreviewMarkdown: React.FC<PropsTypes> = ({ markdownContent }) => {
  const renderers = {
    listItem: ({ children }: { children: any }) => <div>{children}</div>,
  };
  return (
    <div className="markdown-preview-custom">
      <ReactMarkdown
        // remarkPlugins={[[remarkMath, remarkGfm, { singleTilde: false }]]}
        // rehypePlugins={[rehypeKatex]}
        components={{
          code: ({ node, inline, className, children, ...props }) => {
            const match = /language-(\w+)/.exec(className || "");
            return !inline && match ? (
              <SyntaxHighlighter
                style={solarizedlight as any}
                language={match[1]}
                PreTag="div"
                {...props}
                // style={{} as CSSProperties} // Explicitly type the style prop
              >
                {String(children).replace(/\n$/, "")}
              </SyntaxHighlighter>
            ) : (
              <code className={className} {...props}>
                {children}
              </code>
            );
          },
          li: ({ children }) => (
            <li>
              ==== {children}
            </li>
          ),
          p: ({ node, children }) => {
            const isSummary = React.Children.toArray(children).some(
              (child) => (child as any).type === "summary"
            );

            if (isSummary) {
              return <details>{children}</details>;
            }

            return <p>{children}</p>;
          },
        }}
      >
        {markdownContent}
      </ReactMarkdown>
    </div>
  );
};

export default PreviewMarkdown;
