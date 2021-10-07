/*Styled Components for the Header/NavBar of the Trendall Archive*/
//https://styled-components.com/docs
import styled from 'styled-components';

//Div container that wraps everything in between header and footer
export const PageContainer = styled.div`
    width: auto;
    height: 100%;
    display: flex;
    background-colour: #FCF7EE;
    margin-top: 80px;
`

//The header template at the top of the website and wraps around the logo and the navbar
export const Footer = styled.div`
    position: absolute;
    width: 100%;
    height: 20px;
    background: #D4422F;
    bottom: 0px;
`

//Template for 'Forms' like the Advanced Search Form
export const FormDiv = styled.div`
    width: 35%;
    left: 0;
    margin-left: 100px;
    margin-bottom:15px;
    padding: 45px;
`