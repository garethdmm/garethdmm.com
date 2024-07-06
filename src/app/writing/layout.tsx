import Header from "@/components/Header";
import Footer from "../sections/footer";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex flex-col w-full min-h-screen">
      <Header />
      <div className="relative flex w-full flex-col grow mb-16">{children}</div>
      <Footer />
    </div>
  );
}
