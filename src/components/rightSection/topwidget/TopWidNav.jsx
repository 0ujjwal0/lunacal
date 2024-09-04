const Nav = () => {
  return (
    <div className="flex flex-col items-center">
      <div className="h-12 w-full bg-black rounded-2xl mt-2 p-1 flex justify-between shadow-md shadow-gray-800">
        <button className=" w-1/3 py-1 px-4 lg:w-1/4  text-gray-400 hover:text-white hover:bg-gray-700 rounded-xl hover:shadow-2xl hover:shadow-black">
          About Me
        </button>
        <button className=" w-1/3 py-1 px-4 lg:w-1/4  text-gray-400 hover:text-white hover:bg-gray-700 rounded-xl hover:shadow-2xl hover:shadow-black">
          Experiences
        </button>
        <button className=" w-1/3 py-1 px-4 lg:w-1/4 text-gray-400 hover:text-white hover:bg-gray-700 rounded-xl hover:shadow-2xl hover:shadow-black">
          Recommended
        </button>
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

export default Nav;
