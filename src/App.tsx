import Navbar from './components/Navbar';
import Hero from './components/Hero';
import HowItWorks from './components/HowItWorks';
import Marketplace from './components/Marketplace';
import Features from './components/Features';
import Showcase from './components/Showcase';
import DownloadCTA from './components/DownloadCTA';
import Footer from './components/Footer';

function App() {
  const scrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <div className="animated-bg">
        <div className="animated-bg-orb"></div>
      </div>
      <a className="skip-link" href="#hero">Skip to content</a>
      <Navbar />
      <main>
        <Hero />
        <HowItWorks />
        <Marketplace />
        <Features />
        <Showcase />
        <DownloadCTA />
      </main>
      <Footer />
      <div className="mobile-cta" role="region" aria-label="Quick download">
        <strong>Get the app</strong>
        <button className="btn btn-primary" type="button" onClick={() => scrollTo('download')}>
          Download App
        </button>
      </div>
    </>
  );
}

export default App;
