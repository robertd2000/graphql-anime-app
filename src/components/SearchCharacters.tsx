import { useQuery } from '@apollo/client'
import { useEffect, useState } from 'react'
import { GET_ANIME, GET_CHARACTERS } from '../query/queries'
import { Data } from '../types'
import Loader from '../utils/Loader'
import { AnimeItem } from './AnimeItem'
import { List } from './List'
import { Search } from './Search'
import s from './Search.module.css'

type SearchCharactersType = {
  handleInput: (e: any) => void
}

export const SearchCharacters: React.FC<SearchCharactersType> = ({
  handleInput,
}) => {
  const [value, setValue] = useState('')

  const inputHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault()
    setValue(e.target.value)
    handleInput(value)
  }

  return (
    <div>
      <div className={s.container}>
        <h2>Search characters: </h2>
        <Search inputHandler={inputHandler} />
      </div>
    </div>
  )
}
