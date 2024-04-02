import "./index.css";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Home from "./pages/Home";
import Movie from "./pages/Movie";
import Actors from "./pages/Actors";
import Directors from "./pages/Directors";
import NotFound from "./pages/NotFound";

const router = createBrowserRouter([
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
        path: "/movies",
        element: <Movie />,
        errorElement: <NotFound />
    },
    {
        path: "/movies/:movieId",
        element: <Movie />,
        errorElement: <NotFound />
    }
])
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={router} />);
