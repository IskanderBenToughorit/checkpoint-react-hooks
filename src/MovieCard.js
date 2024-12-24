import React from "react";

function MovieCard({ movie }) {
  return (
    <div className="card movie-card">
    <img src={movie.posterURL} className="card-img-top" alt={movie.title} />
    <div className="card-body">
        <h5 className="card-title">{movie.title}</h5>
        <p className="card-text">{movie.description}</p>
        <span className="badge bg-primary">Note : {movie.rating}</span>
    </div>
    </div>

  );
}

export default MovieCard;
