import BottomWidget from "./bottomwidget/botwid";
import TopWidget from "./topwidget/topwid";

const RightSection = () => {
  return (
    <div className="h-3/4 w-1/2 m-[30px] mt-[90px]  flex flex-col rounded-3xl">
      <TopWidget />
      <hr className="border  border-gray-700 m-4  shadow-black" />
      <BottomWidget />
      <hr className="border border-gray-700 m-4  shadow-black" />
    </div>
  );
};

export default RightSection;
