import Hero from './components/Hero';
import Features from './components/Features';
import Process from './components/Process';
import CTA from './components/CTA';
import './styles/Home.css';

const Home = () => {
  return (
    <div className="home">
      <Hero />
      <Features />
      <Process />
      <CTA />
    </div>
  );
};

export default Home; 