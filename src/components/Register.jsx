import React from 'react'
import { useRef } from 'react';
import { Link } from 'react-router-dom'
import { Bounce, ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Register = () => {
  const drop = useRef()
  const drop1 = useRef()
  const drop2 = useRef()
  const drop3 = useRef()
  const drop4 = useRef()
  const drop5 = useRef()
  const drop6 = useRef()
  const drop7 = useRef()
  const showSubmit = () => {
    toast.success('Complaint Submitted!', {
      position: "bottom-left",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
  }
  const showDropDown = () => {
    if (drop.current.className.includes("hidden")) {
      drop.current.className = "block"
      drop1.current.src = "icons/downward_arrow.png"
    }
    else {
      drop.current.className = "hidden"
      drop1.current.src = "icons/forward_arrow.png"
    }
  }
  const showDropDown1 = () => {
    if (drop2.current.className.includes("hidden")) {
      drop2.current.className = "block"
      drop3.current.src = "icons/downward_arrow.png"
    }
    else {
      drop2.current.className = "hidden"
      drop3.current.src = "icons/forward_arrow.png"
    }
  }
  const showDropDown2 = () => {
    if (drop4.current.className.includes("hidden")) {
      drop4.current.className = "block"
      drop5.current.src = "icons/downward_arrow.png"
    }
    else {
      drop4.current.className = "hidden"
      drop5.current.src = "icons/forward_arrow.png"
    }
  }
  const showDropDown3 = () => {
    if (drop6.current.className.includes("hidden")) {
      drop6.current.className = "block"
      drop7.current.src = "icons/downward_arrow.png"
    }
    else {
      drop6.current.className = "hidden"
      drop7.current.src = "icons/forward_arrow.png"
    }
  }
  return (
    <>
      <ToastContainer
        position="bottom-left"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />
      <div className='relative'>
        <nav className=' flex justify-around items-center text-blue-500 h-20 w-[99vw]'>
          <div className='name text-4xl font-bold'>
            FixItCity
          </div>
          <ul className='flex gap-28 pl-44'>
            <li className='text-3xl font-semibold cursor-pointer'><Link class="group" to="/home">
              Home
              <div class="bg-amber-500 h-[2px] w-0 group-hover:w-full transition-all duration-500"></div>
            </Link></li>
            <li className='text-3xl font-semibold cursor-pointer'><Link class="group" to="/about">
              About
              <div class="bg-amber-500 h-[2px] w-0 group-hover:w-full transition-all duration-500"></div>
            </Link></li>
            <li className='text-3xl font-semibold cursor-pointer text-blue-900'>
              Register complaint</li>
            <li><Link to="/login"><img className='h-9' src="https://img.icons8.com/?size=100&id=H101gtpJBVoh&format=png&color=000000" alt="" /></Link></li>
          </ul>
        </nav>
        <div className="container1 flex relative">
          <div className="box1 absolute left-0 h-[140vh] w-[50vw] bg-gray-100">
            <div>
              <h1 className='text-center mt-20 text-4xl font-semibold' >Register a complaint</h1>
              <h2 className='text-center mt-9' >Please enter the address and a description of your complaint</h2>
            </div>
            <div className='relative text-center mt-20'>
              <input className='border-2 border-blue-500 p-3 w-[450px] h-14 rounded-md' type="text" name="text" id="text" />
              <p className='absolute top-[-20px] left-40 text-sm' >Address</p>
            </div>
            <div className='text-center relative'>
              <textarea className='p-2 mt-20 w-[450px] h-52 rounded-md' name="description" id="description"></textarea>
              <p className='absolute top-14 left-40 text-sm' >Description</p>
            </div>
            <div className='flex justify-center mt-16 text-sm' >
              <div className='' >
                <p className='pt-4 pb-4 pl-5 pr-5 rounded-s-lg bg-gray-200 ' >Department</p>
              </div>
              <div>
                <label for="management"></label>
                <select className='pt-4 pb-4 pl-16 pr-[90px] rounded-e-lg ' name="cars" id="cars">
                  <option value="Road">Road Department</option>
                  <option value="Waste">Waste Department</option>
                  <option value="Electricity">Electricity Department</option>
                  <option value="Water">Water Department</option>
                </select>
              </div>
            </div>
            <div className='text-center mt-20'>
              <button onClick={showSubmit} className=' pl-44 pr-44 pt-2 pb-2 rounded-md bg-blue-500 font-medium text-white hover:bg-blue-400'>
                Submit
              </button>
            </div>
          </div>
          <div className="box2 absolute right-0 h-[140vh] w-[52vw] bg-white">
            <h1 className='text-center text-5xl font-medium mt-16 mr-14' >Previous Complaint</h1>
            <div className='relative' >
              <h2 className=' text-xl text-start mt-5 ml-36' >Pothole and Road Damage </h2>
              <img ref={drop1} onClick={showDropDown} className='absolute bottom-[-1px] h-7 left-28 cursor-pointer' src="icons/forward_arrow.png" alt="" />
            </div>
            <div ref={drop} onClick={showDropDown} className='hidden' >
              <div className='h-[370px] w-[500px] bg-gray-200 p-6 rounded-md ml-32 mt-2 '>
                <ul className='list-disc text-[12px]'>
                  <li><b>Address:</b> Sector-12, Aashiyana Apartments, Baner Road, Near Sai Mandir, Pune, Maharashtra - 411045
                  </li>
                  <li className='mt-4'><b>Description:</b> There are several large potholes on Baner Road near Sai Mandir. They pose a significant risk to vehicles, especially during heavy traffic hours.</li>
                  <li className='mt-4'><b>Complaint Received:</b> 9th November 2024</li>
                  <li className='mt-4'><b>Inspection Scheduled:</b> Inspection was scheduled for 11th November 2024  </li>
                  <li className='mt-4'><b>Updates:</b>
                    <ul className='list-decimal pl-10'>
                      <li>Inspection team visited the site and recorded the dimensions and location of the potholes.</li>
                      <li>Photographic evidence was collected to highlight the extent of the damage.</li>
                      <li>Assessment report with repair recommendations was submitted to the municipal authority.</li>
                    </ul>
                  </li>
                </ul>
              </div>
            </div>
            <div className='relative' >
              <h2 className=' text-xl text-start mt-5 ml-36' >Broken traffic lights</h2>
              <img ref={drop3} onClick={showDropDown1} className='absolute bottom-[-1px] h-7 left-28 cursor-pointer' src="icons/forward_arrow.png" alt="" />
            </div>
            <div ref={drop2} onClick={showDropDown1} className='hidden ' >
              <div className='h-[350px] w-[500px] bg-gray-200 p-6 rounded-md ml-32 mt-2'>
                <ul className='list-disc text-[12px]'>
                  <li><b>Address:</b> G-15, Vasundhara Residency, Karve Nagar, Near Karve Road, Pune, Maharashtra - 411052
                  </li>
                  <li className='mt-4'><b>Description:</b> The traffic lights at [Intersection Name] are broken. It’s causing confusion and dangerous driving conditions.
                  </li>
                  <li className='mt-4'><b>Complaint Received:</b> 9th November 2024</li>
                  <li className='mt-4'><b>Inspection Scheduled:</b> Site inspection was scheduled for 10th November 2024
                  </li>
                  <li className='mt-4'><b>Inspection Scheduled:</b>
                    <ul className='list-decimal pl-10'>
                      <li>Site inspection was scheduled for 10th November 2024</li>
                      <li>Inspection team arrived at the site and assessed the condition of the road
                      </li>
                      <li>Photographic evidence was collected to document the severity of the potholes
                      </li>
                    </ul>
                  </li>
                </ul>
              </div>
            </div>
            <div className='relative' >
              <h2 className=' text-xl text-start mt-5 ml-36' >Missed trash pickups </h2>
              <img ref={drop5} onClick={showDropDown2} className='absolute bottom-[-1px] h-7 left-28 cursor-pointer' src="icons/forward_arrow.png" alt="" />
            </div>
            <div ref={drop4} onClick={showDropDown2} className='hidden ' >
              <div className='h-[390px] w-[500px] bg-gray-200 p-6 rounded-md ml-32 mt-2'>
                <ul className='list-disc text-[12px]'>
                  <li><b>Address:</b> Flat No. 202, Galaxy Towers, Wakad Road, Near Hinjewadi IT Park, Pune, Maharashtra - 411057
                  </li>
                  <li className='mt-4'><b>Description:</b>  Trash collection for our residential complex has been skipped for the last three days, leading to a build-up of garbage and unhygienic conditions.
                  </li>
                  <li className='mt-4'><b>Complaint Received:</b>10th November 2024 </li>
                  <li className='mt-4'><b>Inspection Scheduled:</b> Site inspection was scheduled for 10th November 2024
                  </li>
                  <li className='mt-4'><b>Inspection Scheduled:</b> Inspection was scheduled for 12th November 2024
                  </li>
                  <li className='mt-4'><b>Updates:</b>
                    <ul className='list-decimal pl-10'>
                      <li>A waste management team was sent to assess the issue.</li>
                      <li>Overflowing garbage bins were photographed to document the problem.
                      </li>
                      <li>Immediate cleanup was scheduled, and steps to ensure regular pickup were communicated to the residents.
                      </li>
                    </ul>
                  </li>
                </ul>
              </div>
            </div>
            <div className='relative' >
              <h2 className=' text-xl text-start mt-5 ml-36' >Power outage</h2>
              <img ref={drop7} onClick={showDropDown3} className='absolute bottom-[-1px] h-7 left-28 cursor-pointer' src="icons/forward_arrow.png" alt="" />
            </div>
            <div ref={drop6} onClick={showDropDown3} className='hidden ' >
              <div className='h-[350px] w-[500px] bg-gray-200 p-6 rounded-md ml-32 mt-2'>
                <ul className='list-disc text-[12px]'>
                  <li><b>Address:</b> Shop No. 5, Sunview Plaza, MG Road, Camp Area, Pune, Maharashtra - 411001
                  </li>
                  <li className='mt-4'><b>Description:</b> There has been a power outage in the area since yesterday evening, disrupting business operations and causing inconvenience to residents.
                  </li>
                  <li className='mt-4'><b>Complaint Received:</b> 10th November 2024</li>
                  <li className='mt-4'><b>Inspection Scheduled:</b> Inspection was scheduled for 11th November 2024
                  </li>
                  <li className='mt-4'><b>Inspection Scheduled:</b>
                    <ul className='list-decimal pl-10'>
                      <li>Electrical engineers inspected the affected transformer and wiring. </li>
                      <li>Preliminary findings indicated a fault in the transformer, and replacement parts were ordered.
                      </li>
                      <li> Temporary arrangements were made to restore partial power, and the repair timeline was shared with the community.
                      </li>
                    </ul>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Register
