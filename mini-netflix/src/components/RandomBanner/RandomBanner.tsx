import { useEffect, useState } from 'react'
import { IMovie } from '../../interfaces/IMovie'
import { useMovie } from '../../context/MoviesProvider'
import { RandomBannerContainer } from './RandomBannerStyle'

function RandomBanner(): JSX.Element {
  const { getById } = useMovie()
  const [movie, setMovie] = useState<IMovie | null>(null)

  useEffect(() => {
    const value = Math.floor(Math.random() * 100) + 100
    getById(Number(value))
      .then((movie) => {
          if (movie.id === value) {
            setMovie(movie)
          }
        }
      )
  }, [])

  return (
    <RandomBannerContainer>
      <img src={`https://image.tmdb.org/t/p/original/${movie?.backdrop_path}`} className={'img'} />
    </RandomBannerContainer>

  )

}


export default RandomBanner