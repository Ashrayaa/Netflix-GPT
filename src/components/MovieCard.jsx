import React from "react";
import { IMG_CDN_URL } from "../constants/constants";

const MovieCard = ({ poster_path }) => {
  if (!poster_path) return null;
  return (
    <div className="w-48 min-h-[90%] pr-4">
      <img src={IMG_CDN_URL + poster_path} alt="Movie Poster" />
    </div>
  );
};

export default MovieCard;
