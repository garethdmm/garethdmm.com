export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex w-full">
      <div className="relative flex w-full flex-col">{children}</div>
    </div>
  );
}
