import { Hero } from "../components/Hero";
import { Features } from "../components/Features";
import { Gallery } from "../components/Gallery";
import { CTA } from "../components/CTA";
import { PageTransition } from "../components/PageTransition";

export function Home() {
  return (
    <PageTransition>
      <Hero />
      <Features />
      <Gallery />
      <CTA />
    </PageTransition>
  );
}
