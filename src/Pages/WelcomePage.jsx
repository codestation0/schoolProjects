const WelcomePage = () => {
  return (
    <div className="grid place-content-center h-[calc(100vh-200px)] w-full">
      <p className="text-xl text-center sm:text-2xl md:text-4xl">
        <span className="bg-zinc-500 text-gray py-1 px-2 rounded-sm drop-shadow-md">
          Welcome
        </span>{" "}
        to Admin Dashboard
      </p>
    </div>
  );
};

export default WelcomePage;
