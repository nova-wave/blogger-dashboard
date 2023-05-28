import { useState } from "react";
import TextareaAutosize from "react-textarea-autosize";

interface PropsTypes {
  setMarkdownContent: (arg0: string) => void;
  markdownContent: string;
}

export default function MarkdownTextarea({
  markdownContent,
  setMarkdownContent,
}: PropsTypes) {
  const [data, setData] = useState({});
  const [fields, setFields] = useState("fields");
  const [preview, setPreview] = useState("preview");
  const handleChange = (e: any) => {
    setMarkdownContent(e.target.value);
  };

  const handleFieldChange = (e: any) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div>
      <div></div>
      {fields === "fields" && (
        <div>
          <fieldset className="mb-6">
            {/* Doc title field */}
            <input
              name="title"
              onChange={handleFieldChange}
              type="text"
              className="border-2 border-x-transparent border-gray-700 w-full py-1 px-2 rounded bg-black focus:underline-none focus:border-gray-500"
              placeholder="Enter doc title"
            />
            {/* Section or Doc sort Name */}
            <input
              name="name"
              onChange={handleFieldChange}
              type="text"
              className="border-2 border-x-transparent border-gray-700 w-full py-1 px-2 rounded bg-black focus:underline-none focus:border-gray-500"
              placeholder="Doc sort Name"
            />
            {/* Select languages */}
            <select
              onChange={handleFieldChange}
              name="topic"
              className="border-2 border-x-transparent border-gray-700 w-full py-2 px-2 rounded bg-black focus:underline-none focus:border-gray-500"
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
          </fieldset>
          {/* SEO */}
          <fieldset className="mb-6 pb-0">
            <input
              type="text"
              name="meta_title"
              placeholder="Enter you meta title"
              className="border-2 border-x-transparent border-gray-700 w-full py-1 px-2 rounded bg-black focus:underline-none focus:border-gray-500"
            />
            <textarea
              name="meta_description"
              rows={10}
              placeholder="Enter you meta description"
              className="border-2 border-x-transparent border-gray-700 w-full py-1 px-2 rounded bg-black focus:underline-none focus:border-gray-500"
            ></textarea>
          </fieldset>
        </div>
      )}
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
