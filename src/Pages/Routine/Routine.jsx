import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Container from "../Shared/Container";
import RoutineCard from "./RoutineCard";

const Routine = () => {
  const [totalNotice, setTotalNotice] = useState(0);
  const [routinePerPage, setRoutinePerpage] = useState(3);
  const [currentPage, setCurrentPage] = useState(0);
  const pageNum = Math.ceil(totalNotice / routinePerPage);

  const buttonsArr = [...Array(pageNum).keys()];

  const {
    data: routines = [],
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["routines", currentPage, pageNum],
    queryFn: async () => {
      const res = await axios.get(
        `${
          import.meta.env.VITE_BASE_URL
        }/all-routine?currentPage=${currentPage}&itemPerPage=${routinePerPage}`
      );
      return res.data;
    },
  });

  useEffect(() => {
    axios
      .get("http://localhost:5000/total-routine-count")
      .then((res) => setTotalNotice(res.data.result));
  }, []);

  if (isLoading) {
    return "Loading...";
  }

  return (
    <Container>
      <div className="max-w-screen-md w-full mx-auto">
        {/* TODO: LAST NEWS  */}

        <div className="border-4 rounded-md border-primary-20/70 mb-8 h-max">
          <h1 className="bg-primary-20/70 p-3 text-center text-2xl text-white">
            ক্লাস রুটিন
          </h1>

          <div>
            {routines && routines.length > 0 && Array.isArray(routines) ? (
              <>
                {routines.map((routine) => (
                  <RoutineCard
                    key={routine._id}
                    refetch={refetch}
                    routine={routine}
                  />
                ))}
              </>
            ) : (
              <>
                <p className="text-center text-2xl py-4 text-primary-20">
                  এখন কোন নোটিশ নেই
                </p>
                <Link
                  to="/"
                  className="bg-primary-20 text-white py-1 px-2 rounded-md w-max my-5 block mx-auto"
                >
                  হোম পেজে যান
                </Link>
              </>
            )}
          </div>
          <div className="w-max mx-auto my-4 px-2 flex gap-2 items-center">
            {buttonsArr.map((button, i) => (
              <button
                onClick={() => setCurrentPage(button)}
                key={button}
                className={`w-7 h-7 border border-zinc-400 rounded-full hover:bg-zinc-500 hover:text-white transition ${
                  currentPage === button && "bg-zinc-700 text-white"
                }`}
              >
                {i + 1}
              </button>
            ))}
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Routine;
