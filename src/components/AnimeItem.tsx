import Img from '../utils/img';
import preloader from '../assets/empty.png';
import { Data } from '../types';

type AnimeItemType = {
  data: Data;
};

export const AnimeItem: React.FC<AnimeItemType> = ({ data }) => {
  const { title, status, coverImage, episodes, seasonYear, genres } = data;

  const fixedGenres = genres.length > 3 ? genres.slice(0, 3) : genres;
  return (
    <div className="card">
      <h2 className="card-title">
        {title.english === null || title.english === ''
          ? title.native
          : title.english}
      </h2>
      <Img preloader={preloader} img={coverImage.large} />
      <div className="card-desc">
        <h2>{title.english}</h2>
        <h2>{title.native}</h2>
        Season year - {seasonYear}
        <br />
        {fixedGenres
          ? fixedGenres.map((genre: string) => <div key={genre}>{genre}</div>)
          : ''}
        <br />
        <div className="card-link">
          {/* <Link to={`/movie/${id}`}>More</Link> */}
        </div>
      </div>
    </div>
  );
};
