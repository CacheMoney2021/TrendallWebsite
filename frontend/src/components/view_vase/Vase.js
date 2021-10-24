import React,{useEffect,useState} from 'react';
import axios from 'axios';
import styled from 'styled-components';

//-------------------------------------------------------------

const VaseDiv = styled.div`
    width: 100%;
    height: 100%;
    right: 0px;
    padding:4%;
    display: absolute;
`

//-------------------------------------------------------------

//Takes vaseRef parameter from the URL to pass into API below
const urlParams = new URLSearchParams(window.location.search);
const vaseRef = urlParams.get('vaseRef');
console.log(vaseRef);

//Function to call and consume the API for the particular vase
const Vase=()=>{
    const [Data,setData]=useState({
        VaseRef:'',
        Fabric:'',
        Technique:'',
        Subject:'',
        Height:'',
        Diameter:'',
        ArtistName:'',
        Publications:'',
        Collection:'',
        Shape:'',
        Provenance:''
    })

    useEffect(()=>{
        //Get the selected vase using the vaseRef passed through the URL
        axios.get(`http://127.0.0.1:8000/api/getthevase/?vaseRef=${vaseRef}`)
            .then(res=>{
                console.log({vaseRef})
                console.log('Response from main API: ',res) //printing the response to the console for debugging
                let vaseData=res.data[0]; //add data to vaseData, then assign into each variable
                setData({VaseRef:vaseData.vaseRef,Fabric:vaseData.fabric,Technique:vaseData.technique,Subject:vaseData.subject, Height:vaseData.height, Diameter:vaseData.diameter, ArtistName:vaseData.artistName,Collection:vaseData.collectionName,Shape:vaseData.shapeName,Provenance:vaseData.provenanceName, Publications:vaseData.publications}) //vaseData is never assigned so these variables areundefined
            })
            .catch(err=>{
                console.log(err);
            })
    },[])

//Return and display the vase information that was retrieved in the function
    return(
        <>    
        <VaseDiv>
            <div className = "vaseDiv">
                <h2>RVP no. {Data.VaseRef}, {Data.Collection ?  Data.Collection : "Collection Not Found"}</h2>
            <tbody>
            <table>
                <tr>
                    <th>Vase Number</th> <td>{Data.VaseRef ? Data.VaseRef : "Vase Number Not Found"}</td> 
                </tr>
                <tr>
                    <th>Collection</th> <td>{Data.Collection ? Data.Collection : "N/A"}</td> 
                </tr>
                <tr>
                    <th>Fabric</th> <td>{Data.Fabric}</td> 
                </tr>
                <tr>
                    <th>Technique</th> <td>{Data.Technique}</td> 
                </tr>
                <tr>
                    <th>Description</th> <td>{Data.Subject}</td> 
                </tr>
                <tr>
                    <th>Shape</th> <td>{Data.Shape}</td> 
                </tr>
                <tr>
                    <th>Provenance</th> <td>{Data.Provenance ? Data.Provenance : "N/A" }</td> 
                </tr>
                <tr>
                    <th>Publications</th>  <td>{Data.Publications ? Data.Publications : "N/A" }</td> 
                </tr>
                    <th>Height</th><td>{Data.Height ? Data.Height + ` cm` : "N/A"}</td>
                <tr>
                    <th>Diameter</th><td>{Data.Diameter ? Data.Diameter + ` cm` : "N/A"}</td>
                </tr>
            </table>
            </tbody>
            </div>
        </VaseDiv>
        </>
    )
}
export default Vase;