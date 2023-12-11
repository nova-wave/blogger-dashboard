/* eslint-disable react/no-children-prop */
"use client";
import Link from "next/link";
import { sidebar } from "./localData/sidebar";
import { useSearchParams } from "next/navigation";
import { useState } from "react";

import { IoMdArrowDropright, IoMdArrowDropleft } from "react-icons/io";

export default function Sidebar() {
  const [toggle, setToggle] = useState(true);
  const searchParams = useSearchParams();
  const tab: string | undefined = (searchParams as any).get("tab");

  return (
    <div
      className={`overflow-hidden transition-all ${
        !toggle ? "w-[70px]" : " w-52 "
      }`}
    >
      <div
        onClick={() => setToggle((curr) => !curr)}
        className={`object-right cursor-pointer w-[50px] ${
          toggle ? " ml-[150px]" : "  ml-[20px]"
        }`}
      >
        {toggle ? (
          <IoMdArrowDropleft className="text-[50px] " />
        ) : (
          <IoMdArrowDropright className="text-[50px]" />
        )}
      </div>
      {/* Menus */}

      <div className="p-3">
        {sidebar.map((item, index) => {
          return (
            <Link
              className=""
              legacyBehavior
              href={`/admin?tab=${item.link}`}
              key={index}
            >
              <a
                className={` relative   ${
                  tab === item.link ? "text-yellow-300" : "text-white"
                } ${
                  !tab && item.link === "admin" && "text-yellow-300"
                } flex items-center gap-6 text-lg font-light mt-5 `}
              >
                <item.icon size={60} />
                <div
                  className={`overflow-hidden transition-all ${
                    toggle ? "w-52 ml-3" : "w-0"
                  }`}
                >
                  {item.name}
                </div>
                {!toggle && (
                  <div
                    className="absolute left-full rounded-md px-2 py-1 ml-6
          bg-indigo-100 text-indigo-800 text-sm
          invisible opacity-20 -translate-x-3 transition-all
           hover:visible  hover:opacity-100 hover:translate-x-0"
                  >
                    {item.name}
                  </div>
                )}
              </a>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
