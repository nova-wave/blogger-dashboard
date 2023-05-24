export default function ModalWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="fixed left-2/4 top-2/4 transform -translate-x-2/4 -translate-y-2/4 bg-dark">
      {children}
    </div>
  );
}
