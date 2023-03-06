import Head from "next/head";
import styles from "../styles/Home.module.scss";

export default function E500() {
  return (
    <div>
      <Head>
        {/* Web Property */}
        <meta charSet="UTF-8" />
        <meta
          name="viewport"
          content="width=device-width,minimum-scale=1,initial-scale=1"
        />
        {/* OpenGraph */}
        <meta property="og:site_name" content="Server Error - ErZ" />
        <meta property="og:title" content="Server Error - ErZ" />
        <meta property="og:url" content="https://erizazg.my.id" />
        <meta
          property="og:image"
          content="http://raw.githubusercontent.com/Eriza-Z/Eriza-Z.github.io/master/Web/Icon/icon.webp"
        />
        <meta
          property="og:image:secure_url"
          content="https://raw.githubusercontent.com/Eriza-Z/Eriza-Z.github.io/master/Web/Icon/icon.webp"
        />
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
        <meta name="twitter:title" content="Server Error - ErZ" />
        <meta
          name="twitter:image"
          content="https://raw.githubusercontent.com/Eriza-Z/Eriza-Z.github.io/master/Web/Icon/icon.webp"
        />
        <meta name="twitter:wigets:theme" content="dark" />
        {/* Apple */}
        <link rel="apple-touch-icon" href="../public/apple-touch-icon.png" />
        {/* Canonical */}
        <link rel="canonical" href="https://erizazg.my.id" />
        {/* Website Thingy */}
        <title>Server Error - ErZ</title>
        {/* <meta name="keywords" content="Eriza Zehezkiel, Eriza Z, Eriza Zehezkiel Gracia, EZGS, ezgs" /> */}
        <meta name="description" content="Uhhhh... This is 404 Bruh" />
        <meta name="author" content="Eriza Zehezkiel Gracia" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <div className="hero tengah">
          <h1 className="top-4 bottom-4">
            This Is Error Page For <strong>Error 500: Server-Side Error</strong>
          </h1>
          <h2 className="top-4 bottom-4">
            If You See This Page, Please Wait Until GitHub Done Their Job
          </h2>
          <h3 className="top-4">
            This is a very rare error, cause this error only happens when GitHub
            server encounters a problem and is down.{" "}
            <a href="https://www.githubstatus.com/" rel="noreferrer noopenner">
              Don&apos;t forget to check GitHub Status Website
            </a>{" "}
            to check has this error been solved
          </h3>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 320">
            <path
              fill="#000000"
              fill-opacity="1"
              d="M0,288L1440,288L1440,320L0,320Z"
            ></path>
          </svg>
        </div>
      </main>
      <footer className={"tengah"}>
        <h1>
          <strong>Error: 500 Server-Side Error</strong>
        </h1>
        <q className="putih">
        La Vida No Esjusta. La Vie Est Enjusta
        </q>
      </footer>
    </div>
  );
}
