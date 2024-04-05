import React from 'react'
import DoctorCard from '../Components/DoctorCard'
import RateCard from '../Components/RateCard'

function Home() {
  return (
    <div className=''>
        
        <div className="hero h-[80vh] w-11/12 flex justify-center">
        <div className="hero-left w-3/5 flex flex-col items-center justify-around">
          <h1 className="text-5xl flex justify-around font-bold p-3 m-6">
            Find your near by doctor & book your appointment & get treatment
            fast
          </h1>
          <div className="form flex flex-col justify-evenly items-start p-4 rounded shadow-md shadow-gray-700/30 w-96 h-80 ">
            <h2 className="text-2xl">Let s Find Your Perfect Doctor</h2>
            <h5>Appointment Type</h5>
            <select className="option rounded w-64 h-8 shadow-lg shadow-green-600/30">
              <option value="apple">Type</option>
              <option value="banana">Type</option>
              <option value="orange">Type</option>
            </select>
            <h5>Patient Name</h5>
            <select className="option rounded w-64 h-8 shadow-lg shadow-green-600/30">
              <option value="apple">Type</option>
              <option value="banana">Type</option>
              <option value="orange">Type</option>
            </select>
            <button className="form-btn bg-emerald-900 text-white rounded px-3 py-2 text-lg mt-3">
              Booking Now
            </button>
          </div>
        </div>
        <div className="hero-right w-2/5 flex items-center">
          <img className=" h-4/5 absolute z-10 bg-contain"
            src={'../assets/images/doc5.png'}
            alt="logo"
          />
            <div className="z-0 bg-gradient-to-tr from-[#AAD1CD] to-[#0A7A6F] rounded-full w-full h-4/5"></div>

        </div>
      </div>

      <div className="hero-2 flex justify-center">
        <div className="hero-outer bg-gradient-to-b from-[#007569] to-[#9bdad3] w-11/12 h-[20vh] mx-12 my-24 rounded-3xl flex flex-col items-center justify-between">
          <div className="outer-span">
            <span className="uo-span-1">
              Easy steps to book your Appointment
            </span>
          </div>
          <div className="inner-div-2">
            <div className="in-div-chield">
              Select the location and search near by doctor
            </div>
            <div className="in-div-chield">
              Schedule and Book your date and time for appointment
            </div>
            <div className="in-div-chield">
              Easy way to make payment in multiple getway
            </div>
          </div>
        </div>
      </div>

      <div className="hero-3 flex justify-center gap-x-11 my-16 w-11/12">
        <div className="hero-3-left flex justify-end w-2/5 ">
          <div className="flex items-end">
            <img className="h-96 z-10 absolute" src={'../assets//images/doc1.png'} alt="logo" />
            <div className="z-0 bg-gradient-to-tr from-[#AAD1CD] to-[#0A7A6F] rounded-t-3xl w-80 h-80"></div>
          </div>  
        </div>
        <div className="hero-3-right w-3/5 my-8  ">
          <h1 className="text-3xl font-bold my-3">
            Experienced doctor analyse the <br />patient giving them aproper treatment
          </h1>

          <h3 className="text-[#64748b] font-bold my-4">
            Doctor availability <br />
            Treatment & Consulting <br /> Top Specialist doctor <br />
            Apply coupon for treatment
          </h3>
          <button className="form-btn bg-emerald-900 text-white rounded px-3 py-2 text-lg mt-3">Booking Now</button>
        </div>
      </div>

      <div className="hero-4">
        <div className="flex-col justify-center text-center font-bold">
          <h1 className="text-3xl">
            Variouse specialist are here you to take care of your Health
          </h1>
          <h3 className="text-black/50">
            Doctors are available at any time to care your health
          </h3>
        </div>
        <div className="hero-4 flex justify-evenly flex-wrap content-around ">
        
          <DoctorCard
            DocName={"ENT\nSpecialist"}
            DocDisc={
              "treating disorders and other issues related to the ear, nose, throat, and related head and neck"
            }
            bgColor="#D3E1E4"
            docImg={'../assets/images/doc1.png'}
          />
          <DoctorCard
            DocName="Specialist
            Endocrinologist"
            DocDisc="treating disorders and other issues related to the ear, nose, throat, and related head and neck"
            bgColor="#BADAD3"
            docImg={'../assets/images/doc2.png'}
          />
          <DoctorCard
            DocName="Specialist Oncologists"
            DocDisc="examine, diagnose, and treat cancer"
            bgColor="#E4E0BA"
            docImg={'../assets/images/doc3.png'}

          />
          <DoctorCard
            DocName={"ENT Specialist"}
            DocDisc={
              "treating disorders and other issues related to the ear, nose, throat, and related head and neck"
            }
            bgColor="#BADAD3"
            docImg={'../assets/images/doc4.png'}

          />
          <DoctorCard
            DocName="Specialist
            Veterinarian"
            DocDisc="treating disorders and other issues related to the ear, nose, throat, and related head and neck"
            bgColor="#E4E0BA"
            docImg={'../assets/images/doc5.png'}

          />
          <DoctorCard
            DocName="Specialist Oncologists"
            DocDisc="examine, diagnose, and treat cancer"
            bgColor="#D3E1E4"
            docImg={'../assets/images/doc6.png'}

          />
        </div>
      </div>

      <div className="hero-5  mt-14">
        <div className="flex-col justify-center text-center font-bold">
          <h1 className="text-3xl">Our Top Rated Doctors</h1>
          <h3 className="text-black/50">Top Rated Doctors are available at any time to care your health</h3>
        </div>
        <div className="flex flex-wrap justify-evenly my-9">
          <RateCard docName="Dr.Pawan" docDisc="Jorem ipsum dolor, consectetur
adipiscing elit. Nunc v libero etvelit interdum, ac mattis."
          bgColor="#CCE3E1"
          docImg={'../assets/images/doc5.png'}/>
          <RateCard docName="Dr.Wanitha" docDisc="Jorem ipsum dolor, consectetur
adipiscing elit. Nunc v libero etvelit interdum, ac mattis."
          bgColor="#CCE3E1"
          docImg={'../assets/images/doc1.png'}/>
          <RateCard docName="Dr.Udara" docDisc="Jorem ipsum dolor, consectetur
adipiscing elit. Nunc v libero etvelit interdum, ac mattis."
          bgColor="#CCE3E1"
          docImg={'../assets/images/doc2.png'}/>
          <RateCard docName="Dr.Haresh" docDisc="Jorem ipsum dolor, consectetur
adipiscing elit. Nunc v libero etvelit interdum, ac mattis."
          bgColor="#CCE3E1"
          docImg={'../assets/images/doc3.png'}/>
          
        </div>
      </div>

      <div className="flex flex-col content-center my-10 ">
        <div className="flex justify-around ">
          <div>
            <h1 className="text-3xl mb-4 font-bold" >Customers Feedback</h1>
            <p>Our users share stories of satisfaction, trust, <br /> and exceptional experiences. Explore now!</p>
          </div>
          <div className="flex items-center gap-x-4">
            <button className="bg-white border-2 border-black rounded-sm px-4 h-11">Preview</button>
            <button className="bg-white border-2 border-black rounded-sm px-4 h-11">Next </button>
          </div>
        </div>
        <div className=" flex justify-center gap-x-8 my-10 divide-x divide-black ">
          <div className="w-1/4 flex flex-col items-center">
            <img className="w-16 h-16 bg-contain bg-center rounded-full place-self-center m-6" src="https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=600" alt="profile" />
            <h2 className="font-bold">Natalie Summers</h2>
            <p className="w-72 text-[#111827]"> Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry s standard dummy text ever since the 1500s</p>
            
            <div className="flex my-2">
            <img className="w-4 " src={'../assets/images/star.png' } alt="" />
            <img className="w-4 " src={'../assets/images/star.png' } alt="" />
            <img className="w-4 " src={'../assets/images/star.png' } alt="" />
            <img className="w-4 " src={'../assets/images/star.png' } alt="" />
            <img className="w-4 " src={'../assets/images/star.png' } alt="" />
            </div>
          </div>

          <div className="w-1/4 flex flex-col items-center">
            <img className="w-16 h-16 bg-contain bg-center rounded-full  place-self-center m-6" src="https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=600" alt="profile" />
            <h2 className="font-bold">Alex Turner</h2>
            <p className=" w-72 text-[#111827]"> Lorem Ipsum is simply dummy text of the
printing and typesetting industry. Lorem
Ipsum has been the industry s standard
dummy text ever since the 1500s</p>

            <div className="flex my-2">
            <img className="w-4 " src={'../assets/images/star.png' } alt="" />
            <img className="w-4 " src={'../assets/images/star.png' } alt="" />
            <img className="w-4 " src={'../assets/images/star.png' } alt="" />
            <img className="w-4 " src={'../assets/images/star.png' } alt="" />
            <img className="w-4 " src={'../assets/images/star.png' } alt="" />
            </div>
          </div>

          <div className="w-1/4 flex flex-col items-center">
            <img className="w-16 h-16 bg-contain bg-center rounded-full place-self-center m-6" src="https://images.pexels.com/photos/846741/pexels-photo-846741.jpeg?auto=compress&cs=tinysrgb&w=600" alt="profile" />
            <h2 className="font-bold">Owen Evans</h2>
            <p className="w-72 text-[#111827]"> Lorem Ipsum is simply dummy text of the
              printing and typesetting industry. Lorem
              Ipsum has been the industrys standard
              dummy text ever since the 1500s</p>
              <div className="flex my-2">
            <img className="w-4 " src={'../assets/images/star.png' } alt="" />
            <img className="w-4 " src={'../assets/images/star.png' } alt="" />
            <img className="w-4 " src={'../assets/images/star.png' } alt="" />
            <img className="w-4 " src={'../assets/images/star.png' } alt="" />
            <img className="w-4 " src={'../assets/images/star.png' } alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home