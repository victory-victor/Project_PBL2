import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
    return (
        <>
            <div>
                <nav className='flex justify-around items-center text-blue-500 h-20 w-[99vw]'>
                    <div className='name text-4xl font-bold'>
                        FixItCity
                    </div>
                    <ul className='flex gap-28 pl-44'>
                        <li className='text-3xl font-semibold text-blue-900 cursor-pointer'>Home</li>
                        <li className='text-3xl font-semibold cursor-pointer'><Link class="group" to="/about">
                                    About
                                    <div class="bg-amber-500 h-[2px] w-0 group-hover:w-full transition-all duration-500"></div>
                                </Link></li>
                        <li className='text-3xl font-semibold cursor-pointer'><Link class="group" to="/register">
                                    Register complaint
                                    <div class="bg-amber-500 h-[2px] w-0 group-hover:w-full transition-all duration-500"></div>
                                </Link></li>
                        <li><Link to="/login"><img className='h-9' src="https://img.icons8.com/?size=100&id=H101gtpJBVoh&format=png&color=000000" alt="" /></Link></li>
                    </ul>
                </nav>
                <div className='flex'>
                    <div>
                        <img className='h-[450px] ml-20 mt-10' src="https://i0.wp.com/www.planetcrust.com/wp-content/uploads/2020/10/1087.0.-Connected_placeWhat-does-Smart-City-Management-mean.png?resize=2048%2C1076&ssl=1" alt="" />
                    </div>
                    <div>
                        <h1 className='mt-36 text-6xl tracking-wider text-blue-500'>Your Voice </h1>
                        <h1 className='text-6xl tracking-wider text-blue-500'>For a Better City</h1> 
                        <h1 className='mt-5 text-2xl tracking-[0.2em] text-blue-500'>Report, Resolve, Revitalize</h1> 
                    </div>
                </div>
                <footer className=' h-24 w-[99vw] mt-20 text-2xl font-medium flex justify-center items-center bg-blue-400'>
                    <p>&copy; Copyright 2024: FixItCity.com</p>
                </footer>
            </div>
        </>
    )
}

export default Home
