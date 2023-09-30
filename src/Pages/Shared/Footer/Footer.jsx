import Container from "../Container";
import Achievement from "./Achievement";
import Communication from "./Communication";
import ImportantLink from "./ImportantLink";

const Footer = () => {
  return (
    <footer className="bg-zinc-700 text-gray pt-10">
      <Container>
        <div className="grid gap-8 md:gap-0 sm:grid-cols-2 md:grid-cols-3">
          <Communication />
          <ImportantLink />
          <Achievement />
        </div>
      </Container>
      <p className="text-center py-4 bg-zinc-800 mt-10">
        &copy;Copyright {new Date().getFullYear()}. All rights reserved by
        TechAsync
      </p>
    </footer>
  );
};

export default Footer;
