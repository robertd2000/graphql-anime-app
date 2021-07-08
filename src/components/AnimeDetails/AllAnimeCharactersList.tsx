import { useQuery } from '@apollo/client';
import { useEffect, useState } from 'react';
import { withRouter } from 'react-router-dom';
import { GET_ALL_ANIME_CHARACTERS } from '../../query/queries';
import Loader from '../../utils/Loader';
import { Paginator } from '../../utils/Paginator';
import { CharacterStaff } from './CharacterStaff';
import s from './CharacterStaff.module.css';

const AllCharactersList = (props: any) => {
  let id = props.match.params.id;
  const [page, setPage] = useState(1);
  const { data, loading } = useQuery(GET_ALL_ANIME_CHARACTERS, {
    variables: {
      id,
      page,
    },
  });
  const [list, setList] = useState([]);
  const total =
    data && !loading ? Math.ceil(data.Media.characters.pageInfo.total / 25) : 1;

  useEffect(() => {
    if (!loading) {
      setList(data.Media.characters.edges);
    }
  }, [data]);

  const changePage = (page: number) => {
    setPage(page);
  };
  if (loading) {
    return <Loader />;
  }
  return (
    <>
      <div className={s.wrapper}>
        {!loading
          ? list.map((item) => {
              const {
                role,
                voiceActors,
                node: {
                  id,
                  age,
                  gender,
                  image: { medium },
                  name: { full, native },
                },
              } = item;

              return (
                <CharacterStaff
                  id={id}
                  age={age}
                  fullname={full}
                  voiceActor={voiceActors[0]}
                  image={medium}
                  role={role}
                  native={native}
                />
              );
            })
          : ''}
      </div>
      <Paginator
        totalPages={total}
        currentPage={page}
        changePage={changePage}
      />
    </>
  );
};

export const AllCharactersListWrapper = withRouter(AllCharactersList);
