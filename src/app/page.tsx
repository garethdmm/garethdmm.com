import Career from "./sections/career";
import Writing from "./sections/writing";
import Cover from "./sections/cover";
import Footer from "./sections/footer";
import Contact from "./sections/contact";

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
