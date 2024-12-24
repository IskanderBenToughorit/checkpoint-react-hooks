import React, { useState } from "react";

const MovieForm = ({ onAddMovie }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [posterURL, setPosterURL] = useState("");
  const [rating, setRating] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const newMovie = { title, description, posterURL, rating };
    onAddMovie(newMovie);
    setTitle("");
    setDescription("");
    setPosterURL("");
    setRating("");
  };

  return (
    <form className="movie-form" onSubmit={handleSubmit}>
      <div className="form-group">
        <label htmlFor="title">Titre</label>
        <input
          type="text"
          id="title"
          className="form-control"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </div>
      <div className="form-group">
        <label htmlFor="description">Description</label>
        <textarea
          id="description"
          className="form-control"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        ></textarea>
      </div>
      <div className="form-group">
        <label htmlFor="posterURL">URL de l'affiche</label>
        <input
          type="text"
          id="posterURL"
          className="form-control"
          value={posterURL}
          onChange={(e) => setPosterURL(e.target.value)}
        />
      </div>
      <div className="form-group">
        <label htmlFor="rating">Note</label>
        <input
          type="number"
          id="rating"
          className="form-control"
          value={rating}
          onChange={(e) => setRating(e.target.value)}
        />
      </div>
      <button type="submit" className="btn btn-success mt-3">
        Ajouter le Film
      </button>
    </form>
  );
};

export default MovieForm;
