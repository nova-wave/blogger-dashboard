"use client";
import { useState } from "react";

const languagesData = ["Python", "Javascript", "Go", "C++", "C#", "C"];

export default function SectionsPage() {
  const [data, setData] = useState({});

  const handleFieldsChange = (e: any) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  };
  return (
    <div>
      <form>
        <fieldset>
          <div className="grid grid-cols-2 gap-4">
            <select
              onChange={handleFieldsChange}
              className="bg-dark py-2 px-3 outline-none border-2 border-emerald-700 text-emerald-600 text-md placeholder:text-emerald-800"
              name="topic"
            >
              {languagesData.map((lang, index) => (
                <option value={lang} key={index}>
                  {lang}
                </option>
              ))}
            </select>
            <input
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
            onChange={handleFieldsChange}
            className="bg-dark py-2 px-3 outline-none border-2 border-emerald-700 text-emerald-600 w-full text-md placeholder:text-emerald-800"
            type="text"
            placeholder="Write section name"
          />
        </fieldset>
      </form>
    </div>
  );
}
