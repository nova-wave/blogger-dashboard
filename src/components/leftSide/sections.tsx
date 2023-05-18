import Section from "./section"

const section: string[] = [
    "Routing",
    "Rendering",
    "Data Fetching",
    "Styling",
    "Optimizing",
    "Configuring",
    "Deploying",
    "Upgrading",
    "Upgrading",
    "Upgrading",
    "API Reference",
    "API Reference",
    "API Reference",
    "Components",
    "Components",
    "Components",
    "File Convention",
    "File Convention",
    "File Convention",
    "Functions",
    "Functions",
    "Functions",
    "next.config.js",
    "next.config.js",
    "next.config.js",
]

export default function Sections() {
    return (
        <div className="p-2 pt-4 pb-28 h-full min-h-[540px] overflow-y-scroll">
            {section.map((sectionItem, index) => {
                return <Section key={index} section={sectionItem} />
            })}
        </div>
    )
}