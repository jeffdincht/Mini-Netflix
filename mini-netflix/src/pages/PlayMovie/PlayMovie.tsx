import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { IMovie } from '../../interfaces/IMovie'
import { useMovie } from '../../context/MoviesProvider'

function PlayMovie() {
  const { id } = useParams()
  const { getById } = useMovie()
  const [movie, setMovie] = useState<IMovie | null>(null)

  useEffect(() => {
    getById(Number(id))
      .then(movie => {
          setMovie(movie)
        }
      )
  }, [])

  return (
    <div>
      <p>{movie?.title}</p>
      <p>{movie?.overview}</p>
    </div>
  )
}

export default PlayMovie
