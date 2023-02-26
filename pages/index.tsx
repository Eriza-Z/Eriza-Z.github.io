import styles from "../styles/Home.module.css";
import { useEffect, useRef } from "react";
import Typed from "typed.js";
import Image from "next/image";

export default function Home() {
  const el = useRef(null);

  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: [
        "A Tech Lover",
        "A Game Lover",
        "A Music Lover",
        "Not A Developer",
        "Not An Anime Lover",
      ], // Strings to display
      // Speed settings, try diffrent values untill you get good results
      // startDelay: 1000,
      typeSpeed: 25,
      backSpeed: 25,
      backDelay: 250,
      loop: true,
      showCursor: true,
      cursorChar: "!",
    });
    // Destroying
    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <section className="hero tengah">
          <Image
            src="https://mergoreb.sirv.com/ErZ.webp?w=648&h=300&scale.option=noup&format=webp&q=100"
            alt="ErZ"
            className="Sirv img-fluid lazy"
            id="HeroImage"
            width={648}
            height={300}
          />
          <h1 className="display-4 animate__animated animate__lightSpeedInRight">
            Eriza Zehezkiel Gracia.
          </h1>
          <h2 className="display-4 animate__animated animate__lightSpeedInLeft">
            I&apos;m <span ref={el} id="Typed"></span>.
          </h2>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 320">
            <path
              fill="#000000"
              fill-opacity="1"
              d="M0,288L1440,288L1440,320L0,320Z"
            ></path>
          </svg>
        </section>
      </main>
      <footer className={"tengah bottom-2"}>
        <p className="putih top-4">
          Hope You All Have A Good Day
          <br />
          {"La Vida No Enjusta, La Vie Est Enjuste"}
        </p>
      </footer>
    </div>
  );
}
