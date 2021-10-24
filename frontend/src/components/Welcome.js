import React from 'react';
import styled from 'styled-components';
import '../components/page_elements/AboutContact.css';

//-------------------------------------------------------------

const Container = styled.div`
    display: flex;
   justify-content: center;
   align-items: center;
   margin-bottom: 5%;
   z-index: -1;
`

const Intro = styled.div`
    padding: 4%;
` 

//-------------------------------------------------------------

//Display 'Welcome' information for the Homepage
const Welcome=()=>{
    return(
        <>
            <Container>
                <Intro>
                    <div className = 'welcomeDiv' style={{height: '100px'}}>
                        <div className="headingOdd" style={{fontSize: '25px'}}>Online Database for Ancient Mediterranean Pottery</div>
                        <p>
                            The Trendall Archive now holds more than 40,000 photographs, collected by Trendall for his research. 
                            This photographic archive is classified according to the painters identified by Trendall over his 
                            lifetime of study and is a unique research resource for Ancient Mediterranean pottery. The Archive 
                            is currently in the process of being digitised and stored in a database accessible online by the general public. 
                            The online database currently contains vases from 'Red-Figured Vases of Paestum'- Written by A.D Trendall. 
                        </p>
                    </div>
                </Intro>
            </Container>
        </>

    )
}
export default Welcome;