import axios from "@/lib/axios";
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
  meta_keywords: string;
}

export default function MarkdownTextarea({
  markdownContent,
  setMarkdownContent,
  preview,
  setPreview,
}: PropsTypes) {
  const [data, setData] = useState<DataTypes | any>({});
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

  const { name, title, meta_title, meta_description, topic, meta_keywords } =
    data || {};
  const handleSubmitDoc = async (e: any) => {
    // const response = await axios.post('/api/v1/doc', {})
    console.log(data);
  };
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
        <button
          onClick={handleSubmitDoc}
          className="shadow shadow-emerald-600 bg-transparent border border-emerald-600 hover:bg-emerald-600 transition duration-200 mr-2"
          type="submit"
        >
          Submit
        </button>
      </div>
      {fields && (
        <div>
          <fieldset className="mb-6">
            {/* Section or Doc sort Name */}
            <input
              required
              name="name"
              value={name}
              onChange={handleFieldChange}
              type="text"
              className="border-2 border-x-transparent border-gray-700 w-full py-1 px-2 rounded bg-black focus:underline-none focus:border-gray-500"
              placeholder="Doc sort Name"
            />
            {/* Select languages */}
            <select
              required
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
              required
              type="text"
              name="meta_title"
              value={meta_title}
              onChange={handleFieldChange}
              placeholder="Enter you meta title"
              className="border-2 border-x-transparent border-gray-700 w-full py-1 px-2 rounded bg-black focus:underline-none focus:border-gray-500"
            />
            <textarea
              required
              name="meta_description"
              value={meta_description}
              rows={5}
              onChange={handleFieldChange}
              placeholder="Enter you meta description"
              className="border-2 border-x-transparent border-gray-700 w-full py-1 px-2 rounded bg-black focus:underline-none focus:border-gray-500"
            ></textarea>
            <textarea
              required
              name="meta_keywords"
              value={meta_keywords}
              rows={5}
              onChange={handleFieldChange}
              placeholder="Enter you meta keywords"
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
