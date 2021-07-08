import { useQuery } from '@apollo/client';
import { withRouter } from 'react-router-dom';
import { GET_ANIME_DETAILS } from '../../query/queries';
import Loader from '../../utils/Loader';
import { ItemCard } from './ItemCard';

const ItemDetails = (props: any) => {
  let id = props.match.params.id;

  const { data, loading } = useQuery(GET_ANIME_DETAILS, {
    variables: {
      id,
    },
  });

  if (loading) {
    return <Loader />;
  }

  return (
    <div>{!loading && data ? <ItemCard data={data.Media} id={id} /> : ''}</div>
  );
};

export const ItemDetailsContainer = withRouter(ItemDetails);
