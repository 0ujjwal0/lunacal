import Sidebar from "./bwiconbar";
import BottomWidgetNav from "./widmain";

const BottomWidget = () => {
  return (
    <div className="h-1/2 bg-[#363c43] rounded-3xl flex">
      <div className=" flex justify-between w-full  mt-2 mb-2  lg:mt-2 lg:mb-2">
        <Sidebar /> 
        <BottomWidgetNav />
        
      </div>
    </div>
  );
};

export default BottomWidget;
