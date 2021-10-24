import React, { useEffect,useState } from "react";
import axios from 'axios';
import VasePreview from "./VasePreview";
import { CircularProgress, Box } from '@mui/material';
import BackBtn from "../buttons/BackBtn";
import "../page_elements/SearchResults.css";

//-------------------------------------------------------------

const SearchResults = () => {

    //API to query the database and return search results
    const [Data, setData] = useState([])

    const urlPath = window.location.href;
    const pathname = urlPath.replace("http://127.0.0.1:8000/search/", "");
  
    useEffect(() => {
      axios.get(`http://127.0.0.1:8000/api/searchresults/${pathname}`)
          .then((res) => {
              console.log(res.data)
              setData(res.data)
          })
          .catch((err) => {
              console.log(err);
          })
    },[])

    //Loading Screen while the API is called. 
    const Loading = () => {
        const [found, setFound] = useState(true)
        const timer = setTimeout(() => {
            setFound(false)
        }, 3000)

        //If API returns a result, finish the timeout of Loading Animation
        if (found){
            return (
                <Box sx={{ color: '#DAA844', display: 'flex', justifyContent: 'center', marginTop: '20%' }}>
                    <CircularProgress color="inherit" size="100px" />
                </Box>
            )
        }

        //If API returns no results, display 'No Vases Found' Page
        if (!found){
            return (    
                <Box sx={{ color: '#DAA844', display: 'flex', justifyContent: 'center', marginTop: '20%' }}>
                    <div style={{ display:'block', justifyContent:"center", fontStyle:"normal", fontSize:"25px", paddingBottom:"20px", color: "#3F342C", letterSpacing:"1px" }}>
                        No Vases Found
                        <div style={{marginLeft:"30px"}}><BackBtn /></div>
                    </div>
                </Box>
            )
        }
    }

    //Display Search Results
    const ResultsFound = () => {
        return (
            <>
                {/*Display Search Results Title with number of vases found*/}
                <div style={{ display:'flex', justifyContent:"center", fontStyle:"normal", fontSize:"19px", paddingBottom:"20px", color: "#3F342C", letterSpacing:"1px" }}>
                    Search Results ({Data.length !== 0 ? Data.length : 0}) 
                </div>

                {/*Vase Result Card*/}
                <ul className="card-grid">
                    {Data.map((item) => (
                        <li>
                            <a href ={`http://127.0.0.1:8000/viewvase/?vaseRef=${item.vaseRef}`} text-decoration="none">
                                <article className="card" key={item.vaseRef}>
                                    <div className="card-image">
                                        <VasePreview vaseRef={item.vaseRef} />
                                    </div>

                                    <div className="card-content">
                                        <li>
                                            <h2 className="card-name">RVP no. {item.vaseRef}</h2>
                                        </li>
                                        <li>
                                            [{item.collectionName ? item.collectionName : `Collection Not Found`}]
                                        </li>
                                    </div>
                                </article>
                            </a>
                        </li>
                    ))}
                </ul>
            </>              
        )
    }

    //While the API is being called, display Loading Screen. If the API returns with vases, display Search Results.
    return (
        <div className="wrapper">
            {Data.length === 0 ? 
                <Loading /> 
                : 
                <ResultsFound/>
            }            
        </div>
    );
}

export default SearchResults;

