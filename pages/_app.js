/* eslint-disable @next/next/no-before-interactive-script-outside-document */
import Script from "next/script";
import "../styles/globals.css";

export default function MyApp({ Component, pageProps }) {
  return (
    <> 
    <Component {...pageProps} />
    <Script src="https://scripts.sirv.com/sirv.js"/>
    </> 
  );
}