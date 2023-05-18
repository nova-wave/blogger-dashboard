interface PropsTypes {
    section: string;
}
const Section: React.FC<PropsTypes> = ({ section }) => {
    return (
        <div className="card mb-2">
            {section}
        </div>
    )
}

export default Section;