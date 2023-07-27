import Logo from "../pages/shared/Logo/Logo";
import NavBar from "../pages/shared/NavBar/NavBar";
import { Outlet } from "react-router-dom";

const Main = () => {
  return (
    <>
      <div className="w-[90%] mx-auto">
        <Logo></Logo>
        <NavBar></NavBar>
        <Outlet></Outlet>
      </div>
    </>
  );
};

export default Main;
