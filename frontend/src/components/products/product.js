import nike from "../../assets/images/products/nike.jpg";
import headphones from "../../assets/images/products/headphones.jpg";
import iphone from "../../assets/images/products/iphone.jpg";
import watch from "../../assets/images/products/watch.jpg";
import laptop from "../../assets/images/products/laptop.jpg";
import camera from "../../assets/images/products/camera.jpg";
import shoes from "../../assets/images/products/shoes.jpg";
import speaker from "../../assets/images/products/speaker.jpg";



const product = [
  {
    id: 1,
    name: "Nike Air Max",
    category: "Footwear",
    price: 5999,
    rating: 4.8,
    image: nike,
    description:
      "Premium running shoes with lightweight cushioning, breathable mesh, and all-day comfort for workouts and casual wear.",
  },
  {
    id: 2,
    name: "Sony Headphones",
    category: "Electronics",
    price: 3499,
    rating: 4.7,
    image: headphones,
    description:
      "Wireless over-ear headphones featuring deep bass, noise cancellation, and up to 30 hours of battery life.",
  },
  {
    id: 3,
    name: "iPhone 16",
    category: "Mobiles",
    price: 79999,
    rating: 4.9,
    image: iphone,
    description:
      "Apple's latest smartphone with a powerful processor, advanced camera system, long battery life, and Super Retina display.",
  },
  {
    id: 4,
    name: "Apple Watch",
    category: "Accessories",
    price: 24999,
    rating: 4.8,
    image: watch,
    description:
      "Smartwatch with fitness tracking, heart rate monitoring, sleep analysis, GPS, and seamless iPhone integration.",
  },
  {
    id: 5,
    name: "MacBook Air M4",
    category: "Laptops",
    price: 114999,
    rating: 4.9,
    image: laptop,
    description:
      "Ultra-thin laptop powered by Apple's M4 chip, offering exceptional performance, long battery life, and a stunning Retina display.",
  },
  {
    id: 6,
    name: "Canon EOS R50",
    category: "Cameras",
    price: 62999,
    rating: 4.7,
    image: camera,
    description:
      "Mirrorless camera with high-resolution image quality, fast autofocus, 4K video recording, and interchangeable lenses.",
  },
  {
    id: 7,
    name: "Adidas Ultraboost",
    category: "Footwear",
    price: 8999,
    rating: 4.8,
    image: shoes,
    description:
      "High-performance running shoes with responsive Boost cushioning, lightweight design, and superior comfort.",
  },
  {
    id: 8,
    name: "JBL Flip 6",
    category: "Electronics",
    price: 7999,
    rating: 4.6,
    image: speaker,
    description:
      "Portable Bluetooth speaker with powerful sound, deep bass, IP67 waterproof rating, and up to 12 hours of playtime.",
  },
];

export default product;