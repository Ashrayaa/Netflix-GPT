import { useDispatch } from "react-redux";
import { API_OPTIONS } from "../constants/constants";
import { addTrailerVideo } from "../store/movieSlice";
import { useEffect } from "react";

const useMovieTrailer = (movieId) => {
  const dispatch = useDispatch();
  const getBackgroundVideos = async () => {
    const data = await fetch(
      `https://api.themoviedb.org/3/movie/${movieId}/videos?language=en-US`,
      API_OPTIONS
    );
    const jsonData = await data.json();

    const filterVideo = jsonData.results.filter(
      (video) => video.type === "Trailer"
    );
    const trailer = filterVideo.length ? filterVideo[0] : jsonData.results[0];
    dispatch(addTrailerVideo(trailer));
  };

  useEffect(() => {
    getBackgroundVideos();
  }, []);
};

export default useMovieTrailer;
