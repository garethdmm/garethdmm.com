const links = [
  { href: `/`, text: "About" },
  { href: `/writing`, text: "Writing" },
  { href: `/#contact`, text: "Work with me" },
];

export default function Footer() {
  return (
    <footer className="bg-amber-50">
      <div className="border-t-2">
        <div className="flex justify-between py-16 items-baseline">
          <p className="leading-5 text-gray-500">&copy; 2024 Gareth MacLeod</p>
          <div className="flex flex-col lg:flex-row gap-6 lg:gap-12">
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
