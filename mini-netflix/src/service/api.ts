import { IMovie } from '../interfaces/IMovie'

const { API_URL, API_KEY } = process.env

export async function fetchMovies(genre: number) {
  const response = await fetch(`${API_URL}discover/movie?with_genres=${genre}&api_key=${API_KEY}`)
  const { results } = await response.json()
  return results
}

export async function fetchTrending() {
  const response = await fetch(`${API_URL}trending/movie/week?api_key=${API_KEY}`)
  const { results } = await response.json()
  return results
}

export async function getSections() {
  return [
    { id: 0, title: 'Trending', movies: await fetchTrending() },
    { id: 1, title: 'Adventure', movies: await fetchMovies(12) },
    { id: 2, title: 'Animation', movies: await fetchMovies(16) },
    { id: 3, title: 'Drama', movies: await fetchMovies(18) },
    { id: 4, title: 'Fantasy', movies: await fetchMovies(14) },
    { id: 5, title: 'Romance', movies: await fetchMovies(10749) },
    { id: 6, title: 'Thriller', movies: await fetchMovies(53) }
  ]
}

export async function getMovieById(id: number) {
  const response = await fetch(`${API_URL}/movie/${id}?api_key=${API_KEY}`)
  return await response.json()
}

export async function getWatchedMovies(ids: number[]): Promise<IMovie[] | any> {
  const watchedList = []
  for (const id of ids) {
    watchedList.push(getMovieById(id))
  }
  return Promise.all(watchedList)
}