import { Outlet } from "react-router-dom";
import { AppBar } from "../AppBar/AppBar";

export const Layout = () => {
  return (
    <div className="background">
      <div className="box">
        <AppBar />
        <Outlet />
      </div>
    </div>
  );
};
