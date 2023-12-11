import Sections from "./sections";
import { AiOutlineAppstoreAdd } from "react-icons/ai";

export default function LeftSide() {
  return (
    <div className="h-full fixed w-[345px]">
      <div className="h-[50px] card flex gap-1">
        <input className="w-full rounded px-3 bg-gray" type="text" />
        <button className="w-6 h-full hover:shadow flex items-center justify-center text-lg">
          <AiOutlineAppstoreAdd />
        </button>
      </div>
      <Sections />
    </div>
  );
}
