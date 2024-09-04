import BottomWidget from "./bottomwidget/BottomWidget";
import TopWidget from "./topwidget/TopWidget";


const RightSection = () => {
  return (
    <div className="w-1/2 m-[30px] mt-[90px] mb-[110px] flex flex-col rounded-3xl ">
      <TopWidget />
      <hr className="border border-gray-700 m-4"/>
      <BottomWidget />
    </div>
  );
}

export default RightSection