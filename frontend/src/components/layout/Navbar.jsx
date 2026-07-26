import {  Link, NavLink } from "react-router-dom"

import {
  FaSearch,
} from "react-icons/fa";
import {

} from "react-icons/fa";
function Navbar() {
const links = [
  {
    name: "Home",
    path: "/",
    icon: "https://cdn-icons-png.flaticon.com/128/1946/1946488.png",
  },
  {
    name: "Products",
    path: "/products",
    icon: "https://cdn-icons-png.flaticon.com/128/679/679720.png",
  },
  {
    name: "Wishlist",
    path: "/wishlist",
    icon: "https://cdn-icons-png.flaticon.com/128/1077/1077035.png",
  },
  {
    name: "Cart",
    path: "/cart",
    icon: "https://cdn-icons-png.flaticon.com/128/1170/1170678.png",
  },
];

  const navLinking= ({isActive})=>{
   return isActive
    ?"text-blue-500 font-bold " : "text-white hover:text-blue-400"
  }
  return (
    <nav className="bg-amber-400 text-white px-8 py-4 flex justify-between items-center">
   
      <Link to="/" 
      className="text-3xl font-bold text-blue-500 hover:scale-105 transition-all duration-250"
      >ShopEase</Link>
      <div className="relative">
      <input type="text" placeholder="Search Products....." 
      className="w-80 rounded-full py-2 pl-10 pr-4 text-black outline-none" />
      <FaSearch 
      className="absolute left-3 top-3 text-gray-500 active:scale-90" />
    
      </div>
     
      {links.map((link)=>(
       <NavLink 
       to={link.path} 
       key={link.path}
        className={`${navLinking} flex items-center gap-2 hover:scale-110 transition-all duration-250`}
        >
          {link.name}
          <img 
          src={link.icon} 
          alt={link.name}
          className="h-6 w-6"/>
          <span>{Link.name}</span>
        </NavLink>
      
      ))}
    </nav>
  )
}

export default Navbar