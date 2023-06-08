import React from "react";
import LeftContainer from "./Components/LeftContainer";
import RightContainer from "./Components/RightContainer";

const Page = () => {
  return (
    <div className="flex flex-row ">
      <div className="w-1/6">
        <LeftContainer />
      </div>
      <div className="w-5/6">
        <RightContainer />
      </div>
    </div>
  );
};

export default Page;
