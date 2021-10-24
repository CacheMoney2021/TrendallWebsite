import {useEffect,useState} from 'react';
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import styled from 'styled-components';
import axios from 'axios';
import "../page_elements/VaseGallery.css";
import React from 'react';

//-------------------------------------------------------------

const VaseImgDiv = styled.div`
    width: 35%;
    left: 0;
    padding: 45px;
`

//-------------------------------------------------------------

// Component to make the API call to retrieve the plateRef's for a given vaseRef,
// then use the plateRef combined with the blob storage URL to retrieve the image/s
// and print the image/s to the viewvase page in an image carouselimport React from "react";

//Takes vaseRef parameter from the URL to pass into API below
const urlParams = new URLSearchParams(window.location.search);
const vaseRef = urlParams.get('vaseRef');
console.log(vaseRef);

//Function to call and consume the API
const VaseImage=()=>{
  const [Data,setData]=useState([])

  useEffect(()=>{
      axios.get(`http://127.0.0.1:8000/api/getplate/?vase=${vaseRef}`)//get the selected vase using the vaseRef passed through the URL
          .then(res=>{
              console.log({vaseRef})
              console.log('Response from main API: ',res) //printing the response to the console
              setData(res.data)
          })
          .catch(err=>{
              console.log(err);
          })
  },[]
  )

//Return the image carousel
  return(
      <>
        <VaseImgDiv>
            <div className = "vaseDiv">
              <div className="img-gallery">
                <AliceCarousel
                  //Map through each item in the array and insert plateRef into the image URL
                  items= {Data.map((image, key) => <div key={key}><img src={`https://trendallplates.blob.core.windows.net/images/P-${image.plateRef}.png`} /></div>)}
                  autoPlayInterval={2000}
                  autoPlayDirection="ltr"
                  autoPlay={false}
                  fadeOutAnimation={true}
                  playButtonEnabled={false}
                  disableAutoPlayOnAction={true}
                />
              </div>
            </div>
        </VaseImgDiv>
      </>
    )
}
export default VaseImage;

