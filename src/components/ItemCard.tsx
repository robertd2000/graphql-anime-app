import Img from '../utils/img';
import s from './ItemCard.module.css';
import preloader from '../assets/empty.png';
import { CharactersStaffList } from './CharactersStaffList';
import { CharacterNodeType, edge } from '../types';

type ItemCardType = {
  data: ItemCardDataType;
};

type ItemCardDataType = {
  title: {
    english: string;
    native: string;
  };
  description: string;
  startDate: {
    year: number;
    month: number;
    day: number;
  };
  endDate: {
    year: number;
    month: number;
    day: number;
  };
  season: string;
  seasonYear: number;
  episodes: number;
  duration: number;
  countryOfOrigin: string;
  coverImage: {
    extraLarge: string;
    color: string;
  };
  bannerImage: string;
  genres?: [string];
  averageScore: number;
  studios: {
    nodes: {
      name: string;
    };
  };
  siteUrl: string;
  characters: {
    edges: [edge];
    // nodes: [CharacterNodeType];
  };
};

export const ItemCard: React.FC<ItemCardType> = ({ data }) => {
  const {
    title: { native, english },
    description,
    duration,
    season,
    seasonYear,
    startDate: { year, month, day },
    endDate: { year: endYear, month: endMonth, day: endDay },
    episodes,
    bannerImage,
    studios: {
      nodes: { name },
    },
    siteUrl,
    countryOfOrigin,
    coverImage: { extraLarge, color },
    averageScore,
    genres,
    characters,
  } = data;

  return (
    <div className={s.bg}>
      <div
        className={s.wrapper}
        style={{ backgroundImage: `url(${bannerImage})` }}
      >
        <div className={s.container}>
          <div className={s.img}>
            <Img img={extraLarge} preloader={preloader} />
          </div>
          <div className={s.movieInfo}>
            <div className={s.title}>{english}</div>
            <div className={s.title}>{native}</div>

            <div>{year}</div>
            <div className={s.genresWrapper}>
              {genres
                ? genres.map((genre: string) => (
                    <span key={genre + Math.random()}>{genre}/</span>
                  ))
                : ''}
            </div>
            <div className={s.rating}>
              <img
                src="https://yts.mx/assets/images/website/logo-imdb.svg"
                alt="imdb"
              />
              <span>&#9733; {averageScore}</span>
            </div>
          </div>
          {/* <MovieSuggestions movieSuggestions={movieSuggestions} /> */}
        </div>
      </div>
      <div className={s.synopsis}>
        <h3>Synopsis</h3>
        <span>{description}</span>
        <div className={s.movieTechData}>
          <div>Episodes: {episodes}</div>
          <div>Duration: {duration}</div>
          <div>Season: {season}</div>
          <div>Season year: {seasonYear}</div>
        </div>
        <div>
          <h2
            style={{
              color: 'black',
              fontStyle: 'normal',
              textShadow: 'none',
              fontSize: '30px',
            }}
          >
            Characters
          </h2>
          <CharactersStaffList characters={characters} />
        </div>
        <a href={siteUrl}>Chech on site</a>
      </div>
    </div>
  );
};
