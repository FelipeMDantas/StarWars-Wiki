import {
  HeroContainer,
  HeroGradient,
  HeroImageBackground,
  ButtonsView,
} from './styles'
import { colors } from '~/styles/colors'
import { Text, Logo } from '~/components/atoms'
import { Tag, IconButton, PlayButton } from '~/components/molecules'
import { useFavorites } from '~/services/hooks'

export const Hero = ({ item, onDetail }) => {
  const { addFavorite, getFavorites } = useFavorites()
  const { image_url, title, subtitle, type } = item

  const addDataAsFavorite = async () => {
    const result = await addFavorite(item)
    console.log({ result })
  }

  return (
    <HeroContainer>
      <HeroImageBackground
        source={{
          uri: image_url,
        }}
      >
        <HeroGradient colors={[colors.dark, 'transparent', colors.dark]}>
          {!onDetail && <Logo size="small" />}
          <Tag mt={onDetail ? 224 : 200}>{type}</Tag>
          <Text fontFamily="bold" size={28} mt={8}>
            {title}
          </Text>
          <Text size={18}>{subtitle}</Text>
          <ButtonsView>
            <IconButton onPress={() => addDataAsFavorite()} label="Favoritos" iconName="add-circle-outline" />
            <PlayButton />
            {!onDetail && (
              <IconButton
                label="Saiba mais"
                iconName="information-circle-outline"
              />
            )}
          </ButtonsView>
        </HeroGradient>
      </HeroImageBackground>
    </HeroContainer>
  )
}
