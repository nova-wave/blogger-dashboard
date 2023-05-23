import Link from "next/link";
import { sidebar } from "./localData/sidebar";

export default function Sidebar() {
    return (
        <div className="p-3">
            {sidebar.map((item, index) => {
                return (
                    <Link legacyBehavior href={`/admin?tab=${item.link}`} key={index}>
                        <a className={`flex items-center gap-6 text-lg font-light mt-7 text-yellow-300`}>
                            <item.icon size={30} />
                            <div>{item.name}</div>
                        </a>
                    </Link>
                )
            })}
        </div>
    )
}