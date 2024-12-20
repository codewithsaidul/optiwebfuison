"use client"
import Script from "next/script";

const GoogleAnalytics = () => {


  return (
    <>
      <Script
        strategy="lazyOnload"
        src={`https://www.googletagmanager.com/gtag/js?id=G-1CXDD73BP9`}
      />
      <Script id="google-analytics" strategy="lazyOnload">
        {`
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', 'G-1CXDD73BP9', {
          page_path: window.location.pathname,
        });
      `}
      </Script>
    </>
  );
};

export default GoogleAnalytics;
