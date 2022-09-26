import { createContext, Context, useContext } from 'react'
import { getMovieById, getSections, getWatchedMovies } from '../service/api'
import { IMovie } from '../interfaces/IMovie'
import { ISection } from '../interfaces/ISection'

interface ContextType {
  getSectionList: () => Promise<ISection[]>
  getById: (id: number) => Promise<IMovie>
  getWatchedList: (ids: number[]) => Promise<IMovie[]>
}

interface ProviderProps {
  children: JSX.Element
}

const MoviesContext: Context<ContextType> = createContext<ContextType>({
  getSectionList: async () => [],
  getById: async () => await ({} as IMovie),
  getWatchedList: async () => [],
})

export function MoviesProvider({ children }: ProviderProps) {
  async function getSectionList() {
    return await getSections()
  }

  async function getById(id: number) {
    return await getMovieById(id)
  }

  async function getWatchedList(ids: number[]): Promise<IMovie[]> {
    return await getWatchedMovies(ids)
  }

  return (
    <MoviesContext.Provider value={{ getSectionList, getById, getWatchedList }}>
      {children}
    </MoviesContext.Provider>
  )
}

export function useMovie(): ContextType {
  return useContext(MoviesContext)
}
