import Head from 'next/head'
import styles from '../styles/Home.module.css'
import { useEffect, useRef } from 'react'
import Typed from "typed.js";
import Image from 'next/image';

export default function Home() {
  const el = useRef(null);

  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: ["A Tech Lover", "A Game Lover", "A Music Lover", "Not A Developer", "Not An Anime Lover"], // Strings to display
      // Speed settings, try diffrent values untill you get good results
      // startDelay: 1000,
      typeSpeed: 25,
      backSpeed: 25,
      backDelay: 250,
      loop: true,
      showCursor: true,
      cursorChar: "!"
    });
    // Destroying
    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <div className={styles.container}>
      <Head>
        {/* Web Property */}
        <meta charSet='UTF-8'/>
        <meta name="viewport" content="width=device-width,minimum-scale=1,initial-scale=1" />
        {/* OpenGraph */}
        <meta property="og:site_name" content="ErZ" />
        <meta property="og:title" content="ErZ" />
        <meta property="og:type" content="website" />
        <meta property="og:description" content="Personal Website of ErZ." />
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
        <meta name="twitter:title" content="ErZ" />
        <meta name="twitter:description" content="Personal Website of ErZ." />
        <meta name="twitter:image" content="https://raw.githubusercontent.com/Eriza-Z/Eriza-Z.github.io/master/Web/Icon/icon.webp" />
        <meta name="twitter:wigets:theme" content="dark" />
        {/* Apple */}
        <link rel="apple-touch-icon" href="../public/apple-touch-icon.png" />
        {/* Canonical */}
        <link rel="canonical" href="https://erizazg.my.id" />
        {/* Website Thingy */}
        <title>ErZ</title>
        <meta name="keywords" content="Eriza Zehezkiel, Eriza Z, Eriza Zehezkiel Gracia, EZGS, ezgs, ErZ" />
        <meta name="description" content="Nothing" />
        <meta name="author" content="Eriza Zehezkiel Gracia" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <section className="hero tengah">
        <Image data-src="https://mergoreb.sirv.com/ErZ.webp?w=648&h=300&scale.option=noup&format=webp&q=100" alt="ErZ" className="Sirv img-fluid lazy" id="HeroImage" width={648} height={300} />
          <h1 className="display-4 animate__animated animate__lightSpeedInRight">ErZ.</h1>
          <h2 className="display-4 animate__animated animate__lightSpeedInLeft">I&apos;m <span ref={el} id="Typed"></span>.</h2>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 320"><path fill="#000000" fill-opacity="1" d="M0,288L1440,288L1440,320L0,320Z"></path></svg>
        </section>
      </main>
      <footer className={"tengah bottom-2"}>
        <q className="putih">
        La Vida No Esjusta. La Vie Est Enjusta
        </q>
      </footer>
    </div>
  )
}
