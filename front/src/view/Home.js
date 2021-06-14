import React from 'react';

import { MovieSlider, ShowingMovieList } from '../component/home';
import { Header, Footer } from '../component';

export default function Home() {
  return (
    <>
      <Header />
      <div className='content'>
        <MovieSlider />
        <ShowingMovieList />
        <Footer />
      </div>
    </>
  );
}
