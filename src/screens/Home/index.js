import { HomeList, ScreenScrollContainer, Hero } from '../../components'
import { useGetData } from '~/services/hooks'
import { useEffect, useState } from 'react'

export const Home = () => {
  const { getFilms, getCharacters } = useGetData()
  const [loading, setLoading] = useState(true)
  const [films, setFilms] = useState([])
  const [characters, setCharacters] = useState([])

  console.log({
    loading,
    films,
    characters,
  })

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

  return (
    <ScreenScrollContainer>
      <Hero
        item={{
          title: 'Episódio I',
          subtitle: 'A Ameaça Fantasma',
          type: 'Filme',
          image_url:
            'https://static.wikia.nocookie.net/dublagempedia/images/7/7d/Pedro_el_malo.jpg/revision/latest?cb=20200620052955&path-prefix=pt-br',
        }}
      />
      <HomeList title="Filmes" data={films} />
      <HomeList title="Personagens" data={characters} />
    </ScreenScrollContainer>
  )
}
