declare global {
    interface Window {
        gtag: (command: string, id: string, params?: Record<string, any>) => void;
    }
}

export const GA_MEASUREMENT_ID = 'G-VXDJJ0EMDQ';

// pageviewの送信
export const pageview = (url: string) => {
    if (typeof window.gtag === 'function') {
        window.gtag('config', GA_MEASUREMENT_ID, {
            page_path: url,
        });
    }
};

// イベントの送信
interface EventParams {
    action: string;
    category: string;
    label: string;
    value: number;
}

export const event = ({ action, category, label, value }: EventParams) => {
    if (typeof window.gtag === 'function') {
        window.gtag('event', action, {
            event_category: category,
            event_label: label,
            value: value,
        });
    }
};