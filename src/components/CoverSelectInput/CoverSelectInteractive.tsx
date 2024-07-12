"use client";

import { EllipsisHorizontalIcon, PhotoIcon } from "@heroicons/react/24/outline";
import { Popover, PopoverButton, PopoverPanel } from "@headlessui/react";
import clsx from "clsx";

import { Post } from "@prisma/client";
import { useEffect, useState } from "react";

interface CoverSelectInteractiveProps {
  article: Post;
  filenames: string[];
}

export default function CoverSelectInteractive({
  article,
  filenames,
}: CoverSelectInteractiveProps) {
  const [previewCover, setPreviewCover] = useState<string | undefined>(
    article.cover
  );

  const removeCover = () => setPreviewCover(undefined);
  //
  return (
    <div
      className={clsx(
        "group relative w-full ring-1 ring-inset rounded-md ring-zinc-300 flex items-center justify-center hover:ring-zinc-400",
        previewCover ? null : "aspect-square"
      )}
    >
      <input type="text" name="cover" className="hidden" value={previewCover} />
      <Popover className="absolute top-4 right-4">
        <PopoverButton
          className="invisible group-hover:visible
          rounded-md bg-white px-1 py-0.5 text-sm font-semibold shadow-sm ring-1 ring-inset ring-zinc-300 hover:ring-zinc-400 text-zinc-600"
        >
          <span className="sr-only">Open post menu</span>
          <EllipsisHorizontalIcon className="h-8 w-8" />
        </PopoverButton>
        <PopoverPanel
          transition
          anchor="bottom end"
          className="px-0.5 transition data-[closed]:translate-y-1 data-[closed]:opacity-0 data-[enter]:duration-200 data-[leave]:duration-150 data-[enter]:ease-out data-[leave]:ease-in"
        >
          <div className="flex flex-col rounded-sm bg-white text-base my-2 shadow-md ring-1 ring-zinc-300 text-right divide-y-2">
            {filenames.map((filename) => (
              <a
                key={filename}
                className="px-6 pb-2 pt-3 hover:bg-gray-100"
                onClick={() => setPreviewCover(filename)}
              >
                {filename}
              </a>
            ))}
            <a
              key="no-cover"
              className="px-6 pb-2 pt-3 hover:bg-gray-100"
              onClick={removeCover}
            >
              No cover
            </a>
          </div>
        </PopoverPanel>
      </Popover>
      {previewCover ? (
        <img src={"/covers/" + previewCover} alt="stressed founder" />
      ) : (
        <PhotoIcon className="h-32 w-32 text-zinc-300" />
      )}
    </div>
  );
}
