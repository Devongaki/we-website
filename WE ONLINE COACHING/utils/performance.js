import { onCLS, onFID, onLCP, onFCP, onTTFB } from 'web-vitals';

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

  onCLS(reportFunction);   // Cumulative Layout Shift
  onFID(reportFunction);   // First Input Delay
  onLCP(reportFunction);   // Largest Contentful Paint
  onFCP(reportFunction);   // First Contentful Paint
  onTTFB(reportFunction);  // Time to First Byte
};
