/*Styled Components for Trendall Archive*/
//https://styled-components.com/docs
import styled from 'styled-components';

//Red Footer Div
export const Footer = styled.div`
    position: absolute;
    width: 100%;
    height: 20px;
    background: #D4422F;
    bottom: 0px;
`

import styled from 'styled-components';

const Header = {
    width: "100%",
    height: "75px",
    padding: "5px 30px 5px 30px",
    display: "flex"
}

const Logo = {
    width: "auto",
    height: "100%"
}

/*      Seems to be in unused
const NavBar = {
    width: "100%"
}
*/

const NavIcons = styled.img`
    width: auto;
    height: 35px;
`

const NavBar = styled.ul`
    list-style: none;
    width: auto;
    display: flex;
    margin: 0;
    position: absolute;
    right: 0;
    padding: 0px 40px 0px 0px;
`

const NavBarElements = styled.li`
	display: flex;
	margin: auto;
	padding: 20px;
    font-family: 'Roboto', sans-serif;
    font-size: 18px;
    letter-spacing: 1.5px;
`