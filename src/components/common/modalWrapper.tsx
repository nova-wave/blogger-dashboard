interface PropsTypes {
  children: React.ReactNode;
  title?: string;
}

export default function ModalWrapper({ children, title }: PropsTypes) {
  return (
    <div className="fixed left-2/4 top-2/4 transform -translate-x-2/4 -translate-y-2/4 bg-dark border-2 border-[#333] p-2 shadow-lg shadow-teal-950 rounded">
      {/* modal header */}
      <div>
        <div>{title}</div>
        <div></div>
      </div>
      {/* modal content */}
      {children}
    </div>
  );
}
