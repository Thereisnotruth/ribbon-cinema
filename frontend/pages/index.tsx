import React from 'react';
import Head from 'next/head';

import { MovieSlider, ShowingMovieList } from '../component/home';

export default function Home() {
  return (
    <>
      <Head>
        <title>Ribbon Cinema</title>
      </Head>
      <MovieSlider />
      <ShowingMovieList />
    </>
  );
}
