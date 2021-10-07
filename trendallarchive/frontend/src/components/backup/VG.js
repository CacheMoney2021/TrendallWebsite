import React from "react";
import React,{useEffect,useState} from 'react';
import axios from 'axios';
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import styled from 'styled-components';
import "./VaseGallery.css";
import BannerVaseImage from '../components/images/basicsearchimage.png';
import { Table } from "@material-ui/core";

const Wrapper = styled.div`
  margin: 0 auto;
  text-align: center;
  width: 300px;
  height: 300px;
`

const Img = styled.img`
  max-width: 100%;
  max-height: 100%;
`

const FormDiv = styled.div`
    width: 35%;
    left: 0;
    margin-left: 100px;
    margin-bottom:15px;
    padding: 45px;
`

const VaseImg = (props) => {
  return <img src={props.name} width="350px" height="auto"/>; 
}


class Gallery extends React.Component {
  state = {
    galleryItems: images.map((i) => (
      <Wrapper>
        {i}
      </Wrapper>
    ))
  };

  responsive = {
    0: { items: 1 },
    1024: { items: 1 }
  };


  render() {
    return (
      <FormDiv>
        <AliceCarousel
          items={this.state.galleryItems}
          responsive={this.responsive}
          autoPlayInterval={2000}
          autoPlayDirection="ltr"
          autoPlay={false}
          fadeOutAnimation={true}
          playButtonEnabled={false}
          disableAutoPlayOnAction={true}
          onSlideChange={this.onSlideChange}
          onSlideChanged={this.onSlideChanged}
        />
      </FormDiv>
    );
  }
}

export default Gallery;
