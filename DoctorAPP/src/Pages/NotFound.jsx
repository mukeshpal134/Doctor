import React from 'react'
import { Link } from 'react-router-dom'

function NotFound() {
  return (
    <div className="flex flex-col items-center gap-y-4">
        <h1 className="text-5xl"> 404 Not Found</h1>
        <Link className="px-5 py-3 bg-[#99f6e4] rounded" to="/">Go Back To Home</Link>
        
    </div>
  )
}

export default NotFound