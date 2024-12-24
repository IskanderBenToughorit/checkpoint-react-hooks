import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import MovieList from "./MovieList";
import Filtre from "./Filtre";
import MovieForm from "./MovieForm";

function App() {
  const [movies, setMovies] = useState([
    {
      title: "Inception",
      description:
        "Un voleur spécialisé dans l'extraction des secrets enfouis dans les rêves accepte une dernière mission dangereuse : semer une idée dans le subconscient d'un homme.",
      posterURL:
        "https://play-lh.googleusercontent.com/-qtECEmfe9yjg9w57QlILDP8Bgk5mT-cOUduloX_48y_NGYaP4dgZnrY0tUP7WX5x-vXEKhOzWL-QgFXyp4",
      rating: 9,
    },
    {
      title: "The Dark Knight",
      description:
        "Batman, le lieutenant Gordon et le procureur Harvey Dent s'allient contre le Joker, le génie du crime au maquillage macabre qui terrorise Gotham City.",
      posterURL:
        "https://m.media-amazon.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_FMjpg_UX1000_.jpg",
      rating: 9.5,
    },
    {
      title: "Django Unchained",
      description:
        "Un esclave affranchi nommé Django traverse les États-Unis en compagnie d'un chasseur de primes allemand pour libérer sa femme, prisonnière d'un propriétaire de plantation.",
      posterURL: "https://upload.wikimedia.org/wikipedia/en/8/8b/Django_Unchained_Poster.jpg",
      rating: 8.4,
    },
    {
      title: "The Equalizer",
      description:
        "Un agent secret à la retraite reprend du service à contrecœur pour protéger une jeune travailleuse du gangsters violents.",
      posterURL: "https://m.media-amazon.com/images/I/917kSWkwX1L._AC_UF1000,1000_QL80_.jpg",
      rating: 7.2,
    },
    {
      title: "The Equalizer 2",
      description:
        "Ex-agent de la DIA devenu justicier autoproclamé, Robert McCall décide de reprendre les armes pour venger la mort d'une amie proche qui est aussi une ancienne collègue.",
      posterURL: "https://m.media-amazon.com/images/M/MV5BMTU2OTYzODQyMF5BMl5BanBnXkFtZTgwNjU3Njk5NTM@._V1_FMjpg_UX1000_.jpg",
      rating: 6.7,
    },
  ]);

  const [filter, setFilter] = useState({ title: "", rating: "" });
  const [showForm, setShowForm] = useState(false);

  const handleAddMovie = (movie) => {
    if (!movie.title || !movie.description || !movie.posterURL || !movie.rating) {
      alert("Tous les champs sont obligatoires !");
      return;
    }
    setMovies([...movies, movie]);
  };

  const handleFilterChange = (newFilter) => {
    setFilter(newFilter);
  };

  return (
    <div className="App container mt-5">
      <h1 className="text-center mb-4">FilmFlix</h1>
      <Filtre filter={filter} onFilterChange={handleFilterChange} />
      
      <button
        className="btn btn-primary mb-4 animate__animated animate__pulse animate__infinite"
        onClick={() => setShowForm(!showForm)}
      >
        {showForm ? "Masquer le Formulaire" : "Ajouter un Film"}
      </button>
      
      {showForm && <MovieForm onAddMovie={handleAddMovie} />}
      
      <MovieList movies={movies} filter={filter} />
    </div>
  );
}

export default App;
