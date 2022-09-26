import MovieList from '../../components/MovieList/MovieList'
import { MainMovieSelectionContainer } from './MainMovieSelectionStyles'
import RandomBanner from '../../components/RandomBanner/RandomBanner'

function MainMovieSelection() {
  return (
    <MainMovieSelectionContainer>
      <RandomBanner />
      <MovieList />
    </MainMovieSelectionContainer>
  )
}

export default MainMovieSelection
