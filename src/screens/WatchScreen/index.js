import { Container, GoBack } from '~/components'
import YoutubePlayer from 'react-native-youtube-iframe'
import { useState, useCallback, useMemo } from 'react'
import { theme } from '~/styles'
import { useDataStore } from '~/services/stores'

export const WatchScreen = () => {
  const [playing, setPlaying] = useState(false)
  const { selectedData } = useDataStore()

  const youtubeId = useMemo(() => {
    const id = selectedData.trailer_url.split('v=')[1].substring(0, 11)
    return id
  }, [selectedData])

  const onStateChange = useCallback((state) => {
    if (state === 'ended') {
      setPlaying(false)
    }
  }, [])

  const togglePlaying = useCallback(() => {
    setPlaying((prev) => !prev)
  }, [])

  return (
    <Container align="flex-start" justify="center">
      <YoutubePlayer
        height={300}
        width={theme.metrics.width}
        play={playing}
        videoId={youtubeId}
        onChangeState={onStateChange}
      />
      <GoBack />
    </Container>
  )
}
