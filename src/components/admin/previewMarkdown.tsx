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
      <ReactMarkdown
        // remarkPlugins={[[remarkMath, remarkGfm, { singleTilde: false }]]}
        // rehypePlugins={[rehypeKatex]}
        // remarkPlugins={[rehypeRaw]}
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
          p: ({ node, children }) => {
            // if (markdownContent.match("<details>")) {
            //   return (
            //     <details>{markdownContent.match("<details>")!.input}</details>
            //   );
            // }
            const extractDetailsAndSummary = (text: string) => {
              let details = "";
              let summary = "";

              // Extract details content
              const detailsRegex = /<details>([\s\S]*?)<\/details>/;
              const detailsMatch = text.match(detailsRegex);
              if (detailsMatch) {
                details = detailsMatch[1].trim();
              }

              // Extract summary content
              const summaryRegex = /<summary>([\s\S]*?)<\/summary>/;
              const summaryMatch = text.match(summaryRegex);
              if (summaryMatch) {
                summary = summaryMatch[1].trim();
              }
              if (summary) {
                return <summary>{summary}</summary>;
              }
              if (details) {
                return <details>{details}</details>;
              }
            };
            console.log(extractDetailsAndSummary(markdownContent));
            return <p>p</p>;
          },
        }}
      >
        {markdownContent}
      </ReactMarkdown>
    </div>
  );
};

export default PreviewMarkdown;
