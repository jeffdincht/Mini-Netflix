import { IUser } from '../interfaces/IUser'
import { IMetrics } from '../interfaces/ISection'

export const database:IUser[] =[
  {
    id: 1,
    name: 'jeff',
    email: 'jeff@jeff.com',
    password: '123',
    country: 'PT',
    watched: 3,
    watchedList: [110, 112, 111],
    avatar: 'https://pro2-bar-s3-cdn-cf.myportfolio.com/dddb0c1b4ab622854dd81280840458d3/877ad1ce3a479ef9498e1efc_rw_600.png?h=794db6a6ae01c539fdfb7ad5e5a89589'
  },  {
    id: 2,
    name: 'admin',
    email: 'admin@admin.com',
    password: 'admin',
    country: 'BR',
    watched: 3,
    watchedList: [110, 112, 111],
    avatar: 'https://mir-s3-cdn-cf.behance.net/project_modules/disp/64623a33850498.56ba69ac2a6f7.png'
  },  {
    id: 3,
    name: 'american',
    email: 'american@american.com',
    password: 'american',
    country: 'US',
    watched: 3,
    watchedList: [110, 112, 111],
    avatar: 'https://mir-s3-cdn-cf.behance.net/project_modules/disp/84c20033850498.56ba69ac290ea.png'
  }
]


export const metrics: IMetrics = {
  types: [
    { id: 28, name: 'Action', count: 0 },
    { id: 12, name: 'Adventure', count: 0 },
    { id: 16, name: 'Animation', count: 0 },
    { id: 35, name: 'Comedy', count: 0 },
    { id: 80, name: 'Crime', count: 0 },
    { id: 99, name: 'Documentary', count: 0 },
    { id: 18, name: 'Drama', count: 0 },
    { id: 10751, name: 'Family', count: 0 },
    { id: 14, name: 'Fantasy', count: 0 },
    { id: 36, name: 'History', count: 0 },
    { id: 27, name: 'Horror', count: 0 },
    { id: 10402, name: 'Music', count: 0 },
    { id: 9648, name: 'Mystery', count: 0 },
    { id: 10749, name: 'Romance', count: 0 },
    { id: 878, name: 'Sci-Fi', count: 0 },
    { id: 10770, name: 'TV-Movie', count: 0 },
    { id: 53, name: 'Thriller', count: 0 },
    { id: 10752, name: 'War', count: 0 },
    { id: 37, name: 'Western', count: 0 }
  ],
}