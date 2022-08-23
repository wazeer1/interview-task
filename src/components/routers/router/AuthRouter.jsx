import React from 'react'
import { Route, Routes } from 'react-router-dom'
import LoginPage from '../../screens/LoginPage'
import Register from '../../screens/Register'

const AuthRouter = () => {
  return (
    <Routes>
        <Route path='/' element={<LoginPage/>}/>
        <Route path='register' element={<Register/>}/>
    </Routes>
  )
}

export default AuthRouter