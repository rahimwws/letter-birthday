import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { Content } from './Content.jsx'

export const App = () => {
  const names = ['seyran','ilyas']
  return (
    <Routes>
        <Route path='/:name' element = {<Content/>}/>
        <Route path='/' element = {<Content/>}/>
    </Routes>
  )
}