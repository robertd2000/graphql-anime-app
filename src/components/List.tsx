import { Data } from '../types'
import Loader from '../utils/Loader'
import { AnimeItem } from './AnimeItem'
import { Paginator } from '../utils/Paginator'
import { NotFound } from '../utils/NotFound'

type ListType = {
  page: number
  loading: boolean
  list: any
  totalPages: number
  changePage: (page: number) => void
}

export const List: React.FC<ListType> = ({
  page,
  loading,
  list,
  totalPages,
  changePage,
}) => {
  return (
    <div className={'cards-inner'}>
      {loading ? <Loader /> : null}
      <div className={'cards'}>
        {list
          ? list.map((page: Data) => {
              return <AnimeItem key={page.id + Math.random()} data={page} />
            })
          : ''}
      </div>
      {totalPages ? (
        <Paginator
          totalPages={totalPages}
          currentPage={page}
          changePage={changePage}
        />
      ) : (
        <NotFound />
      )}
    </div>
  )
}
