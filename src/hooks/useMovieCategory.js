import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { API_OPTIONS } from "../constants/constants";

const useMovieCategory = (category, action) => {
  const dispatch = useDispatch();

  useEffect(() => {
    const getMovies = async () => {
      try {
        const data = await fetch(
          `https://api.themoviedb.org/3/movie/${category}?page=1`,
          API_OPTIONS
        );
        const json = await data.json();
        dispatch(action(json.results));
      } catch (error) {
        console.error("Failed to fetch movies:", error);
      }
    };
    getMovies();
  }, [category, dispatch, action]);
};

export default useMovieCategory;
