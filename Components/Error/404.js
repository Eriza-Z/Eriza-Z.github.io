import React from 'react'
import styles from "../../styles/Home.module.scss";
import Link from "next/link";

function Er404() {
  return (
    <main className={styles.main}>
        <div className="text-center text-white m-8 p-4 md:py-32 xl:py-32">
          <h1 className="animate__animated animate__lightSpeedInRight mt-4 md-4">
            Looks Like The Page You Looking For Is Not Available
          </h1>
          <h2 className="animate__animated animate__lightSpeedInLeft mt-4 md-4">
            But Don&apos;t worry,{" "}
            <Link href="/">
              <em>Click Here To Go To Main Page</em>
            </Link>
          </h2>
        </div>
      </main>
  )
}

export default Er404