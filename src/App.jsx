import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Home from "./components/Home";
import TodoList from "./components/TodoList";
import HolyGrail from "./components/HolyGrail";
import Tabs from "./components/Tabs";
import Accordian from "./components/Accordian";
import Carousel from "./components/Carousel";
import Pagination from "./components/Pagination";
import TruncatePagination from "./components/TruncatePagination";
import InfiniteScroll from "./components/infiniteScroll";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "todo",
          element: <TodoList />,
        },
        {
          path: "holy-grail",
          element: <HolyGrail />,
        },
        {
          path: "tabs",
          element: <Tabs />,
        },
        {
          path: "accordian",
          element: <Accordian />,
        },
        {
          path: "carousel",
          element: <Carousel />,
        },
        {
          path: "pagination",
          element: <Pagination />,
        },
        {
          path: "truncated-pagination",
          element: <TruncatePagination />,
        },
        {
          path: "infinite-scroll",
          element: <InfiniteScroll />,
        },
      ],
    },
  ]);

  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
