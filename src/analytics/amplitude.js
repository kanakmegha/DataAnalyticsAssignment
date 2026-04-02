import * as amplitude from '@amplitude/analytics-browser';

const AMPLITUDE_API_KEY = import.meta.env.VITE_AMPLITUDE_API_KEY;

export const initAmplitude = () => {
  if (!AMPLITUDE_API_KEY) {
    console.warn('Amplitude API Key is missing in environment variables!');
    return;
  }
  
  console.log('Initializing Amplitude with key from ENV:', AMPLITUDE_API_KEY.substring(0, 5) + '...');
  
  amplitude.init(AMPLITUDE_API_KEY, {
    logLevel: amplitude.Types.LogLevel.Debug,
    autocapture: {
      attribution: true,
      fileDownloads: true,
      formInteractions: true,
      pageViews: true,
      sessions: true,
      elementInteractions: true,
      networkTracking: true,
      webVitals: true,
      frustrationInteractions: {
        thrashedCursor: true,
        errorClicks: true,
        deadClicks: true,
        rageClicks: true
      }
    },
    sessionReplay: {
      sampleRate: 1
    }
  });
};

export const trackEvent = (eventName, eventProperties = {}) => {
  console.log(`Tracking event: ${eventName}`, eventProperties);
  amplitude.track(eventName, eventProperties);
};
