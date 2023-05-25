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
