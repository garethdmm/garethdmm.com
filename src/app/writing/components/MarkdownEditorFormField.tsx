"use client";

import { MDXEditor, MDXEditorMethods, headingsPlugin } from "@mdxeditor/editor";
import { FC, useState } from "react";

interface EditorProps {
  markdown: string;
  editorRef?: React.MutableRefObject<MDXEditorMethods | null>;
  name: string;
}

/**
 * Extend this Component further with the necessary plugins or props you need.
 * proxying the ref is necessary. Next.js dynamically imported components don't support refs.
 */
const MarkdownEditorFormField: FC<EditorProps> = ({
  markdown,
  editorRef,
  name,
}) => {
  const [currentMarkdown, setMarkdown] = useState(markdown);

  return (
    <>
      <input
        type="text"
        name={name}
        className="hidden"
        value={currentMarkdown}
      />
      <MDXEditor
        onChange={(val) => setMarkdown(val)}
        ref={editorRef}
        markdown={markdown}
        plugins={[headingsPlugin()]}
        contentEditableClassName="prose prose-lg prose-gray font-serif"
      />
    </>
  );
};

export default MarkdownEditorFormField;
