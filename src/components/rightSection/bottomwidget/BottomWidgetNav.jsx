const BottomWidgetNav = () => {
  return (
    <div className="flex flex-col items-center">
      <div className="h-1/5 w-full  rounded-2xl mt-2 p-1 flex justify-between shadow-gray-800">
        <div className="w-1/3    lg:w-1/4  rounded-xl bg-black flex items-center justify-center">
          <button className="  text-gray-400  ">Gallery</button>
        </div>
        <div className="w-1/2 flex justify-end gap-4">
          <button className="text-xs h-full w-1/3 lg:w-1/3 bg-[#363c43] hover:text-white hover:bg-gray-700 rounded-3xl shadow-[inset_1px_1px_3px_rgba(255,255,255,0.3),8px_8px_7px_rgba(0,0,0,0.4),_-3px_-3px_3px_rgba(255,255,255,0.3)]">
           + ADD IMAGE
          </button>
          <button className=" w-auto  lg:w-1/6 text-gray-400 rounded-full hover:shadow-2xl hover:shadow-black">
            <img className="hover:shadow-xl rounded-full " src="/left1.png" alt="" />
          </button>
          <button className="h-full w-1/3  lg:w-1/6 text-gray-400 hover:text-white hover:bg-gray-700 rounded-full hover:shadow-2xl hover:shadow-black">
            -
          </button>
        </div>
      </div>
      <p className="mt-4  text-gray-500 font-medium">
        Hello! I’m Dave, your sales rep here from Salesforce. I’ve been working
        at this awesome company for 3 years now. <br /> <br />I was born and
        raised in Albany, NY& have been living in Santa Carla for the past 10
        years my wife Tiffany and my 4 year old twin daughters- Emma and Ella.
        Both of them are just starting school, so my calender is usually blocked
        between 9-10 AM.
      </p>
    </div>
  );
};

export default BottomWidgetNav;
