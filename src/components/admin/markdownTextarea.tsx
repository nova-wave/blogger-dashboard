import TextareaAutosize from "react-textarea-autosize";

interface PropsTypes {
  setMarkdownContent: (arg0: string) => void;
  markdownContent: string;
}

export default function MarkdownTextarea({
  markdownContent,
  setMarkdownContent,
}: PropsTypes) {
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
function setMarkdownContent(value: any) {
  throw new Error("Function not implemented.");
}
