import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";

const AuthLayout = () => {
  return (
    <div className="py-6 min-h-screen bg-[#f3f3f3]">
      <div className="w-11/12 mx-auto">
        <header>
          <Navbar></Navbar>
        </header>
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default AuthLayout;
