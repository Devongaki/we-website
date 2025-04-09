import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/layout/Header';
import Home from './pages/Home';
import Prices from './pages/Prices';
import CheckoutPage from './pages/Checkout';
import FreeConsultation from './pages/FreeConsultation';

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
