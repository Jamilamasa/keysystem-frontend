import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../components/navbar/Navbar";

type Props = {};

const MainLayout = (props: Props) => {
  return (
    <>
      <Navbar />
      <Outlet />
      <div>Footer</div>
    </>
  );
};

export default MainLayout;
