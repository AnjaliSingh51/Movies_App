
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import '../styles/Homepage.css'; // Ensure this path is correct

const DetailPage = () => {
  const { id } = useParams();  // Get movie ID from the URL
  const [movie, setMovie] = useState(null); // State to store movie details


  useEffect(() => {
    const fetchMovieDetails = async () => {
      try {
        // Check local JSON file first for movie details
        const localMovies = await axios.get('/movies.json');
        const localMovie = localMovies.data.find((m) => m.imdbID === id);

        if (localMovie) {
          setMovie(localMovie); // Use local data if available
        } else {
          // If not found locally, fetch details from the OMDB API
          const response = await axios.get(
            `http://www.omdbapi.com/?apikey=39a30936&i=${id}`
          );
          setMovie(response.data);
        }
      } catch (error) {
        console.error('Error fetching movie details:', error);
      }
    };
    fetchMovieDetails();
  }, [id]);

    // Show a loading message while data is being fetched
  if (!movie) return <div>Loading...</div>;

  return (
    <div className="detail-page">
      <div className="detail-container"> {/* Add this wrapper */}
        <h1>{movie.Title}</h1>
        <img src={movie.Poster} alt={movie.Title} />
        <p>{movie.Plot}</p>
        <p>Year: {movie.Year}</p>
        <p>IMDb Rating: {movie.imdbRating}</p>
      </div>
    </div>
  );
};

export default DetailPage;