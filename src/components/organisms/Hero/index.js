import {
  HeroContainer,
  HeroGradient,
  HeroImageBackground,
  ButtonsView,
} from './styles'
import { colors } from '~/styles/colors'
import { Text, Logo } from '~/components/atoms'
import { Tag, IconButton, PlayButton } from '~/components/molecules'

export const Hero = () => {
  return (
    <HeroContainer>
      <HeroImageBackground
        source={{
          uri: 'https://static.wikia.nocookie.net/dublagempedia/images/7/7d/Pedro_el_malo.jpg/revision/latest?cb=20200620052955&path-prefix=pt-br',
        }}
      >
        <HeroGradient colors={[colors.dark, 'transparent', colors.dark]}>
          <Logo size="small" />
          <Tag mt={200}>Filme</Tag>
          <Text fontFamily="bold" size={28} mt={8}>
            Episódio I
          </Text>
          <Text size={18}>A Ameaça Fantasma</Text>
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