

import React from 'react'
import { Route, Routes } from 'react-router-dom'

import { Home } from '../body/Home'
import { Getstarted } from '../body/get-started'
import { Login } from '../body/login'
import { Signup } from '../body/signup'
import { Recipes } from '../body/recipes'

export const AllRoutes = () => {
  return (
    <div>
        <Routes>
            <Route path='/' element={<Home/>}></Route>
            <Route path='/getstarted' element={<Getstarted/>}></Route>
            <Route path='/login' element={<Login/>}></Route>
            <Route path='/signup' element={<Signup/>}></Route>
            <Route path='/recipes' element={<Recipes/>}></Route>
        </Routes>
    </div>
  )
}
