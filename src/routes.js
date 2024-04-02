import Home from "./pages/Home";
import Movie from "./pages/Movie";
import Actors from "./pages/Actors";
import Directors from "./pages/Directors";
import NotFound from "./pages/NotFound";

const routes = [
  {
    path: "/",
    element: <Home />,
    errorElement: <NotFound />
},
{
    path: "/actors",
    element: <Actors />,
    errorElement: <NotFound />
},
{
    path: "/directors",
    element: <Directors />,
    errorElement: <NotFound />
},
{
    path: "/movie",
    element: <Movie />,
    errorElement: <NotFound />
},
{
    path: "/movie/:movieId",
    element: <Movie />,
    errorElement: <NotFound />
}
  ];

export default routes;