import React from 'react';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import { 
  Paper,
  InputBase,
  IconButton,
  TextField,
  MenuItem, 
} from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';

//Style for the Basic Search Bar Components.
const useSearchStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    width: '50%',
    height: 55,
    borderRadius: '10px 10px 10px 10px',
    elevation: 0,
    alignItems: 'center',
    '& .MuiTextField-root': {
      display: 'flex',
      marginTop: '0px',
      textIndent: 15,
      height: 55,
      width: '20ch',
      justifyContent: 'center',
      alignContent: 'center',
      borderRadius: '10px 0px 0px 10px',
      backgroundColor: '#F6E7CB',
      '&:hover': {
        backgroundColor: '#EBD3A5',
      },
    }
  },
  input: {
    marginLeft: theme.spacing(2),
    flex: 1,
  },
  iconButton: {
    padding: 10,
    marginRight: 10,
  },  
}));
  
//Renders Dropdown Menu with all Criteria Fields, Renders Basic Search Bar
const SearchWithDropdown = () => {
  const classes = useSearchStyles();

  /*States for the Dropdown Field and for Input Field*/
  const [field, setField] = React.useState('vaseRef');
  const [input, setInput] = React.useState('');

  /*Handles the Change in the Dropdown Field*/
  const handleField = (event) => {
    setField(event.target.value);
  };

  /*Handles the Change in the Input Field*/
  const handleInput = (event) => {
    setInput(event.target.value);
  };

  /* TO-DO: Redirect search page by pressing the 'Enter' keyboard btn 
  const keyPressInput = (event) => {
    if(event.keyCode === 13){
      return <Link to={`/search/?${field}=${input}`}/>
    }
  }
  */

  /*Dropdown Field Menu Items*/
  const fields = [
      { value: 'vaseRef',      label: 'Vase Number' },
      { value: 'shapeName',  label: 'Shape' },
      /*{ value: 'Technique',   label: 'Technique' }, API View 'FilterVases' is missing Technique Attribute*/
      { value: 'fabric',      label: 'Fabric' },
      { value: 'artistName', label: 'Artist' },
      { value: 'subject',     label: 'Subject' },
      { value: 'publications', label: 'Publication' },
      { value: 'collectionName',  label: 'Collection' },
      { value: 'provenanceName',  label: 'Provenance' },
  ];

  return (
    <Paper component="form" elevation={0} className={classes.root}>

        {/* Dropdown Fields*/}
        <TextField id="outlined-select-field" select value={field} onChange={handleField} InputProps={{ disableUnderline: true }} >
          {fields.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>

        {/* Basic Search Input Bar */}
        <InputBase
          className={classes.input}
          value={input}
          onChange={handleInput}
          placeholder="Search the Trendall Archive in the selected field to the left..."
        />

        {/* Basic Search Button */}
        <IconButton type="submit" className={classes.iconButton} aria-label="search" href ={`http://127.0.0.1:8000/search/?${field}=${input}`}>
          <SearchIcon/>
        </IconButton> 

    </Paper>
  )
}

export default SearchWithDropdown