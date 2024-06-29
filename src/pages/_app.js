import Footer from '@/components/footer';
import Nav from '@/components/nav';
import Navbar from '@/components/navbar';
import '@/styles/globals.css';
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
