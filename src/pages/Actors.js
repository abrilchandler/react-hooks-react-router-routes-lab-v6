import { useEffect, useState } from "react";
import NavBar from "../components/NavBar";
import Movie from "../pages/Movie";

function Actors() {
  const[actors, setActors] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:4000/actors`)
      .then((r) => r.json())
      .then((data) => setActors(data))
  }, [actors]);

  const actorList = actors.map(actor => {
    return (
      <article>
        <h2>{actor.name}</h2>
        <a href={`/actors/${actor.id}`}>View details</a>
      <ul>
        {actor.movies}
      </ul>
      </article>
    )
  })

  return (
    <>
      <header>
        <NavBar />
        <h1>Actors Page</h1>
      </header>
      <main>
        <article>
          <ul>
          {actorList}
          </ul>
        </article>
       
      </main>
    </>
  );
};

export default Actors;
