import { useQuery } from '@apollo/client';
import { useEffect, useState } from 'react';
import { GET_CHARACTERS } from '../query/queries';
import Loader from '../utils/Loader';

export const Characters = () => {
  const [list, setList] = useState([]);
  const { data, loading } = useQuery(GET_CHARACTERS, {
    variables: {
      name: 'Naruto',
    },
  });

  useEffect(() => {
    if (!loading) {
      setList(data.Page.characters);
    }
  }, [data]);

  if (loading) {
    return <Loader />;
  }
  console.log(list);
  return <div>Hi</div>;
};
