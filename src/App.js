import React from 'react'
import "./App.css"
import Navbar from './components/Navbar/Navbar'
import Home from './components/home/Home'
import { Provider } from 'react-redux'
import store from './redux/store'
import About from './components/about/About'
import Skills from './components/skills/Skills'
import Portfolio from './components/portfolio/Portfolio'
import Contact from './components/contact/Contact'
export default function App() {
  return (
      
      <Provider store={store}>
      <Navbar/>
      <Home/>
      <About/>
      <Skills/>
      {/* <Portfolio/>
      <Contact/> */}
      </Provider>
    

    
     

    
  )
}
