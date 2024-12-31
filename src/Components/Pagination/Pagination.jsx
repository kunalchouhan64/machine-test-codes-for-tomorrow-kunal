import { faBackward, faForward } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const Pagination = ({
  HandlePrevClicked,
  HandleNextClicked,
  page,
  totalitems,
  HandleClickedPage,
}) => {
  // if (totalitems.length <= 0) return <p>Loading...</p>;
  return (
    <>
      <div className="text-center pt-5 font-semibold">
        <p>
          Page: {page} of {totalitems}
        </p>
      </div>
      <div className="w-full md:py-10 py-5 flex justify-center items-center flex-wrap">
        {/* Prev Button  */}
        <button onClick={() => HandlePrevClicked()} className="mx-3">
          <FontAwesomeIcon
            className="text-xl hover:scale-150 transition-all ease-linear duration-300"
            icon={faBackward}
          />
        </button>
        {/* Pagination logic  */}
        {new Array(totalitems).fill("").map((_, i) => (
          <p
            key={i + 1}
            onClick={() => HandleClickedPage(i + 1)}
            className={`h-10 hover:bg-black hover:text-white transition-all ease-linear duration-300 mx-1 cursor-pointer w-10 text-center flex justify-center items-center font-semibold ${
              page === i + 1
                ? "bg-black text-gray-200"
                : "bg-gray-300 text-gray-500"
            } bg-white rounded-full`}
          >
            {i + 1}
          </p>
        ))}
        {/* Next Button  */}
        <button onClick={() => HandleNextClicked()} className="mx-3">
          <FontAwesomeIcon
            className="text-xl hover:scale-150 transition-all ease-linear duration-300"
            icon={faForward}
          />
        </button>
      </div>
    </>
  );
};

export default Pagination;
