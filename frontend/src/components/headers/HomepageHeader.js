import React from 'react';
import { Link } from 'react-router-dom';
import { HomeHeader, NavBar, NavLi, HomepageLink } from '../page_elements/Header.elements';
import { ReactComponent as LatrobeLogo } from '../../assets/latrobelogo.svg';

//-------------------------------------------------------------

//A function to take in the name of an imported image and return it as a styled image
function Icon(props){
  return <img src={props.name} width="auto" height="35px"/>; 
}

//-------------------------------------------------------------

//Render the Homepage Header Component
const HomepageHeader = () => {
  return (
    <HomeHeader>
      <LatrobeLogo/>
      <a href="/">
        <HomepageLink/>
      </a>
      <NavBar>
        <NavLi><Link to= "/about/" style={{ textDecoration: 'none', color: '#3F342C' }}>About </Link></NavLi>
        <NavLi><Link to = "/contact/" style={{ textDecoration: 'none', color: '#3F342C' }}>Contact</Link></NavLi>
        <NavLi><Icon/></NavLi>
      </NavBar>
    </HomeHeader>
  )
}

export default HomepageHeader