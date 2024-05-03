import { useState, useEffect, useCallback } from "react";
import { useParams } from "react-router-dom";
import MovieInfo from "../components/MovieInfo";

function Detail() {
  const [loading, setLoading] = useState(true);
  const [movie, setMovie] = useState([]);
  const { id } = useParams();

  const getMovie = useCallback(async () => {
    // Use useCallback to memoize getMovie
    const json = await (
      await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
    ).json();
    setMovie(json.data.movie);
    setLoading(false);
  }, [id]); // Depend on id, although it's stable for the component lifecycle

  useEffect(() => {
    getMovie();
  }, [getMovie]); // Include getMovie in the dependency array

  return (
    <div>
      {loading ? (
        <h1>Loading...</h1>
      ) : (
        <MovieInfo
          description={movie.description_full}
          downCount={movie.download_count}
          genre={movie.genres}
          coverImg={movie.medium_cover_image}
          title={movie.title_long}
        />
      )}
    </div>
  );
}

export default Detail;
