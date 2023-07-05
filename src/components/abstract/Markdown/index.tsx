import ReactMarkdown, { Options } from "react-markdown";
import CodeComponent from "./CodeComponent";

export type MarkdownProps = Omit<Options, "components">;

export default function Markdown({ children, ...props }: MarkdownProps) {
  return (
    <article className="w-full max-w-2xl prose prose-invert">
      <ReactMarkdown
        {...props}
        components={{
          code: CodeComponent,
        }}
        disallowedElements={["h1"]}
      >
        {children}
      </ReactMarkdown>
    </article>
  );
}
