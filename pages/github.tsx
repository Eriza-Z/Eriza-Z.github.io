import Head from "next/head";
import Link from "next/link";
import styles from "../styles/Home.module.scss";

export default function GitHub() {
  return (
    <div>
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
        <meta property="og:site_name" content="ErZ" />
        <meta property="og:title" content="ErZ" />
        <meta property="og:type" content="website" />
        <meta property="og:description" content="Personal Website of ErZ." />
        <meta property="og:url" content="https://erizazg.my.id/github" />
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
        <meta name="twitter:url" content="https://erizazg.my.id/github" />
        <meta name="twitter:title" content="ErZ" />
        <meta name="twitter:description" content="Personal Website of ErZ." />
        <meta name="twitter:image" content="https://raw.githubusercontent.com/Eriza-Z/Eriza-Z.github.io/master/Web/Icon/icon.webp" />
        <meta name="twitter:wigets:theme" content="dark" />
        {/* Apple */}
        <link rel="apple-touch-icon" href="../public/apple-touch-icon.png" />
        {/* Canonical */}
        <link rel="canonical" href="https://erizazg.my.id/github" />
    </Head>
      {/* https://discord.gg/NXFSEdbqwk */}
      <main className={styles.main}>
        <div className="hero tengah">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1960 320">
            <path
              fill="#000000"
              fill-opacity="1"
              d="M0,288L1440,288L1440,320L0,320Z"
            ></path>
          </svg>
          <h1 className="mb-5 pb-5">
            <Link
              href="https://github.com/Eriza-Z"
              target={"_blank"}
              rel="noreferrer noopenner"
            >
              <em>Click Here</em>
            </Link>
          </h1>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1960 320">
            <path
              fill="#000000"
              fill-opacity="1"
              d="M0,288L1440,288L1440,320L0,320Z"
            ></path>
          </svg>
        </div>
      </main>
      <footer className={"tengah bottom-5 top-5"}>
        <p className="putih top-4">
          Hope You All Have A Good Day
          <br />
          {"La Vida No Enjusta, La Vie Est Enjuste"}
        </p>
      </footer>
    </div>
  );
}
