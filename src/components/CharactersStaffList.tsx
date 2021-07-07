import { CharacterNodeType, edge } from '../types';
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

  return (
    <div className={s.wrapper}>
      {/* {nodes.map((char: CharacterNodeType) => {
        const {
          name: { full, native },
          age,
          image: { medium },
          gender,
        } = char;
        return (
          <CharacterStaff
            fullname={full}
            native={native}
            age={age}
            gender={gender}
            image={medium}
          />
        );
      })} */}
      {edges.map((char: edge) => {
        const {
          node: {
            name: { full, native },
            image: { medium },
            age,
          },
          role,
          id,
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
      })}
    </div>
  );
};
