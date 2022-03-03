import { useEffect } from 'react'
import { Text, Logo, Container } from '../../components'

export const SplashScreen = ({ navigation }) => {
  useEffect(() => {
    setTimeout(() => {
      navigation.navigate('Home')
    }, 2000)
  }, [])

  return (
    <Container align="center" justify="center">
      <Logo></Logo>
      <Text fontFamily="bold" size={24} mt={12}>
        Star Wars - Wiki
      </Text>
    </Container>
  )
}
