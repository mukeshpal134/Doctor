import { Outlet } from "react-router-dom"
import Footer from "./Components/Footer"
import Hearder from "./Components/Hearder"



function App() {
  console.log(import.meta.env.VITE_APPWRITE_URL)

  return (
    <>
      <Hearder/>
      <Outlet/>
      <Footer/>
    </>
  )
}

export default App
