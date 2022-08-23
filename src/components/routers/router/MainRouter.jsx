import React,{useContext, useEffect} from 'react'
import { Route, Routes } from 'react-router-dom'
import { Context } from '../../context/Store'
import AppRoute from '../routes/AppRoute'
import AuthRoute from '../routes/AuthRoute'
import AppRouter from './AppRouter'
import AuthRouter from './AuthRouter'

const MainRouter = () => {
    const {state,dispatch}=useContext(Context)
    useEffect(()=>{
        let userData=localStorage.getItem('userData');
        userData = JSON.parse(userData);
        dispatch({
          type:"UPDATE_USER_DATA",
          payload: userData
        })
        let users=localStorage.getItem('users');
        users=JSON.parse(users)
        dispatch({
            type:"UPDATE_USER_ARRAY",
            payload: users
          })
      },[])
  return (
    <Routes>
        <Route path='/' element={<AppRoute><AppRouter/></AppRoute>}/>
        <Route path='auth/*' element={<AuthRoute><AuthRouter/></AuthRoute>}/>
    </Routes>
  )
}

export default MainRouter