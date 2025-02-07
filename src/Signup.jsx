import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import { addUser } from './redux/slice'

function Signup() {

  const dispatch = useDispatch()

  const [signupData, setSignupData] = useState({
    Name:'',
    Email:'',
    Password:''
  })

  const handleChange = (e) => {
    const {name, value} = e.target

    setSignupData((prev) => ({
      ...prev,
      id:Date.now(),
      [name]: value
    }))
  }

  const handleSumbit = (event) => {
    event.preventDefault()
     console.log(signupData)
     dispatch(addUser(signupData))
     setSignupData({
       Name:'',
       Email:'',
       Password:''
     })
     
  }

  

  return (
    <div style={{textAlign:'center'}}>
      <h1>Register</h1>
      <form action="" style={{display:'flex', marginTop:'1rem', flexDirection:'column', padding:'0 5rem'}} onChange={handleChange}>
        <input type="text" placeholder='Name' name='Name' value={signupData.Name} style={{padding:'1rem'}}/>
        <input type="text" placeholder='Email' name='Email' value={signupData.Email} style={{marginTop:'1rem', padding:'1rem'}}/>
        <input type="password" placeholder='Password' name='Password' value={signupData.Password} style={{marginTop:'1rem',padding:'1rem'}}/>
      </form>
      <button onClick={handleSumbit}>Sign Up</button>
      <h5>Already have an account<Link to={'/Login'}>Login</Link></h5>
    </div>
  )
}

export default Signup
