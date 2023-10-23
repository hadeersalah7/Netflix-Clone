import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        {/* google font */}
      <link rel="preconnect" href="https://fonts.googleapis.com" />
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
<link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@300&family=Roboto+Slab:wght@400;700&display=swap" rel="stylesheet" />

      </Head>
      <body>
        <Main>
          {/* <h1>Welcome to Next JS</h1> */}
          </Main>
        <NextScript />
      </body>
    </Html>
  )
}
