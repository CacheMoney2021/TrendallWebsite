import React from 'react';
import { SearchHeader, NavBar, NavLi, HomeLink } from '../page_elements/Header.elements';
import { Link } from 'react-router-dom';

//-------------------------------------------------------------

//A function to take in the name of an imported image and return it as a styled image
function Icon(props){
  return <img src={props.name} width="auto" height="35px"/>; 
}

//-------------------------------------------------------------

//Render the Header Component for all Search Pages
const SearchPageHeader = () => {
  return (
    <SearchHeader>
      <Link to="/">
        <HomeLink/>
      </Link>
      <NavBar>
        <NavLi><Link to= "/about/" style={{ textDecoration: 'none', color: 'white' }}>About</Link></NavLi>
        <NavLi><Link to = "/contact/" style={{ textDecoration: 'none', color: 'white' }}>Contact </Link></NavLi>
        <NavLi><Icon/></NavLi> 
      </NavBar>
    </SearchHeader>
  )
}

export default SearchPageHeader