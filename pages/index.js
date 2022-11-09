import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { useEffect, useRef } from 'react'
import Typed from "typed.js";

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
        {/* Website Thingy */}
        <title>Eriza Zehezkiel Gracia</title>
        <meta name="keywords" content="Eriza Zehezkiel, Eriza Z, Eriza Zehezkiel Gracia, EZGS, ezgs" />
        <meta name="description" content="Personal Website of Eriza Zehezkiel Gracia where this Web page Layout is like a Portofolio Website Page Layout" />
        <meta name="author" content="Eriza Zehezkiel Gracia" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <section className="hero text-center">
        <Image src="https://cdn.discordapp.com/attachments/971801947910848582/1019433060028129390/IMG_20220903_183158.jpg" alt="ErZ" className="img-fluid lazy" id="HeroImage" width={756.792452829} height={350} layout="relative" priority />
          <h1 className="display-4 animate__animated animate__lightSpeedInRight">Eriza Zehezkiel Gracia. (<span className='karo'>Eriza Zehezkiel Gracia</span>)</h1>
          <h2 className="display-4 animate__animated animate__lightSpeedInLeft">I&apos;m <span ref={el} id="Typed"></span>.</h2>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 320"><path fill="#000000" fill-opacity="1" d="M0,288L1440,288L1440,320L0,320Z"></path></svg>
        </section>
      </main>
      <footer className={"text-center pb-2"}>
        <p className="text-white">
          Created With <a href="https://nextjs.org" className="text-white" target={"_blank"} rel="noreferrer noopenner">NextJS</a>, and <a href='https://code.visualstudio.com' target={"_blank"} rel="noreferrer noopenner">VS Code</a><br />
          Hope You All Have A Good Day<br />
        </p>
      </footer>
    </div>
  )
}
