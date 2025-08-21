import Header from "./Header";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";
import {
  addNowPlayingMovies,
  addPopularMovies,
  addTopRatedMovies,
  addUpcomingMovies,
} from "../store/movieSlice";

import useMovieCategory from "../hooks/useMovieCategory";
import GPTSearch from "./GPTSearch";
import { useSelector } from "react-redux";

const Browse = () => {
  const showGptSearch = useSelector((store) => store.gpt.showGptSearch);

  useMovieCategory("now_playing", addNowPlayingMovies);
  useMovieCategory("popular", addPopularMovies);
  useMovieCategory("top_rated", addTopRatedMovies);
  useMovieCategory("upcoming", addUpcomingMovies);
  return (
    <div>
      <Header />

      {showGptSearch ? (
        <GPTSearch />
      ) : (
        <>
          <MainContainer />
          <SecondaryContainer />
        </>
      )}
    </div>
  );
};

export default Browse;
