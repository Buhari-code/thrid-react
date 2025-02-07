import React, { useContext } from 'react'
import { useDispatch } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import { removeUser } from './redux/slice'
import { OauthContext } from './AuthContext'

function Home() {

  const dispatch = useDispatch()
  const navigate = useNavigate()

  const {logout} = useContext(OauthContext)

  const userData = JSON.parse(localStorage.getItem("UserData"))


  return (
    <div>
      Home
      <Link to={'/Login'}>Login</Link>
      <button onClick={logout}>Logout</button>
      <h1>Welcome {userData[0]?.Name}</h1>
    </div>
  )
}

export default Home
