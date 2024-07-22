"use client";

import {
  BlockTypeSelect,
  BoldItalicUnderlineToggles,
  InsertThematicBreak,
  ListsToggle,
  MDXEditor,
  MDXEditorMethods,
  headingsPlugin,
  listsPlugin,
  toolbarPlugin,
  thematicBreakPlugin,
  quotePlugin,
  imagePlugin,
  InsertImage,
  linkPlugin,
  linkDialogPlugin,
  CreateLink,
} from "@mdxeditor/editor";
import "@mdxeditor/editor/style.css";

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
      <textarea name={name} className="hidden" value={currentMarkdown} />
      <MDXEditor
        onChange={(val) => setMarkdown(val)}
        ref={editorRef}
        markdown={currentMarkdown}
        contentEditableClassName="prose prose-lg prose-gray font-serif [&>img]:mx-auto"
        placeholder="Write your thoughts..."
        plugins={[
          headingsPlugin(),
          listsPlugin(),
          thematicBreakPlugin(),
          quotePlugin(),
          imagePlugin(),
          linkPlugin(),
          linkDialogPlugin(),
          toolbarPlugin({
            toolbarContents: () => {
              return (
                <div className="flex flex-row w-full justify-between">
                  <div className="flex flex-row grow-1">
                    <BoldItalicUnderlineToggles />
                    <ListsToggle />
                    <BlockTypeSelect />
                    <InsertThematicBreak />
                    <InsertImage />
                    <CreateLink />
                  </div>
                  <button
                    type="submit"
                    key="save"
                    className="rounded-md bg-white px-2.5 py-1.5 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
                  >
                    Save
                  </button>
                </div>
              );
            },
          }),
        ]}
      />
    </>
  );
};

export default MarkdownEditorFormField;
