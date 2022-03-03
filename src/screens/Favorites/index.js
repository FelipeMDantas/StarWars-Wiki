import { useEffect, useState } from 'react'
import { ScreenScrollContainer, Text } from '~/components'
import { GridList } from '~/components/organisms'
import { useFavorites } from '~/services/hooks'

export const FavoritesScreen = ({ navigation }) => {
  const [favoritesList, setFavorites] = useState([])
  const { getFavorites } = useFavorites()

  const callGetFavorites = async () => {
    const favorites = await getFavorites()
    setFavorites(favorites)
  }

  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {
      // The screen is focused
      // Call any action
      callGetFavorites()
    })

    // Return the function to unsubscribe from the event so it gets removed on unmount
    return unsubscribe
  }, [])

  return (
    <ScreenScrollContainer withPadding>
      <Text fontFamily="bold" size={28} mb={24}>
        Favoritos
      </Text>
      <GridList data={favoritesList} />
    </ScreenScrollContainer>
  )
}
