import { useEffect, useState } from 'react'
import { GridList, Input, ScreenScrollContainer, Text } from '~/components'
import { useGetData } from '~/services/hooks'

export const SearchScreen = () => {
  const { getSearchResult } = useGetData()
  const [results, setResults] = useState([])
  const [query, setQuery] = useState('')
  const [loading, setLoading] = useState()

  const callGetSearchResult = async () => {
    setLoading(true)
    const result = await getSearchResult(query)
    if (!result.error) {
      setResults(result)
    }
    setLoading(false)
  }

  useEffect(() => {
    if (query.length > 0 && query.length % 3 === 0) {
      callGetSearchResult()
    }
  }, [query])

  return (
    <ScreenScrollContainer withPadding>
      <Text fontFamily="bold" size={28} mb={24}>
        Pesquisar
      </Text>
      <Input
        mb={24}
        placeholder="Filme ou nome do personagem"
        value={query}
        onChangeText={(text) => setQuery(text)}
      />
      <GridList loading={loading} data={results} type="search" />
    </ScreenScrollContainer>
  )
}
