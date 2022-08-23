import React, { useContext } from 'react'
import { Route, Routes } from 'react-router-dom'
import { Context } from '../../context/Store'
import Developer from '../../screens/Developer'
import ManagersLanding from '../../screens/ManagersLanding'

const AppRouter = () => {
    const {state:{userData:{role}}}=useContext(Context)
  return (
    <Routes>
        <Route path='/' element={role=='manager' ? <ManagersLanding/> :<Developer/>  }/>
    </Routes>
  )
}

export default AppRouter