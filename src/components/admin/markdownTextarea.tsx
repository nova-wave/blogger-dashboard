import { useState } from "react";
import TextareaAutosize from "react-textarea-autosize";

interface PropsTypes {
  setMarkdownContent: (arg0: string) => void;
  markdownContent: string;
  setPreview: any;
  preview: boolean;
}

interface DataTypes {
  name?: string;
  title?: string;
  meta_title?: string;
  meta_description?: string;
  topic?: string;
}

export default function MarkdownTextarea({
  markdownContent,
  setMarkdownContent,
  preview,
  setPreview,
}: PropsTypes) {
  const [data, setData] = useState<DataTypes>({});
  const [fields, setFields] = useState(false);

  const handleChange = (e: any) => {
    setMarkdownContent(e.target.value);
  };

  const handleFieldChange = (e: any) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
    
  };

  const { name, title, meta_title, meta_description, topic } = data || {};
  return (
    <div>
      <div className="h-10 p-2 mt-2 mb-6 border-2 border-amber-600">
        <button
          onClick={() => setFields(!fields)}
          className="shadow shadow-emerald-600 bg-transparent border border-emerald-600 hover:bg-emerald-600 transition duration-200 mr-2"
        >
          {fields ? "Hide Fields" : "Show Fields"}
        </button>
        <button
          onClick={() => setPreview(!preview)}
          className="shadow shadow-emerald-600 bg-transparent border border-emerald-600 hover:bg-emerald-600 transition duration-200 mr-2"
        >
          {preview ? "Hide Markdown" : "Preview Markdown"}
        </button>
      </div>
      {fields && (
        <div>
          <fieldset className="mb-6">
            {/* Doc title field */}
            <input
              name="title"
              value={title}
              onChange={handleFieldChange}
              type="text"
              className="border-2 border-x-transparent border-gray-700 w-full py-1 px-2 rounded bg-black focus:underline-none focus:border-gray-500"
              placeholder="Enter doc title"
            />
            {/* Section or Doc sort Name */}
            <input
              name="name"
              value={name}
              onChange={handleFieldChange}
              type="text"
              className="border-2 border-x-transparent border-gray-700 w-full py-1 px-2 rounded bg-black focus:underline-none focus:border-gray-500"
              placeholder="Doc sort Name"
            />
            {/* Select languages */}
            <select
              onChange={handleFieldChange}
              name="topic"
              value={topic}
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
              value={meta_title}
              onChange={handleFieldChange}
              placeholder="Enter you meta title"
              className="border-2 border-x-transparent border-gray-700 w-full py-1 px-2 rounded bg-black focus:underline-none focus:border-gray-500"
            />
            <textarea
              name="meta_description"
              value={meta_description}
              rows={10}
              onChange={handleFieldChange}
              placeholder="Enter you meta description"
              className="border-2 border-x-transparent border-gray-700 w-full py-1 px-2 rounded bg-black focus:underline-none focus:border-gray-500"
            ></textarea>
          </fieldset>
        </div>
      )}
      {/* markdown writer */}
      {!preview && (
        <TextareaAutosize
          className="textbox py-3 px-2 min-h-[300px] w-full bg-[#333] border-2 border-transparent hover:border-[#666] text-lg focus:outline-none"
          value={markdownContent}
          onChange={handleChange}
          placeholder="Start typing your Markdown here..."
        />
      )}
    </div>
  );
}
// function setMarkdownContent(value: any) {
//   throw new Error("Function not implemented.");
// }
