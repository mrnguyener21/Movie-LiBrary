import React from 'react';
import { useSelector } from 'react-redux';
import { MoviesNavbar } from '../..';

const SelectedMovie = () => {
  const check = useSelector((state) => state.individualMovie);
  console.log(check);

  return (

    <div>
      <MoviesNavbar />
      {/* <h1>selected movies</h1> */}
    </div>
  );
};

export default SelectedMovie;
// movie poster on click
// -react router to the selected movies page DONE
// create an action and reducer to send over the appropriate data

// API GET DETAILS
// -title
// - poster
// -Rating
// -Genre
// - synopsis
// -langauge / time / year release
// -links to imbd ( use imbd id. on click redirect to https://www.imdb.com/title/{imbd id}/)

// STILL NEED TO FIND WHERE THESE DATA CAME FROM
// -the cast
// - link trailer ( gonna need to look into video players)
// -recommendations ( how to go about this... )

// - a back button
// dispatch the appropriate data to the action to grab the appropriate data
// how will this affect the home page
