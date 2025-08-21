const VideoTitle = ({ title, overview }) => {
  return (
    <div className="w-screen aspect-video pt-[20%] px-12 absolute text-white bg-gradient-to-r from-black">
      <h1 className="text-6xl font-bold">{title}</h1>
      <p className="py-6 text-lg w-2/4">{overview}</p>
      <div className="flex gap-3">
        <button className="flex items-center justify-center cursor-pointer bg-white text-black py-2 px-6 text-lg font-bold rounded-md hover:bg-opacity-70">
          <span className="text-2xl mr-2">▶</span> Play
        </button>
        <button className="mx-2 flex items-center justify-center cursor-pointer bg-gray-500 text-white py-2 px-6 text-lg font-bold bg-opacity-60 rounded-md hover:bg-opacity-50">
          More Info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
