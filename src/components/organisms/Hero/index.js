import {
  HeroContainer,
  HeroGradient,
  HeroImageBackground,
  ButtonsView,
} from './styles'
import { colors } from '~/styles/colors'
import { Text, Logo } from '~/components/atoms'
import { Tag, IconButton, PlayButton, FavoriteStateModal } from '~/components/molecules'
import { useFavorites } from '~/services/hooks'
import { useEffect, useState } from 'react'
import { useNavigation } from '@react-navigation/native'
import { useDataStore } from '~/services/stores'

export const Hero = ({ item, onDetail }) => {
  const navigation = useNavigation()
  const { setSelectedData } = useDataStore()
  const [loading, setLoading] = useState(true)
  const [isFavorite, setIsFavorite] = useState(false)
  const [showFavoriteModal, setShowFavoriteModal] = useState(true)
  const { addFavorite, getFavorites, removeFavorite } = useFavorites()
  const { image_url, title, subtitle, type } = item

  const checkIsFavorite = async () => {
    setLoading(true)
    const favorites = await getFavorites()
    //console.log({ favorites })
    const isInFavorite = favorites.filter(
      (fv) => fv.id === item.id && fv.type === item.type
    )
    setIsFavorite(isInFavorite.length > 0)
    setLoading(false)
  }

  useEffect(() => {
    checkIsFavorite()
  }, [])

  const addDataAsFavorite = async () => {
    await addFavorite(item)
    checkIsFavorite()
  }

  const removeDataFromFavorites = async () => {
    await removeFavorite(item)
    checkIsFavorite()
  }

  const onPressWatch = () => {
    setSelectedData(item)
    navigation.navigate('Watch')
  }

  const onPressDetail = () => {
    setSelectedData(item)
    navigation.navigate('Detail')
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
            <IconButton
              onPress={() =>
                isFavorite ? removeDataFromFavorites() : addDataAsFavorite()
              }
              label={isFavorite ? 'Remover Favorito' : 'Adicionar Favorito'}
              iconName={
                isFavorite ? 'remove-circle-outline' : 'add-circle-outline'
              }
            />
            <PlayButton onPress={onPressWatch} />
            {!onDetail && (
              <IconButton
                onPress={onPressDetail}
                label="Saiba mais"
                iconName="information-circle-outline"
              />
            )}
          </ButtonsView>
        </HeroGradient>
      </HeroImageBackground>{
        showFavoriteModal && (
          <FavoriteStateModal 
            type="added"
            visible={showFavoriteModal}
            onClose={() => setShowFavoriteModal(false)}
          />
        )
      }
    </HeroContainer>
  )
}
