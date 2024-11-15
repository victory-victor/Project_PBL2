import { useState } from 'react'
import { useRef } from 'react'
import './App.css'
import SignUp from './components/SignUp'
import Login from './components/Login'
import Home from './components/Home'
import About from './components/About'
import Register from './components/Register'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

function App() {
  const router = createBrowserRouter([
    { 
      path:"/",
      element: <><div  >
      <SignUp/>
    </div></>
    },
    { 
      path:"/login",
      element: <><div  >
      <Login/>
    </div></>
    },
    { 
      path:"/home",
      element: <><div  >
      <Home/>
    </div></>
    },
    { 
      path:"/about",
      element: <><div  >
      <About/>
    </div></>
    },
    { 
      path:"/register",
      element: <><div  >
      <Register/>
    </div></>
    },
  ])

  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
