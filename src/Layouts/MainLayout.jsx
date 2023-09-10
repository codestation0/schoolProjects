import { Outlet } from "react-router-dom";
import Navbar from "../Components/Navbar/Navbar";
import Footer from "../Pages/Shared/Footer/Footer";

const MainLayout = () => {
  return (
    <div className="w-full min-h-screen flex flex-col">
      <div className="mb-4">
        <Navbar />
      </div>
      <Outlet />
      <div className="mt-auto">
        <Footer />
      </div>
    </div>
  );
};

export default MainLayout;
