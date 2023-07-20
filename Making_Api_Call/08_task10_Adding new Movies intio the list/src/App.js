import React, { useState, useEffect, useCallback } from "react";

import MoviesList from "./components/MoviesList";
import AddMovieForm from "./components/AddMovieForm";
import "./App.css";

function App() {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [intervalId, setIntervalId] = useState(null);

  const retryFetch = useCallback(() => {
    const id = setInterval(async () => {
      console.log("Retrying in 5 seconds..");
      setIsLoading(true);
      const response = await fetch("https://swapi.dev/api/film/");
      if (!response.ok) {
        clearInterval(id);
        retryFetch();
      } else {
        clearInterval(id);
        return response;
      }
    }, 5000);
    setIntervalId(id);
  },[setIntervalId]);

  const cancelRequestHandler = () => {
    console.log("stop retrying");
    clearInterval(intervalId);
    setIsLoading(false);
    setError(null);
  };

  const fetchMoviesHandler = useCallback(async()=> {
    setIsLoading(true);
    try {
      let response = await fetch("https://swapi.dev/api/films/");

      if (!response.ok) {
        // response = await retryFetch();
        response = retryFetch();

        throw new Error("Something went wrong ...Retrying");
      } else {
        const data = await response.json();
        const transformedMovies = data.results.map((movieData) => {
          return {
            id: movieData.episode_id,
            title: movieData.title,
            openingText: movieData.opening_crawl,
            releaseDate: movieData.release_date,
          };
        });
        setMovies(transformedMovies);
      }
    } catch (error) {
      setError(error.message);
    }
    setIsLoading(false);
  }, [retryFetch])


  useEffect(() => {
    fetchMoviesHandler()
  }, [fetchMoviesHandler])

  const addMovieHandler = (movieData) =>{
    setMovies((prevMovies) => [...prevMovies, movieData])
  }

  return (
    <React.Fragment>
      <AddMovieForm onAddMovie={addMovieHandler}/>
      <section>
        <button onClick={fetchMoviesHandler}>Fetch Movies</button>
        <button onClick={cancelRequestHandler}>cancel request</button>
      </section>
      <section>
        {!isLoading && movies.length > 0 && <MoviesList movies={movies} />}
        {!isLoading && movies.length === 0 && !error && <p>Found no movies.</p>}
        {!isLoading && error && <p>{error}</p>}
        {isLoading && <p>Loading...</p>}
      </section>
    </React.Fragment>
  );
}

export default App;



