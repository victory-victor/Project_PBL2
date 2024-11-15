import React from 'react'
import { Link } from 'react-router-dom'

const About = () => {
    return (
        <>
            <div>
                <nav className='flex justify-around items-center text-blue-500 h-20 w-[99vw]'>
                    <div className='name text-4xl font-bold'>
                        FixItCity
                    </div>
                    <ul className='flex gap-28 pl-44'>
                        <li className='text-3xl font-semibold cursor-pointer'><Link class="group" to="/home">
                            Home
                            <div class="bg-amber-500 h-[2px] w-0 group-hover:w-full transition-all duration-500"></div>
                        </Link></li>
                        <li className='text-3xl font-semibold cursor-pointer text-blue-900'>About</li>
                        <li className='text-3xl font-semibold cursor-pointer'><Link class="group" to="/register">
                            Register complaint
                            <div class="bg-amber-500 h-[2px] w-0 group-hover:w-full transition-all duration-500"></div>
                        </Link></li>
                        <li><Link to="/login"><img className='h-9' src="https://img.icons8.com/?size=100&id=H101gtpJBVoh&format=png&color=000000" alt="" /></Link></li>
                    </ul>
                </nav>
                <div>
                    <h1 className='text-center mt-10 text-5xl font-medium text-orange-300 mb-5' >About Us</h1>
                    <div className='border-b-[3px] border-blue-400 ml-96 mr-96' >
                    </div>
                    <div className='text-2xl text-gray-500 ml-64 mr-64 mt-10'>
                        Our Smart City Management Platform is designed to empower citizens by making it simple to report urban issues and contribute to the well-being of their community. Whether it's a broken streetlight, a pothole, waste management concerns, or other infrastructure problems, our platform provides a seamless way for residents to submit complaints with just a few clicks.
                    </div>
                    <div className='border-b-[3px] border-blue-400 ml-96 mr-96 mt-10' >
                    </div>
                    <div className='text-2xl text-gray-500 ml-64 mr-64 mt-10'>
                        Once a complaint is submitted, we handle the rest by routing it to the appropriate city authorities, ensuring that every issue reaches the people best equipped to resolve it. By bridging the communication gap between citizens and city services, our platform aims to foster accountability and responsiveness.
                    </div>
                    <div className='border-b-[3px] border-blue-400 ml-96 mr-96 mt-10' >
                    </div>
                </div>
                <footer className=' h-24 w-[99vw] mt-20 text-2xl font-medium flex justify-center items-center bg-blue-400'>
                    <p>&copy; Copyright 2024: FixItCity.com</p>
                </footer>
            </div>
        </>
    )
}

export default About
