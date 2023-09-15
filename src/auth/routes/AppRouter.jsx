import React from 'react'
import { HeroesRoutes } from '../../heroes/routes/HeroesRoutes'
import { Route, Routes } from 'react-router-dom'
import { LoginPage } from '../pages/LoginPage'

export const AppRoter = () => {
  return (

<Routes>
    <Route path='login' element={<LoginPage/>}/>
    <Route path='/*' element={<HeroesRoutess/>}/>
    

</Routes>

)
}
