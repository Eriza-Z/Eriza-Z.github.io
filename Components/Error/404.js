import React from 'react'
import styles from "../../styles/Home.module.scss";
import Link from "next/link";

function Er404() {
  return (
    <main className={styles.main}>
        <div className="hero tengah">
          <h1 className="display-4 animate__animated animate__lightSpeedInRight mt-4 md-4">
            Looks Like The Page You Looking For Is Not Available
          </h1>
          <h2 className="display-4 animate__animated animate__lightSpeedInLeft mt-4 md-4">
            But Don&apos;t worry,{" "}
            <Link href="/">
              <em>Click Here To Go To Main Page</em>
            </Link>
          </h2>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 320">
            <path
              fill="#000000"
              fill-opacity="1"
              d="M0,288L1440,288L1440,320L0,320Z"
            ></path>
          </svg>
        </div>
      </main>
  )
}

export default Er404