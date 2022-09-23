import { AiOutlineLeft, AiOutlineRight } from 'react-icons/all'
import { Link } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { ISection } from '../../interfaces/ISection'
import { useMovie } from '../../context/MoviesProvider'


function MovieList() {
  const {getSectionList} = useMovie()
  const [sections, setSections] = useState<ISection[]>([])

  useEffect(() => {
    getSectionList()
      .then(sections => {
        setSections(sections)
      })}, []  )

  return (
    <div>
      <h1>Section Title</h1>
      <div>
        <AiOutlineLeft />
        <div>
          {sections.map(section =>
            <div key={Math.random()}>
              {section.title}
              {section.movies.map(movie =>
                <div key={movie.id}>
                  <img src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`} width={200}/>
                <Link to={`/play/${movie.id}`}>
                <p> {movie.title}</p>
                </Link>
                </div>
              )}
            </div>) }
        </div>
        <div>
          MovieList:

        </div>
        <AiOutlineRight />
      </div>
    </div>
  )
}

export default MovieList
