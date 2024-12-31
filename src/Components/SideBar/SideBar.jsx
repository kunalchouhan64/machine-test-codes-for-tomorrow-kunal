import React from "react";
import ViewToggleComp from "./ViewToggleComp";
import WeListeningComp from "./WeListeningComp";
import AuthorComp from "./AuthorComp";
import { useSelector } from "react-redux";

const SideBar = () => {
  // subscrinbing the states from the redux store
  const { defaultview, isFormEnabled } = useSelector((store) => store.userdata);

  return (
    <>
      <div className="sticky top-0 w-full md:w-1/4 py-7 px-5 md:px-12 md:py-16 bg-[#EAF1F6] shadow-lg shadow-slate-500 flex flex-col justify-start items-center gap-8">
        {/* Auther component */}
        <AuthorComp />
        {/* Toggle  component with toggling the form*/}
        {isFormEnabled ? null : (
          <ViewToggleComp
            isFormEnabled={isFormEnabled}
            defaultview={defaultview}
          />
        )}
        {/* Feedback compoent */}
        <WeListeningComp isFormEnabled={isFormEnabled} />
      </div>
    </>
  );
};

export default SideBar;
