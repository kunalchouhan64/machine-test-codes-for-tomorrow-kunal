import React, { useState } from "react";
import { useSelector } from "react-redux";
import UserComponent from "./UserComponent";
import Pagination from "../Pagination/Pagination";
import UserForm from "../UserForm/UserForm";

const UserDetails = () => {
  //setting page for the pagination logics
  const [page, SetPage] = useState(1);
  const [itemsperpage, SetItemsPerPage] = useState(6);

  // getting the states from the out redux-toolkit store
  const { isLoading, isError, items, defaultview, isFormEnabled } = useSelector(
    (store) => store?.userdata
  );


  // Getting the total length of the page for our pagination logic
  const totalitems = Math.ceil(items?.length / itemsperpage);

  // Getting the first and the last index for the pagination logic
  const lastindex = page * itemsperpage;
  const firstindex = lastindex - itemsperpage;


  // Handle Prev, Handle Clicked page, Handle Next Clicked functions
  const HandlePrevClicked = () => page <= 1 ? SetPage(totalitems) : SetPage(page - 1);
  const HandleClickedPage = (pageclicked) => SetPage(pageclicked);
  const HandleNextClicked = () => page >= totalitems ? SetPage(1) : SetPage(page + 1);

  // Setting the loading to the page
  if (isLoading) return  <div className="text-center font-semibold text-lg flex justify-center w-full">  <p className="tece">Loading...</p> </div>;
  // if getting error we show it to the page
  if (isError) return <div><p>Something Went Wrong !!</p> </div>;
  // toggling the form based on button clicked " we are listening"
  if (isFormEnabled) return <UserForm />;
  return (
    <>
      <div className=" w-full md:w-3/4 p-5 md:p-10 bg-[#EAF1F6]">
        {/* User Details  */}
        <div
          className={`${
            defaultview === "card"
              ? "grid grid-cols-[repeat(auto-fit,minmax(250px,1fr))] gap-7"
              : "block space-y-4"
          }`}
        >
          {items?.slice(firstindex, lastindex).map((item) => (
            <UserComponent item={item} key={item.id} />
          ))}
        </div>
        {/* Pagination component*/}
        <Pagination
          HandleNextClicked={HandleNextClicked}
          HandlePrevClicked={HandlePrevClicked}
          HandleClickedPage={HandleClickedPage}
          page={page}
          totalitems={totalitems}
        />
      </div>
    </>
  );
};

export default UserDetails;
