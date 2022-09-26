import { useStorage } from '../../context/StorageProvider'
import { useEffect, useState } from 'react'
import { IUser } from '../../interfaces/IUser'
import { ITypes } from '../../interfaces/ISection'
import { MetricsContainer } from './MetricsStyles'

function Metrics() {
  const { getUsers, getTypes } = useStorage()
  const [users, setUsers] = useState<IUser[]>([])
  const [types, setTypes] = useState<ITypes[]>([])


  useEffect(() => {
    setUsers(
      getUsers()
        .sort((a, b) => b.watched - a.watched)
    )
    setTypes(
      getTypes()
        .sort((a, b) => b.count - a.count)
        .slice(0, 5)
    )
  }, [])


  return (
    <MetricsContainer>
      <div>
        <h1>Users</h1>
        {users.map((user) =>
          <div className={'users'} key={user.id}>
            <div>
              <img src={user.avatar} width={80} />
            </div>
            <div>
              <strong>{user.name}</strong>
              <p>Country: <strong>{user.country}</strong></p>
              <p>Watched: <strong>{user.watched}</strong></p>
            </div>
          </div>
        )}
        <hr/>
      </div>

      <div className={'genres'}>
        <h1>Genres</h1>
        {types.map((types) =>
          <div key={types.id}>
            <p><strong>{types.name}</strong>: {types.count}</p>
          </div>)}
      </div>
    </MetricsContainer>
  )
}

export default Metrics
