//page to view the vase details and images.
//these details are seperated into components and are called on this page. 
import React from 'react';
import Vase from '../components/view_vase/Vase';
import SearchPageHeader from "../components/headers/SearchPageHeader";
import { PageContainer, Footer } from "../components/page_elements/Div.elements";
import styled from 'styled-components';
import VaseImage from '../components/view_vase/VaseImage';
import BackIcon from '../assets/backarrow_white.png';
import { Link } from 'react-router-dom';

//--------------------------------------------------------------------------------------------

const VaseWrapper = styled(PageContainer)`
  margin-top: 70px;
`

//--------------------------------------------------------------------------------------------

//A function to take in the name of an imported image and return it as a styled image
function Icon(props){
  return <img src={props.name} width="auto" height="35px"/>; 
}

//Render View Vase Page
export default class ViewVase extends React.Component {
    constructor(props) {
      super(props);
    }

    render() {
      return(
        <div>
            <SearchPageHeader/>
              <VaseWrapper>
                <VaseImage/>
                <Vase/>
              </VaseWrapper>
            <Footer/>
        </div>
      ); 
    }
}

