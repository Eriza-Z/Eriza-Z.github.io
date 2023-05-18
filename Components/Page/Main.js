import styles from "../../styles/Home.module.scss";
import Image from "next/image";
import { React, useEffect, useRef } from "react";
import Typed from "typed.js";

function Depan() {
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
    <main className={styles.main}>
        <div className="hero tengah">
          <Image
            src="https://mergoreb.sirv.com/ErZ.webp?w=324&h=150&scale.option=noup&format=webp&q=100"
            alt="ErZ"
            className="Sirv img-fluid lazy pt-2"
            id="HeroImage"
            width={324}
            height={150}
          />
          <h1 className="display-4 animate__animated animate__lightSpeedInRight">
            Eriza Zehezkiel Gracia.
          </h1>
          <h2 className="display-4 animate__animated animate__lightSpeedInLeft h2-utama">
            I&apos;m <span ref={el} id="Typed"></span>
          </h2>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 225">
            <path
              fill="#000000"
              fillOpacity="1"
            ></path>
          </svg>
        </div>
      </main>
  )
}

export default Depan