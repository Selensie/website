import { Hero } from "@/components/hero";
import { Stats } from "@/components/stats";
import { Features } from "@/components/features";
// import { Ecosystem } from "@/components/ecosystem";
import { Comparison } from "@/components/comparison";
import { Waitlist } from "@/components/waitlist";

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white">
      <Hero />
      <Stats />
      <Features />
      {/* <Ecosystem /> */}
      <Comparison />
      <Waitlist />
    </main>
  );
}