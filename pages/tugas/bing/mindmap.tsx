import Head from "next/head";
import Footer from "../../../Components/Other/Footer"
import Bingmap from '../../../Components/Page/tugas/bahasa inggris/mindmap'
import React from "react";

export default function Home() {
  return (
    <section className="justify-between bg-green-900">
      <Head>
        {/* Web Property */}
        <title>Tugas Mind Mapping</title>
        <meta charSet="UTF-8" />
        <meta
          name="viewport"
          content="width=device-width,minimum-scale=1,initial-scale=1"
        />
        <meta
          name="description"
          content="Tugas Mind Mapping Bahasa Inggris Eriza Zehezkiel Gracia"
        />
        <meta name="author" content="Eriza Zehezkiel Gracia" />
        <link rel="icon" href="/favicon.ico" />
        {/* OpenGraph */}
        <meta property="og:site_name" content="Tugas Mind Mapping" />
        <meta property="og:title" content="Tugas Mind Mapping" />
        <meta property="og:type" content="website" />
        <meta property="og:description" content="Tugas Mind Mapping Bahasa Inggris Eriza Zehezkiel Gracia." />
        <meta property="og:url" content="https://erizazg.my.id/tugas/bing/mindmap" />
        <meta
          property="og:image"
          content="http://raw.githubusercontent.com/Eriza-Z/Eriza-Z.github.io/master/public/icon.jpg"
        />
        <meta
          property="og:image:secure_url"
          content="https://raw.githubusercontent.com/Eriza-Z/Eriza-Z.github.io/master/public/icon.jpg"
        />
        <meta property="og:image:type" content="image/webp" />
        <meta property="og:image:width" content="256" />
        <meta property="og:image:height" content="256" />
        <meta property="og:image:alt" content="ErXZ" />
        <meta name="theme-color" content="#080452" />
        {/* Twitter Cards */}
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:site" content="@eriza_gracia" />
        <meta name="twitter:creator" content="@eriza_gracia" />
        <meta name="twitter:url" content="https://erizazg.my.id/tugas/bing/mindmap" />
        <meta name="twitter:title" content="ErZ" />
        <meta name="twitter:description" content="Tugas Mind Mapping Bahasa Inggris Eriza Zehezkiel Gracia." />
        <meta
          name="twitter:image"
          content="https://raw.githubusercontent.com/Eriza-Z/Eriza-Z.github.io/master/public/icon.jpg"
        />
        <meta name="twitter:wigets:theme" content="dark" />
        {/* Apple */}
        <link rel="apple-touch-icon" href="../public/apple-touch-icon.png" />
        {/* Canonical */}
        <link rel="canonical" href="https://erizazg.my.id/tugas/bing/mindmap" />
      </Head>
      <Bingmap/>
    </section>
  );
}
