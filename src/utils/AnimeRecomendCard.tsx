import { Link } from 'react-router-dom';
import s from '../components/CharacterDetail/Character.module.css';

type AnimeRecomendCardType = {
  id: number;
  limg: string;
  english: string;
  ntitle: string;
};

export const AnimeRecomendCard: React.FC<AnimeRecomendCardType> = ({
  id,
  limg,
  english,
  ntitle,
}) => {
  return (
    <div key={id + Math.random()} className={s.titleCard}>
      <Link to={`/anime/${id}`}>
        <div>
          <img src={limg} alt={limg} />
          <span>
            <h3>{english ? english : ntitle}</h3>
          </span>
        </div>
      </Link>
    </div>
  );
};
