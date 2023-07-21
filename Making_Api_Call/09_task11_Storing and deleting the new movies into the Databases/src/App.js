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
      const response = await fetch(
        "https://react-front-ec22e-default-rtdb.firebaseio.com/movies.json"
      );
      if (!response.ok) {
        clearInterval(id);
        retryFetch();
      } else {
        clearInterval(id);
        return response;
      }
    }, 5000);
    setIntervalId(id);
  }, [setIntervalId]);

  const cancelRequestHandler = () => {
    console.log("stop retrying");
    clearInterval(intervalId);
    setIsLoading(false);
    setError(null);
  };

  const fetchMoviesHandler = useCallback(async () => {
    setIsLoading(true);
    try {
      let response = await fetch(
        "https://react-front-ec22e-default-rtdb.firebaseio.com/movies.json"
      );

      if (!response.ok) {
        // response = await retryFetch();
        response = retryFetch();

        throw new Error("Something went wrong ...Retrying");
      } else {
        const data = await response.json();
        console.log(data);

        const loadedMovies = [];

        for (const key in data) {
          loadedMovies.push({
            id: key,
            title: data[key].title,
            openingText: data[key].openingText,
            releaseDate: data[key].releaseDate,
          });
        }
        setMovies(loadedMovies);
      }
    } catch (error) {
      setError(error.message);
    }
    setIsLoading(false);
  }, [retryFetch]);

  useEffect(() => {
    fetchMoviesHandler();
  }, [fetchMoviesHandler]);

  async function addMovieHandler(movie) {
    // setMovies((prevMovies) => [...prevMovies, movieData])
    try {
      const response = await fetch(
        "https://react-front-ec22e-default-rtdb.firebaseio.com/movies.json",
        {
          method: "POST",
          body: JSON.stringify(movie),
          headers: { 
            "Content-Type": "application/json",
          },
        }
      );
      if (!response.ok) {
        throw new Error("Failed to add movie...");
      } else {
        const data = await response.json();
        const id = data.name;
        const response2 = await fetch(
          `https://react-front-ec22e-default-rtdb.firebaseio.com/movies/${id}/.json`,
          {
            method: "PATCH",
            body: JSON.stringify({
              id: id,
            }),
          }
        );
        if (!response2.ok) {
          throw new Error("Failed to add movie");
        }
      }
      fetchMoviesHandler();
    } catch (error) {
      setError(error.message);
    }
    // const data = await response.json();
    // console.log(data);
  }


  const deleteMovieHandler = async (id) => {
    const response = await fetch(
      `https://react-front-ec22e-default-rtdb.firebaseio.com/movies/${id}/.json`,
      {
        method: "DELETE",
      }
    );
    if (!response.ok) {
      throw new error("Failed to delete...");
    }
    fetchMoviesHandler();
  };

  return (
    <React.Fragment>
      <section>
        <AddMovieForm onAddMovie={addMovieHandler} />
      </section>
      <section>
        <button onClick={fetchMoviesHandler}>Fetch Movies</button>
        <button onClick={cancelRequestHandler}>cancel request</button>
      </section>
      <section>
        {!isLoading && movies.length > 0 && (
          <MoviesList onDelete={deleteMovieHandler} movies={movies} />
        )}
        {!isLoading && movies.length === 0 && !error && <p>Found no movies.</p>}
        {!isLoading && error && <p>{error}</p>}
        {isLoading && <p>Loading...</p>}
      </section>
    </React.Fragment>
  );
}

export default App;
