import React, { useState, useEffect } from 'react';

import { MovieListItemType } from '../../util/type';

const testData = [
  {
    movieId: 0,
    movieTitle: '테스트 영화 1',
  },
  {
    movieId: 1,
    movieTitle: '테스트 영화 2',
  },
];

export default function MovieSlider() {
  const [movieList] = useState<Array<MovieListItemType>>(testData);
  const [pos, setPos] = useState<number>(0);
  const numOfMovies = movieList.length;

  useEffect(() => {

  }, []);
  function leftClick() {
    let left;
    if (pos === 0) left = numOfMovies - 1;
    else left = pos - 1;
    setPos(left);
  }
  function rightClick() {
    let right;
    if (pos === numOfMovies - 1) right = 0;
    else right = pos + 1;
    setPos(right);
  }

  return (
    <div className="slider">
      <input onClick={leftClick} type="button" className="slider-left-btn" />
      <input onClick={rightClick} type="button" className="slider-right-btn" />
      <a href="/">
        <div className="slider-content">
          {movieList[pos].movieTitle}
        </div>
      </a>
    </div>
  );
}
