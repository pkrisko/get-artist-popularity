import React, { useState } from 'react';
import { getArtistById } from './getArtist';
import './App.css';

const ArtistId = () => {
  const [artistId, setArtistId] = useState('5TBdr1d9ZJ5YMhsxiF1Jo7');
  const [popularity, setPopularity] = useState('');
  const [src, setSrc] = useState('');
  const [genres, setGenres] = useState([]);
  const onChange = e => setArtistId(e.target.value);
  const onSubmit = async e => {
    e.preventDefault();
    const artist = await getArtistById(artistId);
    const { popularity, images, genres } = artist;
    if (artist) {
      setPopularity(popularity);
      setSrc(images[2].url);
      setGenres(genres);
    }
  }
  return <>
    <form onSubmit={onSubmit}>
      <label htmlFor="artistId">
        <p>Enter Artist Id</p>
        <input type="text" name="artistId" value={artistId} onChange={onChange} />
        <input type="submit" value="Go" />
        <p>Popularity: {popularity}</p>
        {src.length > 0 && <p><img src={src} /></p>}
        {genres.length > 0 && <p>Genres: </p>}
        {genres.length > 0 && genres.map(genre => (
          <div>{genre}</div>
        ))}
      </label>
    </form>
  </>
}

const App = () => (
  <div className="App">
    <header className="App-header">
      <ArtistId />
    </header>
  </div>
);

export default App;
