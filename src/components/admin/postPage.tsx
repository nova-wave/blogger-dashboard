import MarkdownTextarea from "./markdownTextarea";
import { useState } from "react";
import PreviewMarkdown from "./previewMarkdown";

export default function PostPage() {
  const [markdownContent, setMarkdownContent] = useState("");
  return (
    <div className="w-full">
      <MarkdownTextarea
        markdownContent={markdownContent}
        setMarkdownContent={setMarkdownContent}
      />
      <PreviewMarkdown markdownContent={markdownContent} />
    </div>
  );
}
