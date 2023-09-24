import MoviePlaylist from "../components/playlist/MoviePlaylist";
import SongPlaylist from "../components/playlist/SongPlaylist";
import { reset } from "../store";
import { useDispatch } from "react-redux";

function PlaylistPage() {
  const dispatch = useDispatch();
  const handleResetClick = () => {
    dispatch(reset());
  };

  return (
    <div className="container">
      <p className="h1 p-3 mb-2 bg-success text-white">Playlist - Redux</p>

      <div className="container mt-3">
        <button
          onClick={() => handleResetClick()}
          type="button"
          className="btn btn-danger"
        >
          Reset Both Playlists
        </button>
        <hr />
        <MoviePlaylist />
        <hr />
        <SongPlaylist />
      </div>
    </div>
  );
}

export default PlaylistPage;
