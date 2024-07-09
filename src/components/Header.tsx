"use client";

import { Popover, PopoverButton, PopoverPanel } from "@headlessui/react";
import { Bars3Icon, PencilSquareIcon } from "@heroicons/react/24/outline";

const links = [
  { href: `/`, text: "About" },
  { href: `/writing`, text: "Writing" },
  { href: `/#contact`, text: "Work with me" },
];

function NavLinks() {
  return (
    <div className="hidden lg:flex">
      <div className="mr-10 pr-10 border-r-2 text-zinc-600">
        <a href="/writing/create">
          <PencilSquareIcon className="h-6 w-6" />
        </a>
      </div>
      <div className="flex gap-x-12">
        {links.map((link, index) => (
          <a key={index} href={link.href} className="">
            {link.text}
          </a>
        ))}
      </div>
    </div>
  );
}

export default function Header() {
  return (
    <header>
      <nav
        className="mx-auto flex items-center justify-between px-4 lg:px-8 py-4 border-b"
        aria-label="Global"
      >
        <a className="text-2xl" href="/">
          Gareth MacLeod
          <span className="text-zinc-600"> / Writing </span>
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
                <NavLinks />
              </div>
            </PopoverPanel>
          </Popover>
        </div>
        <NavLinks />
      </nav>
    </header>
  );
}
