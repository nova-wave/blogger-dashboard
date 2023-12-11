import Sidebar from "@/components/admin/sidebar";

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex h-screen gap-4">
      <div className=" h-full bg-[#23a2cd]">
        <Sidebar />
      </div>
      <div className="w-full overflow-y-scroll">{children}</div>
    </div>
  );
}
