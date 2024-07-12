"use client";

import { type Post } from "@prisma/client";

import { useEffect, useRef } from "react";

interface TitleInputProps {
  article: Post;
  className?: string;
}

export default function TitleInput({ article, className }: TitleInputProps) {
  const textAreaRef = useRef<HTMLTextAreaElement>(null);

  const resetRows = () => {
    if (textAreaRef.current) {
      textAreaRef.current.style.height = "auto";
      textAreaRef.current.style.height =
        textAreaRef.current.scrollHeight + "px";
    }
  };

  useEffect(resetRows, []);

  return (
    <textarea
      name="title"
      className={className}
      defaultValue={article.title}
      autoFocus
      onChange={resetRows}
      ref={textAreaRef}
      rows={1}
    />
  );
}
