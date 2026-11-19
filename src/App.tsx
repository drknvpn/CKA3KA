import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Veniki from '@/components/Veniki';
import Gallery from '@/components/Gallery';
import Reviews from '@/components/Reviews';
import Booking from '@/components/Booking';
import Footer from '@/components/Footer';
import { useReveal } from '@/hooks/useScrollFx';

function App() {
  useReveal();

  return (
    <div className="relative min-h-screen">
      <Navbar />
      <main className="relative z-[1]">
        <Hero />
        <About />
        <Veniki />
        <Gallery />
        <Reviews />
        <Booking />
      </main>
      <Footer />
    </div>
  );
}

export default App;
