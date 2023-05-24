import TextareaAutosize from "react-textarea-autosize";
import { useState } from "react";

export default function MarkdownTextarea() {
  const [markdownContent, setMarkdownContent] = useState("");
  const handleChange = (e: any) => {
    setMarkdownContent(e.target.value);
  };

  return (
    <div>
      <TextareaAutosize
        className="textbox"
        value={markdownContent}
        onChange={handleChange}
        placeholder="Start typing your Markdown here..."
      />
    </div>
  );
}
