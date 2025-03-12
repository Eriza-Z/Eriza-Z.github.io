import React from 'react'
import styles from "../../styles/Home.module.scss";

function Er500() {
  return (
    <main className={styles.main}>
        <div className="text-center text-white">
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
        </div>
      </main>
  )
}

export default Er500