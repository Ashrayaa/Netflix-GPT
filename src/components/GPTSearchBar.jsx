import { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import toast, { Toaster } from "react-hot-toast";

// import client from "../utils/openAI";

import { lang } from "../constants/languageConstants";
import { API_OPTIONS } from "../constants/constants";

import { addGPTMovieResults } from "../store/gptSlice";

const GPTSearchBar = () => {
  const langKey = useSelector((store) => store.config.lang);
  const searchText = useRef("");
  const dispatch = useDispatch();

  //Function to search a movie in TMDB database
  const searchMovieTMDB = async (movie) => {
    const data = await fetch(
      `https://api.themoviedb.org/3/search/movie?query=${movie}&include_adult=false&language=en-US&page=1`,
      API_OPTIONS
    );
    const jsonResults = await data.json();
    console.log("TMDB Results:", jsonResults);

    return jsonResults.results;
  };

  const handleGptSearchClick = async () => {
    try {
      // const gptQuery =
      //   "Act as a Movie Recommendation System and suggest some movies for the query: " +
      //   searchText.current.value +
      //   " Only give me names of 5 movies , comma separated. Like the example below: " +
      //   " Movie1, Movie2, Movie3, Movie4, Movie5";

      // const gptResults = await client.chat.completions.create({
      //   model: "gpt-3.5-turbo",
      //   messages: [{ role: "user", content: gptQuery }],
      // });
      // if (!gptResults.choices || gptResults.choices.length === 0) {
      //   toast.error("Sorry, we couldn't find suggestions for that.");

      //   return;
      // }
      // console.log("GPT Results:", gptResults.choices?.[0]?.message?.content);
      const gptMovies = [
        "Drishyam",
        "Kireedam",
        "Pyaar",
        "Kaithi",
        "Soorarai Pottru",
        "Nayakan",
        "Kabhi Khushi Kabhie Gham",
        "Kaho Naa Pyaar Hai",
        "Dilwale Dulhania Le Jayenge",
        "3 Idiots",
      ];

      const PromiseArray = gptMovies.map((movie) => searchMovieTMDB(movie));
      const tmdbResults = await Promise.all(PromiseArray);
      // const gptMovies = gptResults.choices?.[0]?.message?.content
      //   .split(",")
      //   .map((movie) => searchMovieTMDB(movie.trim()))
      //   .filter((name) => name.length > 0);
      // console.log("Movie Names:", gptMovies);
      // const tmdbResults = await Promise.all(gptMovies);
      console.log("TMDB Results:", tmdbResults);
      //Dispatch tmdbResults to the store
      dispatch(
        addGPTMovieResults({ movieNames: gptMovies, movieResults: tmdbResults })
      );
    } catch (error) {
      if (error.status === 429) {
        toast.error(
          "You're sending requests too quickly. Please wait a moment."
        );
      } else {
        console.error("OpenAI API Error:", error);
        toast.error("An error occurred. Please try again later.");
      }
    } finally {
      // setIsLoading(false);
    }
  };

  return (
    <div className="pt-[35%] md:pt-[10%] flex justify-center">
      <Toaster
        position="top-center"
        reverseOrder={false}
        containerStyle={{
          top: 60,
        }}
      />
      <form
        onSubmit={(e) => e.preventDefault()}
        className="w-full md:w-1/2 flex flex-col mx-8 lg:mx-auto lg:grid gap-4 lg:grid-cols-12"
      >
        <input
          ref={searchText}
          className="border border-gray-300 text-white bg-black rounded-lg lg:rounded-sm px-6 py-3 col-span-10 focus:outline-none focus:ring-0"
          type="text"
          placeholder={lang[langKey].gptSearch}
        />
        <button
          onClick={handleGptSearchClick}
          className="bg-red-700 mx-auto text-white w-40 lg:w-full font-medium px-8 py-3 rounded-lg lg:rounded-sm  col-span-2"
        >
          {lang[langKey].search}
        </button>
      </form>
    </div>
  );
};

export default GPTSearchBar;
