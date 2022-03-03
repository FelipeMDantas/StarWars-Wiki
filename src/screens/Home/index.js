import {
  HomeList,
  ScreenScrollContainer,
  Hero,
  Loader,
  Container,
} from '../../components'
import { useGetData } from '~/services/hooks'
import { useEffect, useState } from 'react'

export const Home = () => {
  const { getFilms, getCharacters } = useGetData()
  const [loading, setLoading] = useState(true)
  const [films, setFilms] = useState([])
  const [characters, setCharacters] = useState([])

  const callGetData = async () => {
    const filmsResponse = await getFilms()
    const charactersResponse = await getCharacters()

    if (!filmsResponse.error && !charactersResponse.error) {
      setFilms(filmsResponse)
      setCharacters(charactersResponse)
      setLoading(false)
    }
  }

  useEffect(() => {
    callGetData()
  }, [])

  if (loading) {
    return (
      <Container align="center" justify="center">
        <Loader />
      </Container>
    )
  }

  const randomizeHomeScreenMovie = () => {
    const randomValue = Math.floor(Math.random() * (films.length))
    return randomValue
  }

  return (
    <ScreenScrollContainer>
      <Hero item={{ ...films[randomizeHomeScreenMovie()], type: 'Filme' }} />
      <HomeList title="Filmes" data={films} type="Filme" />
      <HomeList title="Personagens" data={characters} type="Personagem" />
    </ScreenScrollContainer>
  )
}
