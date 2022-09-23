
export interface IMovie {
  genres: IGenre[]
  id: number
  name: string
  original_name: string
  original_title: string
  overview: string
  poster_path: string
  title: string
}

export interface IGenre {
  id: number
  name: string
}

