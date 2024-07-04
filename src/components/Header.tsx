"use client";

import { useState } from "react";
import { Dialog, DialogPanel } from "@headlessui/react";
import { Popover, PopoverButton, PopoverPanel } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header>
      <nav
        className="mx-auto flex items-center justify-between px-4 lg:px-8 py-4 border-b"
        aria-label="Global"
      >
        <a className="text-2xl" href="/">
          Gareth MacLeod
        </a>
        <div className="flex lg:hidden">
          <Popover className="relative">
            <PopoverButton>
              <span className="sr-only">Open main menu</span>
              <Bars3Icon className="h-6 w-6" aria-hidden="true" />
            </PopoverButton>
            <PopoverPanel
              transition
              anchor="bottom"
              className="px-4 transition data-[closed]:translate-y-1 data-[closed]:opacity-0 data-[enter]:duration-200 data-[leave]:duration-150 data-[enter]:ease-out data-[leave]:ease-in"
            >
              <div className="flex flex-col gap-y-8 shrink rounded-xl bg-amber-100 px-6 py-6 my-4 mx-2 shadow-lg ring-1 ring-zinc-300 text-right text-lg w-48">
                <a href="/">About</a>
                <a href="#">Career</a>
                <a href="#">Writing</a>
                <a href="#">Work with me</a>
              </div>
            </PopoverPanel>
          </Popover>
        </div>
        <div className="hidden lg:flex gap-x-12">
          <a href="/">About</a>
          <a href="#">Career</a>
          <a href="#">Writing</a>
          <a href="#">Work with me</a>
        </div>
      </nav>
    </header>
  );
}