import Img from '../../utils/img';
import s from './CharacterStaff.module.css';
import preloader from '../../assets/empty.png';
import { Link } from 'react-router-dom';

type CharacterStaffType = {
  fullname: string;
  native: string;
  image: string;
  age: number;
  role: string;
  id: number;
  voiceActor: {
    name: {
      full: string;
    };
    image: {
      medium: string;
    };
  };
};

export const CharacterStaff: React.FC<CharacterStaffType> = ({
  id,
  fullname,
  image,
  role,
  voiceActor: { name: { full = '' } = {}, image: { medium = '' } = {} } = {},
}) => {
  return (
    <div className={s.card}>
      <div className={s.photo}>
        <Img preloader={preloader} img={image} />
      </div>
      <div className={s.description}>
        <Link to={`/character/${id}`}>
          <h3>{fullname}</h3>
        </Link>

        <h4>{role}</h4>
      </div>
      <div className={s.descriptionRight}>
        <h3>{full}</h3>
      </div>
      <div className={s.photoRight}>
        <Img preloader={preloader} img={medium} />
      </div>
    </div>
  );
};
