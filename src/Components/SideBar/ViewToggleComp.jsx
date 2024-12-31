import { faList, faTableCells } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { useDispatch } from "react-redux";
import { toggleview } from "../../Slices/UserDataSlice";

const ViewToggleComp = ({ defaultview }) => {
  const dispatch = useDispatch();
  return (
    <>
      <div className=" w-full rounded-xl space-y-2 p-3 bg-white  shadow-lg shadow-gray-300 text-center">
        <h2 className="text-lg md:text-2xl font-bold">View Toggle</h2>
        <div className="flex justify-evenly   items-center rounded-lg">
          <button
            onClick={() => {
              dispatch(toggleview("card"));
            }}
            className={`py-6 transition-all ease-linear duration-300 rounded-l-xl ${
              defaultview === "card" ? "bg-[#96EBC7]" : "bg-gray-300"
            } w-full px-4`}
          >
            <FontAwesomeIcon
              className="text-lg md:text-4xl text-black"
              icon={faTableCells}
            />
          </button>
          <button
            onClick={() => {
              dispatch(toggleview("list"));
            }}
            className={`py-6  transition-all ease-linear duration-300 rounded-r-xl ${
              defaultview === "list" ? "bg-[#96EBC7]" : "bg-gray-300"
            } w-full px-4`}
          >
            <FontAwesomeIcon className="text-lg md:text-4xl" icon={faList} />
          </button>
        </div>
      </div>
    </>
  );
};

export default ViewToggleComp;
