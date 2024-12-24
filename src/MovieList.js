import React from "react";
import "./MovieList.css";

const MovieList = ({ movies, filter }) => {
  // Filter movies based on title or rating
  const filteredMovies = movies.filter((movie) => {
    return (
      movie.title.toLowerCase().includes(filter.title.toLowerCase()) &&
      movie.rating.toString().includes(filter.rating)
    );
  });

  return (
    <div className="movie-list-container">
      {filteredMovies.map((movie, index) => (
        <div key={index} className="movie-card">
          <img src={movie.posterURL} alt={movie.title} className="movie-poster" />
          <div className="movie-details">
            <h5 className="movie-title">{movie.title}</h5>
            <p className="movie-description">{movie.description}</p>
            <p className="rating">Rating: {movie.rating}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default MovieList;
