import { createRandomSong } from "../../data";
import { useDispatch, useSelector } from "react-redux";
import { addSong, removeSong } from "../../store";

function SongPlaylist() {
  const dispatch = useDispatch();

  // Get list of songs
  const songPlaylist = useSelector((state) => {
    console.log(state);
    return state.songs;
  });

  const handleSongAdd = (song) => {
    // Add song to list of songs
    console.log(song);
    const action = addSong(song);
    dispatch(action);
  };
  const handleSongRemove = (song) => {
    // Remove song from list of songs
    const action = removeSong(song);
    dispatch(action);
  };

  const renderedSongs = songPlaylist.map((song) => {
    return (
      <li key={song} className="my-3">
        {song}
        <button
          onClick={() => handleSongRemove(song)}
          type="button"
          className="btn btn-danger mx-3"
        >
          X
        </button>
      </li>
    );
  });

  return (
    <div className="content">
      <div className="table-header">
        <h3 className="subtitle is-3">Song Playlist</h3>
        <div className="buttons">
          <button
            onClick={() => handleSongAdd(createRandomSong())}
            type="button"
            className="btn btn-info"
          >
            + Add Song to Playlist
          </button>
        </div>
      </div>
      <ul>{renderedSongs}</ul>
    </div>
  );
}

export default SongPlaylist;
