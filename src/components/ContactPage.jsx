import React from 'react'
import { Link, NavLink, Outlet } from 'react-router';

function ContactPage() {
  return (
    <>
        <h1>Contact page Component</h1>
            <div className='flex flex-col text-green-600 text-lg m-1'>
                    <NavLink to='department'>Department</NavLink>
                    <NavLink to='student'>Student</NavLink>
                    
            </div>
            <Outlet />
    </>
  )
}

export default ContactPage;