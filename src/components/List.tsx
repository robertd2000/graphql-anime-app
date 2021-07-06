import { useQuery } from '@apollo/client';
import { useEffect, useState } from 'react';
import { GET_ANIME_LIST } from '../query/queries';
import { Data } from '../types';
import { AnimeItem } from './AnimeItem';
import { Paginator } from './Paginator';

export const List = () => {
  const totalPages = 4185;
  const [page, setPage] = useState(1);
  const { data, loading } = useQuery(GET_ANIME_LIST, {
    variables: {
      page,
    },
  });
  const [list, setList] = useState([]);

  useEffect(() => {
    if (!loading) {
      setList(data.Page.media);
    }
  }, [data]);

  const changePage = (page: number) => {
    setPage(page);
  };

  return (
    <div className={'cards-inner'}>
      <div className={'cards'}>
        {list
          ? list.map((page: Data) => {
              return <AnimeItem key={page.id} data={page} />;
            })
          : ''}
      </div>
      <Paginator
        totalPages={totalPages}
        currentPage={page}
        changePage={changePage}
      />
    </div>
  );
};
