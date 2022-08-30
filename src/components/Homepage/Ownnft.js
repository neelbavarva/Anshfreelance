import React from 'react'
import '../../css/Ownnft.css'

function Ownnft() {
  return (
    <div className='own'>

      <section class="text-gray-600 body-font">
        <div class="container   px-5 py-24 mx-auto">
          <div class="flex flex-wrap -m-4">
            <marquee direction="left">
              <div className='flex'>
                <div class="lg:w-1/4 md:w-1/2 p-4 w-full">
                  <a class="block relative h-48 rounded overflow-hidden">
                    <img alt="ecommerce" class="object-cover object-center w-full h-full block" src="https://images.unsplash.com/photo-1630463640302-2f92b4e771aa?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"></img>
                  </a>
                </div>
                <div class="lg:w-1/4 md:w-1/2 p-4 w-full">
                  <a class="block relative h-48 rounded overflow-hidden">
                    <img alt="ecommerce" class="object-cover object-center w-full h-full block" src="https://images.unsplash.com/photo-1616860583120-4fa235b83eeb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=879&q=80"></img>
                  </a>
                </div>
                <div class="lg:w-1/4 md:w-1/2 p-4 w-full">
                  <a class="block relative h-48 rounded overflow-hidden">
                    <img alt="ecommerce" class="object-cover object-center w-full h-full block" src="https://images.unsplash.com/photo-1592561199818-6b69d3d1d6e2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=988&q=80"></img>
                  </a>

                </div>
                <div class="lg:w-1/4 md:w-1/2 p-4 w-full">
                  <a class="block relative h-48 rounded overflow-hidden">
                    <img alt="ecommerce" class="object-cover object-center w-full h-full block" src="https://images.unsplash.com/photo-1610373678149-39e72f4f7e52?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"></img>
                  </a>

                </div>
              </div>
            </marquee>

            <div class="relative flex justify-center items-center" style={{ width: '100%', flexDirection: 'column' }}>

              <>
                <div id='searchrow'>
                  <input type="email" id="email" name="email" placeholder='name@domin.com' class="rounded-full  placeholder-black bg-gray-50 bg-opacity-50 rounded  focus:border-indigo-500 focus:bg-white focus:ring-2 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"></input>
                  {/* <div className='serachover'></div> */}
                </div>
                <p class="leading-7  text-lg text-white mt-4" id='join' style={{ textAlign: 'center', fontWeight: 'bolder' }} >Are you going to change the World ? <br />Own your nft</p>
              </>
            </div>
            <marquee direction="right">
              <div className='flex'>
                <div class="lg:w-1/4 md:w-1/2 p-4 w-full">
                  <a class="block relative h-48 rounded overflow-hidden">
                    <img alt="ecommerce" class="object-cover object-center w-full h-full block" src="https://images.unsplash.com/photo-1630463640302-2f92b4e771aa?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"></img>
                  </a>
                </div>
                <div class="lg:w-1/4 md:w-1/2 p-4 w-full">
                  <a class="block relative h-48 rounded overflow-hidden">
                    <img alt="ecommerce" class="object-cover object-center w-full h-full block" src="https://images.unsplash.com/photo-1616860583120-4fa235b83eeb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=879&q=80"></img>
                  </a>
                </div>
                <div class="lg:w-1/4 md:w-1/2 p-4 w-full">
                  <a class="block relative h-48 rounded overflow-hidden">
                    <img alt="ecommerce" class="object-cover object-center w-full h-full block" src="https://images.unsplash.com/photo-1592561199818-6b69d3d1d6e2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=988&q=80"></img>
                  </a>

                </div>
                <div class="lg:w-1/4 md:w-1/2 p-4 w-full">
                  <a class="block relative h-48 rounded overflow-hidden">
                    <img alt="ecommerce" class="object-cover object-center w-full h-full block" src="https://images.unsplash.com/photo-1610373678149-39e72f4f7e52?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"></img>
                  </a>

                </div>
              </div>
            </marquee>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Ownnft