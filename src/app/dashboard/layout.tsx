

const metadata = {
    title: 'Dashboard Layout',
    description: 'description layout'
}

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en">
            <body>
                <div>
                    <div>

                    </div>
                    <div>
                        {children}
                    </div>
                </div>
            </body>
        </html>
    )
}