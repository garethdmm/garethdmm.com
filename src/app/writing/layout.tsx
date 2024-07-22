import { Header, Footer } from "@/components/layout";

export const dynamic = "force-dynamic";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex flex-col w-full min-h-screen">
      <Header />
      <div className="relative flex w-full flex-col grow mb-16">
        <main className="flex-auto">{children}</main>
      </div>
      <Footer />
    </div>
  );
}
