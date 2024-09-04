import LeftSidebar from "../LeftSidebar";

import Nav from "./TopWidNav";
import RightSidebar from "./RightSidebar";

const TopWidget = () => {
  return (
    <div className="h-1/2 bg-[#363c43] rounded-3xl text-white flex">
      <div className=" flex justify-evenly w-full  mt-2 mb-2  lg:mt-2 lg:mb-2">
        <LeftSidebar />
        <Nav /> 
        <RightSidebar />
      </div>
    </div>
  );
};

export default TopWidget;
