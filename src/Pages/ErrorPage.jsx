import { Link, useRouteError } from "react-router-dom";
import error from "../assets/error.png";
const ErrorPage = () => {
  const { status, statusText } = useRouteError();

  return (
    <div className="grid place-content-center w-full h-screen bg-yellow-50">
      <div className="text-center">
        <p className="text-8xl sm:text-9xl text-amber-500 font-bold">
          {status}
        </p>
        <p className="text-3xl font-semibold text-primary-20">{statusText}</p>
        <img src={error} alt="" className="md:w-1/3 w-[80%] mx-auto" />
        <Link to={"/"}>
          <button className="bg-primary-20/90 transition-all hover:bg-primary-20 text-zinc-50 py-2 px-4 rounded-md text-xl drop-shadow-md">
            Back To Home
          </button>
        </Link>
      </div>
    </div>
  );
};

export default ErrorPage;
