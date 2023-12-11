"use client";
import { useState } from "react";
import dynamic from "next/dynamic";
import "@uiw/react-markdown-editor/markdown-editor.css";
import "@uiw/react-markdown-preview/markdown.css";

const MarkdownEditor = dynamic(
  () => import("@uiw/react-markdown-editor").then((mod) => mod.default),
  { ssr: false }
);

export default function PostPage() {
  const [body, setBody] = useState("");
  console.log("galib vai", body);
  return (
    <div className="w-full h-screen">
      <MarkdownEditor
        className="h-full"
        value={body}
        onChange={(e) => setBody(e as any)}
      />
    </div>
  );
}
