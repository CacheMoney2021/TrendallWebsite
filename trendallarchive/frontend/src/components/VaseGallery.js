import React from "react";
import {useEffect,useState} from 'react';
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import styled from 'styled-components';
import "./page_elements/VaseGallery.css";
import BackBtn from '../components/buttons/BackBtn';
import BannerVaseImage from '../components/images/basicsearchimage.png';

const Wrapper = styled.div`
  margin: 0 auto;
  text-align: center;
  width: 500px;
  height: 500px;
`

const Img = styled.img`
  max-width: 100%;
  max-height: 100%;
`

const FormDiv = styled.div`
    width: 35%;
    left: 0;
    padding: 45px;
`

const Gallery = () => {
  /*
  state = {
    galleryItems: images.map((i) => (
      <Wrapper>
        {i}
      </Wrapper>
    ))
  };
  */

  const urlParams = new URLSearchParams(window.location.search);
    const vaseRef = urlParams.get('vaseRef');
    console.log(vaseRef);
  
    const [Data,setData]=useState([])
  
    useEffect(()=>{
      axios.get(`http://127.0.0.1:8000/api/getplate/?vase=${vaseRef}`)//get the selected vase using the vaseID passed through the URL
          .then(res=>{
              console.log('Response from Plate API: ',res.data[0]) //printing the response to the console
              let plateData=res.data[0]; //add data to vaseData, then assign into each variable
              setData({plateRef:plateData.vaseRef}) 
          })
          .catch(err=>{
              console.log(err);
          })
        console.log(vaseRef)
    },[])
  
  const images = [
    <img src={`https://trendallplates.blob.core.windows.net/images/image2.png`}/>,
    <img src={`https://trendallplates.blob.core.windows.net/images/image2.png`}/>,
    <img src={`https://trendallplates.blob.core.windows.net/images/image2.png`}/>,
    <img src={`https://trendallplates.blob.core.windows.net/images/image2.png`}/>,
    <img src={`https://trendallplates.blob.core.windows.net/images/P-1-1.png`}/>    //plateRef is returning as undefined
  ];

    return (
        <FormDiv>
          {/*<BackBtn/>*/}
          <div className="img-gallery">
            <AliceCarousel
              items={images}   //items={this.state.galleryItems}
              autoPlayInterval={2000}
              autoPlayDirection="ltr"
              autoPlay={false}
              fadeOutAnimation={true}
              playButtonEnabled={false}
              disableAutoPlayOnAction={true}
            />
          </div>
        </FormDiv>
    );
  
}

export default Gallery;
