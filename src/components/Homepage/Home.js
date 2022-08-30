import React from 'react'
import Nftdigital from './Nftdigital'
import Decentral from './Decentral'
import Allinone from './Allinone'
import Ownnft from './Ownnft'
import Whatnft from './Whatnft'
import Heyyubaari from './Heyyubaari'
import Twitterpage from './Twitterpage'

function Home() {
  return (
    <div className='home'>
      <Decentral />
      <Nftdigital/>
      <Allinone/>
      <Ownnft/>
      <Whatnft/>
      <Heyyubaari/>
      <Twitterpage/>
      
    </div>
  )
}

export default Home