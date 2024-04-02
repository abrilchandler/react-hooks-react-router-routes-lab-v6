import { useEffect, useState } from "react";
import NavBar from "../components/NavBar";
import { useParams } from "react-router-dom";

function Movie() {
const [movie, setMovie] = useState({});
const params = useParams();
const movieId = params.movieId
useEffect(() =>{
  fetch(`http://localhost:4000/movies/${movieId}`)
  .then(r => r.json())
  .then(data => setMovie(data))
  .catch(error => console.error(error));
}, [movieId]);
// put this in the browser http://localhost:4000/movies/1
console.log(movie)
 
  return (
    <>
      <header>
        <NavBar />
        <h1>{movie.title}</h1>
      </header>
      <main>
       <p>{movie.time}</p>
      <span>{movie.genres}</span>
      </main>
    </>
  );
};

export default Movie;
