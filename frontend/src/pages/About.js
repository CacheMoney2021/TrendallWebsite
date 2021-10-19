import React from 'react';
import SearchPageHeader from "../components/headers/SearchPageHeader";
import { Footer } from "../components/page_elements/Div.elements";
import styled from 'styled-components';
import GoldBtn from '../components/buttons/GoldBtn';
import Img from '../assets/trendall.jpeg';
import '../components/page_elements/AboutContact.css';

const Container = styled.div`
   display: flex;
   justify-content: center;
   align-items: center;
   margin-bottom: 5%;
   z-index: -1;
`
//styling to create folds for each section of the page
const EvenFold = styled.div`
    background-color: #F6E7CB;
    padding: 5%;
`
const OddFold = styled.div`
    padding: 5%;
` 

//class to render all components for the About page
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
            <OddFold>
              <div className= "headingOdd"> ARTHUR TRENDALL</div>
                <div className= "divImage">
                  <div>
                  <p>A.D. Trendall was a legendary figure and one of the foremost historians of Greek art of the 20th century. He was the principal authority on the red-figure vases produced in the Greek colonies and native areas of South Italy and Sicily during the 5th and 4th centuries BCE. He also exerted a profound influence upon the study of the Humanities generally, and of Classical civilisation specifically, in Australian universities for over half a century.</p>
                  <p>His academic life was devoted primarily to the study of the red-figured vases produced in South Italy and Sicily during the Classical period. Decorated with scenes of myth or everyday life these vases, thousands of which are scattered in museums throughout the world, constitute a primary source for many aspects of Greek and indigenous culture in Italy. At the beginning of his career Trendall set himself the task of distinguishing the various local red-figure styles, and of attributing, through careful stylistic analysis, the vases to painters. That the basic classification has now been established, and we are able to appreciate the work of many individual painters, is largely the result of Trendall's unremitting scholarly activity over some 60 years.</p>
                  </div>
                  <img src= {Img} id= "imageClass"/>
                </div>
              <div className= "buttonDivSm">
                <GoldBtn name = 'Learn more about Arthur Trendall' link = 'https://www.latrobe.edu.au/trendall/about' /> {/*button to link user to LTU page on Trendall*/}
              </div>
            </OddFold>
            <EvenFold>
              <div className= "headingEven"> A.D TRENDALL RESEARCH CENTRE</div>
                <p>Upon his death in 1995, Trendall left his extensive personal library to La Trobe University, providing the basis for the Ancient Mediterranean studies research centre that bear his name. This bequest consisted of not only books and journals, but also a large archive of photographs of South Italian red-figure vases, and was the foundation of the Arthur Trendall Research Centre.</p>
                <p>The Trendall Research Centre aims to promote and spread the research of Ancient Mediterranean studies, maintain the library and archive of Arthur Trendalls publications and images and to make this great asset available to graduates and students around the world.</p>
              <div className= "buttonDivSm">
                <GoldBtn name = 'Contact the A.D Trendall Research Centre' link = '/contact' /> {/*button to link user to contact page*/}
              </div>
            </EvenFold>
            </div>
          </Container>
        
          <Footer/>
        </div>
      ); 
    }
}