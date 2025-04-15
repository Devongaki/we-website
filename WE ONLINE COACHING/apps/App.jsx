import { Routes, Route, Outlet } from 'react-router-dom';
import Header from '../ui/components/Layout/Header/Header';
import Footer from '../ui/components/Layout/Footer/Footer';
import Home from '../features/Home';
import Prices from '../features/Prices/Prices';
import CheckoutPage from '../features/Checkout';
import FreeConsultation from '../features/FreeConsultation/FreeConsultation';
import About from '../features/About/About';
import Blog from '../features/Blog/Blog';
import Login from '../features/Auth/Login';
import PrivacyPolicy from '../features/Legal/PrivacyPolicy';
import { useEffect } from 'react';
import { initGA, pageview } from '../utils/analytics';
import { useLocation } from 'react-router-dom';
import CookieConsent from '../ui/components/CookieConsent/CookieConsent';
import ScrollToTop from '../ui/components/ScrollToTop/ScrollToTop';
import DataRequest from '../features/Legal/DataRequest';
import NotFound from '../features/ErrorPage/NotFound';
import TermsOfService from '../features/Legal/TermsOfService';
import PaymentSuccess from '../features/Checkout/Success';
import PaymentError from '../features/Checkout/Error';
import Dashboard from '../features/Dashboard/Dashboard';
import AuthGuard from '../features/Auth/AuthGuard';
import DashboardLayout from '../ui/components/Layout/DashboardLayout/DashboardLayout';

// Import theme styles
import '../theme/index.css';

// Create a separate component for analytics tracking
function AnalyticsTracker() {
  const location = useLocation();

  useEffect(() => {
    // Initialize GA
    initGA();
  }, []);

  useEffect(() => {
    // Track page views on route change
    pageview(location.pathname + location.search);
  }, [location]);

  return null;
}

// Marketing Site Layout (with Header and Footer)
const MarketingSiteLayout = () => (
  <>
    <Header />
    <main><Outlet /></main>
    <Footer />
  </>
);

function App() {
  return (
    <div className="app">
      <AnalyticsTracker />
      <ScrollToTop />
      <CookieConsent />
      
      <Routes>
        {/* Dashboard Routes - No Header/Footer */}
        <Route path="/dashboard/*" element={
          <AuthGuard>
            <DashboardLayout>
              <Routes>
                <Route index element={<Dashboard />} />
                {/* Add other dashboard routes here */}
                {/* <Route path="program" element={<Program />} /> */}
                {/* <Route path="progress" element={<Progress />} /> */}
                {/* <Route path="nutrition" element={<Nutrition />} /> */}
                {/* <Route path="settings" element={<Settings />} /> */}
              </Routes>
            </DashboardLayout>
          </AuthGuard>
        } />

        {/* Marketing Site Routes - With Header/Footer */}
        <Route element={<MarketingSiteLayout />}>
          <Route index element={<Home />} />
          <Route path="/prices" element={<Prices />} />
          <Route path="/about" element={<About />} />
          <Route path="/checkout" element={<CheckoutPage />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/free-consultation" element={<FreeConsultation />} />
          <Route path="/login" element={<Login />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/data-request" element={<DataRequest />} />
          <Route path="/terms-of-service" element={<TermsOfService />} />
          <Route path="/payment-success" element={<PaymentSuccess />} />
          <Route path="/payment-error" element={<PaymentError />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
