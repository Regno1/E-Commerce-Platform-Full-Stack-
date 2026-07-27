import ProductCard from "../products/ProductCard"
import nike from "../../assets/images/products/nike.jpg";
import headphones from "../../assets/images/products/headphones.jpg";
import iphone from "../../assets/images/products/iphone.jpg";
import watch from "../../assets/images/products/watch.jpg";
import laptop from "../../assets/images/products/laptop.jpg";
import camera from "../../assets/images/products/camera.jpg";
import shoes from "../../assets/images/products/shoes.jpg";
import speaker from "../../assets/images/products/speaker.jpg";
const FeaturedProducts = () => {


const product = [
  {
    id: 1,
    name: "Nike Air Max",
    price: 5999,
    rating: 4.8,
    image: nike,
  },
  {
    id: 2,
    name: "Sony Headphones",
    price: 3499,
    rating: 4.7,
    image: headphones,
  },
  {
    id: 3,
    name: "iPhone 16",
    price: 79999,
    rating: 4.9,
    image: iphone,
  },
  {
    id: 4,
    name: "Apple Watch",
    price: 24999,
    rating: 4.8,
    image: watch,
  },
  {
    id: 5,
    name: "MacBook Air M4",
    price: 114999,
    rating: 4.9,
    image: laptop,
  },
  {
    id: 6,
    name: "Canon EOS R50",
    price: 62999,
    rating: 4.7,
    image: camera,
  },
  {
    id: 7,
    name: "Adidas Ultraboost",
    price: 8999,
    rating: 4.8,
    image: shoes,
  },
  {
    id: 8,
    name: "JBL Flip 6",
    price: 7999,
    rating: 4.6,
    image: speaker,
  },
];
  return (
    <section 
    className="py-16 py-10 bg-grey-100">
      <h2 
      className="text-4xl font-bold text-center">Featured Products</h2>
    <p 
    className="text-center text-gray-500 mt-2 mb-10">Explore our Best Selling Products</p>
     <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap9=8">
      {product.map((item)=>(
      <ProductCard key={item.id} product={item}/>
    ))}
     </div>
     
    </section>
  )
}

export default FeaturedProducts