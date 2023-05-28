/* eslint-disable react/no-children-prop */
"use client";
import Link from "next/link";
import { sidebar } from "./localData/sidebar";
import { useSearchParams } from "next/navigation";

export default function Sidebar() {
  const searchParams = useSearchParams();
  const tab: string | undefined = (searchParams as any).get("tab");

  return (
    <div className="p-3">
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
