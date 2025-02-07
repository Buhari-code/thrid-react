import React, { useEffect, useState } from 'react'
import { createContext } from 'react'
import { useNavigate } from 'react-router-dom'

const OauthContext = createContext()

const AuthProvider = ({children}) => {


      const navigate = useNavigate()
      const [loggedIn, setLoggedIn] = useState(() => {
        return localStorage.getItem('LoggedIn')
      })

    const oauth = (loginData) => {
        const storedData = JSON.parse(localStorage.getItem('UserData'))
        const user = storedData.find((user) => user.Email === loginData.Email && user.Password === loginData.Password)
        if(user) {
          setLoggedIn(true)
            localStorage.setItem('LoggedIn', 'true')
        }
        
    }

    useEffect(() => {
       
       if(loggedIn) {
         navigate('/home')
       }
       else{
        navigate('/Login')
       }
    }, [])

    const logout = () => {
      localStorage.removeItem('LoggedIn')
      setLoggedIn(false)
      navigate('/Login')
    }


  return (
    <OauthContext.Provider value={{oauth, logout, loggedIn}}>
      {children}
    </OauthContext.Provider>
  )
}

export {AuthProvider, OauthContext}
