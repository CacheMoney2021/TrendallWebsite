import React, { useEffect,useState } from "react";
import axios from 'axios';
import "../page_elements/SearchResults.css";
import VasePreview from "./VasePreview";
import { CircularProgress, Box } from '@mui/material';
import BackBtn from "../buttons/BackBtn";

//-------------------------------------------------------------

const SearchResults = () => {
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

    const Loading = () => {
        const [found, setFound] = useState(true)
        const timer = setTimeout(() => {
            setFound(false)
        }, 3000)

        if (found){
            return (
                <Box sx={{ color: '#DAA844', display: 'flex', justifyContent: 'center', marginTop: '20%' }}>
                    <CircularProgress color="inherit" size="100px" />
                </Box>
            )
        }
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

    const ResultsFound = () => {
        return (
            <div>
                <div style={{ display:'flex', justifyContent:"center", fontStyle:"normal", fontSize:"19px", paddingBottom:"20px", color: "#3F342C", letterSpacing:"1px" }}>
                    Search Results ({Data.length !== 0 ? Data.length : 0}) 
                </div>
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
            </div>              
        )
    }

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

