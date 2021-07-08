import { useQuery } from '@apollo/client';
import { useEffect, useState } from 'react';
import { GET_ANIME, GET_CHARACTERS } from '../query/queries';
import { Data } from '../types';
import Loader from '../utils/Loader';
import { AnimeItem } from './AnimeItem';
import { List } from './List';
import s from './Search.module.css';

type SearchCharactersType = {
  handleInput: (e: any) => void;
};

export const SearchCharacters: React.FC<SearchCharactersType> = ({
  handleInput,
}) => {
  const [value, setValue] = useState('');

  const inputHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    setValue(e.target.value);
    handleInput(value);
  };

  return (
    <div>
      <div className={s.container}>
        <h2>Search characters: </h2>
        <div className={s.group}>
          <input onChange={inputHandler} type={s.text} required />
          <span className={s.highlight}></span>
          <span className={s.bar}></span>
          <label>Character name</label>
        </div>
      </div>
    </div>
  );
};
