/* eslint-disable @next/next/google-font-display */
/* eslint-disable @next/next/no-document-import-in-page */
import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang='id'>
      <Head>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css" />
        <link rel="preconnect" href="https://fonts.googleapis.com"/>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin=''/>
        <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@500&display=swap" rel="stylesheet"/>
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