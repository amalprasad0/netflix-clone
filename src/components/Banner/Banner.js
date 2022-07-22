import React from 'react'
import './Banner.css'
function Banner() {
  return (
    <div className='banner'>
        <div className='content'>
            <h1 className='title'>Stranger Things S5</h1>
            <div className='banner_buttons'>
               <button className='button'>Play</button>
               <button className='button'>My list</button>
            </div>
            <h1 className='discription'> Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been.</h1>

        </div>
        <div className='fade_bottom'></div>
    </div>
  )
}

export default Banner