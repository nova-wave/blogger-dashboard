import Link from "next/link";
import { sidebar } from "./localData/sidebar";

export default function Sidebar() {
    return (
        <div className="p-3">
            {sidebar.map((item, index) => {
                return (
                    <Link href={`/admin?tab=${item.link}`} key={index}>
                        <item.icon />
                        <div>{item.name}</div>
                    </Link>
                )
            })}
        </div>
    )
}