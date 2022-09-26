export interface IUser {
  id: number
  name: string
  email: string
  password?: string
  country: string
  watched: number
  watchedList: number[],
  avatar: string
}