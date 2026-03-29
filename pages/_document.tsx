/* eslint-disable @next/next/google-font-display */
/* eslint-disable @next/next/no-document-import-in-page */
import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang='id'>
      <Head>
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