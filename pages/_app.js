import Footer from '@/components/Footer';
import Navbar from '../components/Navbar';
import '../styles/globals.css';
import Head from 'next/head';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
  <title>NefounzAI</title>
  <link rel="icon" href="/icons/favicon-32x32.png" />
  
  {/* Favicon icons */}
  <link rel="icon" type="image/png" sizes="16x16" href="/icons/favicon-16x16.png" />
  <link rel="icon" type="image/png" sizes="32x32" href="/icons/favicon-32x32.png" />
  
  {/* Apple touch icon */}
  <link rel="apple-touch-icon" sizes="180x180" href="/icons/apple-touch-icon.png" />
  
  {/* Android */}
  <link rel="icon" type="image/png" sizes="192x192" href="/icons/android-chrome-192x192.png" />
  <link rel="icon" type="image/png" sizes="512x512" href="/icons/android-chrome-512x512.png" />
  
  {/* Manifest for PWA */}
  <link rel="manifest" href="/manifest.json" />
  
  {/* Theme color for mobile browsers */}
  <meta name="theme-color" content="#ffffff" />
</Head>

      
      <Navbar />
      <Component {...pageProps} />
      <Footer />
    </>
  );
}

export default MyApp;
