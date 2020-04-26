import React, { useState } from 'react';
import { getArtistById } from './getArtist';
import './App.css';

const ArtistId = () => {
  const [artistId, setArtistId] = useState('');
  const [popularity, setPopularity] = useState('');
  const [src, setSrc] = useState('');
  const onChange = e => setArtistId(e.target.value);
  const onSubmit = async e => {
    e.preventDefault();
    const artist = await getArtistById(artistId);
    setPopularity(artist.popularity);
    setSrc(artist.images[1].url)
  }
  return <>
    <form onSubmit={onSubmit}>
      <label htmlFor="artistId">
        <p>Enter Arist Id</p>
        <input type="text" name="artistId" value={artistId} onChange={onChange} />
        <input type="submit" value="Go" />
        <p>Popularity: {popularity}</p>
        {src.length > 0 && <p><img src={src} /></p>}
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
