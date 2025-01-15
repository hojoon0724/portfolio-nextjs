import Navbar from '@/components/navbar';
import Footer from '@/components/footer';
import '@/styles/globals.css';
import '@/styles/fontTest.css';
import Script from 'next/script';
import 'react-grid-layout/css/styles.css';
import 'react-resizable/css/styles.css';

export default function App({ Component, pageProps }) {
  return (
    <div className="top flex flex-col">
      <Navbar />
      <Component {...pageProps} />
      <Footer />
    </div>
  );
}
