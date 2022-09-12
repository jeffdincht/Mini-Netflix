import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

function Login() {
  const navigate = useNavigate()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleLogIn = () => {
    navigate('/main')
  }

  return (
    <div>
      <h1>LogIn</h1>
      <form className={'login'} onClick={(() => handleLogIn())}>
        <input type={'text'} className={'email'} value={email} placeholder={'Email'}
               onChange={event => setEmail(event.target.value)} />
        <input type={'text'} className={'password'} value={password} placeholder={'Password'}
               onChange={event => setPassword(event.target.value)} />
        <button type={'submit'}> Log In</button>
      </form>
    </div>
  )
}

export default Login
