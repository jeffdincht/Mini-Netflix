import { FormEvent, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useLogin } from '../../context/LoginProvider'
import { useStorage } from '../../context/StorageProvider'
import { LoginContainer } from './LoginStyles'

function Login() {
  const navigate = useNavigate()
  const { logIn } = useLogin()
  const { saveInitialData } = useStorage()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleLogIn = (event: FormEvent) => {
    event.preventDefault()
    if (email && password) {
      const logged = logIn(email, password)
      if (logged) {
        saveInitialData()
        navigate('/')
      }
    }
  }

  return (
    <LoginContainer>
      <h1>LogIn</h1>
      <form
        className={'form'}
        onSubmit={(event: FormEvent) => handleLogIn(event)}
      >
        <input
          type={'text'}
          className={'email'}
          value={email}
          placeholder={'Email'}
          onChange={(event) => setEmail(event.target.value)}
        />
        <input
          type={'password'}
          className={'password'}
          value={password}
          placeholder={'Password'}
          onChange={(event) => setPassword(event.target.value)}
        />
        <button type={'submit'}>Log In</button>
      </form>
    </LoginContainer>
  )
}

export default Login
