import ReactMarkdown from "react-markdown";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { solarizedlight } from "react-syntax-highlighter/dist/esm/styles/prism";
import MarkdownTextarea from "./markdownTextarea";
import { useState } from "react";
import PreviewMarkdown from "./previewMarkdown";

export default function PostModal() {
  const [markdownContent, setMarkdownContent] = useState("");
  return (
    <div className="w-[90vw]">
      <MarkdownTextarea
        markdownContent={markdownContent}
        setMarkdownContent={setMarkdownContent}
      />
      <PreviewMarkdown markdownContent={markdownContent} />
    </div>
  );
}
