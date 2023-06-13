import ReactMarkdown, { Options } from "react-markdown";
import CodeComponent from "./CodeComponent";
import "./style.css";

export type MarkdownProps = Omit<Options, "components">;

export default function Markdown({ children, ...props }: MarkdownProps) {
  return (
    <div className="markdown-body">
      <ReactMarkdown {...props} components={{ code: CodeComponent }}>
        {children}
      </ReactMarkdown>
    </div>
  );
}
