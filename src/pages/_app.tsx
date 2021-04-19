import Head from 'next/head';
import { GlobalStyles } from '../styles/globals';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <GlobalStyles />

      <Component {...pageProps} />
    </>
  )
}

export default MyApp;
