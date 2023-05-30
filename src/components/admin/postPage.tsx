"use client";
import MarkdownTextarea from "./markdownTextarea";
import { useState } from "react";
import PreviewMarkdown from "./previewMarkdown";

export default function PostPage() {
  const [markdownContent, setMarkdownContent] = useState("");
  const [preview, setPreview] = useState(false);

  return (
    <div className="w-full">
      <MarkdownTextarea
        markdownContent={markdownContent}
        setMarkdownContent={setMarkdownContent}
        preview={preview}
        setPreview={setPreview}
      />
      {preview && <PreviewMarkdown markdownContent={markdownContent} />}
    </div>
  );
}
