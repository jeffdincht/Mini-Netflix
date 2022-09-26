import { IMovie } from './IMovie'

export interface ISection {
  id: number
  title: string
  movies: IMovie[]
}

export interface IMetrics {
  types: ITypes[]
}

export interface ITypes {
  id: number
  name: string
  count: number
}