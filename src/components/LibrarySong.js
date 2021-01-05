import React from 'react';
import useForm from 'react-hook-form';

export default function LibrarySong({song}) {
    console.log(song);
    return (
        <div className="library-song">
            <img src={song.cover} alt={song.name}></img>
            <div className="song-description">
                <h3>{song.name}</h3>
                <h4>{song.artist}</h4>
            </div>
        </div>
    )
}
