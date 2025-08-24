import React from "react";
import GPTSearchBar from "./GPTSearchBar";
import GPTMovieSuggetions from "./GPTMovieSuggetions";
import { BG_IMG } from "../constants/constants";

const GPTSearch = () => {
  return (
    <>
      <div className="fixed -z-10">
        <img
          className="h-screen w-screen object-cover"
          src={BG_IMG}
          alt="bg-image"
        />
      </div>
      <div className="fixed -z-10 inset-0 bg-black opacity-50"></div>
      <div className="">
        <GPTSearchBar />
        <GPTMovieSuggetions />
      </div>
    </>
  );
};

export default GPTSearch;
