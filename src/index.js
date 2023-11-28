import React from 'react';
import ReactDOM from 'react-dom/client';
import './App.css';
import App from "./App"
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Football from "./Routes/football";
import Error from "./error-page";
import Music from "./Routes/music";
import CP from './Routes/CP';
import Travel from "./Routes/travel";
import TVshows from "./Routes/tv";
import Movies from "./Routes/movies";
import Root from "./Routes/root";
import AngryMen from "./Routes/movie_routes/angry_men";
import Godfather from "./Routes/movie_routes/godfather"; 
import LaLaLand from "./Routes/movie_routes/land"; 
import GWH from "./Routes/movie_routes/gwh"; 
import Mitty from "./Routes/movie_routes/mitty"; 

/** element prop accepts a root component, this is our "root route" and contains the layout of the page */
/** error element accepts the page we want to show if a page doesnt exist */
/** Children contains al our pages w/ the corresponding URLs */
const router = createBrowserRouter([
  {
    element: <Root />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <App />,
      },
      {
        path: "football",
        element: <Football />,
      },
      {
        path: "movies",
        element: <Movies />,
      },
      {
        path: "travel",
        element: <Travel />,
      },
      {
        path: "music",
        element: <Music />,
      },
      {
        path: "CP",
        element: <CP />,
      },
      {
        path: "ErrorPage",
        element: <Error />,
      },
      {
        path: "tv",
        element: <TVshows />,
      },
      {
        path: "angry_men", 
        element: <AngryMen />
      }, 
      {
        path: "mitty", 
        element: <Mitty />
      }, 
      {
        path: "godfather", 
        element: <Godfather />
      }, 

      {
        path: "gwh", 
        element: <GWH /> ,
      }, 

      {
        path: "lala",
        element: <LaLaLand />
      }
    ],
  },
]);


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);