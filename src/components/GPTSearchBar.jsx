import { useSelector } from "react-redux";
import { lang } from "../constants/languageConstants";

const GPTSearchBar = () => {
  const langKey = useSelector((store) => store.config.lang);
  console.log("GPTSearchBar language:", langKey);
  return (
    <div className="text-md p-12">
      <form
        onSubmit={(e) => e.preventDefault()}
        className="gap-2 items-center w-full grid grid-cols-12"
      >
        <input
          className="border border-gray-300 bg-black text-white rounded-sm px-6 py-3 col-span-10"
          type="text"
          placeholder={lang[langKey].gptSearch}
        />
        <button className="bg-red-700 text-white font-medium px-8 py-3 rounded-sm col-span-2">
          {lang[langKey].search}
        </button>
      </form>
    </div>
  );
};

export default GPTSearchBar;
