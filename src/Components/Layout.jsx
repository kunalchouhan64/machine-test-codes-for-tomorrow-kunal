import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { FetchUserData } from "../AsyncThunks/FetchUserData";
import SideBar from "./SideBar/SideBar";
import UserDetails from "./UserDetails/UserDetails";

const Layout = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(FetchUserData());
  }, [dispatch]);
  return (
    <>
      <div className="font-Raleway md:px-0 px-3 w-full min-h-screen flex flex-col-reverse md:flex-row">
        <SideBar />
        <UserDetails />
      </div>
    </>
  );
};

export default Layout;
