import CareerTimeline from "./sections/timeline";
import Writing from "./sections/writing";
import Hero from "./sections/hero_center";
import Footer from "./sections/basic_footer";
import ConclusionLeftRight from "./sections/conclusion_left_right";

export default function Home() {
  return (
    <>
      <main className="divide-y-2 relative space-y-10">
        <Hero />
        <CareerTimeline />
        <Writing />
        <ConclusionLeftRight />
      </main>
      <Footer />
    </>
  );
}
