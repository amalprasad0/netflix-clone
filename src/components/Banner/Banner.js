import axios from '../../axios'
import React, { useEffect, useState } from 'react'
import './Banner.css'
import {API_KEY,imgeUrl} from '../../constants/constants'
function Banner() {
  

  const [movie,setMovie]=useState([])
  useEffect(()=>{
    axios.get(`trending/all/week?api_key=${API_KEY}&language=en-US`).then((response)=>{
      console.log(response.data.results[0])
      setMovie(response.data.results[Math.floor(Math.random() * 10)])
    })
  },[])
  return (

    <div 
    style={{backgroundImage:`url(${movie? imgeUrl+movie.backdrop_path:"Not found Image"})`} }
    className='banner'>
        <div className='content'>
            <h1 className='title'>{movie ? movie.title:"Not found"}</h1>
            <div className='banner_buttons'>
               <button className='button'>Play</button>
               <button className='button'>My list</button>
            </div>
            <h1 className='discription'>{movie ? movie.overview:"Not found"}</h1>

        </div>
        <div className='fade_bottom'></div>
    </div>
  )
}

export default Banner