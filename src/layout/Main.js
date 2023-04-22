import React from "react";
import { Outlet } from "react-router-dom";
import Nav from "../pages/Nav";

const Main = () => {
  return (
    <div className="px-10">
      <Nav />
      <Outlet />
    </div>
  );
};

export default Main;
