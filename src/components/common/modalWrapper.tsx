import { MdOutlineClose } from "react-icons/md";

interface PropsTypes {
  children: React.ReactNode;
  title?: string;
  setOpen?: any;
}

export default function ModalWrapper({ children, title, setOpen }: PropsTypes) {
  return (
    <div className="fixed left-2/4 top-2/4 transform -translate-x-2/4 -translate-y-2/4 bg-dark border-2 border-[#333] shadow-lg shadow-teal-950 rounded min-w-[300px]">
      {/* modal header */}
      <div className="flex items-center justify-between border-b-2 border-[#333] p-2">
        <h2 className="text-red-600 font-medium text-2xl">{title}</h2>
        <div className="flex justify-end items-center">
          <button
            onClick={() => setOpen(false)}
            className="text-white p-2 border-2 bg-red-700 rounded-full hover:bg-red-600"
          >
            <MdOutlineClose color="white" size={22} />
          </button>
        </div>
      </div>
      {/* modal content */}
      <div className="p-2 pb-4 h-[85vh] overflow-y-scroll">{children}</div>
    </div>
  );
}
