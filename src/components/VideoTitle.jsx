const VideoTitle = ({ title, overview }) => {
  return (
    <div className="w-screen aspect-video pt-[30%] lg:pt-[20%] px-6 lg:px-12 absolute text-white bg-gradient-to-r from-black">
      <h1 className="text-xl lg:text-6xl font-bold">{title}</h1>
      <p className="hidden lg:block py-6 text-lg w-2/4">{overview}</p>
      <div className="flex gap-3 mt-3 lg:mt-0">
        <button className="flex items-center justify-center cursor-pointer bg-gray-300 lg:bg-white text-black px-2 py-1 lg:py-2 lg:px-6 text-xs lg:text-lg font-medium lg:font-bold rounded-md hover:opacity-50">
          <span className="text-sm lg:text-2xl mr-2">▶</span> Play
        </button>
        <button className="hidden lg:flex mx-2 items-center justify-center cursor-pointer bg-gray-500 text-white px-2 py-1 lg:py-2 lg:px-6 text-xs lg:text-lg font-medium lg:font-bold rounded-md hover:opacity-50">
          More Info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
