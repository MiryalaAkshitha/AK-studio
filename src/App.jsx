import { useEffect, useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Marquee from './components/Marquee';
import Work from './components/Work';
import Process from './components/Process';
import Growth from './components/Growth';
import Pricing from './components/Pricing';
import Team from './components/Team';
import Value from './components/Value';
import Contact from './components/Contact';
import Footer from './components/Footer';

function useScrollPercent() {
  const [pct, setPct] = useState(0);
  useEffect(() => {
    const onScroll = () => {
      const h = document.documentElement.scrollHeight - window.innerHeight;
      setPct(h > 0 ? Math.min(100, (window.scrollY / h) * 100) : 0);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);
  return pct;
}

export default function App() {
  const scrollPct = useScrollPercent();

  return (
    <div className="site" id="top">
      <Header scrollPct={scrollPct} />
      <a href="#top" className={`to-top ${scrollPct > 15 ? 'show' : ''}`} aria-label="Back to top">↑</a>
      <main>
        <Hero />
        <Marquee />
        <Work />
        <Process />
        <Growth />
        <Pricing />
        <Team />
        <Value />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
