import { Outlet } from "react-router-dom"
import Footer from "./Footer"
import Navbar from "./Navbar"

const Layout = ({search,setSearch}) => {
  return (
    <>
      {/* Announcement strip - mint color */}
      <div className="mint-strip">
        🚚 Free delivery on orders above ₹499 &nbsp;|&nbsp; Use code <strong>SHOPEASE10</strong> for 10% off
      </div>
      <Navbar 
      search={search}
      setSearch={setSearch}
      />
      <main style={{ minHeight: "80vh", background: "var(--bg)" }}>
        <Outlet  context={{search,setSearch}}/>
      </main>
      <Footer />
    </>
  )
}

export default Layout