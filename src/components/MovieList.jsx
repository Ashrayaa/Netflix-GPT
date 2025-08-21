import React from "react";
import MovieCard from "./MovieCard";

const MovieList = ({ title, movies }) => {
  return (
    <div className="z-20 flex flex-col gap-2 px-10  text-white">
      <h1 className="text-3xl font-bold py-2">{title}</h1>
      <div className="flex overflow-x-scroll ">
        <div className="flex gap-2 ">
          {movies?.map((movie) => (
            <MovieCard key={movie.id} poster_path={movie.poster_path} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default MovieList;
