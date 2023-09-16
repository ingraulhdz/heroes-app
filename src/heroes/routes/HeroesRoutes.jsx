import React from 'react'
import { Navbar } from '../../ui'
import { Navigate, Route, Routes } from 'react-router-dom'
import { DCPage,  MarvelPage, SearchPage } from '../pages'
import { HeroPage } from '../pages/HeroPage'

export const HeroesRoutes = () => {
  return (
<>
<Navbar/>
<div className='container'>
    
<Routes>
    <Route path='marvel' element={<MarvelPage/>}/>
    <Route path='dc' element={<DCPage/>}/>
    <Route path='/' element={<Navigate to="marvel" /> }/>
    <Route path='search' element={<SearchPage/>}/>
    <Route path='hero/:heroId' element={<HeroPage/>}/>
</Routes>
</div>

</>
    )
}
