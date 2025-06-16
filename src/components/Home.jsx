import React from "react";
import { Outlet } from "react-router-dom";

const Home = () => {
  return (
    <div>
      machine coding
      <Outlet />
    </div>
  );
};

export default Home;
