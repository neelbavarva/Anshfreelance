import React from 'react'
import yubaari from '../../images/Yubaari.png'

import '../../css/Nav.css'

function Nav() {
  return (

    <body class="bg-gray-100 antialiased font-sans">
      <header class="lg:px-16 px-8 bg-white flex flex-wrap items-center py-4 shadow-md">
        <div class="flex-1 flex justify-between items-center">
          <img src={yubaari}></img>
        </div>

        <label for="menu-toggle" class="pointer-cursor md:hidden block">
          <svg class="fill-current text-gray-900"
            xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20">
            <title>menu</title>
            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"></path>
          </svg>
        </label>
        <input class="hidden" type="checkbox" id="menu-toggle" />

        <div class="hidden md:flex md:items-center md:w-auto w-full" id="menu">
          <nav>
            <ul class="md:flex items-center justify-between text-base text-black font-medium pt-4 md:pt-0">
              <li><a class="md:p-4 py-3 px-0 block" href="/">Home</a></li>
              <li><a class="md:p-4 py-3 px-0 block" href="#">Marketplace</a></li>
              <li><a class="md:p-4 py-3 px-0 block" href="/Aboutus">AboutUs</a></li>
              <li><a class="md:p-4 py-3 px-0 block md:mb-0 mb-2" href="/contact">Contact</a></li>
              <li><button class="md:p-2.5 py-3 px-3 block text-white md:mb-0 mb-2"><a href="/login">Login</a></button></li>
              <li><button class="md:p-2.5 py-3 px-3 block text-white md:mb-0 mb-2"><a href="/signup">Signup</a></button></li>
            </ul>

          </nav>
        </div>

      </header>
    </body>



  )
}









export default Nav