import { Outlet } from "react-router-dom"
import Footer from "./Footer"
import Navbar from "./Navbar"

const Layout = () => {
  return (
    <>
      {/* Announcement strip - mint color */}
      <div className="mint-strip">
        🚚 Free delivery on orders above ₹499 &nbsp;|&nbsp; Use code <strong>SHOPEASE10</strong> for 10% off
      </div>
      <Navbar />
      <main style={{ minHeight: "80vh", background: "var(--bg)" }}>
        <Outlet />
      </main>
      <Footer />
    </>
  )
}

export default Layout