import React from 'react';
import { AppProps } from 'next/app';

import { Header, Footer } from '../component';
import '../styles/main.scss';

function App({ Component, pageProps } : AppProps) {
  return (
    <>
      <Header />
      <div className="content">
        <Component {...pageProps} />
        <Footer />
      </div>
    </>
  );
}

export default App;
