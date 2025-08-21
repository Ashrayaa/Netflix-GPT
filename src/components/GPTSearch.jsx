import React from "react";
import GPTSearchBar from "./GPTSearchBar";
import GPTMovieSuggetions from "./GPTMovieSuggetions";
import { BG_IMG } from "../constants/constants";

const GPTSearch = () => {
  return (
    <div className="relative">
      <div className="absolute">
        <img
          className="h-screen w-screen object-cover"
          src={BG_IMG}
          alt="bg-image"
        />
      </div>
      <div className="z-20 relative flex flex-col items-center pt-[10%] h-screen">
        <GPTSearchBar />
        <GPTMovieSuggetions />
      </div>
    </div>
  );
};

export default GPTSearch;
