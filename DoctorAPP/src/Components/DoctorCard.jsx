import React from 'react'

function DoctorCard({DocName, DocDisc ,bgColor ="green" ,docImg}) {
  return (
    <div className=' m-6  rounded-md w-1/4 h-64 text-black flex justify-evenly '
    style={{backgroundColor :bgColor }}>
      <div className='w-3/5 p-2 text-black flex flex-col items-start justify-evenly'>
      <h1 className='text-2xl'>{DocName}</h1>
        <p>{DocDisc}</p>
        <button className='flex items-center gap-2 bg-white p-2 rounded'>View More
          <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="h-4 w-4"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                />
          </svg> 
        </button>

      </div>
      <div className='w-2/5 flex items-end' >
        <img className='h-64 w-full  bg-contain bg-center' src={docImg} alt="" />
      </div>
        
    </div>
  )
}

export default DoctorCard