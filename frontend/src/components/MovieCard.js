import React from 'react';
import { Link } from 'react-router-dom';
// MovieCard component to display individual movie details

const MovieCard = ({ movie }) => {
  return (

    // Clicking the card navigates to the movie's detail page using its IMDb ID

    <Link to={`/movie/${movie.imdbID}`} className="movie-card">

      <img
        src={movie.Poster === 'N/A' ? 'placeholder.jpg' : movie.Poster}
        alt={movie.Title}
      />
      <h2>{movie.Title}</h2>
      <p>{movie.Year}</p>
    </Link>
  );
};

export default MovieCard;