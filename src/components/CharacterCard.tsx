import { Link } from 'react-router-dom'

type CharacterCardType = {
  data: {
    age: string
    gender: string
    id: number
    image: {
      large: string
    }
    name: {
      full: string
      native: string
    }
    siteUrl: string
    dateOfBirth: {
      day: number
      month: number
    }
  }
}

export const CharacterCard: React.FC<CharacterCardType> = ({ data }) => {
  const {
    age,
    gender,
    id,
    image: { large },
    name: { full, native },
    siteUrl,
    dateOfBirth: { day, month },
  } = data
  return (
    <div className="cardChar">
      <div className="card-image">
        <img src={large} alt={large} />
        <h2 className="character-title">{full}</h2>
        <h3>{native}</h3>
      </div>
      <div className="card-content">
        <div>Gender:{gender}</div>
        <div>Age: {age}</div>
        <p>
          Birthday: {day}.{month}
        </p>
      </div>
      <div className="card-action">
        <Link to={`/character/${id}`}>More info</Link>
        <a href={siteUrl}>Watch on website</a>
      </div>
    </div>
  )
}
