import React, { useEffect,useState } from "react";
import axios from 'axios';
import "./page_elements/SearchResults.css";

//both search with drop down and advanced search are linked, just need to pass data through URL. 
const SearchResults = () => {
    const [Data, setData]=useState([])

    const urlPath = window.location.href;
    const pathname = urlPath.replace("/search/", "");
  
    useEffect(() => {
      axios.get(`/api/searchresults/${pathname}`)
          .then((res) => {
              console.log(res.data)
              setData(res.data)
          })
          .catch((err) => {
              console.log(err);
          })
    },[])
    
  
    return (
        <div className="wrapper">
            <ul className="card-grid">
                {Data.map((item) => (
                    <li>
                        <a href ={`/viewvase/?vaseRef=${item.vaseRef}`} text-decoration="none">
                        <article className="card" key={item.vaseRef}>
                            <div className="card-image">

                                <img src={`https://trendallplates.blob.core.windows.net/images/image2.png`} alt={item.vaseRef}/>
                            </div>

                            <div className="card-content">
                                <li>
                                    <h2 className="card-name">RVP nos. {item.vaseRef}</h2>
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
    );
}

export default SearchResults;

