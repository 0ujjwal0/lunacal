import { useState } from "react";

const BottomWidgetNav = () => {
  const [images, setImages] = useState([]); 
  const [currentPage, setCurrentPage] = useState(0); 
  const imagesPerPage = 3;

  
  const handleAddImage = (event) => {
    const files = event.target.files;

    for (let file of files) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImages((prevImages) => [...prevImages, reader.result]);
      };
      reader.readAsDataURL(file);
    }
  };

  
  const handlePrev = () => {
    setCurrentPage((prevPage) => Math.max(prevPage - 1, 0));
  };

  const handleNext = () => {
    const maxPage = Math.floor((images.length - 1) / imagesPerPage);
    setCurrentPage((prevPage) => Math.min(prevPage + 1, maxPage));
  };

  
  const startIndex = currentPage * imagesPerPage;
  const currentImages = images.slice(startIndex, startIndex + imagesPerPage);

  return (
    <div className=" w-full flex flex-col items-center">
      <div className="w-full rounded-2xl mt-2 p-1 flex justify-between items-center shadow-gray-800">
        <div className="h-full w-1/3 lg:w-1/4 rounded-2xl bg-black flex items-center justify-center">
          <button className="text-white">Gallery</button>
        </div>
        <div className="w-1/2 h-full flex justify-end items-center gap-4">
          <button
            onClick={() => document.getElementById("image-upload").click()}
            className="text- h-full w-2/3 lg:w-1/2 bg-[#363c43] text-gray-400 hover:text-white rounded-3xl shadow-[inset_1px_1px_3px_rgba(255,255,255,0.3),8px_8px_7px_rgba(0,0,0,0.4),_-3px_-3px_3px_rgba(255,255,255,0.3)] "
          >
            + ADD IMAGE
          </button>
          <button
            className="w-auto lg:w-1/6 hover:bg-white  rounded-full shadow-[inset_1px_1px_3px_rgba(255,255,255,0.3),8px_8px_7px_rgba(0,0,0,0.4),_-3px_-3px_3px_rgba(255,255,255,0.3)]"
            onClick={handlePrev}
            disabled={currentPage === 0}
          >
            <img
              className="shadow-xl rounded-full"
              src="/leftar.png"
              alt="Left"
            />
          </button>
          <button
            className="w-1/3 lg:w-1/6 hover:bg-white rounded-full  shadow-[inset_1px_1px_3px_rgba(255,255,255,0.3),8px_8px_7px_rgba(0,0,0,0.4),_-3px_-3px_3px_rgba(255,255,255,0.3)]"
            onClick={handleNext}
            disabled={startIndex + imagesPerPage >= images.length}
          >
            <img
              className="hover:shadow-xl rounded-full"
              src="/rightar.png"
              alt="Right"
            />
          </button>
        </div>
      </div>
      <div className="flex justify-evenly w-full h-full items-center ">
        {currentImages.length > 0 ? (
          currentImages.map((imgSrc, index) => (
            <img
              key={startIndex + index}
              src={imgSrc}
              alt={`Uploaded ${index}`}
              className="bg-gray-400 w-1/5 rounded-lg"
            />
          ))
        ) : (
          <p className="text-gray-400">No images uploaded.</p>
        )}
      </div>
      <input
        type="file"
        id="image-upload"
        accept="image/*"
        multiple
        style={{ display: "none" }}
        onChange={handleAddImage}
      />
    </div>
  );
};

export default BottomWidgetNav;
