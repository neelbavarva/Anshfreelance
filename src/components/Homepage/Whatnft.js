import React from 'react'
import whatnft from '../../css/Whatnft.css'
import image from '../../images/image.png'
import rights from '../../images/rightarrow.png'

function Whatnft() {
  return (
    <div class = "wnft">
    <div className='Whatnft'>
<div class="text-black body-font overflow-hidden font-medium" >
  <div class="container bg-white  mx-auto">
    <div class="lg:w-5/5 mx-auto flex flex-wrap">
      <img alt="ecommerce" id='board' class="lg:w-1/2 w-full   lg:h-auto h-full object-cover object-center " src={image}></img>
      <div class="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center ">

        <h1 class="text-black text-4xl title-font font-bold mb-10 mt-20 ">SO, <br></br>
What is an NFT?</h1>
        
        <p class="leading-relaxed text-xl font-medium mb-10  ">The advent of blockchain technology brought forward emotional <br></br>commerce through NFTs - Non fungible Tokens <br></br></p>
        <p class="leading-relaxed text-xl  font-medium mb-12 ">The artwork associated with an NFT is stored on a decentralized file system and gives the collector the value of owning a unique <br></br> collectible that no one else in the world have . <br></br> <br></br> And is also traceable on the Blockchain, which is an immutable decentralized ledger of information.</p>
        <button id='learn' class="bg-white border-2    text-xl rounded-full py-3 px-20 border-black font-medium inline-flex  mb-5 text-start hover:bg-gray-200  focus:outline-none  ">Learn More <img src={rights} id = "rightimg"></img> </button>
        
        
      </div>
    </div>
  </div>
</div>
    </div>
    </div>
  )
}

export default Whatnft