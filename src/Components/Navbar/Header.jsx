import Container from "../../Pages/Shared/Container";
import mujib from "../../assets/sotobarshiki.jpg";
import logo from "../../assets/logo.jpg";
const Header = () => {
  return (
    <div className="bg-primary-10/70 py-4 sm:py-6 text-white  relative">
      <Container>
        <div className="text-center flex items-center gap-4 justify-between">
          <div className="flex items-center gap-2">
            <img src={logo} alt="logo" className="w-20 " />
            <div className="">
              <h1 className=" sm:text-3xl font-bold mb-2">
                ফরিদপুর জেলা স্কুল ফরিদপুর
              </h1>
              <p>স্কুল কোড:ঃ ৩৫২৫, কলেজ কোডঃ ৮৩৪৪</p>
            </div>
          </div>
          <img src={mujib} alt="" className="w-28 h-auto" />
        </div>
      </Container>
    </div>
  );
};

export default Header;
