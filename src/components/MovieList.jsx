import React from "react";
import MovieCard from "./MovieCard";

const MovieList = ({ title, movies }) => {
  return (
    <div className=" px-10">
      <h1 className="text-3xl text-white font-bold py-2">{title}</h1>
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
