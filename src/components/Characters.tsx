import { useQuery } from '@apollo/client'
import { useEffect, useState } from 'react'
import { GET_CHARACTERS } from '../query/queries'
import Loader from '../utils/Loader'
import { Paginator } from '../utils/Paginator'
import { CharacterCard } from './CharacterCard'
import './CharacterCard.css'
import { SearchCharacters } from './SearchCharacters'

export const Characters = () => {
  const [list, setList] = useState([])
  const [page, setPage] = useState(1)
  const [value, setValue] = useState('')
  const { data, loading } = useQuery(GET_CHARACTERS, {
    variables: {
      name: value,
      page,
    },
  })

  let totalPages =
    data && !loading ? Math.ceil(data.Page.pageInfo.total / 20) : 1

  useEffect(() => {
    if (!loading) {
      setList(data.Page.characters)
    }
  }, [data])

  const changePage = (page: number) => {
    setPage(page)
  }

  const handleInput = (e: any) => {
    setValue(e)
  }

  return (
    <div>
      <SearchCharacters handleInput={handleInput} />

      <div className="characters-inner">
        {!loading && list ? (
          list.map((item) => {
            return <CharacterCard data={item} />
          })
        ) : (
          <Loader />
        )}
      </div>

      {totalPages ? (
        <Paginator
          currentPage={page}
          totalPages={totalPages}
          changePage={changePage}
        />
      ) : null}
    </div>
  )
}
