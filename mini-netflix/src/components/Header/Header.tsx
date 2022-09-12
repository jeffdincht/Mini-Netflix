import { Link } from 'react-router-dom'
import { BiUser, TbChartInfographic } from 'react-icons/all'

function Header() {
  return (
    <div>
      <Link to={'/'}>
        <p>Netflix</p>
      </Link>
      <Link to={'/profile'}>
        <BiUser />
      </Link>
      <Link to={'/metrics'}>
        <TbChartInfographic />
      </Link>
    </div>
  )
}

export default Header
