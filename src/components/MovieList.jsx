import { useLayoutEffect, useRef, useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

import MovieCard from "./MovieCard";

const MovieList = ({ title, movies }) => {
  const [isScrollable, setIsScrollable] = useState(false);
  const scrollContainer = useRef(null);

  useLayoutEffect(() => {
    const container = scrollContainer.current;
    if (!container) return;

    const checkScrollability = () => {
      setIsScrollable(container.scrollWidth > container.clientWidth);
    };

    // Check initially and whenever the container resizes
    // ResizeObserver is a modern browser API that efficiently watches for changes to an element's size.
    const resizeObserver = new ResizeObserver(checkScrollability);
    resizeObserver.observe(container);

    // Initial check in case movies are already populated
    checkScrollability();

    // Cleanup the observer
    return () => resizeObserver.disconnect();
  }, [movies]);

  const scrollLeft = () => {
    if (scrollContainer.current) {
      scrollContainer.current.scrollLeft -= 700;
    }
  };

  const scrollRight = () => {
    if (scrollContainer.current) {
      scrollContainer.current.scrollLeft += 700;
    }
  };

  return (
    <div className="px-6 lg:px-10 relative group">
      <h1 className="text-sm lg:text-3xl text-white font-bold py-2">{title}</h1>
      <div className="relative">
        {isScrollable && (
          <div
            className="absolute top-0 bottom-0 left-0 w-10 z-10 bg-gradient-to-r from-black to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center"
            onClick={scrollLeft}
          >
            <FaChevronLeft className="text-white text-4xl cursor-pointer" />
          </div>
        )}
        <div
          className="flex overflow-x-scroll no-scrollbar"
          ref={scrollContainer}
          style={{ scrollBehavior: "smooth" }}
        >
          <div className="flex gap-2 ">
            {movies?.map((movie) => (
              <MovieCard key={movie.id} poster_path={movie.poster_path} />
            ))}
          </div>
        </div>
        {isScrollable && (
          <div
            className="absolute top-0 bottom-0 right-0 w-10 z-10 bg-gradient-to-l from-black to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center"
            onClick={scrollRight}
          >
            <FaChevronRight className="text-white text-4xl cursor-pointer" />
          </div>
        )}
      </div>
    </div>
  );
};

export default MovieList;
