import Hero from './components/Hero/Hero';
import Philosophy from './components/Philosophy/Philosophy';
// import Features from './components/Features /Features';
// import Testimonials from './components/Testimonials';
import Footer from '../../ui/components/Layout/Footer/Footer';
import Process from './components/Process/Process';
import BlogShowcase from './components/BlogShowcase/BlogShowcase';

const Home = () => {
  return (
    <div className="home">
      <Hero />
      <Philosophy />
      <Process />
      <BlogShowcase />
      {/* <Testimonials /> */}
    </div>
  );
};

export default Home; 