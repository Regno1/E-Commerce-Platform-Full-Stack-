import {  NavLink } from "react-router-dom"

function Navbar() {
const links=[
  {
    name:"Home" ,
    path:"/",
  },
  {
    name:"Products" ,
    path:"/products",
  },
  {
    name:"Wishlist" ,
    path:"/wishlist",
  },
  {
    name:"Cart" ,
    path:"/cart",
  },
]

  const navLinking= ({isActive})=>{
   return isActive
    ?"text-blue-500 font-bold " : "text-white hover:text-blue-400"
  }
  return (
    <nav className="bg-gray-900 text-white px-8 py-4 flex justify-between items-center">
      <h1>ShopEase</h1>
      {links.map((link)=>{
       return <NavLink to={link.path} key={link.path}
        className={navLinking}
        >
          {link.name}
        </NavLink>
      })}
    </nav>
  )
}

export default Navbar