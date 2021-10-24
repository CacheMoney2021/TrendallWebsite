import React from 'react';
import SearchPageHeader from "../components/headers/SearchPageHeader";
import { Footer } from "../components/page_elements/Div.elements";
import styled from 'styled-components';
import GoldBtn from '../components/buttons/GoldBtn';
import Img from '../assets/trendall.jpeg';
import '../components/page_elements/AboutContact.css';

//-------------------------------------------------------------

const Container = styled.div`
   display: flex;
   justify-content: center;
   align-items: center;
   margin-bottom: 5%;
   z-index: -1;
`

const AboutInfo = styled.div`
    padding: 5%;
` 

//-------------------------------------------------------------

//Render the About page
export default class About extends React.Component {
    constructor(props) {
      super(props);
    }

    render() {
      return(
        <div>
          <SearchPageHeader/>
          <Container>
            <div className= "aboutInfo">
              <AboutInfo>
                <div className= "headingOdd"> ARTHUR TRENDALL</div>
                  <div className= "divImage">
                    <div>
                    <p>A.D. Trendall was a legendary figure and one of the foremost historians of Greek art of the 20th century. He was the principal authority on the red-figure vases produced in the Greek colonies and native areas of South Italy and Sicily during the 5th and 4th centuries BCE. He also exerted a profound influence upon the study of the Humanities generally, and of Classical civilisation specifically, in Australian universities for over half a century.</p>
                    <p>His academic life was devoted primarily to the study of the red-figured vases produced in South Italy and Sicily during the Classical period. Decorated with scenes of myth or everyday life these vases, thousands of which are scattered in museums throughout the world, constitute a primary source for many aspects of Greek and indigenous culture in Italy. At the beginning of his career Trendall set himself the task of distinguishing the various local red-figure styles, and of attributing, through careful stylistic analysis, the vases to painters. That the basic classification has now been established, and we are able to appreciate the work of many individual painters, is largely the result of Trendall's unremitting scholarly activity over some 60 years.</p>
                    </div>
                    <img src= {Img} id= "imageClass"/>
                  </div>
                <div className= "buttonDivSm">
                  <GoldBtn name = 'Learn more about Arthur Trendall' onClick={()=> window.open("https://www.latrobe.edu.au/trendall/about", "_blank")}/>{/*button to link user to LTU page on Trendall*/}
                </div>
              </AboutInfo>
            </div>
          </Container>
          <Footer/>
        </div>
      ); 
    }
}