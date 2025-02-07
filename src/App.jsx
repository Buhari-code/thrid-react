import React, { useContext } from 'react'
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import Navbar from './Navbar'
import Home from './Home'
import About from './About'
import Login from './Login'
import Signup from './Signup'
import { AuthProvider} from './AuthContext'
import { OauthContext } from './AuthContext';

  

const App = () => {

  return (
    
    <BrowserRouter>
    <AuthProvider>
     <AuthContext />
    </AuthProvider>
    </BrowserRouter>
  )
}

const AuthContext = () => {
  const {loggedIn} = useContext(OauthContext)
  return(
    <>
    {loggedIn && <Navbar />} 
     <Routes>
      {loggedIn ? (
        <>
        <Route path='/home' element={<Home />}/>
        <Route path='/about' element={<About />}/>
        <Route path='/*' element={<Navigate to={'/home'}/>}/>
        </>
      )
      :(
        <>
        <Route path='/Login' element={<Login />}/>
        <Route path='/Signup' element={<Signup />} />
        <Route path='/*' element={<Navigate to={'/Login'}/>}/>
        </>
      )}
    </Routes>
    </>
  )
}


export default App