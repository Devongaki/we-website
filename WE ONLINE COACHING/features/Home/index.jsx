import Hero from './components/Hero/Hero';
import Features from './components/Features /Features';
// import Testimonials from './components/Testimonials';
import Footer from '../../ui/components/Layout/Footer/Footer';
import Process from './components/Process/Process';
import BlogShowcase from './components/BlogShowcase/BlogShowcase';

const Home = () => {
  return (
    <div className="home">
      <Hero />
      <Features />
      <Process />
      <BlogShowcase />
      {/* <Testimonials /> */}
    </div>
  );
};

export default Home; 