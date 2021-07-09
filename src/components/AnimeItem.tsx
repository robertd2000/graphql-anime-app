import Img from '../utils/img';
import preloader from '../assets/empty.png';
import { Data } from '../types';
import { Link } from 'react-router-dom';

type AnimeItemType = {
  data: Data;
};

export const AnimeItem: React.FC<AnimeItemType> = ({ data }) => {
  const { title, id, coverImage, episodes, seasonYear, genres } = data;

  const fixedGenres = genres.length > 3 ? genres.slice(0, 3) : genres;
  return (
    <div className="card">
      <Link to={`/anime/${id}`}>
        <div className="img-inner">
          <Img preloader={preloader} img={coverImage.extraLarge} />
        </div>

        <h2 className="card-title">
          {title.english === null || title.english === ''
            ? title.native
            : title.english}
        </h2>
        <div className="card-desc">
          <h2 style={{ color: 'white' }}>{title.english}</h2>
          <h2 style={{ color: 'white' }}>{title.native}</h2>
          Season year - {seasonYear}
          <br />
          <ul>
            <h3>Genres:</h3>
            {fixedGenres
              ? fixedGenres.map((genre: string) => (
                  <li key={genre + Math.random()}>{genre}</li>
                ))
              : ''}
          </ul>
          <br />
          <div>Episodes - {episodes}</div>
          <div className="card-link"></div>
        </div>
      </Link>
    </div>
  );
};
