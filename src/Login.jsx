import React, { useContext, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { OauthContext } from './AuthContext'

function Login() {
  const {oauth} = useContext(OauthContext)

  const [loginData, setLoginData] = useState({
    Email : '',
    Password :''
  })

  const handleChange = (e) => {
    const {name, value} = e.target

    setLoginData((prev) => ({
      ...prev,
      [name] : value
    }))
  } 

  const handleSumbit = (event) => {
    event.preventDefault()
    console.log(loginData)
    oauth(loginData)
    
  }

  return (
    <div style={{textAlign:'center'}}>
      <h1>Login</h1>
      <form action="" style={{display:'flex', marginTop:'1rem', flexDirection:'column', padding:'0 5rem'}}>
        <input type="text" placeholder='Email' name='Email' style={{marginTop:'1rem', padding:'1rem'}} value={loginData.Email} onChange={handleChange}/>
        <input type="password" placeholder='Password' name='Password' style={{marginTop:'1rem',padding:'1rem'}} value={loginData.Password} onChange={handleChange}/>
      </form>
      <button onClick={handleSumbit}>Login</button>
      <h5>Does not have an account <Link to={'/Signup'}>Create Account</Link></h5>
    </div>
  )
}

export default Login
