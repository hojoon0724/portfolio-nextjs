import Navbar from '@/components/navbar';
import Footer from '@/components/footer';
import '@/styles/globals.css';
import '@/styles/fontTest.css';
import Script from 'next/script';

export default function App({ Component, pageProps }) {
  return (
    <div className="top flex column">
      <Navbar />
      <Component {...pageProps} />
      <Footer />
    </div>
  );
}
