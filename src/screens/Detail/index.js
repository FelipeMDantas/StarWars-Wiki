import { ScreenScrollContainer, Hero, GoBack, Text } from '../../components'
import { useDataStore } from '~/services/stores'

export const Detail = () => {
  const { selectedData } = useDataStore()
  return (
    <ScreenScrollContainer>
      <Hero item={selectedData} onDetail />
      <Text fontFamily="black" size={18} ml={24}>
        Descrição
      </Text>
      <Text mt={12} ml={24} mr={24} size={14} lh={20} mb={24}>
        {selectedData.description}
      </Text>
      <GoBack />
    </ScreenScrollContainer>
  )
}
