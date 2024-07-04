import Header from "@/components/Header";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex flex-col w-full">
      <Header />
      <div className="relative flex w-full flex-col">{children}</div>
    </div>
  );
}
