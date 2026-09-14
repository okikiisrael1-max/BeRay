import Navbar from "./assets/components/Navbar";
import Hero from "./assets/components/Hero";
import Services from "./assets/components/Services";
import ContentShowcase from "./assets/components/ContentShowcase";
import Approach from "./assets/components/Approach";
import Results from "./assets/components/Results";
import CTA from "./assets/components/CTA";
import Footer from "./assets/components/Footer";

export default function App() {
  return (
    <div className="min-h-screen bg-paper">
      <Navbar />
      <main>
        <Hero />
        <Services />
        <ContentShowcase />
        <Approach />
        <Results />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}