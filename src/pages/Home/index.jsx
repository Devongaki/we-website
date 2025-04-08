import Hero from './components/Hero';
import Features from './components/Features';
import Testimonials from './components/Testimonials';
import CTA from './components/CTA';
import './styles/Home.css';

const Home = () => {
  return (
    <div className="home">
      <Hero />
      <Features />
      <Testimonials />
      <CTA />
    </div>
  );
};

export default Home; 