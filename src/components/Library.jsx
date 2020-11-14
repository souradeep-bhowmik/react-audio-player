import React from "react";
import LibrarySong from "./LibrarySong";

const Library = ({
  songs,
  setSongs,
  setCurrentSong,
  audioRef,
  isPlaying,
  libraryToggle,
}) => {
  return (
    <div className={`library ${libraryToggle ? "active-library" : ""}`}>
      <h2>Library</h2>
      <div className="library-songs">
        {songs.map((song) => {
          return (
            <LibrarySong
              setCurrentSong={setCurrentSong}
              song={song}
              songs={songs}
              setSongs={setSongs}
              key={song.id}
              audioRef={audioRef}
              isPlaying={isPlaying}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Library;
