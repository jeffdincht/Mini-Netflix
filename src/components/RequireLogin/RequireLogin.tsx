import { useLogin } from '../../context/LoginProvider'
import Login from '../../pages/Login/Login'

interface Props {
  children: JSX.Element
}

export function RequireLogin({ children }: Props) {
  const authentication = useLogin()

  if (!authentication.user) {
    return <Login />
  }

  return children
}
