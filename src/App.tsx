import { FC, useEffect, useState } from 'react'
import axios from 'axios'
import User from './components/User'
import { AppProps, Users } from './App.types'

const App: FC<AppProps> = ({ title }) => {
  const [users, setUsers] = useState<Users[]>([]) //When zou are declaring an array, you need to specify each individual property of the array
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [username, setUsername] = useState<string>('')

  // useEffect(() => {
  //   const getUsers = async () => {
  //     try {
  //       setIsLoading(true)
  //       const { data } = await axios.get(
  //         'https://randomuser.me/api/?results=10'
  //       )
  //       console.log(data.results)
  //       setUsers(data.results)
  //     } catch (err) {
  //       console.log(err)
  //     } finally {
  //       //we can add finally block t avoid repeating isLoading state twice
  //       setIsLoading(false)
  //     }
  //   }
  //   getUsers()
  // }, [])

  const handleClick = async () => {
    try {
      setIsLoading(true)
      const { data } = await axios.get('https://randomuser.me/api/?results=10')
      console.log(data.results)
      setUsers(data.results)
    } catch (err) {
      console.log(err)
    } finally {
      //we can add finally block t avoid repeating isLoading state twice
      setIsLoading(false)
    }
  }

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUsername(event.target.value)
  }

  return (
    <div>
      <h1>{title}</h1>
      <button onClick={handleClick}>Show Users</button>
      <input
        type="text"
        onChange={handleChange}
        // value={username} it is optional to provide value in this case, but you cannot provide value without onChange
      />
      <div>{username}</div>
      {/*We can also destructure data for iur user than code will be look like this and we don't need to have 'user' property. And I will put tis part 
      <li key={login.uuid}>
              <div>
                Name: {name.first} {name.last}
              </div>
              <div>Email: {email}</div>
              <hr />
            </li>  
            to a User.tsx component*/}
      <ul>
        {isLoading && <div>Loading...</div>}
        {users.map(({ name, login, email }) => {
          return <User key={login.uuid} name={name} email={email} />
        })}
      </ul>
      {/* <ul>
        {users.map((user) => {
          return (
            <li key={user.login.uuid}>
              <div>
                Name: {user.name.first} {user.name.last}
              </div>
              <div>Email: {user.email}</div>
              <hr />
            </li>
          )
        })}
      </ul> */}
    </div>
  )
}

export default App
