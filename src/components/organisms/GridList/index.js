import { FlatList } from 'react-native'
import { Container, Text } from '~/components'
import { Card } from '~/components/molecules'
import { NoDataImage, SeparatorView } from './styles'
import noDataSearch from '../../../../assets/no-data-search.png'
import noDataFavorites from '../../../../assets/no-data-favorites.png'
import { theme } from '~/styles'

export const GridList = ({ data, type, loading }) => {
  return (
    <FlatList
      refreshing={loading}
      numColumns={3}
      data={data}
      renderItem={({ item }) => <Card item={item} size="large" />}
      keyExtractor={(item) => String(item.id)}
      ItemSeparatorComponent={() => <SeparatorView />}
      ListEmptyComponent={() => (
        <Container align="center" justify="center" h={theme.metrics.height / 2}>
          <NoDataImage
            resizeMode="contain"
            source={type === 'favorites' ? noDataFavorites : noDataSearch}
          />
          <Text fontFamily="semiBold" size={14} mt={12}>
            {`Nenhum ${
              type === 'favorites' ? 'favorito' : 'resultado'
            } encontrado`}
          </Text>
        </Container>
      )}
    />
  )
}
