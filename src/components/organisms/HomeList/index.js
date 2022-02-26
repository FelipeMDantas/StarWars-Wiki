import { FlatList } from 'react-native'
import { Card } from '../..'
import { ListContainer } from './styles'
import { Text } from '~/components/atoms'
import { theme } from '~/styles/theme'

export const HomeList = ({ data, title }) => {
  return (
    <ListContainer>
      <Text fontFamily="black" size={18} ml={24}>
        {title}
      </Text>
      <FlatList
        horizontal
        data={data}
        renderItem={({ item }) => <Card item={item} />}
        keyExtractor={(item) => String(item.id)}
        contentContainerStyle={{
          paddingTop: theme.metrics.px(12),
          paddingLeft: theme.metrics.px(24),
          paddingBottom: theme.metrics.px(24),
        }}
      />
    </ListContainer>
  )
}
