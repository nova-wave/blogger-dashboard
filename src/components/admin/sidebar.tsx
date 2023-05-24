/* eslint-disable react/no-children-prop */
"use client";
import { useState } from "react";
import { BsFiletypeDoc } from "react-icons/bs";
import Link from "next/link";
import { sidebar } from "./localData/sidebar";
import { useSearchParams } from "next/navigation";
import ModalWrapper from "../common/modalWrapper";
import PostModal from "./postModal";

export default function Sidebar() {
  const [open, setOpen] = useState(false);
  const searchParams = useSearchParams();
  const tab: string | undefined = (searchParams as any).get("tab");

  return (
    <div className="p-3">
      <button
        onClick={() => setOpen(!open)}
        className="text-lg text-white border border-white py-1 px-3 flex gap-2 rounded items-center hover:border-[#23a2cd] hover:text-[#23a2cd] hover:bg-[white] transition duration-150"
      >
        <BsFiletypeDoc /> New Doc
      </button>
      {open && (
        <ModalWrapper
          setOpen={setOpen}
          title="Create a New Doc"
          children={<PostModal />}
        />
      )}
      {/* Menus */}
      {sidebar.map((item, index) => {
        return (
          <Link legacyBehavior href={`/admin?tab=${item.link}`} key={index}>
            <a
              className={`${
                tab === item.link ? "text-yellow-300" : "text-white"
              } ${
                !tab && item.link === "admin" && "text-yellow-300"
              } flex items-center gap-6 text-lg font-light mt-7`}
            >
              <item.icon size={30} />
              <div>{item.name}</div>
            </a>
          </Link>
        );
      })}
    </div>
  );
}
