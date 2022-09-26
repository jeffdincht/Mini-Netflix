import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { IMovie } from '../../interfaces/IMovie'
import { useMovie } from '../../context/MoviesProvider'
import { useLogin } from '../../context/LoginProvider'
import { useStorage } from '../../context/StorageProvider'
import { PlayMovieContainer } from './PlayMovieStyles'

function PlayMovie() {
  const { id } = useParams()
  const { getById } = useMovie()
  const { user } = useLogin()
  const { updateTypes } = useStorage()
  const [movie, setMovie] = useState<IMovie | null>(null)

  useEffect(() => {
    if (id && user) {
      getById(Number(id)).then((movie) => {
        setMovie(movie)
        updateTypes(movie)
      })
    }
  }, [])

  return (
    <PlayMovieContainer>
      <img
        src={`https://image.tmdb.org/t/p/original/${movie?.backdrop_path}`}
        className={'img'}
      />
    </PlayMovieContainer>
  )
}

export default PlayMovie
