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

  const handleFieldChange = () => {};

  return (
    <div>
      <div className="mb-6">
        {/* Doc title field */}
        <input
          onChange={handleFieldChange}
          type="text"
          className="border-2 border-gray-700 w-full py-1 px-2 rounded bg-black focus:underline-none focus:border-gray-500"
          placeholder="Enter doc title"
        />
        {/* Section or Doc sort Name */}
        <input
          onChange={handleFieldChange}
          type="text"
          className="border-2 border-gray-700 w-full py-1 px-2 rounded bg-black focus:underline-none focus:border-gray-500"
          placeholder="Doc sort Name"
        />
        {/* Select languages */}
        <select
          onChange={handleFieldChange}
          name="topic"
          className="border-2 border-gray-700 w-full py-2 px-2 rounded bg-black focus:underline-none focus:border-gray-500"
        >
          <option className="py-2" value="Python">
            Python
          </option>
          <option className="py-2" value="Javascript">
            Javascript
          </option>
          <option className="py-2" value="Typescript">
            Typescript
          </option>
          <option className="py-2" value="Golang">
            Golang
          </option>
          <option className="py-2" value="C++">
            C++
          </option>
          <option className="py-2" value="C#">
            C#
          </option>
          <option className="py-2" value="C">
            C
          </option>
        </select>
      </div>
      {/* markdown writer */}
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
