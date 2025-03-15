
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import MovieCard from '../components/MovieCard';
import Pagination from '../components/Pagination';
import Search from '../components/Search';
import '../styles/Homepage.css';

const Homepage = () => {
  const [movies, setMovies] = useState([]); // All movies from movies.json
  const [searchResults, setSearchResults] = useState([]); // Search results
  const [currentPage, setCurrentPage] = useState(1); // Current page for pagination
  const [moviesPerPage] = useState(20); // Display 20 movies per page but its not working only 10 shows

  // Fetch movies from movies.json
  useEffect(() => {
    const fetchMoviesData = async () => {
      try {
        const response = await axios.get('/movies.json'); // Get movie data
        setMovies(response.data); // Store movie data in state
      } catch (error) {
        console.error('Error fetching movies:', error);
      }
    };
    fetchMoviesData();
  }, []);

  // Pagination logic
  const indexOfLastMovie = currentPage * moviesPerPage;
  const indexOfFirstMovie = indexOfLastMovie - moviesPerPage;

    // Get the movies to display on the current page (use search results if available)

  const currentMovies = searchResults.length > 0 ? searchResults.slice(indexOfFirstMovie, indexOfLastMovie) : movies.slice(indexOfFirstMovie, indexOfLastMovie);

  return (
    <div className="homepage">
      <h1>Movies & TV Shows</h1>
      <Search setSearchResults={setSearchResults} />
      <div className="movie-list">
        {currentMovies.map((movie) => (
          <MovieCard key={movie.imdbID} movie={movie} />
        ))}
      </div>
      <Pagination
        moviesPerPage={moviesPerPage}
        totalMovies={searchResults.length > 0 ? searchResults.length : movies.length}
        paginate={setCurrentPage}
        currentPage={currentPage}
      />
    </div>
  );
};

export default Homepage;