interface PropsTypes {
    section: string;
}
const Section: React.FC<PropsTypes> = ({ section }) => {
    return (
        <div className="card">
            {section}
        </div>
    )
}

export default Section;