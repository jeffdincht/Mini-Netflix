import { useEffect, useState } from 'react'
import { useLogin } from '../../context/LoginProvider'
import { useMovie } from '../../context/MoviesProvider'
import { IMovie } from '../../interfaces/IMovie'
import { useNavigate } from 'react-router-dom'
import { ProfileContainer } from './ProfileStyles'

function Profile() {
  const { user, logOut } = useLogin()
  const { getWatchedList } = useMovie()
  const [movies, setMovies] = useState<IMovie[]>([])
  const navigate = useNavigate()

  function handleLogout(): void {
    logOut()
    navigate('/')
  }

  function handleMetrics(): void {
    navigate('/metrics')
  }

  useEffect(() => {
    if (user) {
      getWatchedList(user.watchedList)
        .then(movies => setMovies(movies))
    }
  }, [])


  return (
    <ProfileContainer>
      {user &&
      <div className={'profile'}>
        <div className={'profile-info'}>
          <h1>{user.name}</h1>
          <p><strong>Watched:</strong> {user.watched}</p>
          <p><strong>E-mail:</strong> {user.email}</p>
        </div>
        <div className='movies'>
          <div className={'profile-watched'}>
            <h2>Last Movies Watched</h2>
            {movies.map(movie => (
              <img key={movie.id} src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`} width={200} />
            ))}
          </div>
        </div>

        <div className={'buttons'}>
        <button onClick={handleMetrics}>Metrics</button>

        <button className={'logout'} onClick={handleLogout}>Logout</button>
        </div>
      </div>}


    </ProfileContainer>
  )
}

export default Profile
