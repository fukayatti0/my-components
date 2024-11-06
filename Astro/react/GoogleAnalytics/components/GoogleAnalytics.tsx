import { useEffect } from 'react';
import { GA_MEASUREMENT_ID, pageview } from '../../lib/gtag';

type GoogleAnalyticsProps = {
    pathname: string;
    searchParams?: URLSearchParams;
};

export default function GoogleAnalytics({ pathname, searchParams }: GoogleAnalyticsProps) {
    useEffect(() => {
        const url = pathname + (searchParams ? `?${searchParams.toString()}` : '');
        pageview(url);
    }, [pathname, searchParams]);

    return (
        <>
            <script
                async
                src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
            ></script>
            <script
                dangerouslySetInnerHTML={{
                    __html: `
                        window.dataLayer = window.dataLayer || [];
                        function gtag(){dataLayer.push(arguments);}
                        gtag('js', new Date());
                        gtag('config', '${GA_MEASUREMENT_ID}');
                    `,
                }}
            ></script>
        </>
    );
}
