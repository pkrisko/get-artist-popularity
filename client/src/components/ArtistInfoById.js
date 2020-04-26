import React, { useState } from 'react';
import { getArtistById } from '../services/getArtist';

const ArtistInfoById = () => {
    const [artistId, setArtistId] = useState('5TBdr1d9ZJ5YMhsxiF1Jo7');
    const [popularity, setPopularity] = useState(null);
    const [src, setSrc] = useState('');
    const [genres, setGenres] = useState([]);
    const onChange = e => setArtistId(e.target.value);
    const onSubmit = async e => {
      e.preventDefault();
      const { popularity, images, genres } = await getArtistById(artistId);
      if (popularity && images && genres) {
        setPopularity(popularity);
        setSrc(images[2].url);
        setGenres(genres);
      }
    }
    return (
      <>
        <form onSubmit={onSubmit}>
          <label htmlFor="artistId">
            <p>Enter Artist Id</p>
            <input type="text" name="artistId" value={artistId} onChange={onChange} />
          </label>
          <input type="submit" value="Go" />
        </form>
        {popularity !== null && <p>Popularity: {popularity}</p>}
        {src.length > 0 && <p><img src={src} /></p>}
        {genres.length > 0 && <p>Genres: </p>}
        {genres.length > 0 && genres.map(genre => (
            <div key={genre}>{genre}</div>
        ))}
      </>
    );
  }

export default ArtistInfoById;
