// Component to make the API call to retrieve the plateRef's for a given vaseRef,
// then use the plateRef combined with the blob storage URL to retrieve the image/s
// and print the image/s to the viewvase page in an image carouselimport React from "react";

import React, { useEffect,useState } from 'react';
import axios from 'axios';

//function to call and consume the API
const VasePreview = (props) => {
  const [Data,setData]=useState([])

  useEffect(()=>{
      axios.get(`http://127.0.0.1:8000/api/getplate/?vase=${props.vaseRef}`)//get the selected vase using the vaseRef passed through the URL
          .then(res=>{
              setData(res.data)
          })
          .catch(err=>{
              console.log(err);
          })
  },[])

//return the image carousel
  return(
    <>
      <img 
        src={Data.length !== 0 ? 
              `https://trendallplates.blob.core.windows.net/images/P-${Data[0].plateRef}.png` 
              : 
              `https://trendallplates.blob.core.windows.net/images/image2.png`
            } 
      />
      {/* 
      <img
        src={`https://trendallplates.blob.core.windows.net/images/P-${Data[0].plateRef}.png`}
        onError={e => { 
          if(this.state.imageLoadError) { 
              this.setState({
                  imageLoadError: false
              });
              e.target.src = 'https://trendallplates.blob.core.windows.net/images/image2.png';
          }
        }}
      />
      */}
    </>
  )
}
export default VasePreview;

