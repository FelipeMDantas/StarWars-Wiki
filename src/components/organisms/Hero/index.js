import { HeroContainer, HeroGradient, HeroImageBackground } from './styles'
import { colors } from '~/styles/colors';
import { Text, Logo } from '~/components/atoms';

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
          <Text>Episódio I</Text>
          <Text>A Ameaça Fantasma</Text>
        </HeroGradient>
      </HeroImageBackground>
    </HeroContainer>
  )
}
