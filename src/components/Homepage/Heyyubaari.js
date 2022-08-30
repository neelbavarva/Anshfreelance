import Heyyubaarii from '../../css/Heyyubaari.css'
import nftback from '../../images/nftback.jpg'
import React from 'react'

function Heyyubaari() {
  return (
    <div class = "fullcontact">
    <div class="container px-5 py-24 mx-auto flex">
    <div class="lg:w-1/3 md:w-1/2 bg-white rounded-lg p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0 relative z-10 shadow-md">
      
      <p class="leading-relaxed mb-2 text-black font-bold " >Where Should we Contact you?</p>
      <input type="email" id="email" name="email" placeholder='name@domin.com' class="w-full bg-white rounded mb-2 border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out">
     </input>
      <div class="relative mb-4">
        <label for="text" class="leading-relaxed  text-black font-bold ">What NFT are you Thinking of?</label>
        <input type="text" id="dropdown" data-dropdown-toggle="dropdown" name="email" placeholder='Select NFT Type' class="w-full bg-white rounded border border-gray-300 mt-2 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out">
    
     </input>

     
         </div>
      <div class="relative mb-4">
        <label for="message" class="leading-7 text-sm text-black font-bold">Message</label>
        <textarea id="message" name="message" class="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"></textarea>
      </div>
      <button class="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">Send Message </button>
      
    </div>
  </div>
  </div>
  )
}

export default Heyyubaari