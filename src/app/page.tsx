import Career from "./components/career";
import Writing from "./components/writing";
import Cover from "./components/cover";
import Contact from "./components/contact";
import { Footer } from "@/components/layout";

export default function Home() {
  return (
    <>
      <main className="relative">
        <Cover />
        <Career />
        <Writing />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
