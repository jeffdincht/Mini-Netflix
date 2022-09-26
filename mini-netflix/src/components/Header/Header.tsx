import { Link } from 'react-router-dom'
import { useLogin } from '../../context/LoginProvider'
import {HeaderContainer} from './HeaderStyles'

function Header() {
  const {user} = useLogin()

  return (
    <HeaderContainer>
      <Link to={'/'}>
        <img src={'https://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png'} width={200}/>
      </Link>
      {user &&
      <Link className={'profile'} to={'/profile'}>
        <img src={user.avatar} width={50}/>
      </Link>
      }


    </HeaderContainer>
  )
}

export default Header
