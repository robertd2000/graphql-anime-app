import { useQuery } from '@apollo/client'
import { useEffect, useState } from 'react'
import { GET_ANIME } from '../query/queries'
import Loader from '../utils/Loader'
import { List } from './List'
import { Search } from './Search'
import { Error } from '../utils/Error'
import s from './Search.module.css'

export const SearchAnime = () => {
  const [value, setValue] = useState('')
  const [page, setPage] = useState(1)

  const { data, loading, error } = useQuery(GET_ANIME, {
    variables: {
      search: value,
      page,
    },
  })

  const [list, setList] = useState([])
  let totalPages =
    data && !loading ? Math.ceil(data.Page.pageInfo.total / 20) : 1

  useEffect(() => {
    if (!loading && !error) {
      setList(data.Page.media)
    }
  }, [data])

  const inputHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault()
    setValue(e.target.value)
  }

  const changePage = (page: number) => {
    setPage(page)
  }

  if (error) {
    return <Error error={error} />
  }
  if (loading) {
    return <Loader />
  }

  return (
    <div>
      <div className={s.container}>
        <h2>Search anime: </h2>
        <Search inputHandler={inputHandler} />
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
  )
}
