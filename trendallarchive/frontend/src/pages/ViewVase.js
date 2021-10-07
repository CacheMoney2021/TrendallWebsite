import React, { Component } from 'react';
import Vase from '../components/Vase';
import SearchPageHeader from "../components/page_elements/SearchPageHeader";
import { PageContainer, Footer } from "../components/page_elements/Div.elements";
import styled from 'styled-components';
import VaseGallery from '../components/VaseGallery';
import { makeStyles } from '@material-ui/core/styles';
import { IconButton } from '@material-ui/core';
import { useHistory } from 'react-router-dom';

const VaseWrapper = styled(PageContainer)`
  margin-left: 80px;
  margin-top: 70px;
`

export default class ViewVase extends React.Component {
    constructor(props) {
      super(props);
    }

    render() {
      return(
        <div>
            <SearchPageHeader/>
              <VaseWrapper>
                <VaseGallery/>
                <Vase/>
              </VaseWrapper>
            <Footer/>
        </div>
      ); 
    }
}

