import { useQuery } from '@apollo/client'
import { useEffect, useState } from 'react'
import { withRouter } from 'react-router-dom'
import { GET_ALL_RECOMENDATIONS } from '../../query/queries'
import { AnimeRecomendCard } from '../../utils/AnimeRecomendCard'
import Loader from '../../utils/Loader'
import { NotFound } from '../../utils/NotFound'
import { Paginator } from '../../utils/Paginator'
import { List } from '../List'
import s from './ItemCard.module.css'

const AllRecomendations = (props: any) => {
  const [list, setList] = useState([])
  const [page, setPage] = useState(1)
  let id = props.match.params.id

  const { data, loading } = useQuery(GET_ALL_RECOMENDATIONS, {
    variables: {
      id,
      page,
    },
  })
  const total =
    data && !loading
      ? Math.ceil(data.Media.recommendations.pageInfo.total / 25)
      : 1
  useEffect(() => {
    if (!loading) {
      setList(data.Media.recommendations.nodes)
    }
  }, [data])

  const changePage = (page: number) => {
    setPage(page)
  }

  if (loading) {
    return <Loader />
  }
  return (
    <div>
      <div className={s.charWrapper}>
        <List
          changePage={changePage}
          totalPages={total}
          page={page}
          list={list}
          loading={loading}
        />
        {/* {!loading ? (
          list.map((item) => {
            const {
              mediaRecommendation: {
                id,
                coverImage: { large: limg },
                title: { english, native: ntitle },
              },
            } = item
            return (
              <AnimeRecomendCard
                key={id + Math.random()}
                id={id}
                english={english}
                ntitle={ntitle}
                limg={limg}
              />
            )
          })
        ) : (
          <NotFound />
        )} */}
      </div>
      <Paginator
        totalPages={total}
        currentPage={page}
        changePage={changePage}
      />
    </div>
  )
}
export const AllRecomendationsWrapper = withRouter(AllRecomendations)
