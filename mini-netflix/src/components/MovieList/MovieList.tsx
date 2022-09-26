import { Link } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { ISection } from '../../interfaces/ISection'
import { useMovie } from '../../context/MoviesProvider'
import { MovieListContainer } from './MovieListStyles'
import ScrollContainer from 'react-indiana-drag-scroll'
import { IUser } from '../../interfaces/IUser'
import { IMovie } from '../../interfaces/IMovie'
import { useStorage } from '../../context/StorageProvider'
import { useLogin } from '../../context/LoginProvider'

function MovieList() {
  const { getSectionList } = useMovie()
  const { updateUserWatched} = useStorage()
  const { user } = useLogin()
  const [sections, setSections] = useState<ISection[]>([])

  useEffect(() => {
    getSectionList()
      .then(sections => {
        setSections(sections)
      })
  }, [])

  function handleClick(user: IUser, movie: IMovie) {
    updateUserWatched(user, movie)
  }

  return (
    <MovieListContainer>
      <div>
        {user && sections.map(section =>
          <div className={'section'} key={section.id}>
            <h1>{section.title}</h1>
            <div className={'list'}>
              <ScrollContainer className={'movies'}>
                {section.movies.map(movie =>
                  <div className={'movie'} key={movie.id}>
                    <Link to={`/play/${movie.id}`} onClick={() => handleClick(user, movie)}>
                      <img src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`} width={200} />
                    </Link>
                  </div>
                )}
              </ScrollContainer>
            </div>
          </div>)}
      </div>
    </MovieListContainer>
  )
}

export default MovieList
