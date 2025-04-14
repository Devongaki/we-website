import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from '../ui/components/Layout/Header/Header';
import Footer from '../ui/components/Layout/Footer/Footer';
import Home from '../features/Home';
import Prices from '../features/Prices/Prices';
import CheckoutPage from '../features/Checkout';
import FreeConsultation from '../features/FreeConsultation/FreeConsultation';
import About from '../features/About/About';
import Blog from '../features/Blog/Blog';
// Import theme styles
import '../theme/index.css';


function App() {
  return (
    <Router>
      <div className="app">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/prices" element={<Prices />} />
            <Route path="/about" element={<About />} />
            <Route path="/checkout" element={<CheckoutPage />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/free-consultation" element={<FreeConsultation />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
