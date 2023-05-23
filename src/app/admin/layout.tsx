import Sidebar from "@/components/admin/sidebar";

export default function AdminLayout({ children }: { children: React.ReactNode }) {
    return (
        <div>
            <div>
                <Sidebar />
            </div>
            <div>
                {children}
            </div>
        </div>
    )
}