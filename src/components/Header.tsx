import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <div className="header">
      <Link to="/" href="#default" className="logo">
        Anime App
      </Link>
      <div className="header-right">
        <Link to="/" className="active" href="#home">
          Home
        </Link>
        <Link to="/search-anime" href="#contact">
          Search Anime
        </Link>
        <Link to="/search-character" href="#contact">
          Search Character
        </Link>
      </div>
    </div>
  );
};

export { Header };
