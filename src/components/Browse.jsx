import { useSelector } from "react-redux";
import Header from "./Header";
import Footer from "./Footer";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";
import GPTSearch from "./GPTSearch";

import {
  addNowPlayingMovies,
  addPopularMovies,
  addTopRatedMovies,
  addUpcomingMovies,
} from "../store/movieSlice";

import useMovieCategory from "../hooks/useMovieCategory";

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

      <Footer />
    </div>
  );
};

export default Browse;
