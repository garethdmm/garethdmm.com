import { Header } from "@/components/layout";

export const dynamic = "force-dynamic";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex flex-col w-full min-h-screen">
      <Header />
      <div className="relative flex w-full flex-col grow">
        <main className="flex flex-col flex-auto">{children}</main>
      </div>
    </div>
  );
}
