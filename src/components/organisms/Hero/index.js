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
  const [isFavorite, setIsFavorite] = useState(false)
  const [showFavoriteModal, setShowFavoriteModal] = useState(null)
  const { addFavorite, getFavorites, removeFavorite } = useFavorites()
  const { image_url, title, subtitle, type } = item

  const checkIsFavorite = async () => {
    const favorites = await getFavorites()
    const isInFavorite = favorites.filter(
      (fv) => fv.id === item.id && fv.type === item.type
    )
    setIsFavorite(isInFavorite.length > 0)
  }

  useEffect(() => {
    checkIsFavorite()
  }, [])

  const closeFavoriteModal = () => {
    setTimeout(() => {
      setShowFavoriteModal(null)
    }, 1000)
  }

  const addDataAsFavorite = async () => {
    await addFavorite(item)
    setShowFavoriteModal('added')
    checkIsFavorite()
    closeFavoriteModal()
  }

  const removeDataFromFavorites = async () => {
    await removeFavorite(item)
    setShowFavoriteModal('removed')
    checkIsFavorite()
    closeFavoriteModal()
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
        !!showFavoriteModal && (
          <FavoriteStateModal 
            type={showFavoriteModal}
            visible={!!showFavoriteModal}
            onClose={() => setShowFavoriteModal(null)}
          />
        )
      }
    </HeroContainer>
  )
}
