import { CharacterNodeType, edge } from '../../types';
import Loader from '../../utils/Loader';
import { CharacterStaff } from './CharacterStaff';
import s from './CharacterStaff.module.css';

type CharactersStaffListType = {
  characters: CharactersStaffListDataType;
};

type CharactersStaffListDataType = {
  edges: [edge];
};

export const CharactersStaffList: React.FC<CharactersStaffListType> = ({
  characters,
}) => {
  const { edges } = characters;

  if (!edges) {
    return <Loader />;
  }
  return (
    <div className={s.wrapper}>
      {edges
        ? edges.map((char: edge) => {
            const {
              node: {
                name: { full, native },
                image: { medium },
                age,
                id,
              },
              role,
              voiceActors,
            } = char;
            return (
              <CharacterStaff
                key={id}
                fullname={full}
                native={native}
                age={age}
                image={medium}
                role={role}
                id={id}
                voiceActor={voiceActors[0]}
              />
            );
          })
        : ''}
    </div>
  );
};
