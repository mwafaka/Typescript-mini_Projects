//4a3b711b
import { useEffect, useState } from "react";
import "./App.css";

interface Movie {
  Title: string;
  Year: string;
  imdbID: string;
  Type: string;
  Poster: string;
}

const App: React.FC = () => {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [searchTerm, setSearchTerm] = useState<string>("");

  useEffect(() => {
    const fetchMovies = async () => {
      if (searchTerm) {
        const response = await fetch(
          `http://www.omdbapi.com/?s=${searchTerm}&apikey=?`
        );
        const data = await response.json();
        if (data.Search) {
          setMovies(data.Search);
        }
      }
    };

    fetchMovies();
  }, [searchTerm]);

  return (
    <div className="App">
      <h1>Movie App</h1>
      <input
        type="text"
        placeholder="Search for a movie..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <div className="movie-list">
        {movies.map((movie) => (
          <div key={movie.imdbID} className="movie">
            <h2>{movie.Title}</h2>
            <p>{movie.Year}</p>
            <img src={movie.Poster} alt={`${movie.Title} Poster`} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default App;
