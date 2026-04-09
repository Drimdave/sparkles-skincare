import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import OurStory from '@/components/OurStory';
import Products from '@/components/Products';
import Routine from '@/components/Routine';
import Benefits from '@/components/Benefits';
import Quality from '@/components/Quality';
import Testimonials from '@/components/Testimonials';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen relative bg-tertiary-50">
      <Navbar />
      <Hero />
      <OurStory />
      <Products />
      <Routine />
      <Benefits />
      <Quality />
      <Testimonials />
      <Footer />
    </main>
  );
}
