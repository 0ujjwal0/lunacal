import BottomWidget from "./bottomwidget/BottomWidget";
import TopWidget from "./topwidget/TopWidget";

const RightSection = () => {
  return (
    <div className="h-4/6 w-1/2 m-[30px] mt-[90px] mb-[110px] flex flex-col rounded-3xl">
      <TopWidget />
      <hr className="border  border-gray-700 m-4  shadow-black" />
      <BottomWidget />
      <hr className="border border-gray-700 m-4  shadow-black" />
    </div>
  );
};

export default RightSection;
