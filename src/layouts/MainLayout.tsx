import { Outlet } from "react-router-dom";
import Navbar from "../components/navbar/Navbar";


const MainLayout = () => {
  return (
    <>
      <Navbar />
      <Outlet />
      <div>Footer</div>
    </>
  );
};

export default MainLayout;
