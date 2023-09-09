import Container from "../../Pages/Shared/Container";
import mujib from "../../assets/sotobarshiki.jpg";
const Header = () => {
  return (
    <div className="bg-primary-10 py-10 text-white  relative">
      <Container>
        <div className="text-center">
          <h1 className="text-2xl sm:text-3xl font-bold mb-2">
            ফরিদপুর জেলা স্কুল ফরিদপুর
          </h1>
          <p>স্কুল কোড:ঃ ৩৫২৫, কলেজ কোডঃ ৮৩৪৪</p>
        </div>
      </Container>

      <img
        src={mujib}
        alt=""
        className="w-24 h-auto absolute top-12 right-28 hidden md:block"
      />
    </div>
  );
};

export default Header;
