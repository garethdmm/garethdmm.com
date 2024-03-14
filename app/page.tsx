import CareerTimeline from "./sections/timeline";
import AltTimeline from "./sections/alt_timeline";
import Conclusion from "./sections/conclusion";
import Writing from "./sections/writing";
import Hero from "./sections/hero_center";

export default function Home() {
  return (
    <>
      <main className="divide-y-2 relative space-y-10">
        <Hero />
        <AltTimeline />
        <Writing />
        <Conclusion />
      </main>
      <footer className="py-2 px-4 text-sm">© 2024 Gareth Macleod</footer>
    </>
  );
}
