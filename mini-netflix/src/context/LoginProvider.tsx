import { IUser } from '../interfaces/IUser'
import { createContext, useContext, useEffect, useState } from 'react'
import { getID, removeData, setData } from '../service/localStorage'
import { findUserById, userLogin } from '../service/authentication'

interface ContextType {
  user: IUser | null
  logIn: (email: string, password: string) => boolean
  logOut: () => boolean
}

interface ProviderProps {
  children: JSX.Element
}

const LoginContext = createContext<ContextType>({
  user: {} as IUser,
  logIn: () => false,
  logOut: () => false,
})

export function LoginProvider({ children }: ProviderProps) {
  const [user, setUser] = useState<IUser | null>(null)

  useEffect(() => {
    const id = getID('userId')
    const user = findUserById(id)
    if (user) {
      setUser(user)
    }
  }, [])

  function logIn(email: string, password: string) {
    const user = userLogin(email, password)
    if (user) {
      setData('userId', user.id)
      setUser(user)
      return true
    }
    return false
  }

  function logOut() {
    removeData('userId')
    setUser(null)
    return true
  }

  return (
    <LoginContext.Provider value={{ user, logIn, logOut }}>
      {children}
    </LoginContext.Provider>
  )
}

export function useLogin(): ContextType {
  return useContext(LoginContext)
}
