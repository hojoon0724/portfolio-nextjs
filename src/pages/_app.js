import Head from 'next/head';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import '@/styles/globals.css';
import '@/styles/fontTest.css';
import Script from 'next/script';
import 'react-grid-layout/css/styles.css';
import 'react-resizable/css/styles.css';

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <div className="top">
        <Navbar />
        <Component {...pageProps} />
        <Footer />
      </div>
    </>
  );
}
