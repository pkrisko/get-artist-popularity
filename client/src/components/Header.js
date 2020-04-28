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
];

const Header = () => (
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
);

export default Header;
