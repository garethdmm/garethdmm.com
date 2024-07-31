const links = [
  { href: `/`, text: "About" },
  { href: `/writing`, text: "Writing" },
  { href: `/#contact`, text: "Work with me" },
];

export default function Footer() {
  return (
    <footer className="bg-amber-50">
      <div className="border-t-2">
        <div className="flex flex-col lg:flex-row w-full lg:justify-between py-16 items-baseline gap-8">
          <p className="text-xs lg:text-base leading-5 text-gray-500 mx-auto lg:mx-0">
            &copy; 2024 Gareth MacLeod
          </p>
          <div className="flex lg:flex-row gap-6 lg:gap-12 order-first lg:order-last mx-auto lg:mx-0">
            {links.map((link, index) => (
              <a key={index} href={link.href}>
                {link.text}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
