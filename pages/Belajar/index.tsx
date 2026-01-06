import Head from "next/head";
import FooterBelajar from "../../Components/Other/Footer-belajar";
import Belajar from "../../Components/Page/Belajar";

export default function link() {
  return (
    <div>
      <Head>
        {/* Web Property */}
        <title>ErZ - Belajar</title>
        <meta property="og:image:type" content="image/webp" />
        <meta property="og:image:width" content="256" />
        <meta property="og:image:height" content="256" />
        <meta property="og:image:alt" content="Foto lorong kelas" />
        <meta name="theme-color" content="#080452" />
        {/* Twitter Cards */}
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:site" content="@eriza_gracia" />
        <meta name="twitter:creator" content="@eriza_gracia" />
        <meta name="twitter:url" content="https://erizazg.my.id/belajar" />
        <meta name="twitter:title" content="ErZ" />
        <meta name="twitter:description" content="ErZ Link Webpage." />
        <meta
          name="twitter:image"
          content="https://raw.githubusercontent.com/Eriza-Z/Eriza-Z.github.io/master/public/icon.jpg"
        />
        <meta name="twitter:wigets:theme" content="dark" />
        {/* Apple */}
        <link rel="apple-touch-icon" href="../public/apple-touch-icon.png" />
        {/* Canonical */}
        <link rel="canonical" href="https://erizazg.my.id/belajar" />
      </Head>
      <Belajar />
      <FooterBelajar />
    </div>
  );
}
