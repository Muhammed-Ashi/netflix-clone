import React from 'react'
import '../Banner/Banner.css'

function Banner() {
  
  return (
    <div className='Banner'>
<div className='Content'>
    <h1 className='Title'>Movie name</h1>
    <div className='Buttons'>
        <button className='Button'>Play</button>
        <button className='Button'>Mylist</button>
    </div>
    <h1 className='Discription'> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus laoreet nibh eu ipsum egestas,
     sed molestie ipsum facilisis. Duis a</h1>
</div>
<div className="Fade_bottom"></div>
    </div>
  )
}

export default Banner