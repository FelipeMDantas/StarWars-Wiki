import {
  Modal,
  ModalBackgroundContainer,
  ModalContentContainer,
} from './styles'
import { Text } from '~/components/atoms'
import favoriteAdded from '../../../../assets/favorite-added.png'
import favoriteRemoved from '../../../../assets/favorite-removed.png'

export const FavoriteStateModal = ({ visible, onClose, type }) => {
  return (
    <Modal visible={visible} transparent onRequestClose={onClose}>
      <ModalBackgroundContainer>
        <ModalContentContainer>
          <Text align="center" size={28} fontFamily="bold">
            {`Favorito ${
              type === 'added' ? 'adicionado' : 'removido'
            } com sucesso!`}
          </Text>
        </ModalContentContainer>
      </ModalBackgroundContainer>
    </Modal>
  )
}
