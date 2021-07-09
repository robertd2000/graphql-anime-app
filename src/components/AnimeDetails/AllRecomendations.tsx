import { useQuery } from '@apollo/client';
import { useEffect, useState } from 'react';
import { withRouter } from 'react-router-dom';
import { GET_ALL_RECOMENDATIONS } from '../../query/queries';
import { AnimeRecomendCard } from '../../utils/AnimeRecomendCard';
import Loader from '../../utils/Loader';
import { Paginator } from '../../utils/Paginator';
import s from './ItemCard.module.css';

const AllRecomendations = (props: any) => {
  const [list, setList] = useState([]);
  const [page, setPage] = useState(1);
  let id = props.match.params.id;

  const { data, loading } = useQuery(GET_ALL_RECOMENDATIONS, {
    variables: {
      id,
      page,
    },
  });
  const total =
    data && !loading
      ? Math.ceil(data.Media.recommendations.pageInfo.total / 25)
      : 1;
  useEffect(() => {
    if (!loading) {
      setList(data.Media.recommendations.nodes);
    }
  }, [data]);
  const changePage = (page: number) => {
    setPage(page);
  };
  console.log(list, total);
  if (loading) {
    return <Loader />;
  }
  return (
    <div>
      <div className={s.charWrapper}>
        {!loading
          ? list.map((item) => {
              const {
                mediaRecommendation: {
                  id,
                  coverImage: { large: limg },
                  title: { userPreferred, native: ntitle },
                },
              } = item;
              return (
                <AnimeRecomendCard
                  key={id + Math.random()}
                  id={id}
                  english={userPreferred}
                  ntitle={ntitle}
                  limg={limg}
                />
              );
            })
          : null}
      </div>
      <Paginator
        totalPages={total}
        currentPage={page}
        changePage={changePage}
      />
    </div>
  );
};
export const AllRecomendationsWrapper = withRouter(AllRecomendations);
