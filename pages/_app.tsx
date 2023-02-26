/* eslint-disable @next/next/no-before-interactive-script-outside-document */
import Head from "next/head";
import Script from "next/script";
import "../styles/globals.css";

export default function MyApp({ Component, pageProps }) {
  return (
    <> 
    <Head>
       {/* Web Property */}
        <title>Eriza Zehezkiel Gracia</title>
        <meta charSet='UTF-8'/>
        <meta name="viewport" content="width=device-width,minimum-scale=1,initial-scale=1" />
        <meta name="keywords" content="Eriza Zehezkiel, Eriza Z, Eriza Zehezkiel Gracia, EZGS, ezgs" />
        <meta name="description" content="Personal Website of Eriza Zehezkiel Gracia where this Web page Layout is like a Portofolio Website Page Layout" />
        <meta name="author" content="Eriza Zehezkiel Gracia" />
        <link rel="icon" href="/favicon.ico" />
        {/* OpenGraph */}
        <meta property="og:site_name" content="Eriza Zehezkiel Gracia" />
        <meta property="og:title" content="Eriza Zehezkiel Gracia" />
        <meta property="og:type" content="website" />
        <meta property="og:description" content="Personal Website of Eriza Zehezkiel Gracia." />
        <meta property="og:url" content="https://erizazg.my.id" />
        <meta property="og:image" content="http://raw.githubusercontent.com/Eriza-Z/Eriza-Z.github.io/master/Web/Icon/icon.webp" />
        <meta property="og:image:secure_url" content="https://raw.githubusercontent.com/Eriza-Z/Eriza-Z.github.io/master/Web/Icon/icon.webp" />
        <meta property="og:image:type" content="image/webp" />
        <meta property="og:image:width" content="256" />
        <meta property="og:image:height" content="256" />
        <meta property="og:image:alt" content="Foto lorong kelas" />
        <meta name="theme-color" content="#080452" />
        {/* Twitter Cards */}
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:site" content="@eriza_gracia" />
        <meta name="twitter:creator" content="@eriza_gracia" />
        <meta name="twitter:url" content="https://erizazg.my.id" />
        <meta name="twitter:title" content="Eriza Zehezkiel Gracia" />
        <meta name="twitter:description" content="Personal Website of Eriza Zehezkiel Gracia." />
        <meta name="twitter:image" content="https://raw.githubusercontent.com/Eriza-Z/Eriza-Z.github.io/master/Web/Icon/icon.webp" />
        <meta name="twitter:wigets:theme" content="dark" />
        {/* Apple */}
        <link rel="apple-touch-icon" href="../public/apple-touch-icon.png" />
        {/* Canonical */}
        <link rel="canonical" href="https://erizazg.my.id" />
    </Head>
    <Component {...pageProps} />
    <Script src="https://scripts.sirv.com/sirv.js"/>
    </> 
  );
}