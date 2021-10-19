import React, { Component } from "react";
import styled from 'styled-components';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import { 
  Paper,
  Input,
  IconButton,
} from '@material-ui/core';
import { PageContainer, Footer, FormDiv } from "../components/page_elements/Div.elements";
import SearchPageHeader from "../components/headers/SearchPageHeader";
import GoldBtn from "../components/buttons/GoldBtn";
import InfoIcon from "../assets/infoicon_brown.png";
import TermsList from "../components/terms_lists/TermsList"

const TermsDiv = styled(FormDiv)`
    background-color: white;
    margin-top: 50px;
    height: 700px;
    border-radius: 5px;
    margin-bottom: 0px;
    overflow: scroll;
`

const AdvancedSearchTitle = styled.div`
    font-family: 'Roboto', sans-serif;
    font-size: 30px;
    font-weight: 100;
    color: #3F342C;
    margin-bottom: 15px;
`

const FieldTitle = styled(AdvancedSearchTitle)`
    font-size: 16px;
    width: 40%;
    margin-bottom: 0px;
`

const TermsTitle = styled(AdvancedSearchTitle)`
    font-size: 25px;
    font-weight: 500;
    margin-bottom: 0px;
`

const Terms = styled(FieldTitle)`
    font-size: 16px;
    margin-bottom: 10px;
    margin-top: 10px;
    width:100%;
`

const useSearchStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    width: '100%',
    height: 50,
    elevation: 0,
    alignItems: 'center',
    backgroundColor: '#FCF7EE',
  },
  iconButton: {
    padding: 10,
    marginLeft: 5,
  }
}));

//--------------------------------------------------------------------------------------------

//Displays a list of searchable terms for each relevant field
const TermsDictionary = () => {
  const urlPath = window.location.href;
  const pathname = urlPath.replace("http://127.0.0.1:8000/advanced-search/?", "");
  let display = "Terms Dictionary"

  if(pathname === "shape="){
    display ="Shape Terms"
  }
  if(pathname === "col="){
    display ="Colllection Names"
  }
  if(pathname === "prov="){
    display ="Provenance Names"
  }

  return (
    <TermsDiv>
      <TermsTitle fontStyle="bold">{display}</TermsTitle>
      <Terms><TermsList name={pathname}/></Terms>
    </TermsDiv>
  )
}

const FieldSearch = (props) => {
  const classes = useSearchStyles();

  //A function to take in the name of an imported image and return it as a styled image
  function Icon(props){
    return <img src={props.name} width="auto" height="20px"/>; 
  }

  return (
    <div>
      <Paper component="form" elevation={0} className={classes.root}>
        <FieldTitle>{props.title}</FieldTitle>
        <Input 
          placeholder={props.placeholder}
          name={props.name} 
          value={props.value}
          onChange={props.onChange}
          fullWidth  
        />
        <IconButton type="submit" className={classes.iconButton}>
          <Icon name={InfoIcon}/>
        </IconButton> 
      </Paper>
    </div>
  )
}

//Advanced Search Form Component. Includes 'Search' Button.
const AdvancedForm = () => {
  const [state, setState] = React.useState({
    ref: "",
    shape: "",
    fabric: "",
    artist: "",
    subject: "",
    pub: "",
    col: "",
    prov: "",
  })

  const UrlParam = () =>{
    let param = "/search/?";

    if(state.ref){
      param = param + "&vaseRef=" + state.ref;
    }
    if(state.shape){
      param = param + "&shapeName=" + state.shape;
    }
    if(state.fabric){
      param = param + "&fabric=" + state.fabric;
    }
    if(state.artist){
      param = param + "&artist=" + state.artist;
    }
    if(state.subject){
      param = param + "&subject=" + state.subject;
    }
    if(state.pub){
      param = param + "&publications=" + state.pub;
    }
    if(state.col){
      param = param + "&collectionName=" + state.col;
    }
    if(state.prov){
      param = param + "&provenanceName=" + state.prov;
    }
    return(param);
  }

  function handleChange(event) {
    const value = event.target.value;
    setState({
      ...state,
      [event.target.name]: value
    });
  }

  return (
    <FormDiv>
      <AdvancedSearchTitle>Advanced Search</AdvancedSearchTitle>

      {/*Component that displays each 'Field Line' in the Advanced Search Form. E.g. Vase Number: Enter here (InfoIcon).*/}
      <FieldSearch name= 'ref'     value={state.ref}     onChange={handleChange}  placeholder= "Type Vase Reference No."  title= 'Vase Reference'/>
      <FieldSearch name= 'shape'   value={state.shape}   onChange={handleChange}  placeholder= "Enter Shape Name"         title= 'Shape' hasInfo='yes'/>
      <FieldSearch name= 'fabric'  value={state.fabric}  onChange={handleChange}  placeholder= "Enter Fabric Name"        title= 'Fabric' />
      <FieldSearch name= 'artist'  value={state.artist}  onChange={handleChange}  placeholder= "Enter Artist Name"        title= 'Artist' />
      <FieldSearch name= 'subject' value={state.subject} onChange={handleChange}  placeholder= "Enter Vase Decription"    title= 'Subject' />
      <FieldSearch name= 'pub'     value={state.pub}     onChange={handleChange}  placeholder= "Enter Publication Name"   title= 'Publication Name' />
      <FieldSearch name= 'col'     value={state.col}     onChange={handleChange}  placeholder= "Enter Collection Name"    title= 'Collection Name' hasInfo='yes'/>
      <FieldSearch name= 'prov'    value={state.prov}    onChange={handleChange}  placeholder= "Enter Provenance Name"    title= 'Provenance' hasInfo='yes'/>

      {/*Search Button*/}
      <br/><GoldBtn width='100%' name="Search" link={UrlParam}/>
    </FormDiv>
  );
}

//Render the Advanced Search Page.
export default class AdvancedSearch extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <div>
        <SearchPageHeader/>
          <PageContainer>
            <AdvancedForm/>
            <TermsDictionary/>
          </PageContainer>
        <Footer/>
      </div>
    ); 
  }
}


