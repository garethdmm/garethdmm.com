/**
 * This component uses a strange mechanism to detect close events on the popover.
 * This is because, AFAIK, headless UI does not expose a "onClose" event for their
 * popover. This is very strange and makes me question this choice of interaction
 * libraries.
 */
"use client";

import { Popover, PopoverButton, PopoverPanel } from "@headlessui/react";

import {
  EllipsisHorizontalIcon,
  EllipsisVerticalIcon,
} from "@heroicons/react/24/outline";
import { Post } from "@prisma/client";
import { useCallback, useEffect, useState } from "react";
import { deletePost } from "../actions";

function MenuInner({
  open,
  article,
  horizontal,
}: {
  open: Boolean;
  article: Post;
  horizontal?: Boolean;
}) {
  const [confirmingDelete, setConfirmingDelete] = useState(false);

  useEffect(() => {
    if (!open) {
      /* It would be preferable to do this on an event trigger from the popover but
       * so far as I can tell they don't have this... */
      setTimeout(() => setConfirmingDelete(false), 400);
    }
  }, [open]);

  const onDeleteSubmit = deletePost.bind(null, article.id);

  const Icon = (params: any) =>
    horizontal ? (
      <EllipsisHorizontalIcon {...params} />
    ) : (
      <EllipsisVerticalIcon {...params} />
    );

  return (
    <>
      <PopoverButton>
        <span className="sr-only">Open post menu</span>
        <Icon className="h-8 w-8 shrink-0 z-50" />
      </PopoverButton>
      <PopoverPanel
        transition
        anchor="bottom end"
        className="px-0.5 transition data-[closed]:translate-y-1 data-[closed]:opacity-0 data-[enter]:duration-200 data-[leave]:duration-150 data-[enter]:ease-out data-[leave]:ease-in"
      >
        <form
          action={onDeleteSubmit}
          className="flex flex-col rounded-sm bg-white text-base my-2 shadow-md ring-1 ring-zinc-300 text-right divide-y-2"
        >
          <a
            className="px-6 pb-2 pt-3 hover:bg-gray-100"
            href={`/writing/` + article.id + "/edit"}
          >
            Edit
          </a>
          {!confirmingDelete ? (
            <a
              onClick={() => setConfirmingDelete(true)}
              className="px-6 pt-2 pb-3 cursor-pointer hover:bg-gray-100"
            >
              Delete
            </a>
          ) : (
            <button
              type="submit"
              className="px-6 py-2 bg-red-600 text-white font-semibold"
            >
              Confirm?
            </button>
          )}
        </form>
      </PopoverPanel>
    </>
  );
}

export default function ArticleMenu({
  article,
  horizontal,
}: {
  article: Post;
  horizontal?: Boolean;
}) {
  if (!article) {
    return null;
  }

  return (
    <Popover className="hidden md:block">
      {({ open }) => {
        return (
          <MenuInner open={open} article={article} horizontal={horizontal} />
        );
      }}
    </Popover>
  );
}
