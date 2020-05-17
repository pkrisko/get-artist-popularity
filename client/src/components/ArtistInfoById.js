import React, { useState } from 'react';
import { getArtistById } from '../services/getArtist';
import ArtistInfoCard from './ArtistInfoCard';

const parseUri = link => {
  if (link.includes("spotify:artist:")) { // URI
    return link.substring(15);
  } else if (link.includes("https://open.spotify.com")) { // Artist Link
    return link.substring(32, 54);
  }
}

const ArtistInfoById = () => {
  const [artistId, setArtistId] = useState('https://open.spotify.com/artist/5TBdr1d9ZJ5YMhsxiF1Jo7?si=TO2BN_n9QZyOpuw9B4fLQQ');
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
          <div id="header-area">
            <span id="title">Enter Artist Link or URI</span>
          </div>
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
