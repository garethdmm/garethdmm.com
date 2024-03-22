import Career from "./sections/career";
import Writing from "./sections/writing";
import Cover from "./sections/cover";
import Footer from "./sections/basic_footer";
import Contact from "./sections/contact";

export default function Home() {
  return (
    <>
      <main className="divide-y-0 relative">
        <Cover />
        <Career />
        <Writing />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
