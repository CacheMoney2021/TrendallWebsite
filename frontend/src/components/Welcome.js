import React from 'react';
import styled from 'styled-components';
import GoldBtn from './buttons/GoldBtn';
import '../components/page_elements/AboutContact.css';

const Container = styled.div`
    display: flex;
   justify-content: center;
   align-items: center;
   margin-bottom: 5%;
   z-index: -1;
`
const EvenFold = styled.div`
    background-color: #F6E7CB;
    padding: 5%;
`
const OddFold = styled.div`
    padding: 4%;
` 
//styling to create folds for each section of the page

//Display 'About' information
const Welcome=()=>{
    return(
        <>
        <Container>
        <OddFold>
        <div className = 'welcomeDiv'>
        <div className="headingOdd">TRENDALL ARCHIVE</div>
        <p>The Trendall Archive now holds more than 40,000 photographs, collected by Trendall for his research. This photographic archive is classified according to the painters identified by Trendall over his lifetime of study and is a unique research resource for Ancient Mediterranean pottery. The Archive is currently in the process of being digitised and stored in a database accessible online by the general public. The online database currently contains vases from 'Red-Figured Vases of Paestum'- Written by A.D Trendall. 
        </p>
        <h3> HOW TO SEARCH THE ONLINE DATABASE: </h3>
        <p>To get started, enter a specific search criteria in the search bar above using the drop down, or use our Advanced Search to search more accurately. </p>
        </div>
        </OddFold>
        </Container>
        </>

    )
}
export default Welcome;