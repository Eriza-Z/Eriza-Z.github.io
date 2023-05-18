import React from 'react'
import styles from "../../styles/Home.module.scss";

function Er500() {
  return (
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
  )
}

export default Er500