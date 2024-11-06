export const GA_MEASUREMENT_ID = 'G-VXDJJ0EMDQ'

// pageviewの送信
export const pageview = (url) => {
    if (typeof window.gtag === 'function') {
      window.gtag('config', GA_MEASUREMENT_ID, {
        page_path: url,
      })
    }
  }
  
  // イベントの送信
  export const event = ({ action, category, label, value }) => {
    if (typeof window.gtag === 'function') {
      window.gtag('event', action, {
        event_category: category,
        event_label: label,
        value: value,
      })
    }
  }