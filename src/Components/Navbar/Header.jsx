import Container from "../../Pages/Shared/Container";
import mujib from "../../assets/sotobarshiki.jpg";
import logo from "../../assets/logo.jpg";
const Header = () => {
  return (
    <div className="bg-primary-10/70 py-4 sm:py-6 text-white  relative">
      <Container>
        <div className="text-center w-max mx-auto flex items-center gap-4">
          <img
            src={logo}
            alt="logo"
            className="w-12 h-12 rounded-full block object-cover"
          />
          <div>
            <h1 className="text-2xl sm:text-3xl font-bold mb-2">
              ফরিদপুর জেলা স্কুল ফরিদপুর
            </h1>
            <p>স্কুল কোড:ঃ ৩৫২৫, কলেজ কোডঃ ৮৩৪৪</p>
          </div>
        </div>
      </Container>

      <img
        src={mujib}
        alt=""
        className="w-24 h-auto absolute top-7 right-28 hidden md:block"
      />
    </div>
  );
};

export default Header;
