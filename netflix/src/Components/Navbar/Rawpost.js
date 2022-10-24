import React, { useEffect, useState } from 'react'
import Youtube from "react-youtube"
import './Rawpost.css'
import Axios from '../../Constants/axions'
import { API_KEY, imageUrl } from '../../Constants/Constants';


//import axios from 'axios';
function Rawpost(props) {
  ///// console.log(props)
  const [Poster, setPoster] = useState([]);
  const [url, seturl] = useState('');
  useEffect(() => {
    Axios.get(props.url).then((response) => {
      ///////// console.log(response.data.results)
      setPoster(response.data.results)
    })



  });


  const opts = {
    height: '390',
    width: '100%',
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 0,
    }
  }
  const HandleMovie = (id) => {
    console.log(id, "this is argument")
    Axios.get(
      `/movie/${id}/videos?api_key=${API_KEY}&language=en-US`).then((data)=>{
        console.log(data)
        if (data.data.results.length!==0){
          seturl(data.data.results[0])
        }else{
          console.log("not worked")
        }
      })
  }
  return (
    <div className='row'>
      <h2>{props.title}</h2>
      <div className="Posters" >

        {Poster.map((obj) =>
          // console.log(obj),
          <img onClick={() => HandleMovie(obj.id)} className={props.isSmall ? "Smallposter" : "Poster"} src=
            {`${imageUrl + obj.backdrop_path}`} alt="e" />

        )}

      </div>
     { url && <Youtube opts={opts} videoId={url.key} />}

    </div>
  )
}

export default Rawpost