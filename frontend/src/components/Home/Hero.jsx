import heroImg from "../../assets/images/img1.png"
const Hero = () => {
  return (
    <section className="h-[80vh] flex items-center justify-between px-16 bg-gray-100">
   <div className="space-y-6">
    <h1 className="text-6xl font-bold">Shop the latest Collection</h1>
    <p className="text-lg text-gray-600">Discover premium products at the best prices</p>
   <button className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition">Shop now

   </button>
   </div>
   <div>
    <img src={heroImg} className="w-full max-w-[600px] object-contain rounded-2xl" alt="" />
   </div>

    </section>
  )
}

export default Hero