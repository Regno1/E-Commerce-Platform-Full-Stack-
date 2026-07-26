import { Outlet } from "react-router-dom"
import Footer from "./Footer"
import Navbar from "./Navbar"

const Layout = () => {
  return (
    <>
    <Navbar/>

    <main className="min-h-screen">
    <Outlet/>
    </main>
    <Footer/>
    </>
  )
}

export default Layout