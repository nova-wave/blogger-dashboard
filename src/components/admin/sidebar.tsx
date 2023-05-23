import Link from "next/link";
import { sidebar } from "./localData/sidebar";

export default function Sidebar() {
    return (
        <div className="p-3">
            {sidebar.map((item, index) => {
                return (
                    <Link href={`/`} key={index}>
                        <div>{item.name}</div>
                    </Link>
                )
            })}
        </div>
    )
}