import { FC } from "react";
import ReactMarkDown, { Components } from "react-markdown";
import rehypeRaw from "rehype-raw";

interface MarkdownProps {
  content: string;
}
const Markdown: FC<MarkdownProps> = ({ content }) => {
  const renderers: Components = {
    h2: ({ children }) => <h2 className="text-xl font-bold">{children}</h2>,
    p: ({ children }) => <p className="text-base font-light">{children}</p>,
  };
  return (
    <ReactMarkDown rehypePlugins={[rehypeRaw]} components={renderers}>
      {content}
    </ReactMarkDown>
  );
};

export default Markdown;