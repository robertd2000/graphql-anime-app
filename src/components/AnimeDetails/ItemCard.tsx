import Img from '../../utils/img'
import s from './ItemCard.module.css'
import preloader from '../../assets/empty.png'
import { CharactersStaffList } from './CharactersStaffList'
import { CharacterNodeType, edge } from '../../types'
import { Link } from 'react-router-dom'
import { AnimeRecomendCard } from '../../utils/AnimeRecomendCard'

type ItemCardType = {
  data: ItemCardDataType
  id: number
}

type ItemCardDataType = {
  title: {
    english: string
    native: string
  }
  description: string
  startDate: {
    year: number
    month: number
    day: number
  }
  endDate: {
    year: number
    month: number
    day: number
  }
  season: string
  seasonYear: number
  episodes: number
  duration: number
  countryOfOrigin: string
  coverImage: {
    extraLarge: string
    color: string
  }
  bannerImage: string
  genres?: [string]
  averageScore: number
  studios: {
    nodes: [{ name: string; id: number }]
  }
  siteUrl: string
  characters: {
    edges: [edge]
    // nodes: [CharacterNodeType];
  }
  recommendations: {
    nodes: [nodesType]
  }
}

type nodesType = {
  mediaRecommendation: {
    coverImage: {
      large: string
    }
    id: number
    status: string
    title: {
      userPreferred: string
      native: string
    }
  }
}

export const ItemCard: React.FC<ItemCardType> = ({ data, id }) => {
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
    studios: { nodes: studios },
    siteUrl,
    countryOfOrigin,
    coverImage: { extraLarge, color },
    averageScore,
    genres,
    characters,
    recommendations: { nodes },
  } = data

  return (
    <div className={s.bg}>
      <div
        className={s.wrapper}
        style={{
          backgroundImage: `url(${bannerImage})`,
          backgroundColor: color,
        }}
      >
        <div className={s.container}>
          <div className={s.img}>
            <Img img={extraLarge} preloader={preloader} />
          </div>
          <div className={s.movieInfo}>
            <div className={s.title}>
              <h2 style={{ color: 'white', fontSize: '40px' }}> {english}</h2>
            </div>
            <div className={s.title}>
              <h3>{native}</h3>
            </div>

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
        </div>
      </div>
      <div className={s.synopsis}>
        <h3>Synopsis</h3>
        <div dangerouslySetInnerHTML={{ __html: description }}></div>

        <div className={s.movieTechData}>
          <div>Episodes: {episodes}</div>
          <div>Duration: {duration}</div>
          <div>Season: {season}</div>
          <div>Season year: {seasonYear}</div>
          <div>Country of origin: {countryOfOrigin}</div>
          <div>
            Start date: {day}.{month}.{year}{' '}
          </div>
          <div>
            End date: {endDay}.{endMonth}.{endYear}{' '}
          </div>
        </div>
        <div className={s.studios}>
          <h3>Studios:</h3>
          {studios
            ? studios.map((studio) => {
                return (
                  <div>
                    <Link to={`/studio/${studio.id}`}>{studio.name}</Link>
                  </div>
                )
              })
            : null}
        </div>
        <div>
          <Link to={`/anime/characters/${id}`}>
            <h2 className="h2-black">Characters </h2>
          </Link>

          <CharactersStaffList characters={characters} />
        </div>
        <div>
          <Link to={`/anime/recomendations/${id}`}>
            <h2 className="h2-black">Recommendations</h2>
          </Link>

          <div className={s.charWrapper}>
            {nodes
              ? nodes.map((item) => {
                  const {
                    mediaRecommendation: {
                      id,
                      coverImage: { large: limg },
                      title: { userPreferred, native: ntitle },
                    },
                  } = item
                  return (
                    <AnimeRecomendCard
                      key={id + Math.random()}
                      id={id}
                      english={userPreferred}
                      ntitle={ntitle}
                      limg={limg}
                    />
                  )
                })
              : null}
          </div>
        </div>

        <a href={siteUrl}>Chech on site</a>
      </div>
    </div>
  )
}
