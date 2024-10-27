import Image from "next/image";

export default function Figma() {
  return (
   <div className="bg-[#1D1E2C] main-h-screen flex flex-col items-center">
  <nav className="w-full py-6 flex justify-between px-12">

    <div className="text-white font-bold text-xl">BrandName</div>

    <div className="flex space-x-8 text-white">
    <a href="#" className="hover:text-gray-400">Home</a>
    <a href="#" className="hover:text-gray-400">Product</a>
    <a href="#" className="hover:text-gray-400">Pricing</a>
    <a href="#" className="hover:text-gray-400">Contact</a>
    </div>

    <div className="flex space-x-6">
    <a href="#" className="text-white hover:text-gray-400">Login</a>
    <button className="bg-blue-600 text-white py-1 px-3 rounded hover:bg-blue-400">Join us</button>
    </div>
    </nav>

    <div className="text-center  mt-16">
      <p className="text-white text mb-4">Welcome</p>
      <h1 className="text-white text-3xl font-bold mb-6">Selling on the internet like a pro</h1>
      <p className="text-white text-lg mb-10">
        We know how large objects will act,<br/> but things on a small scale just do not act that way.</p>

<div className="flex justify-center space-x-4">
<button className="bg-blue-600 text-white py-3 px-8 rounded-lg hover:bg-blue-400">Get Qoute Now</button>
<button className="border border-blue-500 text-white py-3 px-8 rounded-lg hover:bg-blue-600">Learn More</button>
</div>
</div>


<div className="flex justify-center space-x-8 mt-20">

<div className="bg-white p-6 rounded-lg shadow-lg w-80 hover:bg-blue-500">
  <div className="w-12 h-12 bg-red-200 mb-4 "></div>
  <h2 className="text-gray-800 font-bold text-xl mb-2">Training Courses</h2>
  <p className="text-gray-600">The gradual accumulation of information about atomic and small-scale behaviour..</p>
</div>

<div className="bg-blue-600 p-6 rounded-lg shadow-lg w-80  hover:bg-white">
  <div className="w-12 h-12 bg-red-200 mb-4"></div>
  <h2 className="text-black font-bold text-xl mb-2">1979 Online Courses</h2>
  <p className="text-black">The gradual accumulation of information about atomic and small-scale behaviour..</p>
</div>

<div className="bg-white p-6 rounded-lg shadow-lg w-80  hover:bg-blue-500">
<div className="w-12 h-12 bg-red-200 mb-4"></div>
<h2 className="text-gray-800 font-bold text-xl mb-2">Training Courses</h2>
  <p className="text-gray-600">The gradual accumulation of information about atomic and small-scale behaviour..</p>
</div>


</div>
<br/>
<footer className="text-white bg-black w-full text-center">@ Brand Name</footer>
   </div> 
  )

}
