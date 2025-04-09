import React from 'react'
import { Link } from 'react-router-dom'
import { useGlobalContext } from '../hooks/useGlobalContext'
import Avatar from './Avatar'

function Sidebar() {
    const {user} = useGlobalContext()
  return (
    <div className='col-span-2 bg-amber-100 py-4 px-3'>
        <Avatar user={user}/>
        <nav className='flex flex-col gap-5'>
            <Link to="/">Home</Link>
            <Link to="/create">Create</Link>
        </nav>
    </div>
  )
}

export default Sidebar