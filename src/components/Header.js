import React from 'react'
import Logo from './Logo'
import { BsSearch } from "react-icons/bs";
import { FaUserCircle } from "react-icons/fa";
import { FaShoppingCart } from "react-icons/fa";
import { Link } from 'react-router-dom';


const Header = () => {
  return (
   <header className='h-16 shadow-md bg-white'>
    <div className='container mx-auto h-full flex items-center justify-between'>
        <div className=' '>
          <Link to={"/"}>
          <Logo w={90} h={50} />
          </Link>
            
        </div>

        <div className='hidden lg:flex items-center rounded-full focus-within:shadow'>
            <input type='text' placeholder='Search Products...' className='outline-none w-full pl-2'/>
             <div className='text-lg text-white  min-w-[50px] h-8 bg-red-600 flex justify-center items-center rounded-r-full'> 
                <  BsSearch />
            </div>
        </div>

        <div className='flex gap-2 '>
            <div className='text-3xl'>
            < FaUserCircle />
            </div>
            <div className='text-2xl relative'>
                <span>
                < FaShoppingCart/>  
                </span>
                <div className='bg-red-600 text-white w-5 h-5 rounded-full flex items-center justify-center -top-2 -right-3 absolute'>
                    <p className='text-sm'>0</p>
                </div>
            </div>
            <div>
                <Link to={"login"} className='px-3 py-1 bg-red-500 text-white hover:bg-red-600 rounded-full'>Login</Link>
            </div>
        </div>

    </div>
     
   </header>
  )
}

export default Header
