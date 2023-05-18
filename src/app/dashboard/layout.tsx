

const metadata = {
    title: 'Dashboard Layout',
    description: 'description layout'
}

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
    return (
        <div>
            <div className="">
            </div>
            <div>
                {children}
            </div>
        </div>
    )
}