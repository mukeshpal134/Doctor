import React from 'react'

function RateCard({docName , docDisc , bgColor="#eab308" ,docImg="https://cdn.pixabay.com/photo/2017/01/31/22/32/doctor-2027768_640.png"}) {
  return (
    <div className="text-black flex w-1/3 h-64 m-6 rounded gap-2" 
    style={{backgroundColor:bgColor}}>
      <div className="right w-2/5 flex items-end">
        <img className="h-64 w-full  bg-contain bg-center" src={docImg} alt="doc" />
      </div>
      <div className="left w-3/5 flex flex-col  justify-around ">
        <div className="flex justify-between ">
          <div><h1>{docName}</h1></div>
          <div>
          <i className="fi fi-rs-heart"></i>
            {/* <img src="./heart.svg" alt="heart" /> */}
            </div>
        </div>
        <div className="w-full">
          <p>{docDisc}</p>
        </div>
        <div className="flex">
            <button className="bg-white rounded px-3">Book</button>
            <div className="flex items-center justify-betwen mx-10">
            <h5>5.0</h5>
            <img className="w-4 " src={'../assets/images/star.png'} alt="" />
            </div>
        </div>
      </div>
    </div>
  )
}

export default RateCard