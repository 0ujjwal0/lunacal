import { useState } from "react";

const Nav = () => {
  const [text, setText] = useState("about");

  const texts = {
    about:
      "Hello! I’m Dave, your sales rep here from Salesforce. I’ve been working at this awesome company for 3 years now. <br /> I was born and raised in Albany, NY & have been living in Santa Carla for the past 10 years with my wife Tiffany and our 4-year-old twin daughters, Emma and Ella. Both of them are just starting school, so my calendar is usually blocked between 9-10 AM.",
    experiences:
      "At Salesforce, I helped a retail company increase their lead conversion by 30% in six months by optimizing their CRM. I also assisted a healthcare company in upgrading their data management, which improved their service quality.",
    recommended:
      "Recommended by: Dave's work in boosting a retail company’s lead conversion by 30% and improving data management for a healthcare client highlights his CRM expertise and dedication. He is a standout professional in sales and CRM. — Jane Smith, Senior Sales Manager",
  };

  const Button = (section) => {
    return text === section
      ? "w-1/3 py-1 px-4 lg:w-1/4 text-gray-400 text-white bg-gray-700 rounded-xl shadow-2xl shadow-black"
      : "w-1/3 py-1 px-4 lg:w-1/4 text-gray-400 hover:text-white hover:bg-gray-700 rounded-xl hover:shadow-2xl hover:shadow-black";
  };

  return (
    <div className=" flex flex-col items-center">
      <div className="h-1/5 w-full bg-black rounded-2xl mt-2 p-1 flex justify-between shadow-md shadow-gray-800">
        <button
          className={Button("about")}
          onClick={() => setText("about")}
        >
          About Me
        </button>
        <button
          className={Button("experiences")}
          onClick={() => setText("experiences")}
        >
          Experiences
        </button>
        <button
          className={Button("recommended")}
          onClick={() => setText("recommended")}
        >
          Recommended
        </button>
      </div>
      <div
        className=" w-11/12 h-full mt-2 text-gray-400 font-medium"
        dangerouslySetInnerHTML={{ __html: texts[text] }}
      />
    </div>
  );
};

export default Nav;
