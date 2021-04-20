import '../styles/globals.scss';

import Head from 'next/head';
import styled from '../styles/app.module.scss';

// Components
import Header from '../components/Header';
import Player from '../components/Player';

function MyApp({ Component, pageProps }) {
  return (
    <div className={styled.wrapper}>
      <Head>
        <title>PodCaster</title>
        <link rel="icon" href="/favicon.png" />
      </Head>

      <main>
        <Header/>
        <Component {...pageProps} />
      </main>

      <Player />
    </div>
  )
}

export default MyApp;
