

const metadata = {
    title: 'Dashboard Layout',
    description: 'description layout'
}

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
    return (
        <div>
            <div className="card">
                hi
            </div>
            <div>
                {children}
            </div>
        </div>
    )
}