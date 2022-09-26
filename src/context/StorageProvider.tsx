import { IUser } from '../interfaces/IUser'
import { ITypes } from '../interfaces/ISection'
import { IMovie } from '../interfaces/IMovie'
import { Context, createContext, useContext } from 'react'
import { database, metrics } from '../db/database'
import { getData, setData } from '../service/localStorage'

interface ContextType {
  saveInitialData: () => void
  getUsers: () => IUser[]
  setUsers: (users: IUser[]) => void
  getTypes: () => ITypes[]
  setTypes: (types: ITypes[]) => void
  updateUserWatched: (user: IUser, movie: IMovie) => void
  updateTypes: (movie: IMovie) => void
}

interface ProviderProps {
  children: JSX.Element
}

const StorageContext: Context<ContextType> = createContext<ContextType>({
  saveInitialData: () => {},
  getUsers: () => [],
  setUsers: () => {},
  getTypes: () => [],
  setTypes: () => {},
  updateUserWatched: () => {},
  updateTypes: () => {},
})

export function StorageProvider({ children }: ProviderProps): JSX.Element {
  function saveInitialData(): void {
    if (!getUsers().length) {
      const userList: IUser[] = database.map((user) => {
        const { password, ...values } = user
        return values
      })
      setUsers(userList)
    }
    if (!getTypes().length) {
      const types: ITypes[] = metrics.types
      setTypes(types)
    }
  }

  function getUsers(): IUser[] {
    return getData('users')
  }

  function setUsers(users: IUser[]): void {
    setData('users', users)
  }

  function getTypes(): ITypes[] {
    return getData('types')
  }

  function setTypes(types: ITypes[]): void {
    setData('types', types)
  }

  function updateUserWatched(user: IUser, movie: IMovie): void {
    const movieIndex = user.watchedList.findIndex(
      (element) => element === movie.id
    )
    if (movieIndex >= 0) {
      user.watchedList.splice(movieIndex, 1)
    } else {
      user.watchedList.pop()
    }
    user.watchedList.unshift(movie.id)

    const updatedUsers = getUsers().map((element) => {
      if (element.id === user.id) {
        user.watched += 1
        return user
      }
      return element
    })
    setUsers(updatedUsers)
  }

  function updateTypes(movie: IMovie): void {
    const genres = movie.genres
    const types = getTypes()

    for (const genre of genres) {
      const index = types.findIndex((element) => element.id === genre.id)
      const type = types[index]
      type.count += 1
      types.splice(index, 1, type)
    }

    setTypes(types)
  }

  return (
    <StorageContext.Provider
      value={{
        saveInitialData,
        getUsers,
        setUsers,
        getTypes,
        setTypes,
        updateUserWatched,
        updateTypes,
      }}
    >
      {children}
    </StorageContext.Provider>
  )
}

export function useStorage(): ContextType {
  return useContext(StorageContext)
}
