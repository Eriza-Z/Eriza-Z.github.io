import Head from "next/head";
import Er500 from "../Components/Error/Er500"

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
        <meta name="description" content="Uhhhh... This is Error 500 Bruh" />
        <meta name="author" content="Eriza Zehezkiel Gracia" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Er500/>
      <footer>
        <p className="tengah">
          Error: 500<br/>
          Type: Server Error
        </p>
      </footer>
    </div>
  );
}
