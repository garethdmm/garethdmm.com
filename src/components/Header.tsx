export default function Header() {
  return (
    <header>
      <nav
        className="mx-auto flex items-center justify-between p-6 lg:px-8 border-b"
        aria-label="Global"
      >
        <a className="text-2xl" href="#">
          Gareth MacLeod
        </a>
        <div className="flex gap-x-12">
          <a href="#">About</a>
          <a href="#">Career</a>
          <a href="#">Writing</a>
          <a href="#">Work with me</a>
        </div>
      </nav>
    </header>
  );
}
