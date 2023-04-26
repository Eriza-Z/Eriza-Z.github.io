import Script from "next/script";
import "../styles/globals.css";
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function MyApp({ Component, pageProps }) {
  useEffect(() => {
    AOS.init({
      once: false,
      offset: 50,
      delay: 50,
    });
  });

  return (
    <> 
    <Script
        src="https://www.googletagmanager.com/gtag/js?id=G-0Z91PV5R58"
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){window.dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'G-0Z91PV5R58');
        `}
      </Script>
    <Component {...pageProps} />
    <Script src="https://scripts.sirv.com/sirv.js"/>
    </> 
  );
}