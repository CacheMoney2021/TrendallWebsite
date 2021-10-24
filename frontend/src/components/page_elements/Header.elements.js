
/*Styled Components for the Header/NavBar of the Trendall Archive*/
//https://styled-components.com/docs
import styled from 'styled-components';
import TrendallLogoP from '../../assets/trendall_logo.png';

//The header template at the top of the website and wraps around the logo and the navbar
export const Header = styled.div`
    width: 100%;
    height: 75px;
    padding: 5px 30px 5px 30px;
    display: flex;
    top: 0px;
`

//The header for the Homepage. Overrides Header style with a light cream background-color
export const HomeHeader = styled(Header)`
    background-color: #FCF7EE; 
`

//The header for all Search Pages. 
//Overrides Header style with a red background-color. Includes Trendall Logo as a background img.
export const SearchHeader = styled(Header)`
    background-color: #D4422F;
    background-image: url(${TrendallLogoP});
    background-repeat: no-repeat;
    background-position: 48px;
    background-size: 225px; 
    position: absolute;
    color: white;
    z-index: 1;
`

//Home Link Div for the Homepage Header
export const HomeLink = styled.div`
    width: 225px;
    height: 65px;
    margin: 5px 15px 5px 10px;
    top: 0px;
    position: relative;
    left: -225px;
`

//Home Link Div for the Search Page Header
export const HomepageLink = styled(HomeLink)`
    position: relative;
    left: -225px;
`

//A <ul> container for right aligned navigation with text links and icons.
export const NavBar = styled.ul`
    list-style: none;
    width: auto;
    display: flex;
    margin: 0;
    position: fixed;
    right: 0;
    padding: 0px 40px 0px 0px;
`

//A <li> element for the NavBar. Wrap around link/icon.
export const NavLi = styled.li`
	display: flex;
	margin: auto;
	padding: 20px;
    font-family: 'Roboto', sans-serif;
    font-size: 18px;
    letter-spacing: 1.5px;
`
