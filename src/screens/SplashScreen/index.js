import { StatusBar } from 'expo-status-bar'
import { Text, Logo, Container } from '../../components'

export const SplashScreen = () => {
  return (
    <Container align="center" justify="center">
      <Logo></Logo>
      <Text>Star Wars - Wiki</Text>
      <StatusBar style="auto" />
    </Container>
  )
}