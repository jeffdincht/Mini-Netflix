import { AiOutlineLeft, AiOutlineRight } from 'react-icons/all'
import { Link } from 'react-router-dom'


function MovieList() {
  return (
    <div>
      <h1>Section Title</h1>
      <div>
        <AiOutlineLeft />
        <div>
          MovieList:
          <Link to={'/play'}>
            <p>movie</p>
          </Link>
        </div>
        <AiOutlineRight />
      </div>
    </div>
  )
}

export default MovieList
