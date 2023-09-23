import React, { useContext } from 'react'
import { AuthContext } from '../auth/context'
import { Navigate } from 'react-router-dom'

export const PublicRoutes = ({children}) => {

 const {logged} = useContext(AuthContext)
  return (!logged) ? children : <Navigate to='/marvel'/>
}
