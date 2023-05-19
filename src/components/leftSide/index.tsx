import Sections from "./sections";

export default function LeftSide() {
    return (
        <div className="h-full fixed w-[345px]">
            <div className="h-[50px] card">
                <input type="search" />
            </div>
            <Sections />
        </div>
    )
}