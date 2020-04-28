import React from 'react';

const ArtistInfoCard = ({
    popularity,
    imgSrc,
    genres,
    name,
    followers
}) => (
    <div className="card">
        <img src={imgSrc} alt="profile" className="profile" />
        <h4>{name}</h4>
        <div className="card-body">
            <div className="card-item">
                <span>Popularity: </span>
                <span>{popularity}</span>
            </div>
            <div className="card-item">
                <span>Followers: </span>
                <span>{followers}</span>
            </div>
            <div className="card-item">
                <span>Genres:</span>
            </div>
            <div className="card-item">
                <ul>
                    {genres.map(genre => (
                        <li key={genre}>{genre}</li>
                    ))}
                </ul>
            </div>
        </div>
    </div>
);

export default ArtistInfoCard;
