import React, { useState } from 'react';
import { getArtistById } from '../services/getArtist';
import ArtistInfoCard from './ArtistInfoCard';

const parseUri = uri => {
  let parsed = [];
  if (!uri || typeof uri !== 'string') return;
  parsed = uri.split(':');
  if (parsed.length !== 3) return;
  return parsed[2];
}

const ArtistInfoById = () => {
    const [artistId, setArtistId] = useState('5TBdr1d9ZJ5YMhsxiF1Jo7');
    const [artist, setArtist] = useState(null);
    const onChange = e => setArtistId(e.target.value);
    const onSubmit = async e => {
      e.preventDefault();
      let artistIdParsed = artistId.includes(':')
        ? parseUri(artistId)
        : artistId;
      const res = await getArtistById(artistIdParsed);
      res && setArtist(res);
    }
    return (
      <>
        <form onSubmit={onSubmit}>
          <label htmlFor="artistId">
            <p>Enter Artist Id or URI</p>
            <input type="text" id="artist-id" name="artistId" value={artistId} onChange={onChange} />
          </label>
          <input type="submit" id="submit" value="Go" />
        </form>
        {artist && <ArtistInfoCard
          popularity={artist.popularity}
          imgSrc={artist.images[0].url}
          genres={artist.genres}
          name={artist.name}
          followers={artist.followers.total}
        />}
      </>
    );
  }

export default ArtistInfoById;
