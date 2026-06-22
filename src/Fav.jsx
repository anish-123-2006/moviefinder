import "./css/fav.css";
import { useMoviecontext } from "./Moviecontext";
import Moviecard from "./Moviecard";

function Fav() {
  const { favorites } = useMoviecontext();

  if (favorites.length > 0) {
    return (
      <div className="favorites">
        <h2>Your Favorites</h2>

        <div className="movies-grid">
          {favorites.map((movie) => (
            <Moviecard movie={movie} key={movie.id} />
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="favorites-empty">
      <h2>No Favorite Movies Yet</h2>
      <p>
        Start adding movies to your favorites and they will appear here!
      </p>
    </div>
  );
}

export default Fav;