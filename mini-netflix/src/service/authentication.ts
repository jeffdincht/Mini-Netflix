import { database } from '../db/database'
import { IUser } from '../interfaces/IUser'
import { getData } from './localStorage'

export function userLogin(email: string, password: string) {
  const user = database.find((user) => user.email === email)
  if (user && user.password === password) {
    return user
  }
  return
}

export function findUserById(userId: number): IUser | null {
  const storageValue: IUser[] = getData('users')
  if (storageValue.length) {
    return storageValue.find((user) => user.id === userId) || null
  }
  return database.find((user) => user.id === userId) || null
}
