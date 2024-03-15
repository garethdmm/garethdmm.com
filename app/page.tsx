import AltTimeline from "./sections/alt_timeline";
import Writing from "./sections/writing";
import Hero from "./sections/hero_center";
import Footer from "./sections/basic_footer";
import ConclusionLeftRight from "./sections/conclusion_left_right";

export default function Home() {
  return (
    <>
      <main className="divide-y-2 relative space-y-10">
        <Hero />
        <AltTimeline />
        <Writing />
        <ConclusionLeftRight />
      </main>
      <Footer />
    </>
  );
}
