"use client";
import { useState } from "react";
import { AiOutlineAppstoreAdd } from "react-icons/ai";
import axios from "axios";
const languagesData = ["Python", "Javascript", "Go", "C++", "C#", "C"];

export default function SectionsPage() {
  const [data, setData] = useState({
    topic: "Python",
    order: 0,
    name: "",
  });
  const handleFieldsChange = (e: any) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    const response = axios.post("/api/v1/section", {
      topic: data.topic.toLowerCase(),
      name: `${data.topic} ${data.name}`,
      order: Number(data.order),
    });
    console.log(response);
  };
  return (
    <div className="grid grid-cols-12 gap-3">
      <form
        onSubmit={handleSubmit}
        className="col-span-8 grid grid-cols-6 gap-2"
      >
        <fieldset className="col-span-5">
          <div className="grid grid-cols-2 gap-4">
            <select
              required
              onChange={handleFieldsChange}
              className="bg-dark py-2 px-3 outline-none border-2 border-emerald-700 text-emerald-600 text-md placeholder:text-emerald-800"
              name="topic"
              value={data.topic}
            >
              {languagesData.map((lang, index) => (
                <option value={lang} key={index}>
                  {lang}
                </option>
              ))}
            </select>
            <input
              value={data.order}
              required
              onChange={handleFieldsChange}
              className="bg-dark py-2 px-3 outline-none border-2 border-emerald-700 text-emerald-600 text-md placeholder:text-emerald-800"
              type="number"
              name="order"
              placeholder="select order number"
              min={0}
              max={50}
            />
          </div>
          <input
            value={data.name}
            required
            name="name"
            onChange={handleFieldsChange}
            className="bg-dark py-2 px-3 outline-none border-2 border-emerald-700 text-emerald-600 w-full text-md placeholder:text-emerald-800"
            type="text"
            placeholder="Write section name"
          />
        </fieldset>
        <div className="col-span-1">
          <button
            type="submit"
            className="py-4 px-4 bg-emerald-700 text-gray-200 rounded border-2 border-gray-200 hover:text-emerald-700 hover:border-emerald-700 hover:bg-gray-200"
          >
            <AiOutlineAppstoreAdd />
          </button>
        </div>
      </form>
      <div className="col-span-4"></div>
    </div>
  );
}
