// Google Analytics Configuration
export const GA_TRACKING_ID = 'G-ZNWMR9M9D9'; // Your actual GA4 tracking ID

// Initialize Google Analytics with consent mode
export const initGA = () => {
  const hasConsent = localStorage.getItem('cookieConsent') === 'true';
  
  // Add Google Analytics base script
  const script = document.createElement('script');
  script.src = `https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`;
  script.async = true;
  document.head.appendChild(script);

  // Add GA4 configuration with consent mode
  window.dataLayer = window.dataLayer || [];
  function gtag() {
    window.dataLayer.push(arguments);
  }
  
  // Set default consent to 'denied' until user accepts
  gtag('consent', 'default', {
    analytics_storage: hasConsent ? 'granted' : 'denied'
  });
  
  gtag('js', new Date());
  gtag('config', GA_TRACKING_ID);

  // Make gtag available globally
  window.gtag = gtag;
};

// Track page views
export const pageview = (url) => {
  if (typeof window.gtag === 'function') {
    window.gtag('config', GA_TRACKING_ID, {
      page_path: url,
    });
  }
};

// Track events
export const event = ({ action, category, label, value }) => {
  if (typeof window.gtag === 'function') {
    window.gtag('event', action, {
      event_category: category,
      event_label: label,
      value: value,
    });
  }
};

// Examples of important events to track
export const trackEvents = {
  // Lead Generation
  freeWorkoutDownload: () => event({
    action: 'free_workout_download',
    category: 'Lead_Generation',
    label: 'Workout PDF'
  }),

  // Consultation
  bookConsultation: () => event({
    action: 'book_consultation',
    category: 'Lead_Generation',
    label: 'Free Consultation'
  }),

  // Pricing
  viewPricing: (plan) => event({
    action: 'view_pricing',
    category: 'Ecommerce',
    label: plan
  }),

  // User Engagement
  watchVideo: (videoId) => event({
    action: 'watch_video',
    category: 'Engagement',
    label: videoId
  }),

  // Navigation
  menuClick: (menuItem) => event({
    action: 'menu_click',
    category: 'Navigation',
    label: menuItem
  })
};
