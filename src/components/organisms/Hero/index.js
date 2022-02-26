import {
  HeroContainer,
  HeroGradient,
  HeroImageBackground,
  ButtonsView,
} from './styles'
import { colors } from '~/styles/colors'
import { Text, Logo } from '~/components/atoms'
import { Tag, IconButton, PlayButton } from '~/components/molecules'

export const Hero = ({ item }) => {
  const { image_url, title, subtitle, type } = item;
  return (
    <HeroContainer>
      <HeroImageBackground
        source={{
          uri: image_url
        }}
      >
        <HeroGradient colors={[colors.dark, 'transparent', colors.dark]}>
          <Logo size="small" />
          <Tag mt={200}>{type}</Tag>
          <Text fontFamily="bold" size={28} mt={8}>
            {title}
          </Text>
          <Text size={18}>{subtitle}</Text>
          <ButtonsView>
            <IconButton label="Favoritos" iconName="add-circle-outline" />
            <PlayButton />
            <IconButton
              label="Saiba mais"
              iconName="information-circle-outline"
            />
          </ButtonsView>
        </HeroGradient>
      </HeroImageBackground>
    </HeroContainer>
  )
}