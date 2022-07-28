import React from 'react'
import './Container.css'
import Header from './Header/Header'
import Home from './Home/Home.js'
import SideContact from './SideContact/SideContact'

export default function Container() {
  return (
    <div>
        <Header/>
        <Home/>
        <SideContact/>
    </div>
  )
}
