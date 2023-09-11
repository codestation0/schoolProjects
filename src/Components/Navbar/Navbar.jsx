import { useState } from "react";
import Container from "../../Pages/Shared/Container";
import Desktop from "./Desktop";
import Mobile from "./Mobile";
import { RiMenu4Fill } from "react-icons/ri";
import Header from "./Header";
import { Link } from "react-router-dom";
import TextSlider from "./TextSlider";

const Navbar = () => {
  const [showNav, setShowNav] = useState(true);
  const handleNavbar = () => {
    setShowNav((prev) => !prev);
  };

  return (
    <>
      <Header />
      <TextSlider />
      <div className="bg-primary-20/80 py-4 w-full relative z-40 drop-shadow-md ">
        <Container>
          <div className="flex justify-center">
            {/* TODO: DESKTOP MENU  */}
            <Desktop />
            <Link
              to={"/"}
              className="cursor-pointer ml-2 md:hidden text-white hover:text-zinc-900"
            >
              হোম
            </Link>

            <RiMenu4Fill
              onClick={handleNavbar}
              size={25}
              className="cursor-pointer ml-auto md:hidden text-white mr-2"
            />
          </div>
        </Container>
        {/* TODO: MOBILE MENU  */}
        <Mobile showNav={showNav} handleNavbar={handleNavbar} />
      </div>
    </>
  );
};

export default Navbar;
