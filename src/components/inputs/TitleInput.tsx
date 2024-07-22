"use client";

import { useEffect, useRef } from "react";

interface TitleInputProps {
  title: string;
  className?: string;
}

export default function TitleInput({ title, className }: TitleInputProps) {
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
      defaultValue={title}
      autoFocus
      onChange={resetRows}
      ref={textAreaRef}
      rows={1}
      placeholder="Your article's title"
    />
  );
}
