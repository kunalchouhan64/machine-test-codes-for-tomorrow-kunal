import React from "react";
import { toggleform } from "../../Slices/UserDataSlice";
import { useDispatch } from "react-redux";

const WeListeningComp = ({ isFormEnabled }) => {
  const dispatch = useDispatch();
  return (
    <>
      <div className="text-center rounded-xl space-y-4 w-full p-4 bg-white  shadow-lg shadow-gray-300">
        <h2 className="text-lg md:text-2xl font-bold">Have a Feedback?</h2>
        <button
          onClick={() => dispatch(toggleform(!isFormEnabled))}
          className={`py-3 transition-all ease-linear duration-300 rounded-xl ${isFormEnabled ? "bg-red-300" : "bg-[#94E9C5] "
            } px-6 font-semibold text-lg md:text-xl text-center`}
        >
          We're Listening!
        </button>
      </div>
    </>
  );
};

export default WeListeningComp;
