import React from "react";
import ReactDOM from "react-dom/client";
import App, { loader as rootLoader } from "./App";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";

import { ErrorPage } from "./components/error";
import { IndividualSchoolInformation } from "./components/IndividualSchoolInformation";
import { Home } from "./components/Home";
import { ListOfSchools } from "./components/ListOfSchools";
import { SchoolsMap } from "./components/Map";
import { Academics } from "./components/Academics";
import { Athletics } from "./components/Athletics";
import { Accessibility } from "./components/Accessibility";
import { About } from "./components/About";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    loader: rootLoader,
    children: [
      {
        errorElement: <ErrorPage />,
        children: [
          { index: true, element: <Home /> },
          {
            path: "schools",
            children: [
              { index: true, element: <ListOfSchools /> },
              {
                path: ":id",
                element: <IndividualSchoolInformation />,
              },
            ],
          },
          { path: "map", element: <SchoolsMap /> },
          { path: "academics", element: <Academics /> },
          { path: "athletics", element: <Athletics /> },
          { path: "accessibility", element: <Accessibility /> },
          { path: "about", element: <About /> },
        ],
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
