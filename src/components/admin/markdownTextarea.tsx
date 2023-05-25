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
        className="textbox py-3 px-2 min-h-[300px] w-full bg-[#333] border-2 border-transparent hover:border-[#666] text-lg focus:outline-none"
        value={markdownContent}
        onChange={handleChange}
        placeholder="Start typing your Markdown here..."
      />
    </div>
  );
}
// function setMarkdownContent(value: any) {
//   throw new Error("Function not implemented.");
// }
