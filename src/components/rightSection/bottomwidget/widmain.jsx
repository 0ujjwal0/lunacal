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
    const maxPage = Math.floor((totalImages.length - 1) / imagesPerPage);
    setCurrentPage((prevPage) => Math.min(prevPage + 1, maxPage));
  };

  const startIndex = currentPage * imagesPerPage;
  const totalImages = [
    "/building.jpeg",
    "/building.jpeg",
    "/building.jpeg",
    ...images,
  ];
  const currentImages = totalImages.slice(
    startIndex,
    startIndex + imagesPerPage
  );

  return (
    <div className="w-full flex flex-col items-center px-4 py-2 md:px-8 md:py-4">
      <div className="w-full rounded-2xl  p-1 flex flex-col md:flex-row justify-between items-center ">
        <div className="h-full w-full md:w-1/3 lg:w-1/4 rounded-2xl bg-black flex items-center justify-center mb-2 md:mb-0">
          <div className="text-white select-none">Gallery</div>
        </div>
        <div className="w-full h-full md:w-2/3 lg:w-1/2 flex justify-between items-center gap-2 md:gap-4">
          <button
            onClick={() => document.getElementById("image-upload").click()}
            className=" flex-grow h-full text-gray-400 bg-[#363c43] hover:text-white rounded-3xl shadow-[inset_1px_1px_3px_rgba(255,255,255,0.3),8px_8px_7px_rgba(0,0,0,0.4),_-3px_-3px_3px_rgba(255,255,255,0.3)]"
          >
            + ADD IMAGE
          </button>
          <button
            className="w-10 h-10 md:w-12 md:h-12 hover:bg-white rounded-full shadow-[inset_1px_1px_3px_rgba(255,255,255,0.3),8px_8px_7px_rgba(0,0,0,0.4),_-3px_-3px_3px_rgba(255,255,255,0.3)]"
            onClick={handlePrev}
            disabled={currentPage === 0}
          >
            <img
              className="w-full h-full object-cover rounded-full"
              src="/leftar.png"
              alt="Left"
            />
          </button>
          <button
            className="w-10 h-10 md:w-12 md:h-12 hover:bg-white rounded-full shadow-[inset_1px_1px_3px_rgba(255,255,255,0.3),8px_8px_7px_rgba(0,0,0,0.4),_-3px_-3px_3px_rgba(255,255,255,0.3)]"
            onClick={handleNext}
            disabled={startIndex + imagesPerPage >= totalImages.length}
          >
            <img
              className="w-full h-full object-cover rounded-full"
              src="/rightar.png"
              alt="Right"
            />
          </button>
        </div>
      </div>
      <div className="flex flex-wrap justify-evenly gap-4 mt-4">
        {currentImages.length > 0 ? (
          currentImages.map((imgSrc, index) => (
            <img
              key={startIndex + index}
              src={imgSrc}
              alt={`${index}`}
              className="w-1/3 md:w-1/4 lg:w-1/5 h-24 md:h-32 object-cover rounded-xl"
            />
          ))
        ) : (
          null
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
