/* eslint-disable @next/next/google-font-display */
/* eslint-disable @next/next/no-document-import-in-page */
import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang='id'>
      <Head>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css" />
        <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Share+Tech+Mono" />
        <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Kalam" />
        <link rel="stylesheet" href="https://use.typekit.net/tfm5ykq.css" />
        <link href="https://fonts.googleapis.com/css2?family=Raleway:wght@400&display=swap" rel="stylesheet"></link>
        <noscript>
            I respect your privacy, but you need to turn on Script for full experience in this web, because the web is made with NextJS.
        </noscript>
      </Head>
      <body>
        <Main/>
        <NextScript/>
      </body>
    </Html>
  )
}