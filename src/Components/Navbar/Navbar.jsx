import { useState } from "react";
import Container from "../../Pages/Shared/Container";
import Desktop from "./Desktop";
import Mobile from "./Mobile";
import { RiMenu4Fill } from "react-icons/ri";

const Navbar = () => {
  const [showNav, setShowNav] = useState(true);
  const handleNavbar = () => {
    setShowNav((prev) => !prev);
  };
  return (
    <div className="bg-primary-20 py-2 fixed top-0 left-0 w-full">
      <Container>
        <div className="flex">
          {/* <Link to={"/"}>
            <LiaSchoolSolid size={30} />
          </Link>
          <Link to={"/notice"} className="text-rose-400 font-bold">
            নোটিশ
          </Link> */}
          <Desktop />
          <RiMenu4Fill
            onClick={handleNavbar}
            size={25}
            className="cursor-pointer ml-auto md:hidden"
          />

          <Mobile
            showNav={showNav}
            handleNavbar={handleNavbar}
           
          />
        </div>
      </Container>
    </div>
  );
};

export default Navbar;
