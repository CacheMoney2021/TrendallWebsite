import React from 'react';
import { SearchHeader, NavBar, NavLi } from './Header.elements';
import HomeIcon from '../images/homeicon_white.png';
import BookmarkIcon from '../images/bookmarkicon_white.png';
import UserIcon from '../images/usericon_white.png';
import { Link } from 'react-router-dom';
import BackIcon from '../images/backarrow_white.png';
import TrendallLogoP from '../images/trendall_logo.png';
import styled from 'styled-components';

//A function to take in the name of an imported image and return it as a styled image
function Icon(props){
  return <img src={props.name} width="auto" height="35px"/>; 
}

const Img = styled.div`
    width: 250px;
    height: 65px;
    margin: 5px 15px 5px 10px;
    top: 0px;
`

//Render the Header Component for all Search Pages
const SearchPageHeader = () => {
  return (
    <SearchHeader>
      <Link to="/">
        <Img/>
      </Link>
      <NavBar>
        <NavLi><Link to="/"><Icon name={BackIcon}/></Link></NavLi> 
        <NavLi>About</NavLi>
        <NavLi>Contact</NavLi>
        <NavLi><Icon/></NavLi> 
      </NavBar>
    </SearchHeader>
  )
}

export default SearchPageHeader