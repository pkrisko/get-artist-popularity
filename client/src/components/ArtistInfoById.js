import React, { useState } from 'react';
import { getArtistById } from '../services/getArtist';
import ArtistInfoCard from './ArtistInfoCard';

const ArtistInfoById = () => {
    const [artistId, setArtistId] = useState('5TBdr1d9ZJ5YMhsxiF1Jo7');
    const [artist, setArtist] = useState(null);
    const onChange = e => setArtistId(e.target.value);
    const onSubmit = async e => {
      e.preventDefault();
      const res = await getArtistById(artistId);
      res && setArtist(res);
    }
    return (
      <>
        <form onSubmit={onSubmit}>
          <label htmlFor="artistId">
            <p>Enter Artist Id</p>
            <input type="text" id="artist-id" name="artistId" value={artistId} onChange={onChange} />
          </label>
          <input type="submit" id="submit" value="Go" />
        </form>
        {artist && <ArtistInfoCard
          popularity={artist.popularity}
          imgSrc={artist.images[2].url}
          genres={artist.genres}
          name={artist.name}
          followers={artist.followers.total}
        />}
      </>
    );
  }

export default ArtistInfoById;
