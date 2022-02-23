import { useEffect } from 'react'
import { Text, Logo, Container } from '../../components'

export const SplashScreen = ({ navigation }) => {
  useEffect(() => {
    setTimeout(() => {
      navigation.navigate('Home')
    }, 1000)
  }, [])

  return (
    <Container align="center" justify="center">
      <Logo></Logo>
      <Text>Star Wars - Wiki</Text>
    </Container>
  )
}