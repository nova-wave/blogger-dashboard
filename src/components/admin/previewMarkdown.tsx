interface PropsTypes {
  markdownContent: string;
}

const PreviewMarkdown: React.FC<PropsTypes> = ({ markdownContent }) => {
  return <div>Preview Markdown</div>;
};

export default PreviewMarkdown;
