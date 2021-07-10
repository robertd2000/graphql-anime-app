import { useQuery } from '@apollo/client'
import { useEffect, useState } from 'react'
import { withRouter } from 'react-router-dom'
import { GET_STUDIO } from '../../query/queries'
import { AnimeRecomendCard } from '../../utils/AnimeRecomendCard'
import Loader from '../../utils/Loader'
import { Paginator } from '../../utils/Paginator'

const StudioDetailsWrapperr = (props: any) => {
  let id = props.match.params.id
  const [list, setList] = useState([])
  const [name, setName] = useState('')
  const [page, setPage] = useState(1)

  const { data, loading } = useQuery(GET_STUDIO, {
    variables: {
      id,
      page,
    },
  })
  useEffect(() => {
    if (!loading) {
      setList(data.Page.studios[0].media.nodes)
      setName(data.Page.studios[0].name)
    }
  }, [data])
  const total =
    data && !loading
      ? Math.ceil(data.Page.studios[0].media.pageInfo.total / 25)
      : 1
  //   const { Studio: { name = '' } = {} } = data
  const changePage = (page: number) => {
    setPage(page)
  }

  if (loading) {
    return <Loader />
  }

  return (
    <div>
      <h2>{name}</h2>
      <div className="charWrapper">
        {!loading && list
          ? list.map((item) => {
              const {
                id,
                coverImage: { large: limg },
                title: { english, native: ntitle },
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
          : ''}
      </div>
      <Paginator
        totalPages={total}
        currentPage={page}
        changePage={changePage}
      />
    </div>
  )
}

export const StudioDetails = withRouter(StudioDetailsWrapperr)
