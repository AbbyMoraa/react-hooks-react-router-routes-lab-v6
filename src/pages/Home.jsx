import { useEffect, useState } from "react";
import MovieCard from "../components/MovieCard";
import NavBar from "../components/NavBar";
import Movie from "./Movie";

function Home() {
    const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetch("http://localhost:4000/movies")
      .then((r) => r.json())
      .then(setMovies);
  }, []);

  return (
    <>
      <header>
        <NavBar/>
        {/* What component should go here? */}
      </header>
      <main>
        {movies.map((Movie) => <MovieCard key={movies.id} id={Movie.id} title={movies.title} />
      )}
      </main>
    </>
  );
};

export default Home;
