import { BeatLoader } from 'react-spinners'
import { LoadingContainer } from './styles'

export function Loading() {
  return (
    <LoadingContainer>
      <BeatLoader color="#DBAC2C" />
    </LoadingContainer>
  )
}
