import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from '../ui/components/Layout/Header/Header';
import Home from '../features/Home';
import Prices from '../features/Prices';
import CheckoutPage from '../features/Checkout';
import FreeConsultation from '../features/FreeConsultation/FreeConsultation';

// Import theme styles
import '../theme/index.css';

// Temporary page components
const Blog = () => <div className="container mt-lg">Blog Page</div>;

function App() {
  return (
    <Router>
      <div className="app">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/prices" element={<Prices />} />
            <Route path="/checkout" element={<CheckoutPage />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/free-consultation" element={<FreeConsultation />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
