import { PlayButtonContainer } from './styles'
import { Ionicons } from '@expo/vector-icons'
import { theme } from '~/styles/theme'
import { Text } from '~/components/atoms'

export const PlayButton = ({ onPress }) => {
  return (
    <PlayButtonContainer onPress={onPress}>
      <Ionicons
        name="play"
        size={theme.metrics.px(14)}
        color={theme.colors.black}
      />
      <Text fontFamily="bold" size={14} color="black" mt={3} ml={4}>
        Assistir
      </Text>
    </PlayButtonContainer>
  )
}
