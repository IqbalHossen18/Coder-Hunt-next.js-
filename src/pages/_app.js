import Navbar from '@/components/Navbar'
import '@/styles/globals.css'
import Head from 'next/head';
export default function App({ Component, pageProps }) {
  return <>
  <Head>
        <title>Coder Hunt</title>
        <meta name="description" content="Your custom description here." />
      </Head>
    <Navbar/>
   <Component {...pageProps} />
  </>
}
