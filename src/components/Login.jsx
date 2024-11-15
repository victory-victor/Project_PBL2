import React from 'react'
import { useState } from 'react'
import { useRef } from 'react'
import { Link } from 'react-router-dom'

const Login = () => {
  const ref = useRef()
    const dot = useRef()

    const showIcon = () => {
        if (ref.current.src.includes("icons/lock_input.png")) {
            ref.current.src = "icons/lock_open_input.png"
            dot.current.type = "text"
        }
        else {
            ref.current.src = "icons/lock_input.png"
            dot.current.type = "password"
        }
    }
  return (
    <div>
      <>
      <div>
                <div className="container">
                    <div className="box flex flex-row">
                        <img className='h-[700px] w-[550px] rounded-s-lg shadow-2xl' src="https://theunitedindian.com/images/smart-cities-28-08-24-hero.jpg" alt="" />
                        <div className='relative bg-white h-[700px] w-[650px] flex flex-col justify-center items-center border shadow-2xl rounded-e-lg'>
                            <h1 className='text-6xl font-medium text-blue-400 pt-8' >Welcome Back!</h1>
                            <div className='relative' >
                                <input className=' h-14 w-[400px] mt-12 pl-[62px] border border-blue-400 rounded-lg text-sm font-normal text-black' type="email" name="email" id="email" />
                                <div>
                                    <img className='absolute top-[60px] left-5 h-8 w-8' src="icons/email_input.png" alt="" />
                                </div>
                                <div className='absolute top-10 left-4 bg-white h-5 w-16 text-[13px] text-center font-bold text-blue-500' >
                                    Email id
                                </div>
                            </div>
                            <div className='relative mt-1' >
                                <input ref={dot} className=' h-14 w-[400px] mt-12 pl-[62px] border border-blue-400 rounded-lg text-sm font-normal text-black' type="password" name="password" id="password" />
                                <div>
                                    <img ref={ref} onClick={showIcon} className='absolute top-[60px] left-[18px] h-8 w-9 cursor-pointer' src="icons/lock_input.png" alt="" />
                                </div>
                                <div className='absolute top-10 left-4 bg-white h-5 w-20 text-[13px] text-center font-bold text-blue-500' >
                                    Password
                                </div>
                                <div className='absolute top-14 right-1 bg-white h-9 w-9 text-[13px] text-center font-bold text-blue-500' >
                                </div>
                                <div className='absolute text-sm right-0 mt-1' >
                                    <span>Don't have an account? </span><span className='text-blue-500 cursor-pointer' ><Link to="/">Create Account</Link></span>
                                </div>
                            </div>
                            <div className='mt-24 '>
                                <button className='pl-16 pr-16 pt-3 pb-3 bg-blue-400 text-white font-medium text-lg rounded-lg hover:bg-blue-300'><Link to="/home">Login</Link>     
                                </button>
                            </div>
                            <div className='flex '>
                                <img className='h-28 absolute left-0 bottom-0' src="icons/Taj.jpg" alt="" />
                                <img className='h-28 absolute right-2 bottom-0' src="icons/Pisa.jpg" alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
      </>
    </div>
  )
}

export default Login
