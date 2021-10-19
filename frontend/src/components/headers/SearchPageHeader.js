import React from 'react';
import { SearchHeader, NavBar, NavLi } from '../page_elements/Header.elements';
import { Link } from 'react-router-dom';
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
        <NavLi><Link to= "/about/" style={{ textDecoration: 'none', color: 'white' }}>About</Link></NavLi>
        <NavLi><Link to = "/contact/" style={{ textDecoration: 'none', color: 'white' }}>Contact </Link></NavLi>
        <NavLi><Icon/></NavLi> 
      </NavBar>
    </SearchHeader>
  )
}

export default SearchPageHeader