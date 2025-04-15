import { getCLS, getFID, getLCP, getFCP, getTTFB } from 'web-vitals';

// Function to send metrics to Google Analytics
const sendToGoogleAnalytics = ({ name, delta, id }) => {
  // Assumes the global `gtag()` function exists, put this in a try/catch if you're not sure
  window.gtag?.('event', name, {
    event_category: 'Web Vitals',
    event_label: id,
    value: Math.round(name === 'CLS' ? delta * 1000 : delta), // CLS needs special handling
    non_interaction: true, // Avoid affecting bounce rate
  });
};

// Function to log metrics to console in development
const logMetric = ({ name, delta, id }) => {
  console.log(`${name} metric:`, {
    id,
    value: Math.round(name === 'CLS' ? delta * 1000 : delta),
  });
};

// Report all metrics
export const reportWebVitals = (isDevelopment = false) => {
  const reportFunction = isDevelopment 
    ? logMetric 
    : sendToGoogleAnalytics;

  getCLS(reportFunction);   // Cumulative Layout Shift
  getFID(reportFunction);   // First Input Delay
  getLCP(reportFunction);   // Largest Contentful Paint
  getFCP(reportFunction);   // First Contentful Paint
  getTTFB(reportFunction);  // Time to First Byte
};
