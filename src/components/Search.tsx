import { useQuery } from '@apollo/client';
import { useEffect, useState } from 'react';
import { GET_ANIME } from '../query/queries';
import { Data } from '../types';
import Loader from '../utils/Loader';
import { AnimeItem } from './AnimeItem';
import { List } from './List';
import s from './Search.module.css';

export const Search = () => {
  const [value, setValue] = useState('');
  const [page, setPage] = useState(1);

  const { data, loading, error } = useQuery(GET_ANIME, {
    variables: {
      search: value,
      page,
    },
  });
  const [list, setList] = useState([]);
  let totalPages =
    data && !loading ? Math.ceil(data.Page.pageInfo.total / 20) : 1;
  useEffect(() => {
    if (!loading) {
      setList(data.Page.media);
    }
  });

  //   console.log(data.Page.pageInfo.total);

  const inputHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  const changePage = (page: number) => {
    setPage(page);
  };

  return (
    <div>
      <div className={s.container}>
        <h2>Search anime: </h2>
        <div className={s.group}>
          <input onChange={inputHandler} type={s.text} required />
          <span className={s.highlight}></span>
          <span className={s.bar}></span>
          <label>Title name</label>
        </div>
      </div>

      <div className={'cards-inner'}>
        <List
          list={list}
          loading={loading}
          changePage={changePage}
          totalPages={totalPages}
          page={page}
        />
      </div>
    </div>
  );
};
