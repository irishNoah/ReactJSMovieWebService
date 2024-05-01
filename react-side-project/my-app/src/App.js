import { useEffect, useState } from "react";

function App() {
  const [loading, setLoading] = useState(true);
  const [movies, setMovies] = useState([]);
  const getMovies = async () => {
    try {
      const response = await fetch(
        `https://yts.mx/api/v2/list_movies.json?minimum_rating=8.8&sort_by=year`
      );
      const json = await response.json();
      setMovies(json.data.movies);
      setLoading(false);
    } catch (error) {
      console.error("Failed to fetch coins", error);
      setLoading(false); // 에러 발생 시에도 로딩 상태 해제
    }
  };

  useEffect(() => {
    getMovies();
  }, []);

  return (
    <div>
      {loading ? (
        <h1>Loading...</h1>
      ) : (
        <div>
          <h1>Movie Information of IrishNoah Cinema</h1>
          {movies.map((movie) => (
            <div key={movie.id}>
              <img src={movie.medium_cover_image} />
              <h2>Title : {movie.title}</h2>
              <h3>
                Runtime : {movie.runtime} minutes / Rating : {movie.rating}
              </h3>
              <h3>Summary</h3>
              <p>{movie.summary}</p>
              <h3>Genre</h3>
              <ul>
                {movie.genres.map((g) => (
                  <li key={g}>{g}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
export default App;
