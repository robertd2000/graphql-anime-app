import { useQuery } from '@apollo/client'
import { Link, withRouter } from 'react-router-dom'
import { GET_CHARACTER_BY_ID } from '../../query/queries'
import Loader from '../../utils/Loader'
import { AnimeRecomendCard } from '../../utils/AnimeRecomendCard'
import s from '../AnimeDetails/CharacterStaff.module.css'
import s1 from './Character.module.css'

import preloader from '../../assets/empty.png'
import Img from '../../utils/img'

const CharacterDetail = (props: any) => {
  let id = props.match.params.id
  const { data, loading } = useQuery(GET_CHARACTER_BY_ID, {
    variables: {
      id,
    },
  })

  if (loading) {
    return <Loader />
  }

  const {
    age,
    dateOfBirth: { day, month },
    description,
    gender,
    image: { large },
    media,
    name: { full, native },
    siteUrl,
  } = data.Character
  return (
    <div style={{ backgroundColor: 'white' }}>
      <div
        className={s.bg + ' ' + s1.bg}
        style={{
          margin: '0 auto',
          maxWidth: '1100px',
          display: 'flex',
          justifyContent: 'space-between',
        }}
      >
        <div className={s.wrapper + ' ' + s1.wrapper}>
          <div className={s.container}>
            <div className={s.img}>
              <Img img={large} preloader={preloader} />
            </div>
            <div className={s.movieInfo}>
              <div className={s.title}>
                <h2 className="h2-black">{full}</h2>
              </div>
              <div className={s.title}>
                <h3>{native}</h3>
              </div>
            </div>
          </div>
        </div>
        <div className={s.synopsis + ' ' + s1.synopsis}>
          <h3>Synopsis</h3>
          <div dangerouslySetInnerHTML={{ __html: description }}></div>
          <div className={s.movieTechData}>
            <div>{gender}</div>
            <div>Age: {age ? age : 'no info'}</div>
            <div>
              Birthday: {day && month ? { day } + '.' + { month } : 'no info'}
            </div>
          </div>
          <a href={siteUrl}>Chech on site</a>
        </div>
      </div>
      <h2 className="h2-black">Media: </h2>

      <div className={s1.charWrapper}>
        {media
          ? media.edges.map((item: any) => {
              const {
                node: {
                  id,
                  coverImage: { large: limg },
                  title: { english, native: ntitle },
                },
              } = item
              return (
                <AnimeRecomendCard
                  key={id + Math.random()}
                  id={id}
                  english={english}
                  ntitle={ntitle}
                  limg={limg}
                />
              )
            })
          : ''}
      </div>
    </div>
  )
}

export const CharacterDetailWrapper = withRouter(CharacterDetail)
