import React from 'react';
import ArtistInfoById from './components/ArtistInfoById';
import greenLogo from './images/spotify/green-logo.png';
import lostHarborMusicLogo from './images/lost-harbor-music/lhm-document-logo.png';
import './App.css';

const links = [
  {
    href: 'https://www.lostharbormusic.com/',
    text: 'Home',
  },{
    href: 'https://www.lostharbormusic.com/fieldnotes',
    text: 'Field Notes',
  },{
    href: 'https://pkrisko.github.io/get-artist-popularity/',
    text: 'Utilities',
  }
]

const App = () => (
  <div className="App">
    <header className="App-header">
      <div id="logo-wrapper">
        <a href="https://www.lostharbormusic.com/">
          <img src={lostHarborMusicLogo} alt="Lost Harbor Music Logo" id="lhm-logo" />
        </a>
      </div>
      {links.map(link => (
        <a href={link.href} key={link.text} className="nav-link">
          {link.text}
        </a>
      ))}
    </header>
    <div className="main">
      <ArtistInfoById />
      <img src={greenLogo} alt="Spotify Logo" id="spotify-logo" />
    </div>
  </div>
);

export default App;
