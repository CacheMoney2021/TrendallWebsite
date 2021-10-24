import React from 'react';
import SearchPageHeader from "../components/headers/SearchPageHeader";
import styled from 'styled-components';
import Building from "../assets/center.jpeg";
import { Footer } from "../components/page_elements/Div.elements";

//--------------------------------------------------------------------------------------------

const Container = styled.div`
   justify-content: center;
   align-items: center;
`
const Wrap = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`

//--------------------------------------------------------------------------------------------

//Class to render all components for the About page
export default class Contact extends React.Component {
    constructor(props) {
      super(props);
    }

    render() {
      return(
        <div>
            <SearchPageHeader/>
              <div className= "contactInfo">
              <Container>
                <div className = "headingOdd">CONTACT US</div>
                  <Wrap>
                    <div>
                      <p>
                        Menzies College <br/>
                        La Trobe University <br/>
                        Victoria 3086 <br/>
                        AUSTRALIA 
                      </p>
                      <p> 
                        T: +61 3 9479 2845 <br/>
                        F: +61 3 9479 1827 <br/>
                        E: trendall@latrobe.edu.au <br/>
                        Open by appointment only. <br/>
                      </p>
                    </div>
                  <img src ={Building} id = "imageClass"/>
                </Wrap>
              </Container>
              </div>
            <Footer/>
        </div>
      ); 
    }
}