import { Link } from 'react-router-dom';

const NavBarLink = (props: any) => {
  return <Link {...props} activeClassName="active" />;
};

const Header = () => {
  return (
    <div className="header">
      <Link to="/" href="#default" className="logo">
        Anime App
      </Link>
      <div className="header-right">
        <NavBarLink to="/" activeClassName="active" href="#home">
          Home
        </NavBarLink>
        <NavBarLink to="/search-anime" activeClassName="active" href="#contact">
          Search Anime
        </NavBarLink>
        <NavBarLink
          to="/search-character"
          activeClassName="active"
          href="#contact"
        >
          Search Character
        </NavBarLink>
      </div>
    </div>
  );
};

export { Header };
