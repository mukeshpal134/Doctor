import React from 'react'

function Footer() {
  return (
    <div className='bg-black h-64 flex flex-col justify-center items-center divide-y  '>
        <div className='w-4/5 flex justify-between '>
            <h1 className='text-4xl text-white items-center font-bold'> DOCTOR+</h1>
            <div className='w-2/4 text-white mx-4'>
                <p>Thank you for visiting my website, and I look forward
to being a part of your wellness journey. Let's thrive
together!</p>
            </div>
            <div>
                <div className='flex gap-2 my-3 text-white'>
                {/* <img className='w-6' src={require('../assets/images/telephone-call.png')} alt="" /> */}
                    <h1>+91-1234567890</h1>
                </div>
                <div className='flex gap-2 my-3 text-white'>
                {/* <img className='w-6' src={require('../assets/images/email.png')} alt="" /> */}
                    <h1>contact@gmail.com</h1>
                </div>
                <div className='flex h-7 gap-4'>
                    {/* <img src={require('../assets/images/facebook.png')} alt="fb" />
                    <img src={require('../assets/images/instagram.png')} alt="insta" />
                    <img src={require('../assets/images/youtube.png')} alt="yuotube" /> */}
                </div>
            </div>

        </div>
    
        {/* <hr style={{
            color: '#a1a1aa ',
            backgroundColor: '#fff',
            height: 1,
            borderColor : '#fff'}} 
        /> */}
        <div className=' w-4/5 flex justify-between my-4 text-[#a1a1aa] '>
            <div><p>© Copyright 2023. All Rights Reserved</p></div>
            <div><p>Privacy Policy Term of Service Legal Info   </p></div>
        </div>

    </div>
  )
}

export default Footer