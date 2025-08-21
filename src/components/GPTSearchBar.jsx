import { useSelector } from "react-redux";
import { lang } from "../constants/languageConstants";
import { useRef, useState } from "react";
import client from "../utils/openAI";
import toast, { Toaster } from "react-hot-toast";

const GPTSearchBar = () => {
  const langKey = useSelector((store) => store.config.lang);
  const searchText = useRef("");
  const [isLoading, setIsLoading] = useState(false);

  const handleGptSearchClick = async () => {
    if (isLoading) return;
    setIsLoading(true);
    try {
      //Make an API call to GPT API and get Movie results
      const gptQuery =
        "Act as a Movie Recommendation System and suggest some movies for the query: " +
        searchText.current.value +
        " Only give me names of 5 movies , comma separated. Like the example below: " +
        " Movie1, Movie2, Movie3, Movie4, Movie5";

      const gptResults = await client.chat.completions.create({
        model: "gpt-3.5-turbo",
        messages: [{ role: "user", content: gptQuery }],
      });
      if (!gptResults.choices || gptResults.choices.length === 0) {
        toast.error("Sorry, we couldn't find suggestions for that.");

        return;
      }
      console.log("GPT Results:", gptResults.choices?.[0]?.message?.content);
      const movieNames = gptResults.choices[0].message.content
        .split(",")
        .map((name) => name.trim())
        .filter((name) => name.length > 0);
      console.log("Movie Names:", movieNames);
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
      setIsLoading(false);
    }
  };

  return (
    <div className="text-md p-12 ">
      <Toaster
        position="top-center"
        reverseOrder={false}
        containerStyle={{
          top: 60,
        }}
      />
      <form
        onSubmit={(e) => e.preventDefault()}
        className="gap-2 items-center w-full grid grid-cols-12"
      >
        <input
          ref={searchText}
          className="border border-gray-300 bg-black text-white rounded-sm px-6 py-3 col-span-10"
          type="text"
          placeholder={lang[langKey].gptSearch}
        />
        <button
          onClick={handleGptSearchClick}
          className="bg-red-700 text-white font-medium px-8 py-3 rounded-sm col-span-2"
        >
          {lang[langKey].search}
        </button>
      </form>
    </div>
  );
};

export default GPTSearchBar;
