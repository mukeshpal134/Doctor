import React from 'react'
import {Outlet} from 'react-router-dom'

function Blog() {
  return (
    <div>Blog
       <div className='w-2/5 shadow-md m-5 p-4'> <Outlet /></div>
    </div>
  )
}

export default Blog