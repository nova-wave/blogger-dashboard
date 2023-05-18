

const metadata = {
    title: 'Dashboard Layout',
    description: 'description layout'
}

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
    return (
        <div>
            <div className="card bg-dark-light">
                <span className="bg-gray">hello</span>
            </div>
            <div>
                {children}
            </div>
        </div>
    )
}