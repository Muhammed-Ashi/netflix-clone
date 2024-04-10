import React, { useEffect, useState } from 'react'

import '../Banner/Banner.css'
import axios from '../../Constants/axions'
import { API_KEY , imageUrl } from '../../Constants/Constants';
function Banner() {
  const [Movie, setstate] = useState();
  useEffect(() => {
    axios.get(`trending/all/week?api_key=${API_KEY}&language=en-US`
    ).then((response) => {
      //console.log(response.data.results[0])
      setstate(response.data.results[10])
    }
    )
    .catch((error) => {
      console.log(error ," error form tmdb api ")
    })

    return () => {

    };
  }, []);
  return (
    
    <div className='Banner' style={{ backgroundImage:`url(${Movie ? imageUrl+Movie.backdrop_path:""})`}}>
      <div className='Content'>
        <h1 className='Title'>{Movie ? Movie.name : ""}</h1>
        <div className='Buttons'>
          <button className='Button'>Play</button>
          <button className='Button'>Mylist</button>
        </div>
        <h1 className='Discription'> {Movie ?Movie.overview :""}</h1>
      </div>
      <div className="Fade_bottom"></div>
    </div>
  )
}

export default Banner