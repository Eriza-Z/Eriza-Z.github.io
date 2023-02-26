import Link from "next/link";
import styles from "../styles/Home.module.css";

export default function GitHub() {
  return (
    <div className={styles.container}>
      {/* https://discord.gg/NXFSEdbqwk */}
      <main className={styles.main}>
        <section className="hero tengah">
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
        </section>
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
