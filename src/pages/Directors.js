import { useEffect, useState } from "react";

import Movie from "../pages/Movie"
import NavBar from "../components/NavBar";

function Directors() {
  const [directors, setDirectors] = useState([]);
  


  useEffect(() => {
    fetch(`http://localhost:4000/directors`)
      .then((r) => r.json())
      .then((director) => setDirectors(director))
  }, []);

const directorList = directors.map(director => {
  return (
    <article>
      <h1>{director.name}</h1>
      <li>{director.movies}</li>
    </article>
  )
})

  return (
    <>
      <header>
        <NavBar />
        <h1>Directors Page</h1>
      </header>
      <main>
      <article>
          <h2>
          {directorList}
          </h2>
          
        </article>
      </main>
    </>
  );
};

export default Directors;
