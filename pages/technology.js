import React from "react";
import Head from "next/head";
import Footer from "../Components/Other/Footer"
import Tech from "../Components/Tech";

function technology() {
  return (
    <div>
      <Head>
        {/* Web Property */}
        <title>Eriza Zehezkiel Gracia</title>
        <meta charSet="UTF-8" />
        <meta
          name="viewport"
          content="width=device-width,minimum-scale=1,initial-scale=1"
        />
        <meta
          name="keywords"
          content="Eriza Zehezkiel, Eriza Z, Eriza Zehezkiel Gracia, EZGS, ezgs"
        />
        <meta name="description" content="Technology this web use" />
        <meta name="author" content="Eriza Zehezkiel Gracia" />
        <link rel="icon" href="/favicon.ico" />
        {/* OpenGraph */}
        <meta property="og:site_name" content="ErZ - Technology" />
        <meta property="og:title" content="ErZ - Technology" />
        <meta property="og:type" content="website" />
        <meta property="og:description" content="Technology this web use." />
        <meta property="og:url" content="https://erizazg.my.id/technology" />
        <meta
          property="og:image"
          content="http://raw.githubusercontent.com/Eriza-Z/Eriza-Z.github.io/master/public/EZ.png"
        />
        <meta
          property="og:image:secure_url"
          content="https://raw.githubusercontent.com/Eriza-Z/Eriza-Z.github.io/master/public/EZ.png"
        />
        <meta property="og:image:type" content="image/webp" />
        <meta property="og:image:width" content="256" />
        <meta property="og:image:height" content="256" />
        <meta property="og:image:alt" content="Eriza Zehezkiel Gracia" />
        <meta name="theme-color" content="#080452" />
        {/* Twitter Cards */}
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:site" content="@eriza_gracia" />
        <meta name="twitter:creator" content="@eriza_gracia" />
        <meta name="twitter:url" content="https://erizazg.my.id/tecnology" />
        <meta name="twitter:title" content="ErZ" />
        <meta name="twitter:description" content="Technology this web use." />
        <meta
          name="twitter:image"
          content="https://raw.githubusercontent.com/Eriza-Z/Eriza-Z.github.io/master/public/icon.jpg"
        />
        <meta name="twitter:wigets:theme" content="dark" />
        {/* Apple */}
        <link rel="apple-touch-icon" href="../public/apple-touch-icon.png" />
        {/* Canonical */}
        <link rel="canonical" href="https://erizazg.my.id" />
      </Head> 
      <Tech/>
      <Footer/>
    </div>
  );
}

export default technology;
