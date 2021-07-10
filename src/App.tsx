import { useQuery } from '@apollo/client'
import { useEffect, useState } from 'react'
import { Route } from 'react-router-dom'
import './App.css'
import { Characters } from './components/Characters'
import { Header } from './components/Header'
import { ItemDetailsContainer } from './components/AnimeDetails/ItemDetails'
import { List } from './components/List'
import { GET_ANIME_LIST } from './query/queries'
import { CharacterDetailWrapper } from './components/CharacterDetail/CharacterDetails'
import { AllCharactersListWrapper } from './components/AnimeDetails/AllAnimeCharactersList'
import { AllRecomendationsWrapper } from './components/AnimeDetails/AllRecomendations'
import { StudioDetails } from './components/Studios/StudioDetails'
import { SearchAnime } from './components/SearchAnime'

function App(props: any) {
  const totalPages = 4185
  const [page, setPage] = useState(1)
  const { data, loading } = useQuery(GET_ANIME_LIST, {
    variables: {
      page,
    },
  })
  const [list, setList] = useState([])

  useEffect(() => {
    if (!loading) {
      setList(data.Page.media)
    }
  }, [data])

  const changePage = (page: number) => {
    setPage(page)
  }

  return (
    <div className="App">
      <Header />
      <Route
        exact
        path="/"
        render={() => (
          <List
            list={list}
            loading={loading}
            changePage={changePage}
            totalPages={totalPages}
            page={page}
          />
        )}
      />
      <Route exact path="/search-anime" component={SearchAnime} />
      <Route
        exact
        path="/anime/:id?"
        component={() => <ItemDetailsContainer {...props} />}
      />
      <Route exact path="/search-character" component={Characters} />
      <Route
        exact
        path="/character/:id?"
        component={() => <CharacterDetailWrapper {...props} />}
      />
      <Route
        exact
        path="/anime/characters/:id?"
        component={() => <AllCharactersListWrapper {...props} />}
      />
      <Route
        exact
        path="/anime/recomendations/:id?"
        component={() => <AllRecomendationsWrapper {...props} />}
      />
      <Route
        exact
        path="/studio/:id?"
        component={() => <StudioDetails {...props} />}
      />
    </div>
  )
}

export default App
