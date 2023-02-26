import Script from "next/script";
import "../styles/globals.scss";
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
    <Component {...pageProps} />
    <Script src="https://scripts.sirv.com/sirv.js"/>
    </> 
  );
}