import React from "react";
import { faX } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useDispatch } from "react-redux";
import { removecard } from "../../Slices/UserDataSlice";

const UserComponent = ({ item }) => {
  const dispatch = useDispatch();
  const HandleRemoveCard = (card) => dispatch(removecard(card));

  return (
    <>
      <div className="bg-white  shadow-lg shadow-gray-300 rounded-xl  p-4">
        <div className="flex justify-end p-1">
          <button className="" onClick={() => HandleRemoveCard(item)}>
            <FontAwesomeIcon
              className="text-red-700 hover:scale-x-125 font-bold text-lg"
              icon={faX}
            />
          </button>
        </div>
        <div className="py-1 space-y-2">
          <p className="font-semibold capitalize">
            {item.id}. {item.title}
          </p>
          <p className="text-sm capitalize">{item.body}</p>
        </div>
      </div>
    </>
  );
};

export default UserComponent;
