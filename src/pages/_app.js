import Navbar from '@/components/Navbar'
import '@/styles/globals.css'
import Head from 'next/head';
import Script from 'next/script';
export default function App({ Component, pageProps }) {
  return <>
    <Head>
      <title>Coder Hunt</title>
      <meta name="description" content="Your custom description here." />
    </Head>
    <Script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p" crossorigin="anonymous" />
    <Navbar />
    <Component {...pageProps} />
  </>
}
