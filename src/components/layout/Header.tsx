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
    <>
      {process.env.NODE_ENV === "development" && (
        <div className="mr-10 pr-10 border-r-2 text-zinc-600 hidden lg:block">
          <a href="/writing/create">
            <PencilSquareIcon className="h-6 w-6" />
          </a>
        </div>
      )}
      <div className="flex flex-col lg:flex-row gap-6 lg:gap-12">
        {links.map((link, index) => (
          <a key={index} href={link.href} className="">
            {link.text}
          </a>
        ))}
      </div>
    </>
  );
}

export default function Header() {
  return (
    <header>
      <nav
        className="mx-auto flex items-center justify-between px-4 lg:px-8 py-4 lg:py-8 max-w-7xl border-b lg:border-b-0"
        aria-label="Global"
      >
        <div className="text-xl sm:text-2xl">
          <a href="/">Gareth MacLeod</a>
          <a href="/writing" className="text-zinc-600">
            {" "}
            / Writing
          </a>
        </div>
        <div className="flex lg:hidden">
          <Popover className="relative flex">
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
        <div className="hidden lg:flex">
          <NavLinks />
        </div>
      </nav>
    </header>
  );
}
