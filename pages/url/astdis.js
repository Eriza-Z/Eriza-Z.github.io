import Head from 'next/head'
import styles from '../../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        {/* Web Property */}
        <meta charSet='UTF-8'/>
        <meta name="viewport" content="width=device-width,minimum-scale=1,initial-scale=1" />
        {/* OpenGraph */}
        <meta property="og:site_name" content="ErZ - Discord" />
        <meta property="og:title" content="ErZ - Discord" />
        <meta property="og:type" content="website" />
        <meta property="og:description" content="ErZ - Discord." />
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
        <meta name="twitter:title" content="ErZ - Discord" />
        <meta name="twitter:description" content="ErZ - Discord." />
        <meta name="twitter:image" content="https://raw.githubusercontent.com/Eriza-Z/Eriza-Z.github.io/master/Web/Icon/icon.webp" />
        <meta name="twitter:wigets:theme" content="dark" />
        {/* Apple */}
        <link rel="apple-touch-icon" href="../public/apple-touch-icon.png" />
        {/* Canonical */}
        <link rel="canonical" href="https://erizazg.my.id" />
        {/* Website Thingy */}
        <title>ErZ - Discord</title>
        <meta name="keywords" content="Eriza Zehezkiel, Eriza Z, Eriza Zehezkiel Gracia, EZGS, ezgs" />
        <meta name="description" content="ErZ - Discord" />
        <meta name="author" content="Eriza Zehezkiel Gracia" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <section className="hero text-center">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1960 320"><path fill="#000000" fill-opacity="1" d="M0,288L1440,288L1440,320L0,320Z"></path></svg>
          <h1 className="mb-5 pb-5"><a href='https://discord.gg/NXFSEdbqwk' rel='noreferrer noopenner'>Click Here</a></h1>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1960 320"><path fill="#000000" fill-opacity="1" d="M0,288L1440,288L1440,320L0,320Z"></path></svg>
        </section>
      </main>
      <footer className={"text-center pb-4 pt-5 mt-5"}>
        <p className="text-white">
          Created With <a href="https://nextjs.org" className="text-white" target={"_blank"} rel="noreferrer noopenner">NextJS</a>, and <a href='https://code.visualstudio.com' target={"_blank"} rel="noreferrer noopenner">VS Code</a><br />
          Hope You All Have A Good Day<br />
        </p>
      </footer>
    </div>
  )
}
