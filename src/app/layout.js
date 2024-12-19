// app/layout.js

import Navbar from "@/component/SharedComponent/Navbar";
import "./globals.css";

import Footer from "@/component/SharedComponent/Footer";

import GoogleAnalytics from "@/component/GoogleAnalytic/GoogleAnalytics ";

import AnalyticsProvider from "@/component/GoogleAnalytic/AnalyaticProvider";
import { Suspense } from "react";


export const metadata = {
  title: "OptiWebFusion",
  description:
    "OptiWebFusion is a web development company that provides web design, web development, and web hosting services.",
};

export default function Layout({ children }) {
  return (
    <html lang="en">
      <head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
        <GoogleAnalytics />
        <Suspense fallback={null}>
          <AnalyticsProvider trackingId="G-1CXDD73BP9" />
        </Suspense>
      </head>

      <body className={`font-montserrat dark:bg-gray-900 bg-white`}>
        
        {/* <LoadingWrapper> */}
        <Navbar />
        <main>{children}</main>
        <Footer />
        {/* </LoadingWrapper> */}
      </body>
    </html>
  );
}
