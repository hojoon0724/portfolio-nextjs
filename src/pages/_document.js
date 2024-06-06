import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Roboto+Flex:opsz,slnt,wdth,wght,GRAD,XOPQ,XTRA,YOPQ,YTLC,YTUC@8..144,-10..0,25..151,100..1000,-200..150,27..175,323..603,25..135,416..570,528..760&family=Roboto+Mono:ital,wght@0,100..700;1,100..700&family=Roboto+Slab:wght@100..900&display=swap"
          rel="stylesheet"
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
